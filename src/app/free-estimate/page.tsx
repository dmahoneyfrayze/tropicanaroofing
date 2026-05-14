import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Free Roof Estimate | No Obligation Quote",
  description: "Get a free, no-obligation roofing estimate from Toronto's most trusted roofing company. Contact us today for honest pricing and expert advice.",
};

export default function FreeEstimatePage() {
  return (
    <>
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-orange font-bold mb-4">Contact Us</p>
          <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-white mb-6 tracking-tight">
            Get Your <span className="text-orange">Free Estimate</span>
          </h1>
          <p className="text-lg text-cloud/90 max-w-2xl mx-auto">
            Fill out the form below or call us directly. We&apos;ll provide an honest, transparent quote within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-24 bg-cloud">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <LeadForm
              title="Request Your Free Estimate"
              subtitle="No obligation. We'll contact you within 24 hours."
              variant="card"
              showBadge={false}
            />
          </div>
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-headline font-extrabold text-2xl text-navy mb-6">Other Ways to Reach Us</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-white p-6 rounded-xl border border-gray-200">
                  <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center text-orange shrink-0">
                    <span className="material-symbols-outlined filled text-2xl">call</span>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-navy mb-1">Call Us</h3>
                    <a className="text-lg font-bold text-navy hover:text-orange transition-colors" href={siteConfig.phone.href}>
                      {siteConfig.phone.display}
                    </a>
                    <p className="text-sm text-slate mt-1">Mon–Sat: 7am–7pm · Emergency: 24/7</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-6 rounded-xl border border-gray-200">
                  <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center text-orange shrink-0">
                    <span className="material-symbols-outlined filled text-2xl">mail</span>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-navy mb-1">Email</h3>
                    <a className="text-lg font-bold text-navy hover:text-orange transition-colors" href={`mailto:${siteConfig.email}`}>
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-6 rounded-xl border border-gray-200">
                  <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center text-orange shrink-0">
                    <span className="material-symbols-outlined filled text-2xl">location_on</span>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-navy mb-1">Visit Our Office</h3>
                    <p className="text-navy font-bold">{siteConfig.address.full}</p>
                    <p className="text-sm text-slate mt-1">Walk-ins welcome Mon–Fri 8am–5pm</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Quick Facts */}
            <div className="bg-navy rounded-xl p-8 text-white">
              <h3 className="font-headline font-bold text-xl mb-6">What to Expect</h3>
              <ul className="space-y-4 text-cloud/90">
                {[
                  "Free, no-obligation estimate within 24 hours",
                  "Detailed, itemized quote — no hidden fees",
                  "Financing options available (OAC)",
                  "All work backed by our lifetime warranty",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-orange text-sm mt-1">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
