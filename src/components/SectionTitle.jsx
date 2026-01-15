const SectionTitle = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`mb-10 lg:mb-12 ${centered ? "lg:text-center" : ""}`}>
      <h2 className="section-title text-3xl lg:text-4xl font-display font-bold text-primary">
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-muted-foreground max-w-2xl ${
            centered ? "lg:mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
