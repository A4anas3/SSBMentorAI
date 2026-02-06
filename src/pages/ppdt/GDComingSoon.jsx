import { Users } from "lucide-react";
import ComingSoonPage from "@/components/ComingSoonPage";

const GDComingSoon = () => {
  return (
    <ComingSoonPage
      title="PPDT Group Discussion"
      subtitle="This feature is under development"
      icon={Users}
      heading="Group Discussion Module Coming Soon"
      description="We are building a structured PPDT Group Discussion practice module that will help you improve narration skills, confidence, listening ability, and Officer Like Qualities (OLQs)."
      footerText="⏳ Expected in a future update"
    />
  );
};

export default GDComingSoon;
