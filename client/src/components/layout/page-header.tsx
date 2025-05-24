interface PageHeaderProps {
  title: string;
  subtitle: string;
  accentWord?: string;
}

export default function PageHeader({ title, subtitle, accentWord }: PageHeaderProps) {
  const renderTitle = () => {
    if (!accentWord) return title;

    const parts = title.split(accentWord);
    return (
      <>
        {parts[0]}
        <span className="text-primary dark:text-primary-light">{accentWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="bg-gradient-to-b from-primary/10 to-white dark:from-primary-dark/20 dark:to-slate-900 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-slate-800 dark:text-white mb-4">
            About My Health Book
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}