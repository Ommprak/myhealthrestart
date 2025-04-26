import { Feature } from "@/data/features";

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
      <div className="text-3xl sm:text-4xl text-primary dark:text-primary-light mb-4">
        <i className={feature.icon}></i>
      </div>
      <h3 className="font-heading font-semibold text-lg sm:text-xl text-slate-800 dark:text-white mb-2">
        {feature.title}
      </h3>
      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
        {feature.description}
      </p>
    </div>
  );
}