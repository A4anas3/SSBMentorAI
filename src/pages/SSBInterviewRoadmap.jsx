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
  Activity,
  Zap,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// --- REUSABLE SEMANTIC UI COMPONENTS ---

function Section({ id, eyebrow, icon: Icon, title, children, className = "" }) {
  return (
    <section id={id} className={`py-20 relative overflow-hidden ${className}`.trim()}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-secondary border border-border">
            {Icon ? <Icon className="w-4 h-4 text-accent" /> : null}
            {eyebrow ? (
              <span className="text-sm font-semibold tracking-wider text-primary uppercase">
                {eyebrow}
              </span>
            ) : null}
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-6">
            {title}
          </h2>
          <div className="w-16 h-1.5 bg-accent rounded-full"></div>
        </div>
        {children}
      </div>
    </section>
  );
}

function SiteCard({ children, className = "", hover = true }) {
  return (
    <div
      className={`rounded-2xl bg-card border border-border shadow-sm p-6 md:p-8 ${hover
          ? "transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-accent/50"
          : ""
        } ${className}`}
    >
      {children}
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-primary border border-border">
      {children}
    </span>
  );
}

// --- DATA ---

const overviewData = [
  { label: "Full Form", value: "Services Selection Board" },
  {
    label: "Purpose",
    value: "Select officer candidates for the Indian Armed Forces through a scientific, three-tier assessment.",
  },
  { label: "Duration", value: "4–5 Days (excluding travel)" },
  {
    label: "Tests Conducted",
    value: "Screening (OIR + PPDT), Psychological Tests, GTO Tasks, Personal Interview, Conference",
  },
  {
    label: "Qualities Assessed",
    value: "15 Officer Like Qualities (OLQs): leadership, courage, initiative, reasoning, cooperation, and more.",
  },
  { label: "Assessors", value: "Psychologist, GTO, and Interviewing Officer" },
  {
    label: "Final Outcome",
    value: "Recommended / Not Recommended + Medical examination for recommended candidates",
  },
];

const ssbCenters = [
  "Allahabad", "Bhopal", "Bangalore", "Dehradun",
  "Kapurthala", "Mysore", "Coimbatore", "Varanasi",
];

const dayCards = [
  {
    day: "Day 0",
    title: "Reporting & Documentation",
    highlight: "Set the tone with discipline and attention to detail.",
    points: ["Reporting", "Document verification", "Chest number allotment"],
    icon: Clock,
  },
  {
    day: "Day 1",
    title: "Screening (OIR + PPDT)",
    highlight: "Major elimination day — stay calm and perform naturally.",
    points: ["OIR: Verbal & Non-Verbal Reasoning", "PPDT: Story writing, narration, group discussion"],
    icon: Target,
  },
  {
    day: "Day 2",
    title: "Psychology Tests",
    highlight: "Honest, spontaneous responses matter more than “perfect” answers.",
    points: ["TAT", "WAT", "SRT", "SDT"],
    icon: Brain,
  },
  {
    day: "Day 3 & 4",
    title: "GTO Tasks & Interview",
    highlight: "Demonstrate teamwork, initiative, and effective communication.",
    points: ["Indoor & Outdoor group tasks", "Command task", "Individual obstacles", "Personal Interview"],
    icon: Users,
  },
  {
    day: "Day 5",
    title: "Conference & Result",
    highlight: "A final holistic review — consistency across all days wins.",
    points: ["Final assessment", "Recommendation decision"],
    icon: Trophy,
  },
];

const psychologyCards = [
  {
    title: "TAT (Thematic Apperception Test)",
    desc: "Write a short story from a picture. Your themes reveal personality, initiative, and problem-solving approach.",
    icon: Activity,
  },
  {
    title: "WAT (Word Association Test)",
    desc: "React to words with the first thought. It reflects attitude, values, and mental clarity under time pressure.",
    icon: Zap,
  },
  {
    title: "SRT (Situation Reaction Test)",
    desc: "Respond to real-life situations. Focus on practical, responsible actions — not dramatic heroism.",
    icon: Target,
  },
  {
    title: "SDT (Self-Description Test)",
    desc: "Describe yourself through others’ perspectives. Strong candidates show self-awareness and balanced confidence.",
    icon: Shield,
  },
];

const gtoRows = [
  { task: "Group Discussion", type: "Indoor", qualities: "Communication, reasoning, teamwork" },
  { task: "Group Planning Exercise (GPE)", type: "Indoor", qualities: "Planning, cooperation, decision-making" },
  { task: "PGT / HGT", type: "Outdoor", qualities: "Teamwork, initiative, resourcefulness" },
  { task: "Command Task", type: "Outdoor", qualities: "Leadership, influencing ability, calmness" },
  { task: "Lecturette", type: "Indoor", qualities: "Confidence, clarity, composure" },
  { task: "Individual Obstacles", type: "Outdoor", qualities: "Courage, stamina, determination" },
  { task: "Final Group Task", type: "Outdoor", qualities: "Team spirit, persistence, cooperation" },
];

