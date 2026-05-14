import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import LeadForm from "@/components/LeadForm";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Scarborough Roofing Contractors",
  description: "Tropicana Roofing is Scarborough's most trusted roofing company. Local experts for roof replacement, repair, and flat roofs. Free estimate.",
};

const neighborhoods = [
  "Agincourt", "Malvern", "Guildwood", "West Hill", "Wexford", "Cliffcrest",
  "Rouge", "Port Union", "Birch Cliff", "Dorset Park", "L'Amoreaux", "Eglinton East",
];

export default function ScarboroughPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-cloud border-b border-gray-200 py-3 px-6">
        <div className="max-w-7xl mx-auto text-sm text-slate flex items-center gap-2 font-medium">
          <Link className="hover:text-orange" href="/">Home</Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span className="text-navy font-semibold">Scarborough</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent z-10 md:w-3/5" />
        <div className="absolute inset-0 bg-navy/80 z-10 md:hidden" />
        <img alt="Scarborough home with new roof" className="absolute inset-0 w-full h-full object-cover z-0 md:left-[40%] md:w-[60%]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY_jevRwIz9fmgszUCusCdaxqmWTfAyE5P2XHCSIBiHMAipI-NRy-T10GhK21J08p1dOPgG5qXIDBKEQChSPJxgX9ySxrouNQYuvU2fOvIRlE93Vyy4u7G5P6429m-DEGI8r1kvYwB79oVtAiV5i5HlXM13hMOT--2G0yJ6omVcuH_rLIO3gIRcZsCqUFo5F1CRzGtw8GB7rxaaxljv5E8bmMykf9smYmS5QszP1oY5JWbjrXVEL88g7sfZKip8QWkqFujN5mPq3A8" />
        <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="w-full md:w-[60%]">
            <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs uppercase tracking-widest mb-6">
              Serving Scarborough Since {siteConfig.founded}
            </span>
            <h1 className="font-headline font-extrabold text-4xl md:text-5xl leading-tight mb-6">
              Scarborough&apos;s Most Trusted <span className="text-orange">Roofing Company</span>
            </h1>
            <p className="text-lg text-white/90 mb-8 max-w-2xl leading-relaxed">
              From Agincourt to Guildwood, we provide expert roof replacement, flat roofing, and emergency repairs for Scarborough homeowners and businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link className="bg-orange text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-orange-dark transition-all text-center" href="/free-estimate">
                Get My Free Scarborough Estimate
              </Link>
              <a className="border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg font-bold text-center flex items-center justify-center gap-2" href={siteConfig.phone.href}>
                <span className="material-symbols-outlined">call</span>{siteConfig.phone.display}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local Proof */}
      <section className="bg-cloud border-b border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:divide-x divide-gray-300">
          <div className="px-4"><p className="font-headline font-extrabold text-3xl text-navy mb-1">{siteConfig.stats.roofsCompleted}</p><p className="text-xs text-slate uppercase tracking-wider font-semibold">Projects Completed</p></div>
          <div className="px-4"><p className="font-headline font-extrabold text-3xl text-navy mb-1">{siteConfig.stats.yearsInBusiness}</p><p className="text-xs text-slate uppercase tracking-wider font-semibold">Years Experience</p></div>
          <div className="px-4 flex flex-col items-center"><span className="material-symbols-outlined filled text-orange mb-1">location_on</span><p className="text-xs text-slate uppercase tracking-wider font-semibold">Local Office<br/>215 Markham Rd</p></div>
          <div className="px-4 flex flex-col items-center"><span className="material-symbols-outlined text-green mb-1">timer</span><p className="text-xs text-slate uppercase tracking-wider font-semibold">Same-Day<br/>Response</p></div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-24 bg-cloud">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-orange font-bold mb-3">Service Area</p>
            <h2 className="font-headline font-extrabold text-3xl text-navy mb-4">Every Scarborough Neighborhood</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {neighborhoods.map((n) => (
              <div key={n} className="bg-white border border-gray-200 hover:border-orange hover:shadow-md transition-all py-3 px-4 rounded-lg flex items-center justify-between group cursor-default">
                <span className="font-medium text-charcoal group-hover:text-navy">{n}</span>
                <span className="material-symbols-outlined text-slate group-hover:text-orange text-sm">check_circle</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estimate Form */}
      <section className="py-20 bg-navy">
        <div className="max-w-2xl mx-auto px-6">
          <LeadForm title="Get Your Free Scarborough Estimate" subtitle={`Fill out the form or call ${siteConfig.phone.display}`} variant="card" />
        </div>
      </section>

      <CTABanner heading="Scarborough's Most Trusted Roofing Experts" />
    </>
  );
}
