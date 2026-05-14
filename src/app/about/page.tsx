import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About Us | Toronto Roofing Since 2004",
  description: `Learn about ${siteConfig.name}, Toronto's trusted roofing company since ${siteConfig.founded}. Meet our team, our values, and our commitment to quality.`,
};

const values = [
  { icon: "handshake", title: "Honest Estimates", desc: "Transparent, itemized quotes with no hidden fees." },
  { icon: "diamond", title: "Premium Materials", desc: "We only use top-tier products from certified manufacturers." },
  { icon: "groups", title: "In-House Crews", desc: "No subcontractors — our trained team handles every project." },
  { icon: "eco", title: "Clean Jobsite", desc: "Magnetic sweep, full cleanup, and property protection guaranteed." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-orange font-bold mb-4">About Us</p>
          <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-white mb-6 tracking-tight">
            Protecting Toronto Homes<br />
            <span className="text-orange">Since {siteConfig.founded}</span>
          </h1>
          <p className="text-lg text-cloud/90 max-w-2xl mx-auto leading-relaxed">
            {siteConfig.name} was founded with a simple mission: deliver honest, high-quality roofing
            to every homeowner in Toronto. {siteConfig.stats.roofsCompleted} roofs later, that mission
            hasn&apos;t changed.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-orange font-bold mb-3">Our Story</p>
            <h2 className="font-headline font-extrabold text-3xl text-navy mb-6">
              Built on Trust, Driven by Craftsmanship
            </h2>
            <div className="space-y-4 text-slate leading-relaxed">
              <p>
                What started as a small crew of three in Scarborough has grown into one of Toronto&apos;s
                most respected roofing companies, with a team of over 40 certified professionals
                serving every corner of the GTA.
              </p>
              <p>
                We&apos;ve earned our reputation the old-fashioned way — one roof at a time. Every project
                is overseen by a senior foreman, uses premium materials from certified manufacturers,
                and is backed by our lifetime workmanship warranty.
              </p>
              <p>
                Our office is right here at {siteConfig.address.street}, and our reputation in the
                community is everything to us. We treat every roof like it&apos;s our own home.
              </p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl h-[400px]">
            <img
              alt="Tropicana Roofing crew working on a residential roof"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf9-2pH1O5HRAbgIqHl-Uj-SaycSyZmvVHmRriJd9-iLb0dHUn-458soY2NMXujyBBC8ndWF9O8GZkdgxlgX5nqizmq5H-H1hybm4AgyaWS7vZ8hvV33puQ4MIaOpS7Kqapj2k8RCaB_TSc_sRBGBfJFxMS4MNjXriqWLperoSijfnKBGdoKQXEQUW7mADF3JFbEVXIHRt_BuNuktoHAg8xWUg7tDqNo34cuqERuyUINeZln6EbwdXvNuW0eJ5fXpZ2asS0xktpbza"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-cloud">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-orange font-bold mb-3">Our Values</p>
            <h2 className="font-headline font-extrabold text-3xl text-navy">The Tropicana Standard</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform">
                <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-6 text-navy">
                  <span className="material-symbols-outlined filled text-3xl">{v.icon}</span>
                </div>
                <h3 className="font-headline font-bold text-lg text-navy mb-2">{v.title}</h3>
                <p className="text-slate text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-orange font-bold mb-3">Credentials</p>
          <h2 className="font-headline font-extrabold text-3xl text-navy mb-12">Licensed, Certified, Insured</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "GAF Master Elite", icon: "workspace_premium" },
              { label: "BBB Accredited", icon: "verified" },
              { label: "$5M Insured", icon: "shield" },
              { label: "WSIB Covered", icon: "health_and_safety" },
            ].map((cert) => (
              <div key={cert.label} className="bg-cloud rounded-xl p-6 border border-gray-100">
                <span className="material-symbols-outlined filled text-navy text-4xl mb-3 block">{cert.icon}</span>
                <p className="font-headline font-bold text-sm text-navy uppercase tracking-wider">{cert.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Ready to Work With a Roofer You Can Trust?" />
    </>
  );
}
