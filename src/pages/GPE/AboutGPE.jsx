import SectionTitle from "@/components/SectionTitle.jsx";
import Header from "@/components/Header.jsx";
import {
  Shield,
  Target,
  Brain,
  Users,
  Clock,
  AlertTriangle,
} from "lucide-react";

const AboutGPE = () => {
  return (
    <section className="py-16 pt-24 lg:py-24 bg-background">
      <Header />

      <div className="container mx-auto px-4 max-w-6xl">
        <SectionTitle
          title="Group Planning Exercise (GPE)"
          subtitle="Complete SSB-level guide with strategy, structure, and tips."
          centered
        />

        {/* ✅ Hero Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-xl bg-card border border-sky-border shadow-sm hover:shadow-md transition">
            <Shield className="text-primary mb-3" />
            <h4 className="font-semibold text-lg text-primary mb-2">
              What is GPE?
            </h4>
            <p className="text-sm text-muted-foreground">
              A group task in SSB to test planning, leadership, and teamwork.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-card border border-sky-border shadow-sm hover:shadow-md transition">
            <Brain className="text-primary mb-3" />
            <h4 className="font-semibold text-lg text-primary mb-2">
              Skills Tested
            </h4>
            <p className="text-sm text-muted-foreground">
              Logical thinking, decision-making, communication, and OLQs.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-card border border-sky-border shadow-sm hover:shadow-md transition">
            <Users className="text-primary mb-3" />
            <h4 className="font-semibold text-lg text-primary mb-2">
              Group Task
            </h4>
            <p className="text-sm text-muted-foreground">
              Candidates discuss real-life problems and present a final plan.
            </p>
          </div>
        </div>

        {/* ✅ Main Content Sections */}
        <div className="space-y-8">
          {/* Section Box Component Style */}
          <div className="p-6 rounded-xl bg-card border border-sky-border shadow-sm">
            <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
              <Target size={20} /> Introduction to GPE
            </h3>
            <p className="text-muted-foreground">
              Group Planning Exercise (GPE) is conducted during the GTO stage of
              the SSB interview to evaluate a candidate’s ability to analyze
              complex situations, plan effectively, work in a team, and show
              leadership qualities.
            </p>
            <p className="mt-2 text-muted-foreground">
              Candidates are given a model map with multiple problems such as
              accidents, disasters, or threats, and they must propose a group
              solution within a limited time.
            </p>
          </div>

          {/* Aim */}
          <div className="p-6 rounded-xl bg-card border border-sky-border shadow-sm">
            <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
              <Shield size={20} /> Aim of GPE
            </h3>
            <ul className="grid md:grid-cols-2 gap-2 list-disc pl-6 text-muted-foreground">
              <li>Assess planning and organizing ability</li>
              <li>Evaluate leadership and teamwork</li>
              <li>Test logical reasoning and decision-making</li>
              <li>Observe communication skills</li>
              <li>Judge initiative and responsibility</li>
            </ul>
          </div>

          {/* Structure */}
          <div className="p-6 rounded-xl bg-card border border-sky-border shadow-sm">
            <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
              <Users size={20} /> Structure of GPE
            </h3>
            <ol className="list-decimal pl-6 space-y-1 text-muted-foreground">
              <li>Explanation of model by GTO</li>
              <li>Individual analysis and planning</li>
              <li>Group discussion</li>
              <li>Final group plan preparation</li>
              <li>Presentation by a candidate</li>
            </ol>
          </div>

          {/* Time Distribution */}
          <div className="p-6 rounded-xl bg-card border border-sky-border shadow-sm">
            <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
              <Clock size={20} /> Time Distribution
            </h3>
            <div className="grid md:grid-cols-2 gap-2 text-muted-foreground">
              <p>• Model explanation: 5 minutes</p>
              <p>• Individual planning: 10 minutes</p>
              <p>• Group discussion: 15–20 minutes</p>
              <p>• Final presentation: 5 minutes</p>
            </div>
          </div>

          {/* OLQs */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/10 border border-sky-border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
              <Brain size={20} /> Officer Like Qualities (OLQs)
            </h3>
            <div className="grid md:grid-cols-3 gap-2 text-muted-foreground text-sm">
              <span>• Leadership</span>
              <span>• Initiative</span>
              <span>• Responsibility</span>
              <span>• Confidence</span>
              <span>• Cooperation</span>
              <span>• Reasoning Ability</span>
              <span>• Communication</span>
              <span>• Decision Making</span>
              <span>• Team Spirit</span>
            </div>
          </div>

          {/* Mistakes */}
          <div className="p-6 rounded-xl bg-card border border-red-200 shadow-sm">
            <h3 className="text-xl font-semibold text-red-600 mb-3 flex items-center gap-2">
              <AlertTriangle size={20} /> Common Mistakes
            </h3>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Dominating the discussion</li>
              <li>Remaining silent</li>
              <li>Unrealistic solutions</li>
              <li>Ignoring teammates</li>
              <li>Lack of confidence</li>
            </ul>
          </div>

          {/* Tips */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 shadow-sm">
            <h3 className="text-xl font-semibold text-green-700 mb-3">
              Tips to Perform Well in GPE
            </h3>
            <ul className="list-disc pl-6 text-green-700/80">
              <li>Think logically and practically</li>
              <li>Communicate clearly and confidently</li>
              <li>Show leadership with cooperation</li>
              <li>Respect others’ ideas</li>
              <li>Practice regularly</li>
            </ul>
          </div>

          {/* Conclusion */}
          <div className="p-6 rounded-xl bg-card border border-sky-border shadow-sm">
            <h3 className="text-xl font-semibold text-primary mb-3">
              Conclusion
            </h3>
            <p className="text-muted-foreground">
              GPE is not just about solving problems but about demonstrating
              officer-like qualities. Candidates who show logical thinking,
              teamwork, leadership, and responsibility stand out in the SSB
              interview.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGPE;
