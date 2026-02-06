import { Mic } from "lucide-react";
import ComingSoonPage from "@/components/ComingSoonPage";

const PIAIInterviewer = () => {
  return (
    <ComingSoonPage
      title="AI Personal Interviewer"
      subtitle="Simulated SSB-style interview practice"
      icon={Mic}
      heading="AI Interviewer Coming Soon"
      description="You will be able to practice a realistic SSB Personal Interview with an AI interviewer using voice-based questions, follow-ups, and structured feedback aligned with Officer Like Qualities (OLQs)."
      footerText="🎤 Voice-based mock interviews launching soon"
    />
  );
};

export default PIAIInterviewer;
