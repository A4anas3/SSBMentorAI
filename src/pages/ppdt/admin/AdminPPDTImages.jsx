import Header from "@/components/Header";
import { useAdminPPDTImages, useDeletePPDTImage } from "@/hooks/usePPDTAdmin";

const AdminPPDTImages = () => {
  const { data, isLoading } = useAdminPPDTImages();
  const deleteMutation = useDeletePPDTImage();

  if (isLoading) return <div className="py-32 text-center">Loading...</div>;

  return (
    <section className="pt-24 py-10">
      <Header />

      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">All PPDT Images</h1>

        <div className="grid grid-cols-3 gap-6">
          {data.map((img) => (
            <div key={img.id} className="border rounded-lg p-3 shadow-sm">
              <img src={img.imageUrl} alt="PPDT" className="rounded mb-2" />

              <p className="text-sm text-gray-700 mb-2">{img.imageContext}</p>

              <button
                onClick={() => deleteMutation.mutate(img.id)}
                className="text-red-600 text-sm"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminPPDTImages;
