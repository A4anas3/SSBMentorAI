import Header from "@/components/Header.jsx";
import SectionTitle from "@/components/SectionTitle.jsx";

const SdtSample = () => {
  return (
    <section className="py-16 pt-24 bg-background">
      <Header />

      <div className="container mx-auto px-4 max-w-5xl">
        <SectionTitle
          title="Sample SDT Responses"
          subtitle="Examples of balanced, realistic, and officer-like self-descriptions."
          centered
        />

        {/* ✅ Tips Section */}
        <div className="mb-8 space-y-3">
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-blue-700 text-sm">
            💡 <b>Tip:</b> Write honest, positive, and realistic points. Avoid
            exaggeration and negativity.
          </div>

          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-green-700 text-sm">
            ⏱️ <b>Time:</b> Usually 15–20 minutes are given to complete SDT in
            SSB.
          </div>
        </div>

        <div className="space-y-8">
          {/* ================= SAMPLE 1 ================= */}
          <div className="bg-card border border-sky-border rounded-xl p-6">
            <h2 className="text-lg font-semibold text-primary mb-3">
              ⭐ Sample 1
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-primary mb-1">
                  1️⃣ What my parents think about me
                </h3>
                <p className="text-muted-foreground">
                  My parents consider me responsible, disciplined, and
                  supportive. They believe I am hardworking and dependable in
                  difficult situations.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-1">
                  2️⃣ What my teachers think about me
                </h3>
                <p className="text-muted-foreground">
                  My teachers see me as sincere, punctual, and eager to learn.
                  They appreciate my logical thinking and leadership qualities.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-1">
                  3️⃣ What my friends think about me
                </h3>
                <p className="text-muted-foreground">
                  My friends consider me reliable, friendly, and confident. They
                  trust me in difficult situations.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-1">
                  4️⃣ What I think about myself
                </h3>
                <p className="text-muted-foreground">
                  I believe I am disciplined, optimistic, and determined. I try
                  to improve myself continuously and learn from mistakes.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-1">
                  5️⃣ My aims and goals
                </h3>
                <p className="text-muted-foreground">
                  My aim is to join the armed forces and serve the nation with
                  dedication and integrity.
                </p>
              </div>
            </div>
          </div>

          {/* ================= SAMPLE 2 ================= */}
          <div className="bg-card border border-sky-border rounded-xl p-6">
            <h2 className="text-lg font-semibold text-primary mb-3">
              ⭐ Sample 2
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-primary mb-1">
                  1️⃣ What my parents think about me
                </h3>
                <p className="text-muted-foreground">
                  My parents think that I am sincere and practical. They believe
                  that I can handle responsibilities efficiently and remain calm
                  in challenging situations.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-1">
                  2️⃣ What my teachers think about me
                </h3>
                <p className="text-muted-foreground">
                  My teachers consider me focused and disciplined. They feel
                  that I have good analytical ability and teamwork skills.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-1">
                  3️⃣ What my friends think about me
                </h3>
                <p className="text-muted-foreground">
                  My friends believe that I am supportive, honest, and
                  dependable. They often seek my advice in difficult situations.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-1">
                  4️⃣ What I think about myself
                </h3>
                <p className="text-muted-foreground">
                  I consider myself hardworking and adaptable. I accept my
                  weaknesses and constantly try to improve myself.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-1">
                  5️⃣ My aims and goals
                </h3>
                <p className="text-muted-foreground">
                  I want to become a disciplined and responsible officer and
                  contribute positively to society and the nation.
                </p>
              </div>
            </div>
          </div>

          {/* ✅ Important Note */}
          <div className="bg-red-500/10 border border-red-500/30 text-red-700 rounded-lg p-4 text-sm">
            ⚠️ Important Note: SDT responses may differ from person to person.
            Never copy samples blindly. Write honest, realistic, and balanced
            self-descriptions based on your own personality.
          </div>
        </div>
      </div>
    </section>
  );
};

export default SdtSample;
