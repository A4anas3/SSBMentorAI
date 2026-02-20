import React, { useState, useRef, useEffect } from "react";
import { Mic, Square, VideoOff, Timer } from "lucide-react";

/* ============================================================
   HELPERS
   ============================================================ */

/** Normalize text for comparison: lowercase, no punctuation, collapsed whitespace */
const normalize = (str) =>
    str
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .replace(/\s+/g, " ")
        .trim();

/**
 * Android Chrome bug: after SpeechRecognition restarts, the first onresult
 * event replays ALL previously confirmed text as if it's new.
 *
 * Fix: At session start we snapshot `confirmedText`. On each onresult we strip
 * that snapshot prefix using normalized word-count matching so punctuation /
 * capitalization differences don't cause mismatches.
 *
 * Returns only the NEW words from `rawTranscript` beyond `snapshotText`.
 */
const stripSessionSnapshot = (snapshotText, rawTranscript) => {
    const normSnapshot = normalize(snapshotText);
    const normRaw = normalize(rawTranscript);

    // Nothing to strip, or no replay match — return as-is
    if (!normSnapshot || !normRaw.startsWith(normSnapshot)) {
        return rawTranscript.trim();
    }

    const snapshotWordCount = normSnapshot.split(/\s+/).filter(Boolean).length;
    const rawWords = rawTranscript.trim().split(/\s+/);

    return rawWords.slice(snapshotWordCount).join(" ").trim();
};

/* ============================================================
   COMPONENT
   ============================================================ */

