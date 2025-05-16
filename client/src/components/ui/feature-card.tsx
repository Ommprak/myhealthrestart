export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="relative group overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-lg hover:shadow-blue-500/30 transition-shadow duration-500">
      {/* Glowing icon */}
      <div className="text-4xl mb-4 text-blue-400 transition-transform duration-500 group-hover:-translate-y-5 group-hover:scale-110">
        <i className={feature.icon}></i>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-xl mb-2 text-white transition-colors duration-300 group-hover:text-blue-400">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
        {feature.description}
      </p>

      {/* Hover Effect - glow */}
      <div className="absolute inset-0 rounded-2xl bg-blue-500 opacity-10 blur-2xl scale-125 transition-all duration-500 group-hover:opacity-20 group-hover:scale-[1.3]"></div>
    </div>
  );
}
