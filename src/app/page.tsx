import Link from "next/link";
import { siteConfig } from "@/config/site";
import LeadForm from "@/components/LeadForm";
import TrustBar from "@/components/TrustBar";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";

const services = [
  {
    icon: "roofing",
    title: "Asphalt Shingle Roofing",
    description: "Durable, cost-effective, and aesthetically versatile. We install premium architectural shingles designed to last decades.",
    features: ["Master Elite Installation", "50-Year System Warranties"],
    href: "/services/asphalt-shingle-roofing",
    badge: "Most Popular",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzdu2cSWdeg3AZRGM3rTgkVMBvQv4OkoIwro5YuOZOcL3xvOKUYzF40ei1J_cUVlOYTc7c8FDFlYjZrwmPYSb65corKTWVSxKJeLerdVx2eqyOqJAj3yhU-znTmzM_tVlA29p5xgzSIMKJbpiK41MQGxjHbSEbpXGSKjfZvgUs-g-0YYv9VBLL6SENzf3zfySlqVjT5Hwf_vSEt4SPU2AapBXlQUgTWigsM8QKI0Ub1x6H9PsxNA_ZAo7B2gwoRPnGveIcB4Y0O38X",
  },
  {
    icon: "home",
    title: "Metal Roofing",
    description: "The ultimate in longevity and modern curb appeal. Standing seam and metal shingle profiles available.",
    features: ["Energy Efficient", "50+ Year Lifespan"],
    href: "/services",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlHggV9PpL2VwspM7VgyRiIg5X3p37Juo3iP-wqKdfItjKYQ_krCDGBSfUjBZEksFvXYDAGM2VE9mHwitAuQXHsMYo5k0NJlEG3Fv_FXmagC5d_VYGVpN8kCBdIK3VrTJ_mCt10bB7sD_I8hFNtDPjUPLpDkdnAs9qC-7d-dNdas3v8hcP_bRAc41nS7RstUt7ZWq94K3rTNLBCW55ozaE3h2pdhr9B_UuinUMe5mRcZAZiBPM3UHwH-Hh7e9DnB7Lnq6aGz4JB3ss",
  },
  {
    icon: "business",
    title: "Flat & Commercial Roofs",
    description: "TPO, EPDM, and modified bitumen systems for commercial buildings, industrial facilities, and flat-roofed homes.",
    features: ["Leak-Proof Membranes", "Low Maintenance"],
    href: "/services",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPsANqHI0ofFJ0dX1TbR-AeQ7wxLlW29NAJJz5Fdi-_B90zMoiO1u0saQDc1NrTb5S6sz7rBf22DaJ7otclsc9oQmrQuOOyMkYD-pKbR6oa3FhBiLcEcNgTQ5zQ6QQwCs_dP95-dCUdE38-uw1HtOSIEoePA8FwZuLfQxhG0Ih29w91nGJ8hOZSgSp_nCD0D-t2T6zEAwRhmwnKvw-fx3ee-z2GqLItPeT2sTM07Cevv4F_JJHFioCMPRHo60T5WcGMgRyvph4InWU",
  },
];

const testimonials = [
  {
    name: "Mark T.",
    location: "Scarborough",
    text: "The Tropicana crew was fast, polite, and cleaned up every single nail. The new roof completely changed the look of our home before listing it.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    location: "North York",
    text: "After getting three quotes, Tropicana was the most transparent and detailed. No hidden fees, no pressure — just honest professionals who did outstanding work.",
    rating: 5,
  },
  {
    name: "James L.",
    location: "Etobicoke",
    text: "Emergency leak during a storm — they had a crew at our house within 2 hours on a Saturday. Tarped the roof and came back Monday for the full repair. Incredible service.",
    rating: 5,
  },
];

