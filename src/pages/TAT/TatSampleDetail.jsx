import Header from "@/components/Header";
import { useParams } from "react-router-dom";
import { useTatSample } from "@/hooks/tat/useTat";
import { useState } from "react";

const TatSampleDetail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useTatSample(id);

  const [activeIndex, setActiveIndex] = useState(0);

  if (isLoading) return <p className="text-center mt-20">Loading sample...</p>;

  if (error || !data)
    return (
      <p className="text-center mt-20 text-red-500">
        Failed to load TAT sample
      </p>
    );

  const images = data.images;
  const activeImage = images[activeIndex];

  return (
    <>
      <Header />

      <main className="pt-24 min-h-screen bg-muted/30">
        <div className="container mx-auto px-4 grid grid-cols-12 gap-6">
          {/* 🔹 LEFT SIDE – Image List */}
          <aside className="col-span-12 md:col-span-3 bg-background rounded-xl p-4 h-[80vh] overflow-y-auto shadow-sm">
            <h3 className="font-semibold mb-4 text-center">Pictures</h3>

            <div className="space-y-3">
              {images.map((img, index) => (
                <button
                  key={img.id}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full border rounded-lg overflow-hidden transition
                    ${
                      index === activeIndex
                        ? "ring-2 ring-primary"
                        : "hover:ring-1 hover:ring-primary/50"
                    }
                  `}
                >
                  <img
                    src={img.imageUrl}
                    alt={`TAT ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </aside>

          {/* 🔹 RIGHT SIDE – Image + Story */}
          <section className="col-span-12 md:col-span-9">
            <div className="bg-background rounded-xl shadow-sm overflow-hidden">
              {/* Image */}
              <img
                src={activeImage.imageUrl}
                alt="TAT Sample"
                className="w-full h-[360px] object-cover"
              />

              {/* Content */}
              <div className="p-6 space-y-4">
                <h2 className="text-xl font-semibold">
                  Picture {activeIndex + 1}
                </h2>

                {activeImage.imageContext && (
                  <div>
                    <h4 className="font-medium text-muted-foreground">
                      Context
                    </h4>
                    <p className="text-sm">{activeImage.imageContext}</p>
                  </div>
                )}

                {activeImage.expectedTheme && (
                  <div>
                    <h4 className="font-medium text-muted-foreground">
                      Expected Theme
                    </h4>
                    <p className="text-sm">{activeImage.expectedTheme}</p>
                  </div>
                )}

                {activeImage.story && (
                  <div>
                    <h4 className="font-medium text-muted-foreground">
                      Model Story
                    </h4>

                    <p className="text-sm leading-relaxed mb-4">
                      {activeImage.story}
                    </p>

                    {/* 🧠 SAMPLE NOTE */}
                    <div className="border-l-4 border-primary bg-muted/40 p-4 rounded-md text-sm text-muted-foreground">
                      <strong>Note:</strong> This story is only a reference to
                      help you understand the flow of thoughts. Do not try to
                      memorise it. In the actual TAT, your story should come
                      naturally from your own perception, personality, and way
                      of thinking.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default TatSampleDetail;
