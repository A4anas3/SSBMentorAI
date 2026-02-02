import Header from "@/components/Header.jsx";
import SectionTitle from "@/components/SectionTitle.jsx";

const TATAbout = () => {
  return (
    <section className="py-16 pt-24 bg-background">
      <Header />

      <div className="container mx-auto px-4 max-w-5xl">
        <SectionTitle
          title="About Thematic Apperception Test (TAT)"
          subtitle="Complete guide to understand, attempt, and excel in TAT during SSB."
          centered
        />

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          {/* 1️⃣ What is TAT */}
          <div className="bg-card border border-sky-border rounded-xl p-6">
            <h2 className="text-xl font-semibold text-primary mb-2">
              1. What is Thematic Apperception Test (TAT)?
            </h2>
            <p>
              The Thematic Apperception Test (TAT) is a psychological test
              conducted during the SSB interview to assess a candidate’s
              personality, imagination, attitude, emotional maturity, and
              Officer Like Qualities (OLQs).
            </p>
            <p className="mt-2">
              In this test, candidates are shown a series of <b>12 pictures</b>
              (including one blank slide). For each picture, the candidate must
              write a short story based on what they perceive.
            </p>
          </div>

          {/* 2️⃣ What Psychologists Evaluate */}
          <div className="bg-card border border-sky-border rounded-xl p-6">
            <h2 className="text-xl font-semibold text-primary mb-2">
              2. What Does the Psychologist Evaluate in TAT?
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Overall personality and mindset</li>
              <li>Officer Like Qualities (OLQs)</li>
              <li>Problem-solving ability</li>
              <li>Leadership and responsibility</li>
              <li>Emotional balance and optimism</li>
              <li>Social adaptability</li>
              <li>Imagination linked with reality</li>
            </ul>
          </div>

          {/* 3️⃣ TAT Test Pattern */}
          <div className="bg-card border border-sky-border rounded-xl p-6">
            <h2 className="text-xl font-semibold text-primary mb-2">
              3. TAT Test Pattern
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Total pictures: 12 (11 + 1 blank)</li>
              <li>Picture display time: 30 seconds</li>
              <li>Story writing time: 4 minutes</li>
              <li>Total duration: ~50 minutes</li>
              <li>Story length: 70–100 words</li>
            </ul>
          </div>

          {/* 4️⃣ Structure */}
          <div className="bg-card border border-sky-border rounded-xl p-6">
            <h2 className="text-xl font-semibold text-primary mb-2">
              4. Correct Structure of a TAT Story
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Past: Background of the situation</li>
              <li>Present: Problem or challenge shown in picture</li>
              <li>Future: Positive action and outcome</li>
              <li>Main character should be positive and proactive</li>
            </ul>
          </div>

          {/* 5️⃣ Do’s */}
          <div className="bg-card border border-green-500/40 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              5. Do’s in TAT ✅
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Make the hero youthful, responsible, and optimistic.</li>
              <li>Focus on problem-solving and teamwork.</li>
              <li>Keep the story realistic and logical.</li>
              <li>Show leadership and initiative.</li>
              <li>Write clearly within the time limit.</li>
            </ul>
          </div>

          {/* 6️⃣ Don’ts */}
          <div className="bg-card border border-red-500/40 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-red-600 mb-2">
              6. Don’ts in TAT ❌
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Avoid negative endings or tragic conclusions.</li>
              <li>Don’t introduce fantasy or unrealistic elements.</li>
              <li>Don’t show helplessness or over-dependence.</li>
              <li>Don’t exaggerate heroism.</li>
              <li>Avoid grammatical chaos due to panic.</li>
            </ul>
          </div>

          {/* 7️⃣ Common Mistakes */}
          <div className="bg-card border border-sky-border rounded-xl p-6">
            <h2 className="text-xl font-semibold text-primary mb-2">
              7. Common Mistakes in TAT
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Writing negative or depressing stories</li>
              <li>Hero remaining passive</li>
              <li>No clear solution in the story</li>
              <li>Repeating the same story theme</li>
              <li>Poor time management</li>
            </ul>
          </div>

          {/* 8️⃣ Example */}
          <div className="bg-card border border-sky-border rounded-xl p-6">
            <h2 className="text-xl font-semibold text-primary mb-2">
              8. Example of a Good TAT Story
            </h2>
            <p>
              <b>Situation:</b> A group of villagers standing near a flooded
              river.
            </p>
            <p className="mt-2">
              <b>Story:</b> Raj, a young engineer, noticed the rising river
              level after heavy rainfall. He coordinated with authorities and
              villagers to arrange evacuation and temporary barriers. Due to
              timely action and teamwork, loss of life was prevented.
            </p>
          </div>

          {/* 9️⃣ Daily Practice Plan (CORRECTED) */}
          <div className="bg-card border border-sky-border rounded-xl p-6">
            <h2 className="text-xl font-semibold text-primary mb-2">
              9. Daily Practice Plan for TAT (As Per Actual Test)
            </h2>

            <p className="mb-3">
              TAT should be practiced slowly and seriously, exactly like the
              real SSB test. Writing many stories daily is not recommended.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                🕐 <b>Picture Observation (30 seconds):</b> Observe one picture
                carefully and identify the situation, characters, emotions, and
                problem.
              </li>
              <li>
                🕐 <b>Story Writing (4 minutes):</b> Write one complete story in
                one go with a clear beginning, problem, positive action, and
                outcome.
              </li>
              <li>
                🕐 <b>Story Review (10–15 minutes):</b> Re-read the story for
                clarity, logic, and realism.
              </li>
              <li>
                🕐 <b>OLQ Self-Analysis (10–15 minutes):</b> Identify
                leadership, responsibility, initiative, confidence, and social
                adaptability.
              </li>
              <li>
                🕐 <b>Language Improvement (5–10 minutes):</b> Remove
                negativity, improve grammar, and make sentences action-oriented.
              </li>
            </ul>

            <p className="mt-4">
              👉 Practice <b>only 1 TAT story per day</b>.
            </p>
            <p className="mt-2">
              🗓 <b>Weekly:</b> Attempt a <b>full TAT test (12 pictures)</b>{" "}
              once a week under real exam conditions.
            </p>
          </div>

          {/* 🔟 Pro Tips */}
          <div className="bg-card border border-sky-border rounded-xl p-6">
            <h2 className="text-xl font-semibold text-primary mb-2">
              10. Pro Tips to Crack TAT 💡
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Think like a leader, not a victim.</li>
              <li>Be calm and structured.</li>
              <li>Focus on action and outcome.</li>
              <li>Consistency beats perfection.</li>
              <li>Practice with a real timer.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TATAbout;
