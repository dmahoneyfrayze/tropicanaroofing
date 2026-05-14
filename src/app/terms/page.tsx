import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${siteConfig.name}. Review the terms governing our roofing services in Ontario.`,
};

export default function TermsPage() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 prose prose-slate prose-headings:font-headline prose-headings:text-navy">
        <h1>Terms of Service</h1>
        <p className="text-sm text-slate">Last updated: January 1, {siteConfig.copyrightYear}</p>

        <h2>Agreement</h2>
        <p>
          By accessing or using the {siteConfig.name} website, you agree to be bound by these terms.
          If you do not agree, please do not use our website.
        </p>

        <h2>Services &amp; Contracts</h2>
        <p>
          All roofing services are subject to a written contract between {siteConfig.name} and the
          client. Website content, including pricing references, is for informational purposes only
          and does not constitute a binding offer.
        </p>
        <p>
          All contracts for home renovation work in Ontario are subject to the
          <em> Ontario Consumer Protection Act, 2002</em> (CPA). Where applicable, contracts will
          include all information required under the CPA and its regulations.
        </p>

        <h2>Consumer Protection (Ontario)</h2>
        <p>
          In accordance with the <em>Consumer Protection Act, 2002</em> (Ontario):
        </p>
        <ul>
          <li>
            <strong>10-Day Cooling Off Period:</strong> For any contract entered into as a result of
            an unsolicited visit to your home (door-to-door), you have the right to cancel the
            contract within 10 calendar days of receiving a written copy, without penalty.
          </li>
          <li>
            <strong>Written Contracts:</strong> All contracts for services over $50 will be provided
            in writing with a clear description of the work, total price (including HST), payment
            schedule, and estimated completion date.
          </li>
          <li>
            <strong>No Deposits Over 10%:</strong> For contracts resulting from unsolicited home
            visits, we will not require a deposit exceeding 10% of the contract price.
          </li>
        </ul>

        <h2>Estimates</h2>
        <p>
          Free estimates provided through our website are non-binding and subject to on-site
          inspection. Final pricing, including applicable HST, will be confirmed in a written
          agreement before any work begins.
        </p>

        <h2>Licensing &amp; Insurance</h2>
        <p>
          {siteConfig.name} maintains full commercial general liability insurance and is registered
          with the Workplace Safety and Insurance Board (WSIB) of Ontario. Proof of insurance and
          WSIB clearance certificates are available upon request.
        </p>

        <h2>Warranties</h2>
        <p>
          Workmanship warranties are outlined in each individual service contract. Manufacturer
          warranties are separate from our workmanship warranty and are governed by the
          manufacturer&apos;s terms and conditions.
        </p>

        <h2>Payment Terms</h2>
        <p>
          Payment schedules are outlined in the written contract. All prices are quoted in Canadian
          dollars and are subject to applicable HST (13% in Ontario) unless otherwise stated.
        </p>

        <h2>Dispute Resolution</h2>
        <p>
          In the event of a dispute, both parties agree to attempt resolution through good-faith
          negotiation. If unresolved, disputes may be referred to the Ontario Superior Court of
          Justice. These terms are governed by and construed in accordance with the laws of the
          Province of Ontario and the federal laws of Canada applicable therein.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          {siteConfig.name} shall not be liable for any indirect, incidental, or consequential
          damages arising from the use of this website. Nothing in these terms limits any rights
          you may have under the <em>Consumer Protection Act, 2002</em> (Ontario).
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms? Contact us at{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or call{" "}
          <a href={siteConfig.phone.href}>{siteConfig.phone.display}</a>.
        </p>
        <p>{siteConfig.address.full}</p>
      </div>
    </section>
  );
}