const VoiceRecorder = ({
    onRecordComplete,
    maxDuration = 60,
    mode = "video",
}) => {
    const [listening, setListening] = useState(false);
    const [liveText, setLiveText] = useState("");
    const [timeLeft, setTimeLeft] = useState(maxDuration);
    const [hasPermission, setHasPermission] = useState(null);

    const videoRef = useRef(null);
    const streamRef = useRef(null);
    const timerRef = useRef(null);
    const recognitionRef = useRef(null);

    // ── Transcript refs (used inside closures — never stale) ──────────────────
    const confirmedRef = useRef("");     // all text confirmed final across restarts
    const snapshotRef = useRef("");     // snapshot of confirmedRef at each session start
    const listeningRef = useRef(false);  // mirrors `listening` for onend closure
    const startTimeRef = useRef(null);

    /* ── Keep listeningRef in sync ── */
    useEffect(() => {
        listeningRef.current = listening;
    }, [listening]);

    /* ── Media init ── */
    useEffect(() => {
        initMedia();
        return () => {
            stopStream();
            killRecognition();
        };
    }, [mode]);

    const initMedia = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true,
                video: mode === "video",
            });

            // Immediately stop audio tracks — SpeechRecognition manages the mic
            // itself. Keeping them alive causes Android to block recognition.
            stream.getAudioTracks().forEach((t) => {
                t.stop();
                stream.removeTrack(t);
            });

            if (mode === "video" && videoRef.current) {
                videoRef.current.srcObject = stream;
            }

            streamRef.current = stream;
            setHasPermission(true);
        } catch (err) {
            console.error("Media error:", err);
            setHasPermission(false);
        }
    };

    const stopStream = () => {
        streamRef.current?.getTracks().forEach((t) => t.stop());
    };

    /* ============================================================
       RECOGNITION FACTORY — called on each user-start + auto-restart
       ============================================================ */

    const buildAndStartRecognition = () => {
        const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            alert("Speech Recognition not supported. Use Chrome.");
            return;
        }

        const rec = new SpeechRecognition();
        rec.continuous = true;
        rec.interimResults = true;
        rec.lang = "en-IN";

        /* ── onresult ────────────────────────────────────────────────────────
         *
         * TWO bugs we defend against here:
         *
         * BUG 1 — Replay after restart:
         *   Android sends the full history as new results after every restart.
         *   We strip the session snapshot (= what was confirmed before restart).
         *
         * BUG 2 — Expanding interim accumulation:
         *   Android sends expanding partials: "hello" → "hello my" → "hello my name"
         *   If you concat these you get "hello hello my hello my name".
         *   Fix: OVERWRITE interimText, never append to it.
         *
         * ──────────────────────────────────────────────────────────────────── */
        rec.onresult = (event) => {
            let interimText = "";

            for (let i = event.resultIndex; i < event.results.length; i++) {
                const raw = event.results[i][0].transcript;
                // Strip replayed prefix using the snapshot frozen at session start
                const fresh = stripSessionSnapshot(snapshotRef.current, raw);

                if (event.results[i].isFinal) {
                    if (fresh) {
                        confirmedRef.current +=
                            (confirmedRef.current ? " " : "") + fresh;

                        // Keep snapshot current so mid-session replays are caught too
                        snapshotRef.current = confirmedRef.current;
                    }
                } else {
                    // OVERWRITE — never concatenate interims
                    if (fresh) interimText = fresh;
                }
            }

            setLiveText(
                (confirmedRef.current + (interimText ? " " + interimText : "")).trim()
            );
        };

        /* ── onerror ── */
        rec.onerror = (event) => {
            // Transient — onend will handle restart
            if (event.error === "no-speech" || event.error === "aborted") return;

            console.error("Recognition error:", event.error);

            if (event.error === "not-allowed") {
                alert("Microphone permission denied.");
                stopEverything();
            }
        };

        /* ── onend: auto-restart while user is listening ── */
        rec.onend = () => {
            if (!listeningRef.current) return;

            // Freeze snapshot at this exact moment before restarting.
            // The new session will strip everything up to here.
            snapshotRef.current = confirmedRef.current;

            setTimeout(() => {
                if (!listeningRef.current) return;
                try {
                    rec.start();
                } catch (_) {
                    // Already running or destroyed — safe to ignore
                }
            }, 150);
        };

        rec.start();
        recognitionRef.current = rec;
    };

    /** Cleanly destroy the current recognition instance */
    const killRecognition = () => {
        if (!recognitionRef.current) return;
        // Null out handlers BEFORE stop() to prevent ghost restarts
        recognitionRef.current.onend = null;
        recognitionRef.current.onerror = null;
        recognitionRef.current.onresult = null;
        try { recognitionRef.current.stop(); } catch (_) { }
        recognitionRef.current = null;
    };

    /* ============================================================
       START (user presses Start Recording)
       ============================================================ */

    const startRecording = () => {
        killRecognition();

        // Full reset
        confirmedRef.current = "";
        snapshotRef.current = "";
        setLiveText("");
        setTimeLeft(maxDuration);
        startTimeRef.current = Date.now();
        setListening(true);

        buildAndStartRecognition();

        // Countdown timer
        timerRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) { finishSession(); return 0; }
                return prev - 1;
            });
        }, 1000);
    };

    /* ============================================================
       STOP
       ============================================================ */

    const stopEverything = () => {
        killRecognition();
        clearInterval(timerRef.current);
        timerRef.current = null;
        setListening(false);
    };

    const finishSession = () => {
        stopEverything();
        if (onRecordComplete) {
            const duration = startTimeRef.current
                ? (Date.now() - startTimeRef.current) / 1000
                : 0;
            onRecordComplete(confirmedRef.current.trim(), duration);
        }
    };

    /* ============================================================
       UI
       ============================================================ */

    return (
        <div className="w-full flex flex-col md:flex-row gap-4 bg-black text-white rounded-lg overflow-hidden relative border-4 border-yellow-500 shadow-lg">

            {/* ── Media Area ── */}
            <div className="relative w-full md:w-2/3 bg-gray-900 flex items-center justify-center min-h-[300px]">

                {hasPermission === null && (
                    <p className="text-gray-400">Requesting media access…</p>
                )}

                {hasPermission === false && (
                    <div className="text-center text-red-400">
                        <VideoOff size={48} className="mx-auto mb-2" />
                        <p>Media access denied</p>
                    </div>
                )}

                {mode === "video" && (
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    />
                )}

                {listening && (
                    <div className="absolute top-4 right-4 bg-red-600 px-3 py-1 rounded-full flex items-center gap-2 animate-pulse">
                        <Timer size={16} />
                        <span className="font-mono font-bold">{timeLeft}s</span>
                    </div>
                )}
            </div>

            {/* ── Transcript Panel ── */}
            <div className="flex md:w-1/3 bg-gray-900 p-6 flex-col border-l border-gray-800">
                <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
                    Live Transcript
                </h3>
                <div className="flex-1 overflow-y-auto font-mono text-gray-300 text-sm leading-relaxed">
                    {liveText ? (
                        <p>{liveText}</p>
                    ) : (
                        <p className="text-gray-600 italic">
                            {listening
                                ? "Listening…"
                                : 'Press "Start Recording" and speak clearly.'}
                        </p>
                    )}
                </div>
            </div>

            {/* ── Controls ── */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
                {!listening ? (
                    <button
                        onClick={startRecording}
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-8 py-3 rounded-full font-bold shadow-lg transition"
                    >
                        <Mic size={20} /> Start Recording
                    </button>
                ) : (
                    <button
                        onClick={finishSession}
                        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-8 py-3 rounded-full font-bold shadow-lg transition"
                    >
                        <Square size={20} fill="currentColor" /> Stop
                    </button>
                )}
            </div>
        </div>
    );
};

export default VoiceRecorder;