import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex-1 flex items-center justify-center px-6 py-24 bg-cloud min-h-[60vh]">
      <div className="max-w-2xl text-center">
        <p className="font-headline font-bold text-orange tracking-widest text-sm uppercase mb-4">
          404 · Page Not Found
        </p>
        <h1 className="font-headline font-extrabold text-4xl md:text-6xl text-navy leading-tight mb-6">
          Looks Like This Page Has a Leak.
        </h1>
        <p className="text-lg text-slate mb-10 leading-relaxed">
          We can&apos;t find the page you&apos;re looking for — but we can find your roof.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            className="bg-orange text-white px-7 py-4 rounded-lg font-headline font-bold hover:shadow-lg transition-all"
            href="/free-estimate"
          >
            Get a Free Estimate
          </Link>
          <Link
            className="border-2 border-navy text-navy px-7 py-4 rounded-lg font-headline font-bold hover:bg-navy hover:text-white transition-all"
            href="/"
          >
            Back to Home
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          <Link className="text-navy hover:text-orange font-semibold" href="/services">Services</Link>
          <Link className="text-navy hover:text-orange font-semibold" href="/services/asphalt-shingle-roofing">Asphalt Shingles</Link>
          <Link className="text-navy hover:text-orange font-semibold" href="/storm-damage">Storm Damage</Link>
          <Link className="text-navy hover:text-orange font-semibold" href="/gallery">Gallery</Link>
        </div>
      </div>
    </section>
  );
}
