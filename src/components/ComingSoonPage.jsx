import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";

const ComingSoonPage = ({
  title,
  subtitle,
  icon: Icon,
  heading,
  description,
  footerText,
}) => {
  return (
    <section className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-20 text-center mt-10">
        <SectionTitle title={title} subtitle={subtitle} centered />

        <div className="max-w-xl mx-auto mt-12 p-8 rounded-2xl border bg-card shadow-sm">
          {Icon && (
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-primary/10 text-primary">
                <Icon size={36} />
              </div>
            </div>
          )}

          <h2 className="text-xl font-semibold mb-3">{heading}</h2>

          <p className="text-muted-foreground leading-relaxed">{description}</p>

          {footerText && (
            <div className="mt-6 text-sm text-muted-foreground">
              {footerText}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ComingSoonPage;
