import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import SectionTitle from "@/components/SectionTitle.jsx";

const OirAbout = () => {
  return (
    <>
      {/* 🔝 Header */}
      <Header />

      {/* 📄 Page Content */}
      <main className="pt-10 bg-background min-h-screen">
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <SectionTitle
              title="About Officer Intelligence Rating (OIR) Test"
              subtitle="Complete guide to understand the OIR test, its pattern, question types, and preparation strategy for SSB screening."
              centered
            />

            <div className="space-y-8 text-muted-foreground leading-relaxed">
              {/* 1️⃣ What is OIR */}
              <div className="bg-card border border-sky-border rounded-xl p-6">
                <h2 className="text-xl font-semibold text-primary mb-2">
                  1. What is Officer Intelligence Rating (OIR) Test?
                </h2>
                <p>
                  The Officer Intelligence Rating (OIR) test is conducted during
                  the <b>Screening Stage</b> of the SSB interview. It is
                  designed to assess a candidate’s{" "}
                  <b>
                    logical reasoning, intelligence, mental alertness, and
                    problem-solving ability
                  </b>
                  .
                </p>
                <p className="mt-2">
                  OIR is a purely <b>objective test</b> consisting of multiple
                  choice questions (MCQs). It plays a crucial role in deciding
                  whether a candidate proceeds further in the SSB process.
                </p>
              </div>

              {/* 2️⃣ Purpose */}
              <div className="bg-card border border-sky-border rounded-xl p-6">
                <h2 className="text-xl font-semibold text-primary mb-2">
                  2. Purpose of the OIR Test
                </h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Assess basic intelligence level</li>
                  <li>Test logical and analytical thinking</li>
                  <li>Check speed and accuracy under time pressure</li>
                  <li>Shortlist capable candidates for further testing</li>
                </ul>
              </div>

              {/* 3️⃣ OIR Test Pattern */}
              <div className="bg-card border border-sky-border rounded-xl p-6">
                <h2 className="text-xl font-semibold text-primary mb-2">
                  3. OIR Test Pattern
                </h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Two booklets: OIR-1 and OIR-2</li>
                  <li>Questions per booklet: ~40–50</li>
                  <li>Total questions: ~80–100</li>
                  <li>Time per booklet: ~15–17 minutes</li>
                  <li>Answer type: Multiple Choice Questions (MCQs)</li>
                </ul>
              </div>

              {/* 4️⃣ Types of Questions */}
              <div className="bg-card border border-sky-border rounded-xl p-6">
                <h2 className="text-xl font-semibold text-primary mb-2">
                  4. Types of Questions in OIR
                </h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Series completion (numbers, letters)</li>
                  <li>Analogy (word and number based)</li>
                  <li>Classification / odd one out</li>
                  <li>Arithmetic reasoning</li>
                  <li>Directions and coding-decoding</li>
                  <li>Non-verbal reasoning (figures, patterns)</li>
                </ul>
              </div>

              {/* 5️⃣ Evaluation */}
              <div className="bg-card border border-sky-border rounded-xl p-6">
                <h2 className="text-xl font-semibold text-primary mb-2">
                  5. How is OIR Evaluated?
                </h2>
                <p>
                  OIR is evaluated based on the <b>number of correct answers</b>
                  . There is usually <b>no negative marking</b>. Candidates are
                  graded into intelligence categories such as OIR-I, OIR-II,
                  etc.
                </p>
                <p className="mt-2">
                  Higher OIR ratings improve your chances of clearing the
                  screening stage, especially when combined with a good PPDT
                  performance.
                </p>
              </div>

              {/* 6️⃣ Do’s */}
              <div className="bg-card border border-green-500/40 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-green-600 mb-2">
                  6. Do’s in OIR Test ✅
                </h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Attempt easy questions first</li>
                  <li>Maintain speed with accuracy</li>
                  <li>Stay calm and focused</li>
                  <li>Manage time efficiently</li>
                  <li>Practice regularly with a timer</li>
                </ul>
              </div>

              {/* 7️⃣ Don’ts */}
              <div className="bg-card border border-red-500/40 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-red-600 mb-2">
                  7. Don’ts in OIR Test ❌
                </h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Do not overthink simple questions</li>
                  <li>Do not get stuck on one question</li>
                  <li>Avoid random guessing without logic</li>
                  <li>Do not panic due to time pressure</li>
                </ul>
              </div>

              {/* 8️⃣ Common Mistakes */}
              <div className="bg-card border border-sky-border rounded-xl p-6">
                <h2 className="text-xl font-semibold text-primary mb-2">
                  8. Common Mistakes in OIR
                </h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Poor time management</li>
                  <li>Ignoring non-verbal questions</li>
                  <li>Lack of practice with speed</li>
                  <li>Attempting questions randomly</li>
                </ul>
              </div>

              {/* 9️⃣ Daily Practice Plan */}
              <div className="bg-card border border-sky-border rounded-xl p-6">
                <h2 className="text-xl font-semibold text-primary mb-2">
                  9. Daily Practice Plan for OIR
                </h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>🕐 20 minutes – Practice verbal reasoning</li>
                  <li>🕐 20 minutes – Practice non-verbal reasoning</li>
                  <li>🕐 10 minutes – Timed mock questions</li>
                  <li>🕐 10 minutes – Analyze mistakes</li>
                </ul>
                <p className="mt-3">
                  👉 Practice under timed conditions to simulate the real
                  screening environment.
                </p>
              </div>

              {/* 🔟 Pro Tips */}
              <div className="bg-card border border-sky-border rounded-xl p-6">
                <h2 className="text-xl font-semibold text-primary mb-2">
                  10. Pro Tips to Clear OIR 💡
                </h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Accuracy is more important than attempts</li>
                  <li>Improve mental calculation speed</li>
                  <li>Revise basic reasoning concepts</li>
                  <li>Stay confident and composed</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 🔻 Footer */}
      <Footer />
    </>
  );
};

export default OirAbout;
