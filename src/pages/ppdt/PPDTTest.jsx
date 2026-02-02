import Header from "@/components/Header";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Clock } from "lucide-react";
import { usePPDTTestImages, useSubmitPPDT } from "@/hooks/usePPDTTest";

const IMAGE_TIME = 3;
const WRITE_TIME = 10; // 4 minutes

const PPDTTest = () => {
  const { imageId } = useParams();
  const { data: images = [], isLoading } = usePPDTTestImages();
  const submitMutation = useSubmitPPDT();

  const image = images.find((img) => img.id === Number(imageId));

  const [phase, setPhase] = useState("IMAGE"); // IMAGE | WRITE | FORM
  const [timeLeft, setTimeLeft] = useState(IMAGE_TIME);

  const [storyText, setStoryText] = useState("");
  const [action, setAction] = useState("");
  const [showAnalysis, setShowAnalysis] = useState(false);

  const tickAudio = useRef(null);

  /* ⏱️ TIMER (STOPS IN FORM PHASE) */
  useEffect(() => {
    if (phase === "FORM") return;

    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [phase]);

  /* 🔁 PHASE CONTROL */
  useEffect(() => {
    if (timeLeft > 0) return;

    if (phase === "IMAGE") {
      setPhase("WRITE");
      setTimeLeft(WRITE_TIME);
    } else if (phase === "WRITE") {
      setPhase("FORM");
    }
  }, [timeLeft, phase]);

  if (isLoading) {
    return <div className="py-32 text-center">Loading...</div>;
  }

  if (!image) {
    return <div className="py-32 text-center">Invalid image</div>;
  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <section className="pt-24 min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto max-w-5xl px-4">
        <h1 className="text-3xl font-bold mb-8">PPDT Test</h1>

        <div className="grid md:grid-cols-12 gap-6">
          {/* ⏱ LEFT – TIMER */}
          <aside className="md:col-span-3 bg-white rounded-xl p-6 shadow-sm text-center">
            <Clock className="w-8 h-8 mx-auto mb-2 text-red-600" />

            {phase !== "FORM" && (
              <div className="text-4xl font-mono text-red-600 my-4">
                {minutes}:{seconds.toString().padStart(2, "0")}
              </div>
            )}

            <p className="text-sm text-muted-foreground">
              {phase === "IMAGE"
                ? "Observe the picture carefully"
                : phase === "WRITE"
                  ? "Writing time started"
                  : "Submit your response calmly"}
            </p>
          </aside>

          {/* 🖼️ / 📝 RIGHT PANEL */}
          <section className="md:col-span-9">
            <div className="bg-white rounded-xl shadow-sm p-6 min-h-[420px] flex items-center justify-center">
              {/* IMAGE PHASE (BLURRED) */}
              {phase === "IMAGE" && (
                <img
                  src={image.imageUrl}
                  alt="PPDT"
                  className="max-h-[380px] w-auto object-contain 
                             blur-[1.5px] contrast-90 brightness-95"
                />
              )}

              {/* WRITE NOTICE PHASE */}
              {phase === "WRITE" && (
                <div className="w-full h-[360px] flex flex-col items-center justify-center text-center border-2 border-dashed border-red-300 rounded-xl bg-red-50">
                  <div className="text-6xl mb-4 text-red-600">⏱️</div>

                  <h2 className="text-xl font-semibold text-red-700 mb-2">
                    Writing Time Started
                  </h2>

                  <p className="text-sm text-red-600 max-w-md">
                    Write your PPDT story on paper. Focus on perception,
                    initiative, leadership, and a positive outcome.
                  </p>

                  <p className="mt-4 text-xs text-muted-foreground">
                    Image has been removed intentionally (SSB format).
                  </p>
                </div>
              )}

              {/* FORM PHASE (NO TIMER) */}
              {phase === "FORM" && !showAnalysis && (
                <div className="w-full">
                  <h2 className="text-xl font-semibold mb-4">
                    Enter your PPDT response
                  </h2>

                  <label className="block text-sm font-medium mb-1">
                    Story
                  </label>
                  <textarea
                    className="w-full border rounded-lg p-3 mb-4"
                    rows={5}
                    value={storyText}
                    onChange={(e) => setStoryText(e.target.value)}
                  />

                  <label className="block text-sm font-medium mb-1">
                    Action taken by main character
                  </label>
                  <textarea
                    className="w-full border rounded-lg p-3 mb-6"
                    rows={3}
                    value={action}
                    onChange={(e) => setAction(e.target.value)}
                  />

                  <button
                    onClick={() =>
                      submitMutation.mutate(
                        {
                          imageId: image.id,
                          storyText,
                          action,
                        },
                        { onSuccess: () => setShowAnalysis(true) },
                      )
                    }
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
                  >
                    Submit for AI Analysis
                  </button>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default PPDTTest;
