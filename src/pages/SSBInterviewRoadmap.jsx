import React from "react";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Brain,
  CheckCircle,
  Clock,
  FileText,
  Flag,
  HeartPulse,
  MapPin,
  Shield,
  Target,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Section({ id, eyebrow, icon: Icon, title, children, className = "" }) {
  return (
    <section id={id} className={`py-20 ${className}`.trim()}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          {Icon ? <Icon className="w-5 h-5 text-saffron" /> : null}
          {eyebrow ? (
            <span className="text-saffron font-medium uppercase tracking-widest text-sm">
              {eyebrow}
            </span>
          ) : null}
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

function Card({ className = "", children }) {
  return <div className={`card-base ${className}`.trim()}>{children}</div>;
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground border border-border">
      {children}
    </span>
  );
}

const overviewData = [
  { label: "Full Form", value: "Services Selection Board" },
  {
    label: "Purpose",
    value:
      "Select officer candidates for the Indian Armed Forces through a scientific, three-tier assessment.",
  },
  { label: "Duration", value: "4–5 Days (excluding travel)" },
  {
    label: "Tests Conducted",
    value:
      "Screening (OIR + PPDT), Psychological Tests, GTO Tasks, Personal Interview, Conference",
  },
  {
    label: "Qualities Assessed",
    value:
      "15 Officer Like Qualities (OLQs): leadership, courage, initiative, reasoning, cooperation, and more.",
  },
  { label: "Assessors", value: "Psychologist, GTO, and Interviewing Officer" },
  {
    label: "Final Outcome",
    value:
      "Recommended / Not Recommended + Medical examination for recommended candidates",
  },
];

const ssbCenters = [
  "Allahabad",
  "Bhopal",
  "Bangalore",
  "Dehradun",
  "Kapurthala",
  "Mysore",
  "Coimbatore",
  "Varanasi",
];

const dayCards = [
  {
    day: "Day 0",
    title: "Reporting & Documentation",
    highlight: "Set the tone with discipline and attention to detail.",
    points: ["Reporting", "Document verification", "Chest number allotment"],
  },
  {
    day: "Day 1",
    title: "Screening (OIR + PPDT)",
    highlight: "Major elimination day — stay calm and perform naturally.",
    points: [
      "OIR: Verbal & Non-Verbal Reasoning",
      "PPDT: Story writing, narration, group discussion",
    ],
  },
  {
    day: "Day 2",
    title: "Psychology Tests",
    highlight:
      "Honest, spontaneous responses matter more than “perfect” answers.",
    points: ["TAT", "WAT", "SRT", "SDT"],
  },
  {
    day: "Day 3 & 4",
    title: "GTO Tasks & Interview",
    highlight: "Demonstrate teamwork, initiative, and effective communication.",
    points: [
      "Indoor & Outdoor group tasks",
      "Command task",
      "Individual obstacles",
      "Personal Interview",
    ],
  },
  {
    day: "Day 5",
    title: "Conference & Result",
    highlight: "A final holistic review — consistency across all days wins.",
    points: ["Final assessment", "Recommendation decision"],
  },
];

const psychologyCards = [
  {
    title: "TAT (Thematic Apperception Test)",
    desc: "Write a short story from a picture. Your themes reveal personality, initiative, and problem-solving approach.",
  },
  {
    title: "WAT (Word Association Test)",
    desc: "React to words with the first thought. It reflects attitude, values, and mental clarity under time pressure.",
  },
  {
    title: "SRT (Situation Reaction Test)",
    desc: "Respond to real-life situations. Focus on practical, responsible actions — not dramatic heroism.",
  },
  {
    title: "SDT (Self-Description Test)",
    desc: "Describe yourself through others’ perspectives. Strong candidates show self-awareness and balanced confidence.",
  },
];

const gtoRows = [
  {
    task: "Group Discussion",
    type: "Indoor",
    qualities: "Communication, reasoning, teamwork",
  },
  {
    task: "Group Planning Exercise (GPE)",
    type: "Indoor",
    qualities: "Planning, cooperation, decision-making",
  },
  {
    task: "PGT / HGT",
    type: "Outdoor",
    qualities: "Teamwork, initiative, resourcefulness",
  },
  {
    task: "Command Task",
    type: "Outdoor",
    qualities: "Leadership, influencing ability, calmness",
  },
  {
    task: "Lecturette",
    type: "Indoor",
    qualities: "Confidence, clarity, composure",
  },
  {
    task: "Individual Obstacles",
    type: "Outdoor",
    qualities: "Courage, stamina, determination",
  },
  {
    task: "Final Group Task",
    type: "Outdoor",
    qualities: "Team spirit, persistence, cooperation",
  },
];

export default function SSBInterviewRoadmap() {
  return (
    <main className="min-h-screen bg-blue-300/10">
      {/* 1) HERO */}
      <Header />
      <section className="relative overflow-hidden py-20 bg-linear-to-b from-blue-950 to-blue-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-12 h-12 rounded-full gradient-saffron flex items-center justify-center shadow-elegant">
                <Shield className="w-6 h-6 text-accent-foreground" />
              </div>
              <span className="text-saffron font-medium uppercase tracking-widest text-sm">
                SSB Preparation Roadmap
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              SSB Interview Roadmap – 5 Day Selection Process Explained
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Prepare like a future officer: understand the process, master the
              expectations, and build the habits that SSB rewards — clarity,
              courage, teamwork, and consistent performance.
            </p>
          </div>
        </div>
      </section>

      {/* 2) WHAT IS SSB */}
      <Section
        id="what-is"
        eyebrow="Understanding SSB "
        icon={BookOpen}
        title="What is SSB Interview?"
        className="bg-gray-300/10 text-accent"
      >
        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 card-hover bg-blue-400/10 p-8">
            <h3 className="font-display text-2xl font-bold text-primary mb-4">
              Services Selection Board (SSB)
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The Services Selection Board is a comprehensive personality
              assessment system used by the Indian Armed Forces to select
              candidates for officer-level roles. It evaluates your natural
              behavior through multiple tests spread across several days — not
              rehearsed answers.
            </p>

            <div className="space-y-4 mb-6">
              <h4 className="font-semibold text-primary flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-saffron" />
                Why SSB is Different
              </h4>
              <ul className="space-y-3 ml-7">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-yellow-500 mt-2 shrink-0" />
                  <span className="text-muted-foreground">
                    Assesses 15 OLQs using scientific, time-bound tasks
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-yellow-500 mt-2 shrink-0" />
                  <span className="text-muted-foreground">
                    Three-assessor system: Psychologist, GTO, Interviewing
                    Officer
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-yellow-500 mt-2 shrink-0" />
                  <span className="text-muted-foreground">
                    Measures real leadership potential and group effectiveness
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-yellow-500 mt-2 shrink-0" />
                  <span className="text-muted-foreground">
                    Rewards consistency, clarity, and responsible
                    decision-making
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-secondary rounded-lg border-l-4 border-saffron">
              <p className="text-secondary-foreground font-medium">
                <strong className="text-primary">Key Focus:</strong> Officer
                Like Qualities (OLQs) — courage, initiative, reasoning ability,
                organizing ability, and effective intelligence.
              </p>
            </div>
          </Card>

          <div className="space-y-4">
            <Card className="p-6 border-l-4 border-saffron bg-blue-400/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-saffron/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-saffron" />
                </div>
                <span className="font-semibold text-primary">Duration</span>
              </div>
              <p className="text-2xl font-bold text-navy">4–5 Days</p>
              <p className="text-muted-foreground text-sm">
                Complete assessment process
              </p>
            </Card>
            <Card className="p-6 border-l-4 border-navy bg-blue-400/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-navy" />
                </div>
                <span className="font-semibold text-primary">Conducted By</span>
              </div>
              <p className="text-2xl font-bold text-navy">
                Indian Armed Forces
              </p>
              <p className="text-muted-foreground text-sm">
                Army, Navy & Air Force
              </p>
            </Card>
            <Card className="p-6 border-l-4 border-saffron bg-blue-400/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-saffron/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-saffron" />
                </div>
                <span className="font-semibold text-primary">
                  Selection Ratio
                </span>
              </div>
              <p className="text-2xl font-bold text-navy">5–7%</p>
              <p className="text-muted-foreground text-sm">
                Of total candidates
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* 3) OVERVIEW TABLE */}
      <Section
        id="overview"
        eyebrow="Quick Reference"
        icon={FileText}
        title="SSB Interview Overview"
        className="text-accent bg-blue-400/10"
      >
        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 overflow-hidden">
            <div className="bg-navy p-4">
              <h3 className="font-display text-xl font-bold text-blue-950">
                Complete SSB Details
              </h3>
            </div>
            <div className="divide-y divide-border">
              {overviewData.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center p-4 hover:bg-secondary/50 transition-colors"
                >
                  <div className="sm:w-1/3 font-semibold text-primary mb-1 sm:mb-0">
                    {item.label}
                  </div>
                  <div className="sm:w-2/3 text-muted-foreground">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full gradient-saffron flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-primary">
                  Common SSB Centers
                </h3>
                <p className="text-muted-foreground text-sm">Across India</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {ssbCenters.map((center, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-3 bg-secondary rounded-lg"
                >
                  <span className="w-2 h-2 rounded-full bg-saffron" />
                  <span className="text-secondary-foreground font-medium text-sm">
                    {center}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-navy/5 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong className="text-primary">Note:</strong> Center
                allocation depends on entry type and availability.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* 4) 5-DAY ROADMAP */}
      <Section
        id="roadmap"
        eyebrow="The 5-Day Process"
        icon={Flag}
        title="SSB 5-Day Selection Roadmap"
        className="bg-background text-accent"
      >
        <div className="grid gap-6 ">
          {dayCards.map((d, idx) => (
            <Card key={idx} className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 bg-blue-300/20">
                <div>
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold border border-border">
                      {d.day}
                    </span>
                    <BadgeCheck className="w-5 h-5 text-saffron" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-primary mb-2">
                    {d.title}
                  </h3>
                  <p className="text-muted-foreground">{d.highlight}</p>
                </div>

                <div className="md:w-1/2">
                  <ul className="space-y-2">
                    {d.points.map((p, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-saffron mt-2 shrink-0" />
                        <span className="text-muted-foreground">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* 5) DAY 1 DEEP DIVE */}
      <Section
        id="day1"
        eyebrow="Screening Mastery"
        icon={Target}
        title="Day 1 Deep Dive – OIR & PPDT"
        className="gradient-sky text-accent"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {[
            {
              title: "OIR Test – Intelligence & Speed",
              desc: "Practice timed verbal + non-verbal reasoning. Accuracy first, then increase speed.",
            },
            {
              title: "PPDT Story Writing – Imagination",
              desc: "Write structured stories: situation → action → outcome. Keep it realistic and responsible.",
            },
            {
              title: "PPDT Narration – Confidence",
              desc: "Speak clearly with calm body language. Aim for clarity, not volume.",
            },
            {
              title: "Group Discussion – Teamwork",
              desc: "Contribute logically, listen actively, and build consensus without dominating.",
            },
          ].map((c, idx) => (
            <Card key={idx} className="p-6 card-hover bg-blue-300/20">
              <h3 className="font-display text-lg font-bold text-primary mb-2">
                {c.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {c.desc}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* 6) PSYCHOLOGY TESTS */}
      <Section
        id="psych"
        eyebrow="Know the Tests"
        icon={Brain}
        title="Psychology Tests"
        className="bg-background text-accent"
      >
        <div className="grid md:grid-cols-2 gap-6">
          {psychologyCards.map((t, idx) => (
            <Card key={idx} className="p-6 card-hover bg-blue-300/20">
              <h3 className="font-display text-xl font-bold text-primary mb-2">
                {t.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{t.desc}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 p-4 bg-secondary rounded-lg border-l-4 border-saffron">
          <p className="text-secondary-foreground font-medium">
            <strong className="text-primary">Pro Tip:</strong> Don’t “act” in
            psychology tests. Consistency and honesty across all tasks are what
            assessors trust.
          </p>
        </div>
      </Section>

      {/* 7) GTO TASKS TABLE */}
      <Section
        id="gto"
        eyebrow="GTO Tasks"
        icon={Users}
        title="GTO Tasks List"
        className="gradient-sky text-accent"
      >
        <Card className="overflow-hidden">
          <div className="bg-navy p-4">
            <h3 className="font-display text-xl font-bold text-blue-950">
              Tasks, Types, and Qualities Tested
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-secondary">
                <tr>
                  <th className="p-4 text-sm font-semibold text-primary">
                    Task
                  </th>
                  <th className="p-4 text-sm font-semibold text-primary">
                    Type
                  </th>
                  <th className="p-4 text-sm font-semibold text-primary">
                    Qualities Tested
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {gtoRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-secondary/50 transition-colors"
                  >
                    <td className="p-4 text-muted-foreground font-medium">
                      {row.task}
                    </td>
                    <td className="p-4 text-muted-foreground">{row.type}</td>
                    <td className="p-4 text-muted-foreground">
                      {row.qualities}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </Section>

      {/* 8) MEDICAL */}
      <Section
        id="medical"
        eyebrow="Medical"
        icon={HeartPulse}
        title="SSB Medical Test"
        className="bg-background text-accent"
      >
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="font-display text-xl font-bold text-primary mb-2">
              Duration
            </h3>
            <p className="text-muted-foreground">
              Typically 3–7 days depending on entry and hospital workload.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="font-display text-xl font-bold text-primary mb-2">
              Common Checks
            </h3>
            <ul className="space-y-2">
              {[
                "Vision & hearing",
                "Blood/urine tests",
                "Dental",
                "Orthopedic assessment",
                "General fitness",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-saffron mt-2 shrink-0" />
                  <span className="text-muted-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="font-display text-xl font-bold text-primary mb-2">
              Review / Appeal
            </h3>
            <p className="text-muted-foreground">
              If found unfit, you may be eligible for a review medical or appeal
              as per rules. Always keep documents organized.
            </p>
          </Card>
        </div>
      </Section>

      {/* 9) PREP TIPS */}
      <Section
        id="tips"
        eyebrow="For Freshers"
        icon={BookOpen}
        title="Preparation Tips"
        className="gradient-sky"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            {
              title: "Daily Routine",
              desc: "Fixed sleep, study blocks, and mock practice to build consistency.",
            },
            {
              title: "Fitness",
              desc: "Run, mobility, and basic strength. Be injury-free and energetic.",
            },
            {
              title: "Newspaper Reading",
              desc: "Build awareness + opinion framing for GD and interview.",
            },
            {
              title: "Psychology Practice",
              desc: "Timed WAT/SRT sets; focus on clarity and real-life actions.",
            },
            {
              title: "Group Speaking",
              desc: "Practice narration + discussions; learn to listen and add value.",
            },
          ].map((t, idx) => (
            <Card key={idx} className="p-6 card-hover bg-blue-300/20">
              <h3 className="font-display text-lg font-bold text-primary mb-2">
                {t.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.desc}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* 10) DOs & DON'Ts */}
      <Section
        id="dos"
        eyebrow="Behavior"
        icon={CheckCircle}
        title="DOs & DON’Ts"
        className="bg-background text-accent"
      >
        <Card className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8 ">
            <div>
              <h3 className="font-display text-2xl font-bold text-primary mb-4 ">
                DOs
              </h3>
              <ul className="space-y-3 ">
                {[
                  "Be punctual and neatly dressed",
                  "Communicate with clarity and respect",
                  "Support the group — don’t compete against it",
                  "Stay calm under pressure and accept feedback",
                  "Keep stories and answers realistic and responsible",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-yellow-500 mt-2 shrink-0" />
                    <span className="text-muted-foreground">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-primary mb-4">
                DON’Ts
              </h3>
              <ul className="space-y-3">
                {[
                  "Don’t dominate GDs or interrupt",
                  "Don’t fake achievements or over-claim qualities",
                  "Don’t panic if a task goes wrong — recover fast",
                  "Don’t be negative or blame others",
                  "Don’t use memorized “perfect” lines in psychology tests",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-yellow-500 mt-2 shrink-0" />
                    <span className="text-muted-foreground">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </Section>

      {/* 11) STATS */}
      <Section
        id="stats"
        eyebrow="Facts"
        icon={Trophy}
        title="SSB Marks & Selection Facts"
        className="text-accent "
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              label: "Total Marks",
              value: "900",
              note: "Psych + GTO + Interview",
            },
            {
              label: "Attempts / Year",
              value: "2–4",
              note: "Depends on entries",
            },
            {
              label: "Selection Ratio",
              value: "5–7%",
              note: "Varies by entry",
            },
            {
              label: "Candidates / Batch",
              value: "100–200",
              note: "Approx. at centers",
            },
          ].map((s, idx) => (
            <Card
              key={idx}
              className="p-6 text-center bg-blue-300/20 card-hover"
            >
              <p className="text-sm text-muted-foreground mb-2">{s.label}</p>
              <p className="font-display text-4xl font-bold text-primary">
                {s.value}
              </p>
              <p className="text-xs text-muted-foreground mt-2">{s.note}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Footer />
    </main>
  );
}
