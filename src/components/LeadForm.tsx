"use client";

import { siteConfig } from "@/config/site";

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  variant?: "card" | "inline";
  showBadge?: boolean;
  badgeText?: string;
}

export default function LeadForm({
  title = "Free Roof Estimate in 60 Seconds",
  subtitle = "Fill out the form below and we'll contact you shortly.",
  variant = "card",
  showBadge = true,
  badgeText = "Fast Response",
}: LeadFormProps) {
  const wrapperClass =
    variant === "card"
      ? "bg-white rounded-xl p-8 shadow-2xl relative"
      : "relative";

  return (
    <div className={wrapperClass}>
      {showBadge && (
        <div className="absolute -top-4 -right-4 bg-green text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
          {badgeText}
        </div>
      )}
      <h3 className="font-headline font-bold text-2xl text-navy mb-2">{title}</h3>
      <p className="text-slate text-sm mb-6">{subtitle}</p>
      <form
        name="lead-capture"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="space-y-4"
      >
        <input type="hidden" name="form-name" value="lead-capture" />
        <p className="hidden">
          <label>
            Don&apos;t fill this out: <input name="bot-field" />
          </label>
        </p>
        <div>
          <label className="sr-only" htmlFor="lead-name">Full Name</label>
          <input
            className="w-full border-gray-300 rounded-lg focus:ring-orange focus:border-orange font-body text-sm py-3 px-4 bg-cloud/50"
            id="lead-name"
            name="name"
            placeholder="Full Name"
            type="text"
            required
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="lead-phone">Phone Number</label>
          <input
            className="w-full border-gray-300 rounded-lg focus:ring-orange focus:border-orange font-body text-sm py-3 px-4 bg-cloud/50"
            id="lead-phone"
            name="phone"
            placeholder="Phone Number"
            type="tel"
            required
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="lead-address">Property Address</label>
          <input
            className="w-full border-gray-300 rounded-lg focus:ring-orange focus:border-orange font-body text-sm py-3 px-4 bg-cloud/50"
            id="lead-address"
            name="address"
            placeholder="Property Address"
            type="text"
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="lead-issue">Roof Issue</label>
          <select
            className="w-full border-gray-300 rounded-lg focus:ring-orange focus:border-orange font-body text-sm py-3 px-4 bg-cloud/50 text-slate"
            id="lead-issue"
            name="issue"
            defaultValue=""
          >
            <option disabled value="">Select Roof Issue...</option>
            <option value="replacement">Roof Replacement</option>
            <option value="repair">Roof Repair</option>
            <option value="leak">Active Leak</option>
            <option value="storm">Storm Damage</option>
            <option value="inspection">General Inspection</option>
          </select>
        </div>
        <button
          className="w-full bg-orange text-white font-headline font-bold py-4 rounded-lg hover:bg-orange-dark transition-colors shadow-md mt-2"
          type="submit"
        >
          Get My Free Quote
        </button>
        <p className="text-xs text-center text-slate mt-4">
          No obligation. We respect your privacy.
        </p>
      </form>
    </div>
  );
}
