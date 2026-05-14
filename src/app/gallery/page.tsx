import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Gallery | Our Roofing Projects",
  description: "Browse real before & after photos from completed Tropicana roofing projects across Toronto and the GTA.",
};

const projects = [
  { title: "Architectural Shingle — Scarborough Bungalow", tag: "Asphalt Shingle", location: "Scarborough", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAY_jevRwIz9fmgszUCusCdaxqmWTfAyE5P2XHCSIBiHMAipI-NRy-T10GhK21J08p1dOPgG5qXIDBKEQChSPJxgX9ySxrouNQYuvU2fOvIRlE93Vyy4u7G5P6429m-DEGI8r1kvYwB79oVtAiV5i5HlXM13hMOT--2G0yJ6omVcuH_rLIO3gIRcZsCqUFo5F1CRzGtw8GB7rxaaxljv5E8bmMykf9smYmS5QszP1oY5JWbjrXVEL88g7sfZKip8QWkqFujN5mPq3A8" },
  { title: "Full Roof Replacement — North York Semi", tag: "Asphalt Shingle", location: "North York", src: "https://lh3.googleusercontent.com/aida/ADBb0uiCNRlKotFEwcbz8ujh-ikqVwNpVBgYK8TdmlTPtU1rK9B2Biq9KbBYdoRpzaW8jaMTMVcfdjrhmhDmjiSMSKNZ7O9UD4kHDGXSavS0Q6_3N9t45MtgRqOr1-FlhYmJQoHnWPyxFlWLceq_m6T-ohoS4a6K9celHq0dH4BrLrcirec8yXMtwDF3YNjlRg3UWO6QFab9b1ed7DDYgUfbJzZ8SZvNAVYrUcu-dkQz9iE6Yt1P7rMAR8Pz90k" },
  { title: "Commercial Flat Roof — Markham Rd Plaza", tag: "Flat Roof", location: "Scarborough", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPsANqHI0ofFJ0dX1TbR-AeQ7wxLlW29NAJJz5Fdi-_B90zMoiO1u0saQDc1NrTb5S6sz7rBf22DaJ7otclsc9oQmrQuOOyMkYD-pKbR6oa3FhBiLcEcNgTQ5zQ6QQwCs_dP95-dCUdE38-uw1HtOSIEoePA8FwZuLfQxhG0Ih29w91nGJ8hOZSgSp_nCD0D-t2T6zEAwRhmwnKvw-fx3ee-z2GqLItPeT2sTM07Cevv4F_JJHFioCMPRHo60T5WcGMgRyvph4InWU" },
  { title: "Designer Shingle Upgrade — Etobicoke Colonial", tag: "Asphalt Shingle", location: "Etobicoke", src: "https://lh3.googleusercontent.com/aida/ADBb0ujvKweUi6QudUluv_Ghe9kdffkbBN37RHM91b1wGByVC-UQlwIJG4hvk1LvjKVXlttRcIjVmDTpIRLYCNEljZl9fqmv4Ooy4Pc84iS33tzoS6mzzX1wfzc-MVI1IU8SENfVVCxPqDloTGjWZoat1V6J-KiggQllfsr1QDeyznt61aixyc8wmW6SMjOXJxoXT4RosaJi6DgVDnU4yLHuBu-GOkfhrU0JX0-z9lItc69MT1BCsUL2STJ4Lhg" },
  { title: "Storm Damage Restoration — East York", tag: "Emergency", location: "East York", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7jodBWr-Bv6hntiVonp3FbxqgYDi2Jb5iwQ3_4M_6KAe8f0NQB0m82glWGN5iHcN3SGxZbAU_QThxXbbsesmwjARE6V3SzidiM6imyonatOKrbOnTcPp_h1mrpcvyfib_Dbb68592Eqw2BCvah7WVPg41WYqhzPDGC21IQMfQZiWvurzwcclSrbTXe7AreAca5CWGeLj6riwN6mtnb1yyqNSH1DwmXcQwjln_vbC_Y4gBdVzOlunOHQo3V-6MmIsH7VbFibr-jhQx" },
  { title: "Metal Roof — Mississauga Craftsman", tag: "Metal Roof", location: "Mississauga", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlHggV9PpL2VwspM7VgyRiIg5X3p37Juo3iP-wqKdfItjKYQ_krCDGBSfUjBZEksFvXYDAGM2VE9mHwitAuQXHsMYo5k0NJlEG3Fv_FXmagC5d_VYGVpN8kCBdIK3VrTJ_mCt10bB7sD_I8hFNtDPjUPLpDkdnAs9qC-7d-dNdas3v8hcP_bRAc41nS7RstUt7ZWq94K3rTNLBCW55ozaE3h2pdhr9B_UuinUMe5mRcZAZiBPM3UHwH-Hh7e9DnB7Lnq6aGz4JB3ss" },
  { title: "Eavestrough & Gutter Guards — Scarborough", tag: "Gutters", location: "Scarborough", src: "https://lh3.googleusercontent.com/aida/ADBb0uhnsNxCqnyMJ_Hp9B_W_ibXeZok8No1RWjZ2P-N2LhFgFdczqVxv-coXDjB27G9pr3090IrliS2kNJSjmfMxWjUGlvZ5vWDb5J_9asKHxA9dA_hg-LQR9VAfsByRRrXOiwSk1R7xiZzfcbQlf4qpfXD7Wz5CB9yIjlv97jAV7yxDUwLujRUGIX-bd24JjY9gDw0PEaa0lAtPRwnIcDGjULn5EmQy9TX6aAqlfp9HcK_hYCaQireTFkejTU" },
  { title: "Brick Bungalow Re-Roof — Agincourt", tag: "Asphalt Shingle", location: "Scarborough", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuASsd6LuUSc5IerZE9ztKo7UsUzaKZi2dOh9RFqqYDje9DokL6LfSHKeV_VhsCkp0i7xMuL07imQTs3T1f7oZBTGATz3Q2VQtXtz25mcWWTxmVQM6eVAUbU-e9Q2-yub9s8TMs2DoXbz4e2okItMvtTUgf0WtJTyOjThhHLXC9Z_dHpx3VwQwMH2DEMxqWR1-OOf-S5HmIjV6hwg3unFGmV8HpAizn9qU6jujh33qsjmOEwKd0ppUrXWVPRSycgxwfoYURbVjnsLv2l" },
  { title: "Multi-Unit Flat Roof — Warden Ave", tag: "Flat Roof", location: "Scarborough", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_r2J_5XGns9y45cwRt1JtKa-ypV18CqRJjZUWCqffGVjbFzYCgtLa8ttwKruj9t-PJYWjehw49zWNuJYFUqcnEStJ0Z4Jphm5qeo4k1Z3meKfl0DleS0FD97LvuxI377iJQNMcjWqCy85Y7XoYxxsNFNRk2vkUEeXFdU7Ohc2uTcQLPjY9xfdbFOVmMTgJjO4mnA8AmqXgQjxRffFr2ZClE-IDqdkwbGWWKnvz6LhJ07HfOLJGNCSs8ehA56x5N1sqUZTWfyz7gZC" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-orange font-bold mb-4">Our Portfolio</p>
          <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-white mb-6 tracking-tight">
            Our Work Speaks <span className="text-orange">For Itself</span>
          </h1>
          <p className="text-lg text-cloud/90 max-w-2xl mx-auto leading-relaxed">
            Browse real projects from across Toronto and the GTA. See the difference professional craftsmanship makes.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-cloud">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-slate">Showing <strong className="text-navy">{projects.length}</strong> of 240+ projects</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.title} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 group hover:shadow-lg transition-shadow">
                <div className="h-56 overflow-hidden relative">
                  <img alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={p.src} />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-navy text-white text-xs font-bold px-2.5 py-1 rounded">{p.tag}</span>
                    <span className="bg-white/90 text-navy text-xs font-bold px-2.5 py-1 rounded">{p.location}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-headline font-bold text-navy">{p.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-white" id="reviews">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-orange font-bold mb-3">Customer Reviews</p>
            <h2 className="font-headline font-extrabold text-3xl text-navy">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Mark T.", loc: "Scarborough", text: "The crew was fast, polite, and cleaned up every single nail. The new roof completely changed the look of our home." },
              { name: "Sarah K.", loc: "North York", text: "Most transparent and detailed quote we received. No hidden fees, no pressure — just honest professionals." },
              { name: "James L.", loc: "Etobicoke", text: "Emergency leak during a storm — they had a crew at our house within 2 hours on a Saturday. Incredible service." },
            ].map((r) => (
              <div key={r.name} className="bg-cloud p-8 rounded-xl border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined filled text-yellow-400 text-xl">star</span>
                  ))}
                </div>
                <p className="text-slate leading-relaxed italic mb-6">&ldquo;{r.text}&rdquo;</p>
                <p className="font-headline font-bold text-navy text-sm">{r.name} — {r.loc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Ready to Add Your Home to Our Gallery?" />
    </>
  );
}
