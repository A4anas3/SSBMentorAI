import SectionTitle from "@/components/SectionTitle.jsx";
import TestCard from "@/components/TestCard.jsx";
import Header from "@/components/Header.jsx";
import { Info, BookOpen, Brain } from "lucide-react";
import sdtImage from "@/assets/card-sdt.jpg";

const sdtCards = [
  {
    title: "About SDT Test",
    description:
      "Understand the Self Description Test, its purpose, structure, and how psychologists evaluate your personality.",
    image: sdtImage,
    icon: Info,
    href: "/sdt/about",
  },
  {
    title: "Sample SDT",
    description:
      "Explore sample Self Description responses to understand the ideal format and approach.",
    image: sdtImage,
    icon: BookOpen,
    href: "/sdt/sample",
  },
  {
    title: "Personalised SDT with AI",
    description:
      "Write your own self-description and get AI-based analysis, feedback, and improvement suggestions.",
    image: sdtImage,
    icon: Brain,
    href: "/sdt/AI-soon",
  },
];

const SdtPage = () => {
  return (
    <section className="py-16 pt-24 bg-muted/30">
      <Header />

      <div className="container mx-auto px-4">
        <SectionTitle
          title="Self Description Test (SDT)"
          subtitle="Understand the test, explore samples, and generate personalised SDT with AI."
          centered
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sdtCards.map((card) => (
            <TestCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SdtPage;
