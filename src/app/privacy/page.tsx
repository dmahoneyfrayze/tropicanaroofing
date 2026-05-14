import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}. Learn how we collect, use, and protect your personal information under PIPEDA and Ontario privacy law.`,
};

export default function PrivacyPage() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 prose prose-slate prose-headings:font-headline prose-headings:text-navy">
        <h1>Privacy Policy</h1>
        <p className="text-sm text-slate">Last updated: January 1, {siteConfig.copyrightYear}</p>

        <h2>Overview</h2>
        <p>
          {siteConfig.name} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your
          personal information in accordance with the <em>Personal Information Protection and Electronic
          Documents Act</em> (PIPEDA) and applicable Ontario privacy legislation. This policy explains
          how we collect, use, disclose, and safeguard your information when you visit our website or
          use our services.
        </p>

        <h2>Information We Collect</h2>
        <p>We may collect the following personal information when you submit a form, call us, or interact with our website:</p>
        <ul>
          <li>Full name</li>
          <li>Phone number</li>
          <li>Email address</li>
          <li>Property address</li>
          <li>Details about your roofing project or inquiry</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information you provide to:</p>
        <ul>
          <li>Respond to your roofing inquiry or estimate request</li>
          <li>Schedule inspections and provide quotes</li>
          <li>Deliver our roofing services under contract</li>
          <li>Communicate project updates and warranty information</li>
          <li>Comply with legal obligations under Ontario law</li>
        </ul>
        <p>
          We do <strong>not</strong> sell, rent, or share your personal information with third parties
          for marketing purposes.
        </p>

        <h2>Consent</h2>
        <p>
          By submitting a form on our website, you consent to our collection and use of your personal
          information for the purposes described above. You may withdraw consent at any time by
          contacting us, subject to legal or contractual restrictions and reasonable notice.
        </p>

        <h2>Data Retention</h2>
        <p>
          We retain personal information only as long as necessary to fulfill the purposes for which
          it was collected, or as required by Ontario and federal law. Project records and warranty
          documentation may be retained for the duration of the warranty period.
        </p>

        <h2>Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal
          information against unauthorized access, alteration, disclosure, or destruction. Our website
          uses SSL/TLS encryption for all data transmissions.
        </p>

        <h2>Cookies &amp; Analytics</h2>
        <p>
          Our website may use cookies and analytics tools to improve your browsing experience and
          analyze site traffic. You can disable cookies in your browser settings at any time.
        </p>

        <h2>Your Rights Under PIPEDA</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal information held by us</li>
          <li>Request correction of inaccurate information</li>
          <li>Withdraw consent for future collection or use</li>
          <li>File a complaint with the Office of the Privacy Commissioner of Canada</li>
        </ul>

        <h2>Contact Our Privacy Officer</h2>
        <p>
          If you have questions about this privacy policy or wish to exercise your rights, contact us:
        </p>
        <ul>
          <li>Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
          <li>Phone: <a href={siteConfig.phone.href}>{siteConfig.phone.display}</a></li>
          <li>Mail: {siteConfig.address.full}</li>
        </ul>
      </div>
    </section>
  );
}