const processSteps = [
  { icon: "phone_in_talk", title: "Free Consultation", desc: "Call or fill out our form. We'll discuss your needs and schedule a convenient time to inspect your roof." },
  { icon: "assignment", title: "Detailed Inspection", desc: "Our expert team conducts a thorough roof assessment with photo documentation and a transparent, itemized quote." },
  { icon: "construction", title: "Professional Installation", desc: "Our certified crew installs your new roof using premium materials, protecting your property throughout the process." },
  { icon: "verified_user", title: "Warranty & Support", desc: "Walk away with a lifetime workmanship warranty and the peace of mind that we're always a phone call away." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-navy pt-24 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAP0tNcZV-cz3FBiaQxzKMsU4Ga-TojjxMp4aOcKpkuNus2hTBMqEhXfkz0BBD9vHyd9_cX76Bxi76sprVBxKJgtwX3Cnt48XTPQeYE5NJx48QnSiyLcun_xJPZs3WfX138vjUGBaGSTbG3Dm8LtjJQrmLKuB1Ia20FWdZCKiXYpzNC9VFqQVBAspn_K98URy-2mShVWFWYTjmLwvqcFJjsX5z1FJFRQ4RJ2HvFglOVe5cZNB6ItKYIKq7vltrYAz7p1r3Sprt1V5o-')",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-20 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 xl:col-span-8 text-white">
            <p className="font-body text-sm uppercase tracking-[0.08em] text-orange font-semibold mb-4">
              TORONTO&apos;S TRUSTED ROOFING EXPERTS
            </p>
            <h1 className="font-headline font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 leading-tight">
              Toronto Roofing Done Right — The First Time.
            </h1>
            <p className="text-lg md:text-xl text-cloud/90 mb-10 max-w-2xl leading-relaxed">
              Asphalt shingles, metal, and flat-roof specialists. Honest quotes, premium materials,
              lifetime workmanship warranty — across Toronto and the GTA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                className="bg-orange text-white px-8 py-4 rounded-lg font-headline font-bold text-center hover:bg-orange-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                href="/free-estimate"
              >
                Get My Free Estimate →
              </Link>
              <a
                className="border-2 border-white/20 hover:border-white text-white px-8 py-4 rounded-lg font-headline font-bold text-center transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                href={siteConfig.phone.href}
              >
                <span className="material-symbols-outlined text-[20px]">call</span>
                Call {siteConfig.phone.display}
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-cloud">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined filled text-green">verified</span>
                Google {siteConfig.stats.googleRating}
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined filled text-green">verified</span>
                GAF Master Elite
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined filled text-green">verified</span>
                BBB {siteConfig.stats.bbbRating}
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined filled text-green">shield</span>
                {siteConfig.stats.insurance} Insured
              </div>
            </div>
          </div>
          {/* Lead Capture Card */}
          <div className="lg:col-span-5 xl:col-span-4" id="estimate">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Services Section */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="font-body text-sm uppercase tracking-widest text-orange font-bold">What We Do</p>
            <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-navy tracking-tight">
              Our Core Roofing Services
            </h2>
            <p className="font-body text-slate max-w-2xl mx-auto text-lg">
              Specialized roofing solutions tailored to withstand Toronto&apos;s demanding weather conditions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-lg font-headline font-bold hover:bg-navy-dark transition-colors"
              href="/services"
            >
              View All Services
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 lg:px-12 bg-cloud">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-body text-sm uppercase tracking-widest text-orange font-bold mb-3">Why Tropicana</p>
            <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-navy tracking-tight mb-4">
              The Tropicana Standard
            </h2>
            <p className="font-body text-slate max-w-2xl mx-auto text-lg">
              Why Toronto homeowners have trusted us since {siteConfig.founded}.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "diamond", title: "Premium Materials", desc: "We only install materials from industry-leading manufacturers, ensuring maximum durability." },
              { icon: "request_quote", title: "Transparent Pricing", desc: "Detailed, upfront estimates with no hidden fees or surprise charges during installation." },
              { icon: "engineering", title: "Certified Installers", desc: "Our in-house crews undergo rigorous training and are certified by top manufacturers." },
              { icon: "verified_user", title: "Lifetime Warranty", desc: "We back our workmanship with industry-leading warranties for your absolute peace of mind." },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-6 text-navy">
                  <span className="material-symbols-outlined filled text-3xl">{item.icon}</span>
                </div>
                <h3 className="font-headline font-bold text-xl text-navy mb-3">{item.title}</h3>
                <p className="font-body text-slate text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-body text-sm uppercase tracking-widest text-orange font-bold mb-3">Simple Process</p>
            <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-navy tracking-tight mb-4">
              How It Works
            </h2>
            <p className="font-body text-slate max-w-2xl mx-auto text-lg">
              From first call to final cleanup — we make roofing easy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={step.title} className="text-center relative">
                <div className="w-16 h-16 bg-orange text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-md">
                  {i + 1}
                </div>
                <div className="w-12 h-12 bg-cloud rounded-full flex items-center justify-center mx-auto mb-4 text-navy">
                  <span className="material-symbols-outlined filled">{step.icon}</span>
                </div>
                <h3 className="font-headline font-bold text-lg text-navy mb-2">{step.title}</h3>
                <p className="font-body text-sm text-slate leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 lg:px-12 bg-cloud">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-body text-sm uppercase tracking-widest text-orange font-bold mb-3">Customer Reviews</p>
            <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-navy tracking-tight mb-4">
              What Toronto Homeowners Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="material-symbols-outlined filled text-yellow-400 text-xl">
                      star
                    </span>
                  ))}
                </div>
                <p className="text-slate leading-relaxed flex-grow italic mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                  <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-headline font-bold text-navy text-sm">{t.name}</p>
                    <p className="text-xs text-slate">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-sm uppercase tracking-widest text-orange font-bold mb-3">Service Areas</p>
            <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-navy tracking-tight mb-4">
              Serving All of Toronto &amp; the GTA
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Scarborough", "North York", "Etobicoke", "East York", "Downtown Toronto", "Mississauga", "Markham", "Pickering"].map((area) => (
              <Link
                key={area}
                className="bg-cloud border border-gray-200 hover:border-orange hover:shadow-md transition-all py-4 px-6 rounded-lg flex items-center justify-between group"
                href="/scarborough"
              >
                <span className="font-medium text-charcoal group-hover:text-navy">{area}</span>
                <span className="material-symbols-outlined text-slate group-hover:text-orange text-sm">
                  arrow_forward
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner heading="Protect Your Home With Toronto's Most Trusted Roofer" />
    </>
  );
}
