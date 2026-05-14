import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function MobileBar() {
  return (
    <div className="bg-white fixed bottom-0 w-full z-50 md:hidden border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="flex justify-around items-center w-full p-2 gap-2">
        <a
          className="text-navy flex-1 py-3 flex flex-col items-center justify-center active:bg-navy/5 transition-colors rounded-lg"
          href={siteConfig.phone.href}
        >
          <span className="material-symbols-outlined filled text-[24px] mb-1">call</span>
          <span className="font-body font-medium text-xs uppercase tracking-widest text-center">
            Call Now
          </span>
        </a>
        <Link
          className="bg-orange text-white rounded-lg mx-2 my-1 flex-1 py-3 flex flex-col items-center justify-center hover:bg-orange-dark transition-colors"
          href="/free-estimate"
        >
          <span className="material-symbols-outlined filled text-[24px] mb-1">request_quote</span>
          <span className="font-body font-medium text-xs uppercase tracking-widest text-center">
            Free Estimate
          </span>
        </Link>
      </div>
    </div>
  );
}
