import { useState, useEffect, useRef, useCallback } from "react";

const useSpeechRecognition = () => {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState("");
    const [interimTranscript, setInterimTranscript] = useState("");
    const [error, setError] = useState(null);

    const recognitionRef = useRef(null);

    // ✅ Single source of truth for confirmed text — synchronous, no async issues
    const confirmedTranscriptRef = useRef("");

    useEffect(() => {
        const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            setError("Speech recognition is not supported in this browser.");
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = "en-IN";

        recognition.onstart = () => {
            setIsListening(true);
            setError(null);
        };

        recognition.onend = () => {
            // Auto-restart if we're still supposed to be listening
            // (Android Chrome stops recognition after ~60s of silence)
            if (recognitionRef.current?._shouldBeListening) {
                try {
                    recognition.start();
                    return;
                } catch (err) {
                    console.warn("Could not auto-restart recognition:", err);
                }
            }
            setIsListening(false);
        };

        recognition.onerror = (event) => {
            console.error("Speech recognition error:", event.error);

            // These are transient — onend will handle the restart
            if (event.error === "no-speech" || event.error === "aborted") {
                return;
            }

            // Real errors — stop everything
            recognitionRef.current._shouldBeListening = false;
            setIsListening(false);

            if (event.error === "not-allowed") {
                setError("Microphone permission denied.");
            } else if (event.error === "network") {
                setError(
                    "Speech recognition is not available. Please use Google Chrome for voice features."
                );
            } else {
                setError(event.error);
            }
        };

        recognition.onresult = (event) => {
            let finalTrans = "";
            let currentInterim = "";

            for (let i = event.resultIndex; i < event.results.length; i++) {
                let t = event.results[i][0].transcript.trim();

                // ✅ Android Chrome Dedup Fix:
                // On restart, Android replays already-confirmed text as new results.
                // We compare synchronously against the ref (not state) to strip duplicates.
                const confirmed = confirmedTranscriptRef.current.trim().toLowerCase();
                if (confirmed && t.toLowerCase().startsWith(confirmed)) {
                    t = t.substring(confirmed.length).trim();
                }

                if (event.results[i].isFinal) {
                    if (t) {
                        finalTrans += t + " ";
                    }
                } else {
                    // Don't concatenate interim results — the last one is the
                    // most complete guess. Concatenating causes repeated words.
                    if (t) {
                        currentInterim = t;
                    }
                }
            }

            if (finalTrans) {
                // ✅ Update ref immediately (synchronous) so next onresult can dedup correctly
                confirmedTranscriptRef.current += finalTrans;
                setTranscript(confirmedTranscriptRef.current);
            }

            setInterimTranscript(currentInterim);
        };

        recognitionRef.current = recognition;

        return () => {
            if (recognitionRef.current) {
                recognitionRef.current._shouldBeListening = false;
                recognitionRef.current.stop();
            }
        };
    }, []);

    const startRecording = useCallback(() => {
        if (recognitionRef.current && !isListening) {
            try {
                recognitionRef.current._shouldBeListening = true;
                recognitionRef.current.start();
            } catch (err) {
                console.error("Failed to start recording:", err);
            }
        }
    }, [isListening]);

    const stopRecording = useCallback(() => {
        if (recognitionRef.current) {
            recognitionRef.current._shouldBeListening = false;
            recognitionRef.current.stop();
        }
    }, []);

    const resetTranscript = useCallback(() => {
        // ✅ Clear ref too, otherwise dedup will strip new speech thinking it's a duplicate
        confirmedTranscriptRef.current = "";
        setTranscript("");
        setInterimTranscript("");
    }, []);

    return {
        isListening,
        transcript,
        interimTranscript,
        startRecording,
        stopRecording,
        resetTranscript,
        error,
    };
};

export default useSpeechRecognition;