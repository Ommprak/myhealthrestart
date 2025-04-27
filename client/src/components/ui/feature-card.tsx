import { Feature } from "@/data/features";

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="feature-box bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all transform opacity-0 translate-y-8">
      <div className="feature-icon-wrapper text-primary dark:text-primary-light text-3xl mb-4 relative">
        <div className="absolute -inset-2 bg-primary/10 dark:bg-primary-light/10 rounded-full blur-sm"></div>
        <i className={`${feature.icon} relative`}></i>
      </div>
      <h3 className="font-heading font-semibold text-xl text-slate-800 dark:text-white mb-3">
        {feature.title}
      </h3>
      <p className="text-slate-600 dark:text-slate-300">
        {feature.description}
      </p>
    </div>
  );
}