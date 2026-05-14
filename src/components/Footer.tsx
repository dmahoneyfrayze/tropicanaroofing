import Link from "next/link";
import { siteConfig } from "@/config/site";

const serviceLinks = [
  { label: "Residential Roofing", href: "/services" },
  { label: "Commercial Flat Roofs", href: "/services" },
  { label: "Emergency Repair", href: "/storm-damage" },
  { label: "Metal Roofing", href: "/services" },
  { label: "Asphalt Shingles", href: "/services/asphalt-shingle-roofing" },
];

const areaLinks = [
  { label: "Scarborough", href: "/scarborough" },
  { label: "North York", href: "/scarborough" },
  { label: "Etobicoke", href: "/scarborough" },
  { label: "East York", href: "/scarborough" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-navy w-full pt-16 pb-8 border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined filled text-orange text-2xl">roofing</span>
            <span className="font-headline font-bold text-xl text-white">{siteConfig.name}</span>
          </div>
          <p className="font-body text-sm leading-relaxed text-cloud/80 mb-6">
            Toronto&apos;s trusted roofing experts since {siteConfig.founded}. Providing honest quotes,
            premium materials, and exceptional service to homeowners across the GTA.
          </p>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange transition-colors"
              href={siteConfig.social.google}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Business Profile"
            >
              <span className="material-symbols-outlined text-white text-lg">public</span>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange transition-colors"
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <span className="material-symbols-outlined text-white text-lg">photo_camera</span>
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-headline font-bold text-lg mb-4">Services</h4>
          <ul className="space-y-3 font-body text-sm leading-relaxed text-cloud/80">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <Link
                  className="hover:translate-x-1 transition-transform inline-block hover:text-orange"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Areas */}
        <div>
          <h4 className="font-headline font-bold text-lg mb-4">Service Areas</h4>
          <ul className="space-y-3 font-body text-sm leading-relaxed text-cloud/80">
            {areaLinks.map((link) => (
              <li key={link.label}>
                <Link
                  className="hover:translate-x-1 transition-transform inline-block hover:text-orange"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <h4 className="font-headline font-bold text-lg mb-4 mt-8">Company</h4>
          <ul className="space-y-3 font-body text-sm leading-relaxed text-cloud/80">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <Link
                  className="hover:translate-x-1 transition-transform inline-block hover:text-orange"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-headline font-bold text-lg mb-4">Contact</h4>
          <ul className="space-y-4 font-body text-sm leading-relaxed text-cloud/80">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-orange mt-0.5">location_on</span>
              <span>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city}, {siteConfig.address.province} {siteConfig.address.postal}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-orange">call</span>
              <a
                className="hover:text-orange font-bold text-white"
                href={siteConfig.phone.href}
              >
                {siteConfig.phone.display}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-orange">mail</span>
              <a className="hover:text-orange" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cloud/60">
        <p>
          © {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved. License {siteConfig.license}.
        </p>
        <div className="flex items-center gap-4">
          <Link className="hover:text-white" href="/privacy">Privacy Policy</Link>
          <Link className="hover:text-white" href="/terms">Terms of Service</Link>
          <span className="text-white/30">·</span>
          <a className="hover:text-white transition-colors" href="https://frayze.ca" target="_blank" rel="noopener noreferrer">Powered by Frayze Technologies</a>
        </div>
      </div>
    </footer>
  );
}
