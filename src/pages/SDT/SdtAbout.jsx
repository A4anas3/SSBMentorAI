import Header from "@/components/Header.jsx";
import SectionTitle from "@/components/SectionTitle.jsx";

const SdtAbout = () => {
  return (
    <section className="py-16 pt-24 bg-background">
      <Header />

      <div className="container mx-auto px-4 max-w-5xl">
        <SectionTitle
          title="About Self Description Test (SDT)"
          subtitle="Complete guide to understand and attempt SDT in SSB."
          centered
        />

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <div className="bg-card border border-sky-border rounded-xl p-6">
            <h2 className="text-xl font-semibold text-primary mb-2">
              1. What is SDT?
            </h2>
            <p>
              The Self Description Test (SDT) is a psychological test in SSB
              where candidates describe themselves from different perspectives.
            </p>
          </div>

          <div className="bg-card border border-sky-border rounded-xl p-6">
            <h2 className="text-xl font-semibold text-primary mb-2">
              2. Areas of Description
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>What your parents think about you</li>
              <li>What your teachers think about you</li>
              <li>What your friends think about you</li>
              <li>What you think about yourself</li>
              <li>Your aims and goals</li>
            </ul>
          </div>

          <div className="bg-card border border-green-500/40 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              3. Tips for SDT ✅
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Be honest and realistic.</li>
              <li>Show positive qualities and improvement areas.</li>
              <li>Avoid exaggeration or negativity.</li>
              <li>Keep statements balanced and natural.</li>
            </ul>
          </div>

          <div className="bg-card border border-red-500/40 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-red-600 mb-2">
              4. Mistakes to Avoid ❌
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Writing unrealistic qualities.</li>
              <li>Contradicting other psychological tests.</li>
              <li>Being overly negative or overconfident.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SdtAbout;
