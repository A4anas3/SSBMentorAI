import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import { Users, Clock } from "lucide-react";

const GDComingSoon = () => {
  return (
    <section className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-20 text-center">
        <SectionTitle
          title="PPDT Group Discussion"
          subtitle="This feature is under development"
          centered
        />

        <div className="max-w-xl mx-auto mt-12 p-8 rounded-2xl border bg-card shadow-sm">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-primary/10 text-primary">
              <Users size={36} />
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-3">
            Group Discussion Module Coming Soon
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            We are building a structured PPDT Group Discussion practice module
            that will help you improve narration skills, confidence, listening
            ability, and Officer Like Qualities (OLQs).
          </p>

          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
            <Clock size={16} />
            <span>Expected in a future update</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GDComingSoon;
