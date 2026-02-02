import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "@/lib/api";

const emptyImage = {
  id: null, // 🔥 IMPORTANT
  imageUrl: "",
  imageContext: "",
  expectedTheme: "",
  story: "",
};

const TatEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [testName, setTestName] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  /* ================= FETCH TEST (FULL ADMIN DATA) ================= */
  useEffect(() => {
    const loadTest = async () => {
      try {
        // 🔥 CHANGE HERE
        const res = await api.get(`/api/tat/tests/sample/${id}`);

        setTestName(res.data.testName);
        setImages(res.data.images || []);
      } catch (err) {
        console.error(err);
        alert("Failed to load TAT test");
      } finally {
        setPageLoading(false);
      }
    };

    loadTest();
  }, [id]);

  /* ================= IMAGE HELPERS ================= */

  const addImage = () => {
    setImages((prev) => [...prev, { ...emptyImage }]);
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const updateImage = (index, field, value) => {
    setImages((prev) =>
      prev.map((img, i) => (i === index ? { ...img, [field]: value } : img)),
    );
  };

  /* ================= SAVE (TRUE PATCH) ================= */

  const handleSave = async () => {
    if (!testName.trim()) {
      alert("Test name is required");
      return;
    }

    if (images.some((img) => !img.imageUrl.trim())) {
      alert("Every picture must have an image URL");
      return;
    }

    try {
      setLoading(true);

      await api.patch(`/api/admin/tat/tests/${id}`, {
        testName,
        images, // 🔥 ids preserved → backend PATCH works correctly
      });

      navigate("/tat/test");
    } catch (err) {
      console.error(err);
      alert("Failed to update TAT test");
    } finally {
      setLoading(false);
    }
  };

  if (pageLoading)
    return <p className="text-center mt-24">Loading TAT test…</p>;

  return (
    <>
      <Header />

      <main className="pt-24 bg-muted/30 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionTitle
            title="Edit TAT Test Set"
            subtitle="Update pictures and reference stories. Candidates will see only the final saved version."
          />

          {/* TEST NAME */}
          <div className="bg-background p-6 rounded-xl shadow-sm mb-6">
            <label className="block text-sm font-medium mb-2">Test Name</label>
            <input
              value={testName}
              onChange={(e) => setTestName(e.target.value)}
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          {/* IMAGES */}
          {images.map((img, index) => (
            <div
              key={img.id ?? index}
              className="bg-background p-6 rounded-xl shadow-sm mb-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Picture {index + 1}</h3>

                {images.length > 1 && (
                  <button
                    onClick={() => removeImage(index)}
                    className="text-sm text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                )}
              </div>

              <div className="space-y-4">
                <input
                  placeholder="Image URL"
                  value={img.imageUrl}
                  onChange={(e) =>
                    updateImage(index, "imageUrl", e.target.value)
                  }
                  className="w-full border rounded-lg px-4 py-2"
                />

                <textarea
                  placeholder="Image Context (optional)"
                  value={img.imageContext || ""}
                  onChange={(e) =>
                    updateImage(index, "imageContext", e.target.value)
                  }
                  className="w-full border rounded-lg px-4 py-2"
                />

                <input
                  placeholder="Expected Theme (optional)"
                  value={img.expectedTheme || ""}
                  onChange={(e) =>
                    updateImage(index, "expectedTheme", e.target.value)
                  }
                  className="w-full border rounded-lg px-4 py-2"
                />

                <textarea
                  placeholder="Model Story (optional)"
                  value={img.story || ""}
                  onChange={(e) => updateImage(index, "story", e.target.value)}
                  className="w-full border rounded-lg px-4 py-2 min-h-[120px]"
                />
              </div>
            </div>
          ))}

          {/* ACTIONS */}
          <div className="flex flex-col sm:flex-row gap-4 pb-10">
            <button
              onClick={addImage}
              className="border px-6 py-2 rounded-lg font-medium hover:bg-muted transition"
            >
              + Add Picture
            </button>

            <button
              onClick={handleSave}
              disabled={loading}
              className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition"
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default TatEdit;
