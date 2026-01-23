import SectionTitle from "@/components/SectionTitle.jsx";
import TestCard from "@/components/TestCard.jsx";
import Header from "@/components/Header.jsx";
import { useSampleGpe } from "@/hooks/gpe/useGpe";

const SampleGPEPage = () => {
  const { data: gpeList, isLoading, error } = useSampleGpe();

  if (isLoading) {
    return (
      <section className="py-16 pt-24 bg-background">
        <Header />
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">Loading GPE samples...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 pt-24 bg-background">
        <Header />
        <div className="container mx-auto px-4 text-center text-red-500">
          Failed to load GPE samples.
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 pt-24 bg-background">
      <Header />

      <div className="container mx-auto px-4 max-w-6xl">
        <SectionTitle
          title="Sample GPE Tests"
          subtitle="Practice real SSB Group Planning Exercise scenarios."
          centered
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {gpeList?.map((gpe, index) => (
            <TestCard
              key={gpe.id}
              title={`Test ${index + 1}`} // ✅ frontend numbering
              description="Click to view full GPE scenario"
              image={gpe.imageUrl}
              href={`/gpe/sample/${gpe.id}`} // ✅ detail page later
              size="normal" // you can change to "small"
              variant="default"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SampleGPEPage;
