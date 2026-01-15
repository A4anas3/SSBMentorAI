import { Button } from "./ui/button.jsx";
import { ArrowRight, Shield } from "lucide-react";
import heroImage from "../assets/hero-officer.jpg";

const HeroSection = () => {
  return (
    <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-6">
              <Shield size={16} className="text-accent" />
              <span className="text-sm font-medium text-primary">
                Your Path to Defence Services
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-primary leading-tight mb-6">
              Prepare Like an <span className="text-accent">Officer</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Master the SSB Interview with comprehensive preparation materials,
              expert guidance, and structured practice for all psychological and
              group testing phases.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="lg" className="gap-2">
                Start Preparation
                <ArrowRight size={18} />
              </Button>
              <Button variant="outline" size="lg">
                View Roadmap
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              <div>
                <p className="text-2xl lg:text-3xl font-display font-bold text-primary">
                  100+
                </p>
                <p className="text-sm text-muted-foreground">Practice Tests</p>
              </div>
              {/* <div>
                <p className="text-2xl lg:text-3xl font-display font-bold text-primary">
                  10K+
                </p>
                <p className="text-sm text-muted-foreground">
                  Students Trained
                </p>
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-display font-bold text-primary">
                  85%
                </p>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div> */}
            </div>
          </div>

          {/* Right Image */}
          <div
            className="relative animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="bg-linear-to-br from-sky-50 via-sky-100 to-blue-100 rounded-2xl p-4 lg:p-6">
              <img
                src={heroImage}
                alt="Defence Officer"
                className="w-full h-auto rounded-xl shadow-lg object-cover aspect-4/3"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 lg:-left-8 bg-card rounded-xl shadow-lg p-4 border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Shield className="text-accent" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-primary">SSB Ready</p>
                  <p className="text-xs text-muted-foreground">
                    Complete Preparation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
