import Header from "@/components/Header.jsx";
import HeroSection from "@/components/HeroSection.jsx";
import ScreeningSection from "@/components/ScreeningSection.jsx";
import PsychologicalSection from "@/components/PsychologicalSection.jsx";
import GTOSection from "@/components/GTOSection.jsx";
import InterviewSection from "@/components/InterviewSection.jsx";
import Footer from "@/components/Footer.jsx";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ScreeningSection />
        <PsychologicalSection />
        <GTOSection />
        <InterviewSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
