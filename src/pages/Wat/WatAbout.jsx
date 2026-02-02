import SectionTitle from "@/components/SectionTitle.jsx";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WatAbout = () => {
  return (
    <>
      {/* 🔝 Global Header */}
      <Header />

      {/* 📄 Page Content */}
      <main className="pt-24 bg-background min-h-screen">
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <SectionTitle
              title="About Word Association Test (WAT)"
              subtitle="Complete guide to understand, attempt, and excel in WAT during SSB."
              centered
            />

            <div className="space-y-8 text-muted-foreground leading-relaxed">
              {/* 1️⃣ What is WAT */}
              <div className="bg-card border border-sky-border rounded-xl p-6">
                <h2 className="text-xl font-semibold text-primary mb-2">
                  1. What is Word Association Test (WAT)?
                </h2>
                <p>
                  The Word Association Test (WAT) is a psychological test
                  conducted during the SSB interview to evaluate a candidate’s
                  personality, thinking pattern, attitude, and subconscious
                  mind.
                </p>
                <p className="mt-2">
                  In this test, candidates are shown <b>60 words</b>, each for
                  <b> 15 seconds</b>, and they must write the first meaningful
                  sentence that comes to their mind.
                </p>
              </div>

              {/* keep rest of your content SAME */}
            </div>
          </div>
        </section>
      </main>

      {/* 🔻 Global Footer */}
      <Footer />
    </>
  );
};

export default WatAbout;
