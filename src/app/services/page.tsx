import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import LeadForm from "@/components/LeadForm";
import TrustBar from "@/components/TrustBar";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Roofing Services Toronto | Residential & Commercial",
  description:
    "Full-service roofing company in Toronto. Asphalt shingles, metal roofing, flat roofs, storm damage repair, and eavestrough services. Free estimates.",
};

const services = [
  {
    icon: "roofing",
    title: "Asphalt Shingle Roofing",
    description: "Premium architectural shingle installation for residential homes. Certified by top manufacturers with lifetime warranties.",
    features: ["GAF Master Elite", "130 mph Wind Rating", "50-Year Warranty"],
    href: "/services/asphalt-shingle-roofing",
    badge: "Most Popular",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzdu2cSWdeg3AZRGM3rTgkVMBvQv4OkoIwro5YuOZOcL3xvOKUYzF40ei1J_cUVlOYTc7c8FDFlYjZrwmPYSb65corKTWVSxKJeLerdVx2eqyOqJAj3yhU-znTmzM_tVlA29p5xgzSIMKJbpiK41MQGxjHbSEbpXGSKjfZvgUs-g-0YYv9VBLL6SENzf3zfySlqVjT5Hwf_vSEt4SPU2AapBXlQUgTWigsM8QKI0Ub1x6H9PsxNA_ZAo7B2gwoRPnGveIcB4Y0O38X",
  },
  {
    icon: "home",
    title: "Metal Roofing",
    description: "Standing seam and metal shingle profiles for maximum longevity, energy efficiency, and modern curb appeal.",
    features: ["50+ Year Lifespan", "Energy Star Rated", "Fire Resistant"],
    href: "/services",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlHggV9PpL2VwspM7VgyRiIg5X3p37Juo3iP-wqKdfItjKYQ_krCDGBSfUjBZEksFvXYDAGM2VE9mHwitAuQXHsMYo5k0NJlEG3Fv_FXmagC5d_VYGVpN8kCBdIK3VrTJ_mCt10bB7sD_I8hFNtDPjUPLpDkdnAs9qC-7d-dNdas3v8hcP_bRAc41nS7RstUt7ZWq94K3rTNLBCW55ozaE3h2pdhr9B_UuinUMe5mRcZAZiBPM3UHwH-Hh7e9DnB7Lnq6aGz4JB3ss",
  },
  {
    icon: "business",
    title: "Flat Roof Systems",
    description: "Commercial and residential flat roof solutions including EPDM, TPO, and modified bitumen membrane systems.",
    features: ["Leak-Proof Membranes", "Energy Efficient", "Low Maintenance"],
    href: "/services",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPsANqHI0ofFJ0dX1TbR-AeQ7wxLlW29NAJJz5Fdi-_B90zMoiO1u0saQDc1NrTb5S6sz7rBf22DaJ7otclsc9oQmrQuOOyMkYD-pKbR6oa3FhBiLcEcNgTQ5zQ6QQwCs_dP95-dCUdE38-uw1HtOSIEoePA8FwZuLfQxhG0Ih29w91nGJ8hOZSgSp_nCD0D-t2T6zEAwRhmwnKvw-fx3ee-z2GqLItPeT2sTM07Cevv4F_JJHFioCMPRHo60T5WcGMgRyvph4InWU",
  },
  {
    icon: "thunderstorm",
    title: "Storm Damage & Emergency Repair",
    description: "24/7 emergency response for wind, hail, and tree damage. Free tarping and insurance claim assistance.",
    features: ["90-Min Response", "Insurance Handled", "Free Tarping"],
    href: "/storm-damage",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7jodBWr-Bv6hntiVonp3FbxqgYDi2Jb5iwQ3_4M_6KAe8f0NQB0m82glWGN5iHcN3SGxZbAU_QThxXbbsesmwjARE6V3SzidiM6imyonatOKrbOnTcPp_h1mrpcvyfib_Dbb68592Eqw2BCvah7WVPg41WYqhzPDGC21IQMfQZiWvurzwcclSrbTXe7AreAca5CWGeLj6riwN6mtnb1yyqNSH1DwmXcQwjln_vbC_Y4gBdVzOlunOHQo3V-6MmIsH7VbFibr-jhQx",
  },
  {
    icon: "plumbing",
    title: "Eavestroughs & Gutters",
    description: "Seamless aluminum eavestrough installation, downspouts, leaf guards, and gutter maintenance.",
    features: ["Seamless Aluminum", "Lifetime Leaf Guards", "Foundation Protection"],
    href: "/services",
  },
  {
    icon: "foundation",
    title: "Siding & Trim",
    description: "Vinyl, aluminum, and fiber cement siding installation for complete exterior protection and curb appeal.",
    features: ["Low Maintenance", "Insulated Options", "Matching Trim"],
    href: "/services",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <p className="font-body text-sm uppercase tracking-widest text-orange font-bold mb-4">What We Do</p>
          <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-white leading-tight mb-6 tracking-tight">
            Complete Roofing Services<br />
            <span className="text-orange">for Toronto Homes & Businesses</span>
          </h1>
          <p className="font-body text-lg text-cloud/90 max-w-2xl leading-relaxed mb-8">
            From a single shingle repair to a full commercial re-roof, our certified team delivers expert craftsmanship with premium materials and transparent pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              className="bg-orange text-white px-8 py-4 rounded-lg font-headline font-bold hover:bg-orange-dark transition-all shadow-lg text-center"
              href="/free-estimate"
            >
              Get My Free Quote
            </Link>
            <a
              className="border-2 border-white/20 text-white px-8 py-4 rounded-lg font-headline font-bold hover:bg-white/10 transition-all text-center flex items-center justify-center gap-2"
              href={siteConfig.phone.href}
            >
              <span className="material-symbols-outlined">call</span>
              {siteConfig.phone.display}
            </a>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Services Grid */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-navy tracking-tight mb-4">
              Our Services
            </h2>
            <p className="font-body text-slate max-w-2xl mx-auto text-lg">
              Every service backed by our lifetime workmanship warranty and honest, upfront pricing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Inline Estimate CTA */}
      <section className="py-24 bg-cloud">
        <div className="max-w-2xl mx-auto px-6">
          <LeadForm
            title="Get a Free Roofing Estimate"
            subtitle="Tell us about your project and we'll respond within 24 hours."
            variant="card"
          />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
