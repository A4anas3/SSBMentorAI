import SectionTitle from "./SectionTitle.jsx";
import TestCard from "./TestCard.jsx";
import { Target, Mic } from "lucide-react";
import gpeImage from "@/assets/card-gpe.jpg";
import lecturetteImage from "@/assets/card-lecturette.jpg";

import { Link } from "react-router-dom";

const gtoTests = [
  {
    title: "GPE - Group Planning Exercise",
    description:
      "Collaborate with your group to analyze problems, discuss solutions, and plan effective strategies.",
    image: gpeImage,
    icon: Target,
    href: "/gpe",
  },
  {
    title: "Lecturette",
    description:
      "Deliver a 3-minute impromptu talk on given topics, showcasing your communication and knowledge.",
    image: lecturetteImage,
    icon: Mic,
    href: "/lecturettes",
  },
];

const GTOSection = () => {
  return (
    <section id="gto" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="GTO Tasks"
          subtitle="Group Testing Officer tasks to evaluate your teamwork, leadership, and practical abilities."
          centered
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {gtoTests.map((test) => (
            <TestCard key={test.title} {...test} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GTOSection;
