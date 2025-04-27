import { Feature } from "@/data/features";

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative">
        <div className="text-3xl sm:text-4xl text-primary dark:text-primary-light mb-4 transform group-hover:scale-110 transition-transform duration-300">
          <div className="w-12 h-12 flex items-center justify-center bg-primary/10 dark:bg-primary-light/10 rounded-lg">
            <i className={feature.icon}></i>
          </div>
        </div>
        <h3 className="font-heading font-semibold text-lg sm:text-xl text-slate-800 dark:text-white mb-3">
          {feature.title}
        </h3>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
}