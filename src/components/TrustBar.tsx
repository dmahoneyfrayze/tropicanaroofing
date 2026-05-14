import { siteConfig } from "@/config/site";

export default function TrustBar() {
  return (
    <section className="bg-cloud border-y border-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-gray-300">
          <div className="text-center px-4">
            <div className="font-headline font-extrabold text-3xl md:text-4xl text-navy mb-1">
              {siteConfig.stats.yearsInBusiness}
            </div>
            <div className="font-body text-xs uppercase tracking-widest text-slate font-semibold">
              Years in Business
            </div>
          </div>
          <div className="text-center px-4">
            <div className="font-headline font-extrabold text-3xl md:text-4xl text-navy mb-1">
              {siteConfig.stats.roofsCompleted}
            </div>
            <div className="font-body text-xs uppercase tracking-widest text-slate font-semibold">
              Roofs Completed
            </div>
          </div>
          <div className="text-center px-4">
            <div className="font-headline font-extrabold text-3xl md:text-4xl text-navy mb-1 flex items-center justify-center gap-2">
              {siteConfig.stats.googleRating}/5
              <span className="material-symbols-outlined filled text-yellow-400 text-3xl">star</span>
            </div>
            <div className="font-body text-xs uppercase tracking-widest text-slate font-semibold">
              Google Reviews
            </div>
          </div>
          <div className="text-center px-4">
            <div className="font-headline font-extrabold text-3xl md:text-4xl text-green mb-1">
              {siteConfig.stats.bbbRating}
            </div>
            <div className="font-body text-xs uppercase tracking-widest text-slate font-semibold">
              BBB Rating
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
