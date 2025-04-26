import { Feature } from "@/data/features";

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-primary dark:text-primary-light text-3xl mb-4">
        <i className={feature.icon}></i>
      </div>
      <h3 className="font-heading font-semibold text-xl mb-3 text-slate-800 dark:text-white">
        {feature.title}
      </h3>
      <p className="text-slate-600 dark:text-slate-300">
        {feature.description}
      </p>
    </div>
  );
}
