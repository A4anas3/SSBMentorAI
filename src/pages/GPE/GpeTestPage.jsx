import SectionTitle from "@/components/SectionTitle.jsx";
import Header from "@/components/Header.jsx";
import TestCard from "@/components/TestCard.jsx";
import { useGpeTest } from "@/hooks/gpe/useGpe";

const GpeTestPage = () => {
  const { data: testList, isLoading, error } = useGpeTest();

  if (isLoading) {
    return (
      <section className="py-16 pt-24 bg-background">
        <Header />
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">Loading GPE tests...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 pt-24 bg-background">
        <Header />
        <div className="container mx-auto px-4 text-center text-red-500">
          Failed to load GPE tests.
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 pt-24 bg-background">
      <Header />

      <div className="container mx-auto px-4 max-w-6xl">
        <SectionTitle
          title="GPE Practice Tests"
          subtitle="Attempt real SSB Group Planning Exercise test scenarios."
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testList?.map((gpe, index) => (
            <TestCard
              key={gpe.id}
              title={`GPE Test ${index + 1}`}
              description={gpe.question?.slice(0, 80) + "..."} // preview
              image={gpe.imageUrl}
              href={`/gpe/test/${gpe.id}`} // detail page later
              size="normal"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GpeTestPage;
