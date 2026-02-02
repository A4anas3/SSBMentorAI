import SectionTitle from "@/components/SectionTitle.jsx";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WatAbout = () => {
  return (
    <>
      {/* 🔝 Global Header */}
      <Header />

      {/* 📄 Page Content */}
      <main className="pt-10 bg-background min-h-screen">
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
                  conducted during the SSB interview to assess a candidate’s
                  personality, attitude, thinking pattern, emotional stability,
                  and subconscious mind.
                </p>
                <p className="mt-2">
                  In this test, candidates are shown <b>60 words</b>, each for
                  <b> 15 seconds</b>. For every word, the candidate must write
                  the <b>first meaningful sentence</b> that comes to mind.
                </p>
              </div>

              {/* 2️⃣ What Psychologists Evaluate */}
              <div className="bg-card border border-sky-border rounded-xl p-6">
                <h2 className="text-xl font-semibold text-primary mb-2">
                  2. What Does the Psychologist Evaluate in WAT?
                </h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Natural thinking and spontaneity</li>
                  <li>Positive or negative attitude</li>
                  <li>Emotional control and maturity</li>
                  <li>Confidence and optimism</li>
                  <li>Sense of responsibility</li>
                  <li>Problem-oriented or solution-oriented mindset</li>
                  <li>Officer Like Qualities (OLQs)</li>
                </ul>
              </div>

              {/* 3️⃣ WAT Test Pattern */}
              <div className="bg-card border border-sky-border rounded-xl p-6">
                <h2 className="text-xl font-semibold text-primary mb-2">
                  3. WAT Test Pattern
                </h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Total words: 60</li>
                  <li>Time per word: 15 seconds</li>
                  <li>Total duration: 15 minutes</li>
                  <li>Sentence length: Short and meaningful</li>
                  <li>No correction or overwriting allowed</li>
                </ul>
              </div>

              {/* 4️⃣ How to Write a Good WAT Sentence */}
              <div className="bg-card border border-sky-border rounded-xl p-6">
                <h2 className="text-xl font-semibold text-primary mb-2">
                  4. How to Write a Good WAT Sentence?
                </h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Sentence should be positive and action-oriented</li>
                  <li>Reflect confidence and responsibility</li>
                  <li>Keep it realistic and simple</li>
                  <li>Avoid moral lectures or bookish language</li>
                  <li>Write naturally without overthinking</li>
                </ul>
              </div>

              {/* 5️⃣ Do’s */}
              <div className="bg-card border border-green-500/40 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-green-600 mb-2">
                  5. Do’s in WAT ✅
                </h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Maintain a positive outlook in sentences</li>
                  <li>Show initiative and responsibility</li>
                  <li>Write clear and complete sentences</li>
                  <li>Trust your first thought</li>
                  <li>Practice writing within 15 seconds</li>
                </ul>
              </div>

              {/* 6️⃣ Don’ts */}
              <div className="bg-card border border-red-500/40 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-red-600 mb-2">
                  6. Don’ts in WAT ❌
                </h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Avoid negative, fearful, or hopeless sentences</li>
                  <li>Do not criticize society or people</li>
                  <li>Avoid using “cannot”, “never”, “impossible”</li>
                  <li>Don’t write long stories</li>
                  <li>Do not leave any word blank</li>
                </ul>
              </div>

              {/* 7️⃣ Common Mistakes */}
              <div className="bg-card border border-sky-border rounded-xl p-6">
                <h2 className="text-xl font-semibold text-primary mb-2">
                  7. Common Mistakes in WAT
                </h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Repeating similar sentence structures</li>
                  <li>Writing overly philosophical lines</li>
                  <li>Showing aggression or frustration</li>
                  <li>Thinking too much and missing time</li>
                  <li>Copying memorized sentences</li>
                </ul>
              </div>

              {/* 8️⃣ Example */}
              <div className="bg-card border border-sky-border rounded-xl p-6">
                <h2 className="text-xl font-semibold text-primary mb-2">
                  8. Example of Good WAT Responses
                </h2>
                <p>
                  <b>Word:</b> Failure
                </p>
                <p className="mt-1">
                  <b>Response:</b> Failure motivates him to work harder and
                  improve.
                </p>

                <p className="mt-4">
                  <b>Word:</b> Responsibility
                </p>
                <p className="mt-1">
                  <b>Response:</b> Responsibility helps him earn trust and lead
                  effectively.
                </p>
              </div>

              {/* 9️⃣ Daily Practice Plan */}
              <div className="bg-card border border-sky-border rounded-xl p-6">
                <h2 className="text-xl font-semibold text-primary mb-2">
                  9. Daily Practice Plan for WAT
                </h2>

                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    🕐 <b>Warm-up (5 minutes):</b> Read 10–15 common WAT words
                    and think positive responses mentally.
                  </li>
                  <li>
                    🕐 <b>Writing Practice (15 minutes):</b> Write responses for
                    15–20 words with a 15-second timer.
                  </li>
                  <li>
                    🕐 <b>Review (10 minutes):</b> Check for negativity,
                    clarity, and repetition.
                  </li>
                  <li>
                    🕐 <b>OLQ Mapping (5 minutes):</b> Identify OLQs reflected
                    in your sentences.
                  </li>
                </ul>

                <p className="mt-4">
                  👉 Practice <b>20–25 words daily</b> instead of all 60.
                </p>
                <p className="mt-2">
                  🗓 <b>Weekly:</b> Attempt a <b>full 60-word WAT test</b> under
                  strict time conditions.
                </p>
              </div>

              {/* 🔟 Pro Tips */}
              <div className="bg-card border border-sky-border rounded-xl p-6">
                <h2 className="text-xl font-semibold text-primary mb-2">
                  10. Pro Tips to Crack WAT 💡
                </h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Be natural, not artificial</li>
                  <li>Train your mind to think positively</li>
                  <li>Speed comes with regular practice</li>
                  <li>Your attitude matters more than grammar</li>
                  <li>Consistency is the real key</li>
                </ul>
              </div>
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
