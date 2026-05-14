import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import LeadForm from "@/components/LeadForm";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Storm Damage & Emergency Roof Repair Toronto",
  description: "24/7 emergency roof repair in Toronto. Same-day response for leaks, wind, and hail damage. Free tarping and insurance claim assistance.",
};

export default function StormDamagePage() {
  return (
    <>
      {/* Emergency Bar */}
      <div className="bg-orange text-white py-2.5 px-4 text-center text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2">
        <span className="material-symbols-outlined text-lg">emergency</span>
        24/7 EMERGENCY ROOF REPAIR · CALL NOW: {siteConfig.phone.display} · Same-Day Response
      </div>

      {/* Hero */}
      <section className="relative bg-navy pt-24 pb-32">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent z-10" />
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC7jodBWr-Bv6hntiVonp3FbxqgYDi2Jb5iwQ3_4M_6KAe8f0NQB0m82glWGN5iHcN3SGxZbAU_QThxXbbsesmwjARE6V3SzidiM6imyonatOKrbOnTcPp_h1mrpcvyfib_Dbb68592Eqw2BCvah7WVPg41WYqhzPDGC21IQMfQZiWvurzwcclSrbTXe7AreAca5CWGeLj6riwN6mtnb1yyqNSH1DwmXcQwjln_vbC_Y4gBdVzOlunOHQo3V-6MmIsH7VbFibr-jhQx')" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <span className="inline-block py-1 px-3 rounded-full bg-orange/20 text-orange font-bold text-xs uppercase tracking-wider mb-6 border border-orange/30">
              Emergency Roof Repair
            </span>
            <h1 className="font-headline font-extrabold text-4xl md:text-5xl tracking-tight leading-tight mb-6">
              Leaking Right Now?<br /><span className="text-orange">We&apos;ll Be There Today.</span>
            </h1>
            <p className="text-lg text-cloud/90 mb-8 max-w-xl leading-relaxed">
              24/7 emergency response across Toronto and the GTA. Free tarping, full storm-damage restoration, and we handle your insurance claim end-to-end.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a className="bg-orange text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-dark transition-colors shadow-lg flex items-center justify-center gap-2" href={siteConfig.phone.href}>
                <span className="material-symbols-outlined">phone_in_talk</span>Call {siteConfig.phone.display}
              </a>
              <a className="border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg font-bold text-center" href="#emergency-form">
                Request Emergency Visit
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-cloud/80 border-t border-white/20 pt-6">
              {[
                { icon: "timer", text: "Under 90 Min\nResponse" },
                { icon: "roofing", text: "Free Emergency\nTarping" },
                { icon: "receipt_long", text: "Insurance\nHandled" },
                { icon: "verified_user", text: "$5M Fully\nInsured" },
              ].map((item) => (
                <div key={item.icon} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-orange text-xl">{item.icon}</span>
                  <span className="leading-tight whitespace-pre-line">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div id="emergency-form">
            <LeadForm title="Request Emergency Help" subtitle="Our dispatch team will contact you within 5 minutes." badgeText="24/7" />
          </div>
        </div>
      </section>

      {/* Damage Types */}
      <section className="py-24 bg-cloud">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-orange font-bold mb-3">Toronto Weather Experts</p>
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-navy">What We Fix After Toronto Storms</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "water_drop", title: "Active Leaks", desc: "Immediate tarping and repair to stop interior water damage." },
              { icon: "air", title: "Wind Damage", desc: "Replacement of torn-off shingles and exposed underlayment." },
              { icon: "ac_unit", title: "Ice Dams", desc: "Careful removal and sealing of winter ice buildup." },
              { icon: "nature", title: "Tree Impact", desc: "Emergency reinforcement and structural deck damage repair." },
              { icon: "grain", title: "Hail Damage", desc: "Assessment, documentation, and full restoration of impacted areas." },
              { icon: "thunderstorm", title: "Full Storm Restoration", desc: "Complete insurance-backed restoration from tarping to final cleanup." },
            ].map((d) => (
              <div key={d.title} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center mb-4 text-navy group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">{d.icon}</span>
                </div>
                <h3 className="font-headline font-bold text-xl text-navy mb-2">{d.title}</h3>
                <p className="text-slate text-sm">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-headline font-bold text-3xl text-navy mb-4">How Our 24/7 Storm Response Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {["Call", "Dispatch", "Tarp", "Assess", "Restore"].map((step, i) => (
              <div key={step} className="bg-cloud text-center p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className={`w-16 h-16 ${i === 0 ? "bg-orange" : "bg-navy"} text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-md`}>
                  {i + 1}
                </div>
                <h4 className="font-headline font-bold text-lg text-navy mb-2">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Don't Wait — Storm Damage Gets Worse by the Hour" />
    </>
  );
}
