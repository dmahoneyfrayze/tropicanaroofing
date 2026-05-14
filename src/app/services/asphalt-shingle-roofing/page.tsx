import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import LeadForm from "@/components/LeadForm";
import TrustBar from "@/components/TrustBar";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Asphalt Shingle Roofing Toronto",
  description: "Toronto's #1 asphalt shingle roofing experts. GAF Master Elite certified. Free estimates and lifetime warranty.",
};

const shingleTypes = [
  {
    name: "3-Tab Shingles",
    desc: "Traditional, economical choice with a flat, consistent pattern. Good for budget-conscious replacements.",
    features: ["20-25 Year Lifespan", "Most Affordable", "60 mph Wind Rating"],
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAP3TQ2LIgNCshfSO4Osh0zmuFIIV1sI2JXhfrTq4yOlyLM5FMzlQcs7hLGpC0cXhVRKJa8LnqQvBVyg9DjnQmJ6atDZuq0GCbCLE-mDHTgUR6-ATF8MWS-GwnewQ_8wBtw6lTKm5ZbZHKhUh_frMyrafa1Fd57i_DPcsYHUa4VHs0QzPnS2_f2YpHjX3PQybxVsLZG2e5nYsqyqGon5zwE7JqAudGsB0bNySFARzH_0kpPPJDFXykaKivn3GILFDBnuszi_iXSfZg",
  },
  {
    name: "Architectural Shingles",
    desc: "Multi-layered dimensional shingles that mimic wood shake or slate. The most popular choice for Toronto homes.",
    features: ["30-50 Year Lifespan", "Enhanced Curb Appeal", "130 mph Wind Rating"],
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBMeQ7CTMslXQBb106bSmuPMYO6kexDXb_BNpM9gZodNeR8mN4RbDCiYbTEgO3X98kU0R4UMVkW_AbmdC0XnvhQNGOndyQDsB-YJpEV_KGg2dP2Pmu4GJ_Dy7_EFoZrf9-yfvoqJYodyIIrUeUt9jTuHpH0FxSPWf2c_QAdbnXkS6lGBfd2CkRCY9oOZq25G5_kpcMzjzGbSItCdLlXUgxpgnhKKLCUd9GRknNnysk_aDhcoDOYLAWIGqerxTobZRqwopOXmlnHFV7",
    badge: "Most Popular",
  },
  {
    name: "Luxury / Designer",
    desc: "Premium, oversized shingles designed to replicate the look of natural slate or cedar shake.",
    features: ["50+ Year / Lifetime", "Maximum Durability", "Highest Impact Resistance"],
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeNNhZx9D6JVonJgIHMha7NHqr9Gz8kfTzq00puwH6RQtO_C9XSp8FlM8-v_GaXgMTC75hPcMuazMwXI2vHo_LSu0sJLH_dN5xF1TxqG8FUnbRHwKc-Lb7jTf_WHCYkngUKQm1Y0yEE7bamGZPtdyGHlUpV3ZkF6i4MmCiy-GAfxk0WhXaVihDd1ZjIGTxfg1ahZlqXqVrvoFtsqx-O6N_i_hrfkh5fDMQ24_RuNnp_e6kmVX15X2EtTFUOr0R5RzXwW0I38e3YnAu",
  },
];

export default function AsphaltShinglePage() {
  return (
    <>
      <div className="bg-white border-b border-gray-200 py-3 px-6">
        <div className="max-w-7xl mx-auto text-sm text-slate flex items-center gap-2 font-medium">
          <Link className="hover:text-orange" href="/">Home</Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <Link className="hover:text-orange" href="/services">Services</Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span className="text-navy font-semibold">Asphalt Shingle Roofing</span>
        </div>
      </div>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-navy leading-tight mb-6">
              Toronto&apos;s #1 Asphalt <span className="text-orange">Shingle Roofing</span> Experts
            </h1>
            <p className="text-lg text-slate mb-8 max-w-xl leading-relaxed">
              Premium GAF Master Elite-certified installation. Durable, weather-resistant roofing tailored for Toronto&apos;s climate, backed by lifetime warranties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link className="bg-orange text-white px-8 py-4 rounded-lg font-headline font-bold hover:bg-orange-dark transition-all shadow-md text-center" href="/free-estimate">
                Get My Free Shingle Quote →
              </Link>
              <a className="border-2 border-navy text-navy px-8 py-4 rounded-lg font-headline font-bold hover:bg-cloud transition-all text-center flex items-center justify-center gap-2" href={siteConfig.phone.href}>
                <span className="material-symbols-outlined">call</span>{siteConfig.phone.display}
              </a>
            </div>
          </div>
          <div className="h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img alt="New architectural asphalt shingle roof on a Toronto home" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASsd6LuUSc5IerZE9ztKo7UsUzaKZi2dOh9RFqqYDje9DokL6LfSHKeV_VhsCkp0i7xMuL07imQTs3T1f7oZBTGATz3Q2VQtXtz25mcWWTxmVQM6eVAUbU-e9Q2-yub9s8TMs2DoXbz4e2okItMvtTUgf0WtJTyOjThhHLXC9Z_dHpx3VwQwMH2DEMxqWR1-OOf-S5HmIjV6hwg3unFGmV8HpAizn9qU6jujh33qsjmOEwKd0ppUrXWVPRSycgxwfoYURbVjnsLv2l" />
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="py-24 bg-cloud" id="types">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-orange font-bold mb-3">Options & Upgrades</p>
            <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-navy mb-4">Choose the Right Shingle</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shingleTypes.map((type) => (
              <div key={type.name} className={`bg-white rounded-xl overflow-hidden flex flex-col hover:shadow-xl transition-shadow ${type.badge ? "border-2 border-orange shadow-md md:-translate-y-4" : "border border-gray-200 shadow-sm"}`}>
                {type.badge && <div className="bg-orange text-white text-center py-1.5 text-xs font-bold uppercase tracking-wider">{type.badge}</div>}
                <div className="h-48 overflow-hidden group">
                  <img alt={type.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={type.imageSrc} />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-headline font-bold text-xl text-navy mb-3">{type.name}</h3>
                  <p className="text-slate mb-6 flex-grow">{type.desc}</p>
                  <ul className="space-y-2 text-sm">
                    {type.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-green text-sm">check_circle</span>{f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <LeadForm title="Get Your Free Shingle Estimate" subtitle="We'll respond within 24 hours." variant="card" />
        </div>
      </section>

      <CTABanner heading="Ready for a New Asphalt Shingle Roof?" />
    </>
  );
}