export default function SSBInterviewRoadmap() {
  return (
    <main className="min-h-screen bg-background font-sans selection:bg-accent/30">
      <Header />

      {/* 1) HERO SECTION */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-secondary border border-border shadow-sm">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold tracking-wider text-primary uppercase">
                SSB Preparation Masterclass
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Conquer the <span className="text-accent">5-Day</span> SSB Selection Process
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
              Prepare like a future officer. Master the expectations and build the habits that the SSB rewards — clarity, courage, teamwork, and consistent performance.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="#roadmap" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-md">
                Explore Roadmap
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#tips" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-card text-primary font-semibold border border-border hover:bg-secondary transition-colors shadow-sm">
                Prep Tips
                <BookOpen className="w-5 h-5 text-accent" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2) WHAT IS SSB */}
      <Section
        id="what-is"
        eyebrow="Understanding SSB"
        icon={BookOpen}
        title="What is the SSB Interview?"
        className="bg-card border-y border-border"
      >
        <div className="grid lg:grid-cols-3 gap-8">
          <SiteCard className="lg:col-span-2 bg-secondary/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center border border-border">
                <BadgeCheck className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary">
                Services Selection Board
              </h3>
            </div>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              The Services Selection Board is a comprehensive personality assessment system used by the Indian Armed Forces to select candidates for officer-level roles. It evaluates your natural behavior through multiple tasks spread across several days.
            </p>

            <div className="space-y-4 mb-8 bg-card rounded-xl p-6 border border-border">
              <h4 className="font-semibold text-primary flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                Why SSB is Unique
              </h4>
              <ul className="space-y-3">
                {[
                  "Assesses 15 OLQs using scientific, time-bound tasks",
                  "Three-assessor system: Psychologist, GTO, Interviewing Officer",
                  "Measures real leadership potential and group effectiveness",
                  "Rewards consistency, clarity, and responsible decision-making"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl border-l-4 border-l-accent bg-card border-y border-r border-border">
              <p className="text-sm font-medium text-muted-foreground">
                <strong className="text-primary font-bold">Key Focus: Officer Like Qualities (OLQs)</strong> — Courage, initiative, reasoning ability, organizing ability, and effective intelligence.
              </p>
            </div>
          </SiteCard>

          <div className="space-y-6">
            {[
              { title: "Duration", value: "4–5 Days", desc: "Complete assessment process", icon: Clock },
              { title: "Conducted By", value: "Indian Armed Forces", desc: "Army, Navy & Air Force", icon: Users },
              { title: "Selection Ratio", value: "5–7%", desc: "Of total candidates", icon: TrendingUp }
            ].map((stat, idx) => (
              <SiteCard key={idx} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0 border border-border">
                  <stat.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{stat.title}</p>
                  <p className="text-xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.desc}</p>
                </div>
              </SiteCard>
            ))}
          </div>
        </div>
      </Section>

      {/* 3) OVERVIEW TABLE */}
      <Section
        id="overview"
        eyebrow="Quick Reference"
        icon={FileText}
        title="SSB Process Overview"
        className="bg-background"
      >
        <div className="grid lg:grid-cols-3 gap-8">
          <SiteCard className="lg:col-span-2 p-0 overflow-hidden flex flex-col">
            <div className="bg-primary p-6">
              <h3 className="font-display text-xl font-bold text-primary-foreground flex items-center gap-2">
                <Target className="w-5 h-5 text-accent" />
                Complete Details
              </h3>
            </div>
            <div className="divide-y divide-border">
              {overviewData.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-start p-4 md:p-6 hover:bg-secondary/30 transition-colors"
                >
                  <div className="sm:w-1/3 font-semibold text-primary mb-1 sm:mb-0">
                    {item.label}
                  </div>
                  <div className="sm:w-2/3 text-sm text-muted-foreground">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </SiteCard>

          <SiteCard className="flex flex-col items-center justify-center text-center">
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-6 border border-border">
              <MapPin className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-display text-xl font-bold text-primary mb-2">
              Common SSB Centers
            </h3>
            <p className="text-sm text-muted-foreground mb-8">Located Across India</p>

            <div className="flex flex-wrap justify-center gap-2 w-full mb-6">
              {ssbCenters.map((center, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-background rounded-md text-xs font-medium text-primary border border-border whitespace-nowrap"
                >
                  {center}
                </span>
              ))}
            </div>

            <p className="text-xs text-muted-foreground mt-auto">
              <strong className="text-primary">Note:</strong> Center allocation depends on entry type.
            </p>
          </SiteCard>
        </div>
      </Section>

      {/* 4) 5-DAY ROADMAP */}
      <Section
        id="roadmap"
        eyebrow="The 5-Day Process"
        icon={Flag}
        title="Selection Roadmap"
        className="bg-card border-y border-border"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          {dayCards.map((d, idx) => (
            <SiteCard key={idx} className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 relative overflow-hidden group">
              {/* Highlight ribbon */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="md:w-1/3 shrink-0">
                <div className="flex items-center gap-3 mb-3">
                  <Pill>{d.day}</Pill>
                  <d.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-2">
                  {d.title}
                </h3>
              </div>

              <div className="md:w-2/3">
                <p className="text-sm font-medium text-primary bg-secondary/50 p-3 rounded-lg border border-border mb-4">
                  {d.highlight}
                </p>
                <ul className="space-y-2">
                  {d.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SiteCard>
          ))}
        </div>
      </Section>

      {/* 5) DAY 1 DEEP DIVE */}
      <Section
        id="day1"
        eyebrow="Screening Mastery"
        icon={Target}
        title="Day 1 Deep Dive : OIR & PPDT"
        className="bg-background"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "OIR Test",
              subtitle: "Intelligence & Speed",
              desc: "Practice timed verbal + non-verbal reasoning. Accuracy first, then increase speed.",
            },
            {
              title: "PPDT Story Writing",
              subtitle: "Imagination",
              desc: "Write structured stories: situation → action → outcome. Keep it realistic and responsible.",
            },
            {
              title: "PPDT Narration",
              subtitle: "Confidence",
              desc: "Speak clearly with calm body language. Aim for clarity, not volume.",
            },
            {
              title: "Group Discussion",
              subtitle: "Teamwork",
              desc: "Contribute logically, listen actively, and build consensus without dominating.",
            },
          ].map((c, idx) => (
            <SiteCard key={idx} className="border-t-4 border-t-accent flex flex-col">
              <h3 className="font-display text-lg font-bold text-primary mb-1">
                {c.title}
              </h3>
              <p className="text-xs font-semibold text-accent uppercase mb-4">
                {c.subtitle}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-auto">
                {c.desc}
              </p>
            </SiteCard>
          ))}
        </div>
      </Section>

      {/* 6) PSYCHOLOGY TESTS */}
      <Section
        id="psych"
        eyebrow="Know the Tests"
        icon={Brain}
        title="Psychology Tests"
        className="bg-card border-y border-border"
      >
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {psychologyCards.map((t, idx) => (
            <SiteCard key={idx} className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center shrink-0">
                <t.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-primary mb-2">
                  {t.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t.desc}
                </p>
              </div>
            </SiteCard>
          ))}
        </div>
        <div className="mt-10 max-w-3xl mx-auto">
          <div className="p-5 rounded-xl bg-secondary border border-border text-center flex items-center justify-center gap-3">
            <Brain className="w-6 h-6 text-accent shrink-0" />
            <p className="text-sm font-medium text-primary">
              <strong className="text-accent">Pro Tip:</strong> Don’t “act” in psychology tests. Consistency and honesty across all tasks are what assessors trust.
            </p>
          </div>
        </div>
      </Section>

      {/* 7) GTO TASKS TABLE */}
      <Section
        id="gto"
        eyebrow="Group Dynamic"
        icon={Users}
        title="GTO Tasks Breakdown"
        className="bg-background"
      >
        <SiteCard className="max-w-4xl mx-auto p-0 overflow-hidden">
          <div className="bg-primary p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-1">
                Tasks, Types, and Qualities
              </h3>
              <p className="text-primary-foreground/80 text-sm">Master the outdoor and indoor group activities</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left align-middle">
              <thead>
                <tr className="bg-secondary/40 border-b border-border">
                  <th className="p-4 text-xs font-semibold text-primary uppercase tracking-wider">Task</th>
                  <th className="p-4 text-xs font-semibold text-primary uppercase tracking-wider">Type</th>
                  <th className="p-4 text-xs font-semibold text-primary uppercase tracking-wider">Qualities Tested</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {gtoRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-secondary/20 transition-colors">
                    <td className="p-4 text-sm font-semibold text-primary">{row.task}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium border ${row.type === 'Indoor' ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-green-50 text-green-700 border-green-200'}`}>
                        {row.type}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">{row.qualities}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SiteCard>
      </Section>

      {/* 8) MEDICAL */}
      <Section
        id="medical"
        eyebrow="Health Check"
        icon={HeartPulse}
        title="SSB Medical Examination"
        className="bg-card border-y border-border"
      >
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <SiteCard>
            <Clock className="w-8 h-8 text-accent mb-4" />
            <h3 className="font-display text-lg font-bold text-primary mb-3">
              Duration
            </h3>
            <p className="text-sm text-muted-foreground">
              Typically 3–7 days depending on entry and military hospital workload.
            </p>
          </SiteCard>

          <SiteCard>
            <Activity className="w-8 h-8 text-accent mb-4" />
            <h3 className="font-display text-lg font-bold text-primary mb-3">
              Common Checks
            </h3>
            <ul className="space-y-2">
              {[
                "Vision & hearing",
                "Blood/urine tests",
                "Dental & Oral",
                "Orthopedic assessment",
                "General physical fitness",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </SiteCard>

          <SiteCard>
            <FileText className="w-8 h-8 text-accent mb-4" />
            <h3 className="font-display text-lg font-bold text-primary mb-3">
              Review / Appeal
            </h3>
            <p className="text-sm text-muted-foreground">
              If found unfit, you may be eligible for a review medical or appeal as per rules. Keep all documents organized.
            </p>
          </SiteCard>
        </div>
      </Section>

      {/* 9) PREP TIPS */}
      <Section
        id="tips"
        eyebrow="For Freshers"
        icon={BookOpen}
        title="Preparation Tips"
        className="bg-background"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { title: "Daily Routine", desc: "Fixed sleep, study blocks, and mock practice to build consistency.", icon: Clock },
            { title: "Fitness", desc: "Run, mobility, and basic strength. Be injury-free and energetic.", icon: Activity },
            { title: "Newspaper", desc: "Build awareness + opinion framing for GD and interview.", icon: BookOpen },
            { title: "Psychology", desc: "Timed WAT/SRT sets; focus on clarity and real-life actions.", icon: Brain },
            { title: "Speaking", desc: "Practice narration + discussions; learn to listen and add value.", icon: Users },
          ].map((t, idx) => (
            <SiteCard key={idx} className="flex flex-col items-center text-center p-6">
              <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center mb-4">
                <t.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display text-base font-bold text-primary mb-2">
                {t.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mt-auto">
                {t.desc}
              </p>
            </SiteCard>
          ))}
        </div>
      </Section>

      {/* 10) DOs & DON'Ts */}
      <Section
        id="dos"
        eyebrow="Behavior"
        icon={CheckCircle}
        title="Keys to Success"
        className="bg-card border-y border-border"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <SiteCard className="border-t-4 border-t-green-500">
            <div className="flex items-center gap-3 mb-6 border-b border-border pb-4">
              <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center border border-green-100">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary">
                The DOs
              </h3>
            </div>
            <ul className="space-y-4">
              {[
                "Be punctual and neatly dressed",
                "Communicate with clarity and respect",
                "Support the group — don’t compete against it",
                "Stay calm under pressure and accept feedback",
                "Keep stories and answers realistic and responsible",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-secondary-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </SiteCard>

          <SiteCard className="border-t-4 border-t-red-500">
            <div className="flex items-center gap-3 mb-6 border-b border-border pb-4">
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center border border-red-100">
                <Shield className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary">
                The DON’Ts
              </h3>
            </div>
            <ul className="space-y-4">
              {[
                "Don’t dominate GDs or interrupt others",
                "Don’t fake achievements or over-claim qualities",
                "Don’t panic if a task goes wrong — recover fast",
                "Don’t be negative or blame fellow candidates",
                "Don’t use memorized “perfect” lines in psych tests",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-4 h-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">X</span>
                  <span className="text-sm text-secondary-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </SiteCard>
        </div>
      </Section>

      {/* 11) STATS */}
      <Section
        id="stats"
        eyebrow="Facts & Figures"
        icon={Trophy}
        title="Selection Statistics"
        className="bg-background"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Total Marks", value: "900", note: "Psych + GTO + Interview" },
            { label: "Attempts / Year", value: "2–4", note: "Depends on entries" },
            { label: "Selection Ratio", value: "5–7%", note: "Varies by entry" },
            { label: "Candidates / Batch", value: "100–200", note: "Approx. at centers" },
          ].map((s, idx) => (
            <SiteCard
              key={idx}
              className="text-center bg-secondary/30"
            >
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">{s.label}</p>
              <p className="font-display text-4xl font-bold text-primary mb-2">
                {s.value}
              </p>
              <p className="text-xs font-medium text-accent inline-flex px-2 py-1 rounded bg-background border border-border">{s.note}</p>
            </SiteCard>
          ))}
        </div>
      </Section>

      <Footer />
    </main>
  );
}
