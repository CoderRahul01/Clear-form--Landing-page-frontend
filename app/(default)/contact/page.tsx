"use client";

import { useState } from "react";

export default function ContactPage() {
  const [copiedField, setCopiedField] = useState<"phone" | "email" | null>(null);

  const handleCopy = async (value: string, field: "phone" | "email") => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 1200);
    } catch {
      setCopiedField(null);
    }
  };

  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 sm:px-6 pt-24 pb-20">
      <section className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs font-medium text-slate-600">
          Clearform Support
        </span>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Contact Us
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
          Have a question, feedback, or partnership idea? We’re happy to help.
        </p>
      </section>

      <section className="mx-auto mt-12 grid w-full max-w-4xl gap-4 sm:grid-cols-2">
        <div className="group rounded-2xl border border-slate-200 bg-white p-6 text-left transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm">
          <p className="text-sm font-medium text-slate-500">Phone</p>
          <div className="mt-2 flex items-center justify-between gap-3">
            <a
              href="tel:+917386377217"
              className="text-2xl font-semibold tracking-tight text-slate-900 transition group-hover:text-blue-600"
            >
              +91: 7386377217
            </a>
            <button
              type="button"
              onClick={() => handleCopy("+91 7386377217", "phone")}
              className="rounded-md border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              {copiedField === "phone" ? "Copied!" : "Copy"}
            </button>
          </div>
          <p className="mt-2 text-sm text-slate-500">Mon - Fri, 9:00 AM to 6:00 PM IST</p>
        </div>

        <div className="group rounded-2xl border border-slate-200 bg-white p-6 text-left transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm">
          <p className="text-sm font-medium text-slate-500">Email</p>
          <div className="mt-2 flex items-center justify-between gap-3">
            <a
              href="mailto:hello@clearform.in"
              className="text-2xl font-semibold tracking-tight text-slate-900 transition group-hover:text-blue-600"
            >
              hello@clearform.in
            </a>
            <button
              type="button"
              onClick={() => handleCopy("hello@clearform.in", "email")}
              className="rounded-md border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              {copiedField === "email" ? "Copied!" : "Copy"}
            </button>
          </div>
          <p className="mt-2 text-sm text-slate-500">We usually reply within 24 hours</p>
        </div>
      </section>
    </main>
  );
}