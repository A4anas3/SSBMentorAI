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
          subtitle="Complete SSB-level guide covering conduct, approach, priorities, and evaluation."
          centered
        />

        {/* 🔹 Hero Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-xl bg-card border border-sky-border shadow-sm hover:shadow-md transition">
            <Shield className="text-primary mb-3" />
            <h4 className="font-semibold text-lg text-primary mb-2">
              What is GPE?
            </h4>
            <p className="text-sm text-muted-foreground">
              A GTO group task where candidates plan and solve multiple
              real-life problems on a model map.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-card border border-sky-border shadow-sm hover:shadow-md transition">
            <Brain className="text-primary mb-3" />
            <h4 className="font-semibold text-lg text-primary mb-2">
              What is Tested?
            </h4>
            <p className="text-sm text-muted-foreground">
              Planning ability, logical reasoning, leadership, teamwork, and
              OLQs.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-card border border-sky-border shadow-sm hover:shadow-md transition">
            <Users className="text-primary mb-3" />
            <h4 className="font-semibold text-lg text-primary mb-2">
              Group Outcome
            </h4>
            <p className="text-sm text-muted-foreground">
              The group must arrive at one common, practical, and time-bound
              plan.
            </p>
          </div>
        </div>

        {/* 🔹 Main Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <div className="p-6 rounded-xl bg-card border border-sky-border shadow-sm">
            <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
              <Target size={20} /> Introduction
            </h3>
            <p className="text-muted-foreground">
              Group Planning Exercise (GPE) is the second task conducted in the
              GTO series of the SSB interview. It assesses a candidate’s ability
              to understand a complex situation, prioritize problems, utilize
              available resources, and work effectively in a group.
            </p>
            <p className="mt-2 text-muted-foreground">
              Unlike Group Discussion, GPE requires the group to reach a
              definite conclusion in the form of a common group plan.
            </p>
          </div>

          {/* Conduct */}
          <div className="p-6 rounded-xl bg-card border border-sky-border shadow-sm">
            <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
              <Users size={20} /> Conduct of GPE (Five Stages)
            </h3>
            <ol className="list-decimal pl-6 space-y-1 text-muted-foreground">
              <li>Explanation of the model by the GTO</li>
              <li>Reading of the problem narrative</li>
              <li>Silent study of story card and model correlation</li>
              <li>Individual written solution (10 minutes)</li>
              <li>Group discussion to evolve a common plan</li>
            </ol>
          </div>

          {/* Problem Prioritization */}
          <div className="p-6 rounded-xl bg-card border border-sky-border shadow-sm">
            <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
              <Shield size={20} /> Problem Prioritization
            </h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>
                <b>First Priority:</b> Life-threatening emergencies (accidents,
                severe injuries, disasters)
              </li>
              <li>
                <b>Second Priority:</b> Threats to many lives or government
                property
              </li>
              <li>
                <b>Third Priority:</b> Individual danger cases (kidnapping,
                medical emergencies)
              </li>
              <li>
                <b>Last Priority:</b> Minor or economic issues (lost cattle,
                property disputes)
              </li>
            </ul>
          </div>

          {/* Time */}
          <div className="p-6 rounded-xl bg-card border border-sky-border shadow-sm">
            <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
              <Clock size={20} /> Time Distribution
            </h3>
            <div className="grid md:grid-cols-2 gap-2 text-muted-foreground">
              <p>• Model explanation & story: ~10 minutes</p>
              <p>• Individual written plan: 10 minutes</p>
              <p>• Group discussion: 15–20 minutes</p>
              <p>• Final presentation: 5 minutes</p>
            </div>
          </div>

          {/* Evaluation */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/10 border border-sky-border shadow-sm">
            <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
              <Brain size={20} /> What the GTO Observes
            </h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Ability to grasp essential details</li>
              <li>Logical problem prioritization</li>
              <li>Effective use of available resources</li>
              <li>Time and distance estimation</li>
              <li>Clarity of expression</li>
              <li>Cooperation and leadership during discussion</li>
            </ul>
          </div>

          {/* Mistakes */}
          <div className="p-6 rounded-xl bg-card border border-red-300 shadow-sm">
            <h3 className="text-xl font-semibold text-red-600 mb-3 flex items-center gap-2">
              <AlertTriangle size={20} /> Common Mistakes
            </h3>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Dominating or remaining silent</li>
              <li>Ignoring priority order</li>
              <li>Unrealistic assumptions</li>
              <li>Overuse of imaginary resources</li>
              <li>Forgetting the final aim</li>
            </ul>
          </div>

          {/* Tips */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 shadow-sm">
            <h3 className="text-xl font-semibold text-green-700 mb-3">
              Tips to Perform Well in GPE
            </h3>
            <ul className="list-disc pl-6 text-green-700/80">
              <li>Think calmly and logically</li>
              <li>Initiate discussion but don’t dominate</li>
              <li>Support others and invite silent members</li>
              <li>Be flexible if better logic emerges</li>
              <li>Maintain a confident and composed demeanor</li>
            </ul>
          </div>

          {/* Conclusion */}
          <div className="p-6 rounded-xl bg-card border border-sky-border shadow-sm">
            <h3 className="text-xl font-semibold text-primary mb-3">
              Conclusion
            </h3>
            <p className="text-muted-foreground">
              GPE evaluates how well a candidate thinks, plans, cooperates, and
              leads under pressure. Candidates who balance logic with teamwork
              and maintain focus on the aim leave a strong impression on the
              GTO.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGPE;
