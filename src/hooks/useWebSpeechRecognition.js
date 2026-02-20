import { useState, useRef, useCallback, useEffect } from "react";

const useWebSpeechRecognition = () => {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState("");
    const [interimTranscript, setInterimTranscript] = useState("");
    const [error, setError] = useState(null);

    const recognitionRef = useRef(null);

    useEffect(() => {
        if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
            setError("Speech recognition is not supported in this browser.");
            return;
        }

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognitionRef.current = new SpeechRecognition();

        // Configure recognition
        recognitionRef.current.continuous = true;
        recognitionRef.current.interimResults = true;
        recognitionRef.current.lang = "en-IN"; // Set to Indian English or user preference

        recognitionRef.current.onstart = () => {
            setIsListening(true);
            setError(null);
        };

        recognitionRef.current.onresult = (event) => {
            let finalTranscript = "";
            let currentInterimTranscript = "";

            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    finalTranscript += event.results[i][0].transcript + " ";
                } else {
                    currentInterimTranscript += event.results[i][0].transcript;
                }
            }

            if (finalTranscript) {
                setTranscript((prev) => (prev + " " + finalTranscript).trim());
            }
            setInterimTranscript(currentInterimTranscript);
        };

        recognitionRef.current.onerror = (event) => {
            console.error("Speech recognition error", event.error);
            // Handle some specific errors
            if (event.error === 'not-allowed') {
                setError("Microphone permission denied");
            } else if (event.error !== 'no-speech') {
                setError(`Error: ${event.error}`);
            }
            setIsListening(false);
        };

        recognitionRef.current.onend = () => {
            setIsListening(false);
            setInterimTranscript("");
        };

        // Cleanup on unmount
        return () => {
            if (recognitionRef.current) {
                try {
                    recognitionRef.current.stop();
                } catch (e) {
                    // ignore
                }
            }
        };
    }, []);

    const startRecording = useCallback(() => {
        if (!recognitionRef.current) {
            setError("Speech recognition is not initialized or supported.");
            return;
        }

        try {
            recognitionRef.current.start();
        } catch (err) {
            // Already started exception
            console.warn("Speech recognition already started", err);
        }
    }, []);

    const stopRecording = useCallback(() => {
        if (recognitionRef.current) {
            try {
                recognitionRef.current.stop();
            } catch (err) {
                console.warn("Error stopping speech recognition", err);
            }
        }
    }, []);

    const resetTranscript = useCallback(() => {
        setTranscript("");
        setInterimTranscript("");
        setError(null);
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

export default useWebSpeechRecognition;
