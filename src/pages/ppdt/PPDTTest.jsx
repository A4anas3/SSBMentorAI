import Header from "@/components/Header";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Clock } from "lucide-react";
import { usePPDTTestImages, useSubmitPPDT } from "@/hooks/usePPDTTest";

const IMAGE_TIME = 30;

const PPDTTest = () => {
  const { imageId } = useParams();
  const { data: images = [], isLoading } = usePPDTTestImages();
  const submitMutation = useSubmitPPDT();

  const selectedImage = images.find((img) => img.id === Number(imageId));

  const [timeLeft, setTimeLeft] = useState(IMAGE_TIME);
  const [showImage, setShowImage] = useState(true);
  const [storyText, setStoryText] = useState("");
  const [action, setAction] = useState("");
  const [showAnalysis, setShowAnalysis] = useState(false);

  // 🔊 tick sound
  const tickAudio = useRef(null);

  // TIMER + SOUND
  useEffect(() => {
    if (!showImage || timeLeft === 0) return;

    tickAudio.current?.play().catch(() => {});

    const timer = setTimeout(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, showImage]);

  // Hide image after 30 sec
  useEffect(() => {
    if (timeLeft === 0) {
      setShowImage(false);
    }
  }, [timeLeft]);

  if (isLoading) {
    return <div className="py-32 text-center">Loading...</div>;
  }

  if (!selectedImage) {
    return <div className="py-32 text-center">Invalid image</div>;
  }

  return (
    <section className="pt-24 py-10 bg-gray-50 min-h-screen">
      <Header />

      {/* tick sound */}
      <audio ref={tickAudio} src="/tick.mp3" preload="auto" />

      <div className="container mx-auto max-w-5xl px-4">
        <h1 className="text-3xl font-bold mb-6">PPDT Test</h1>

        {/* IMAGE + TIMER */}
        {showImage && (
          <div className="grid md:grid-cols-3 gap-6 items-center mb-8">
            {/* IMAGE LEFT */}
            <div className="md:col-span-2">
              <img
                src={selectedImage.imageUrl}
                alt="PPDT"
                className="rounded-xl shadow-lg w-full"
              />
            </div>

            {/* TIMER RIGHT */}
            <div className="flex flex-col items-center justify-center bg-white border rounded-xl shadow h-full py-10">
              <Clock className="w-10 h-10 text-red-600 mb-3" />
              <p className="text-sm text-gray-500 mb-1">Time Remaining</p>
              <p className="text-4xl font-bold text-red-600">{timeLeft}s</p>
            </div>
          </div>
        )}

        {/* FORM */}
        {!showImage && !showAnalysis && (
          <div className="bg-white border rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">
              Write your PPDT response
            </h2>

            <label className="block text-sm font-medium mb-1">Story</label>
            <textarea
              className="w-full border rounded-lg p-3 mb-4"
              rows={5}
              placeholder="Situation, characters, action, outcome..."
              value={storyText}
              onChange={(e) => setStoryText(e.target.value)}
            />

            <label className="block text-sm font-medium mb-1">
              Action taken by main character
            </label>
            <textarea
              className="w-full border rounded-lg p-3 mb-6"
              rows={3}
              placeholder="Leadership, initiative, teamwork..."
              value={action}
              onChange={(e) => setAction(e.target.value)}
            />

            <button
              onClick={() =>
                submitMutation.mutate(
                  {
                    imageId: selectedImage.id,
                    storyText,
                    action,
                  },
                  { onSuccess: () => setShowAnalysis(true) },
                )
              }
              disabled={submitMutation.isPending}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
            >
              {submitMutation.isPending
                ? "Analyzing..."
                : "Submit for AI Analysis"}
            </button>
          </div>
        )}

        {/* AI ANALYSIS */}
        {showAnalysis && (
          <div className="mt-8 bg-white border rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">AI Analysis Result</h2>

            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p>
                  <strong>Perception Score:</strong>{" "}
                  {submitMutation.data?.perceptionScore}
                </p>
                <p>
                  <strong>Story Score:</strong>{" "}
                  {submitMutation.data?.storyScore}
                </p>
                <p>
                  <strong>Clarity Score:</strong>{" "}
                  {submitMutation.data?.clarityScore}
                </p>
              </div>

              <div>
                <p>
                  <strong>OLQ Signal:</strong>{" "}
                  {submitMutation.data?.officerLikeThinkingScore}
                </p>
                <p>
                  <strong>Overall Score:</strong>{" "}
                  {submitMutation.data?.overallPpdtScore}
                </p>
              </div>
            </div>

            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <strong>Feedback:</strong>
              <p className="mt-1">{submitMutation.data?.feedback}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PPDTTest;
