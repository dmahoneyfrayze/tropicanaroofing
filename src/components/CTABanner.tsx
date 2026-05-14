import Link from "next/link";
import { siteConfig } from "@/config/site";

interface CTABannerProps {
  heading?: string;
  showPhone?: boolean;
}

export default function CTABanner({
  heading = "Ready to Work With a Roofer You Can Trust?",
  showPhone = true,
}: CTABannerProps) {
  return (
    <section className="bg-gradient-to-r from-orange to-navy py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-white mb-8 tracking-tight">
          {heading}
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            className="w-full sm:w-auto bg-white text-navy px-8 py-4 rounded-lg font-headline font-bold shadow-lg hover:bg-cloud transition-colors text-lg"
            href="/free-estimate"
          >
            Get Your Free Estimate
          </Link>
          {showPhone && (
            <a
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-headline font-bold transition-colors text-lg flex items-center justify-center gap-2"
              href={siteConfig.phone.href}
            >
              <span className="material-symbols-outlined">call</span>
              {siteConfig.phone.display}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
