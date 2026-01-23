import Header from "@/components/Header";
import { useState } from "react";
import { ImagePlus } from "lucide-react";
import { useAddPPDTImage } from "@/hooks/usePPDTAdmin";

const AddPPDTImage = () => {
  const [form, setForm] = useState({
    imageUrl: "",
    imageContext: "",
    guide: "",
  });

  const [alert, setAlert] = useState({
    type: "", // "success" | "error"
    message: "",
  });

  const addMutation = useAddPPDTImage();

  const closeAlert = () => {
    setAlert({ type: "", message: "" });
  };

  const handleSubmit = () => {
    // frontend validation
    if (!form.imageUrl || !form.imageContext || !form.guide) {
      setAlert({
        type: "error",
        message: "All fields are required ❌",
      });
      setTimeout(closeAlert, 3000);
      return;
    }

    addMutation.mutate(form, {
      onSuccess: () => {
        setAlert({
          type: "success",
          message: "PPDT Image added successfully ✅",
        });

        setForm({
          imageUrl: "",
          imageContext: "",
          guide: "",
        });

        setTimeout(closeAlert, 3000);
      },
      onError: (error) => {
        if (error.response?.status === 409) {
          setAlert({
            type: "error",
            message: "Image URL already exists ❌",
          });
        } else {
          setAlert({
            type: "error",
            message: "Something went wrong ❌",
          });
        }

        setTimeout(closeAlert, 3000);
      },
    });
  };

  return (
    <section className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <Header />

      {/* CENTER ALERT */}
      {alert.message && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div
            className={`relative px-6 py-4 rounded-xl shadow-xl text-white text-lg font-semibold min-w-[320px]
              ${alert.type === "success" ? "bg-green-600" : "bg-red-600"}`}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={closeAlert}
              className="absolute top-2 right-2 text-white hover:text-gray-200 text-xl font-bold"
            >
              ×
            </button>

            {alert.message}
          </div>
        </div>
      )}

      <div className="max-w-xl mx-auto px-4">
        {/* CARD */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
          {/* CARD HEADER */}
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-100 rounded-full">
              <ImagePlus className="text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Add PPDT Image
              </h1>
              <p className="text-sm text-gray-500">
                Admin panel – create new PPDT practice image
              </p>
            </div>
          </div>

          {/* IMAGE URL */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image URL
            </label>
            <input
              type="text"
              placeholder="https://example.com/image.png"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={form.imageUrl}
              onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
            />
          </div>

          {/* IMAGE CONTEXT */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image Context
            </label>
            <textarea
              rows={3}
              placeholder="Describe the situation shown in the image"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={form.imageContext}
              onChange={(e) =>
                setForm({ ...form, imageContext: e.target.value })
              }
            />
          </div>

          {/* GUIDE */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Guide / Instructions
            </label>
            <textarea
              rows={3}
              placeholder="Key points admin wants candidates to focus on"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={form.guide}
              onChange={(e) => setForm({ ...form, guide: e.target.value })}
            />
          </div>

          {/* SUBMIT BUTTON */}
          <button
            onClick={handleSubmit}
            disabled={addMutation.isPending}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition disabled:opacity-50"
          >
            {addMutation.isPending ? "Adding Image..." : "Add Image"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddPPDTImage;
