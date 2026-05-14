import Link from "next/link";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  href: string;
  badge?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  href,
  badge,
  imageSrc,
  imageAlt,
}: ServiceCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group flex flex-col relative">
      {badge && (
        <div className="absolute top-4 right-4 bg-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">
          {badge}
        </div>
      )}
      {imageSrc && (
        <div className="h-48 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
          <img
            alt={imageAlt || title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            src={imageSrc}
          />
          <span className="material-symbols-outlined filled absolute bottom-4 left-4 text-white text-3xl z-20">
            {icon}
          </span>
        </div>
      )}
      <div className="p-8 flex-grow flex flex-col">
        {!imageSrc && (
          <div className="w-14 h-14 bg-navy/10 rounded-lg flex items-center justify-center mb-6 text-navy">
            <span className="material-symbols-outlined filled text-3xl">{icon}</span>
          </div>
        )}
        <h3 className="font-headline font-bold text-xl text-navy mb-3 group-hover:text-orange transition-colors">
          {title}
        </h3>
        <p className="font-body text-slate mb-6 flex-grow text-sm leading-relaxed">
          {description}
        </p>
        <ul className="space-y-2 mb-6 font-body text-sm text-charcoal">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <span className="material-symbols-outlined text-green text-sm">check_circle</span>
              {feature}
            </li>
          ))}
        </ul>
        <Link
          className="text-navy font-bold font-headline flex items-center gap-1 hover:text-orange transition-colors group/link mt-auto"
          href={href}
        >
          Learn More{" "}
          <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </Link>
      </div>
    </div>
  );
}
