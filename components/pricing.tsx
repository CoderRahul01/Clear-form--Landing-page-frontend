"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLead } from "@/components/ui/section-lead";
import { Button } from "@/components/ui/button";
import { PRICING_PLANS, type PricingPlan } from "@/lib/pricing";

function PricingCard({
  plan,
  index,
  reducedMotion,
}: {
  plan: PricingPlan;
  index: number;
  reducedMotion: boolean | null;
}) {
  return (
    <motion.div
      initial={
        reducedMotion
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: 22, filter: "blur(6px)" }
      }
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{
        duration: reducedMotion ? 0 : 0.68,
        delay: reducedMotion ? 0 : index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={reducedMotion ? undefined : { y: -3 }}
      className={[
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white p-5 text-center transition-[box-shadow,ring-color,border-color] duration-300 sm:p-6",
        plan.featured
          ? "border-gray-900/15 shadow-[0_28px_60px_-28px_rgba(15,23,42,0.28)] ring-1 ring-gray-900/[0.06] hover:shadow-[0_32px_70px_-28px_rgba(15,23,42,0.32)] md:-translate-y-1"
          : "mt-3 border-gray-200/90 shadow-[0_20px_50px_-28px_rgba(15,23,42,0.18)] ring-transparent hover:shadow-[0_28px_60px_-28px_rgba(15,23,42,0.22)] hover:ring-1 hover:ring-gray-900/[0.06] md:mt-4",
      ].join(" ")}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-gray-50/80 to-transparent"
        aria-hidden
      />

      <div className="relative flex h-full flex-col">
        <div className="mb-4 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-3 py-1 text-[11px] font-medium leading-none text-gray-600 shadow-sm">
            <span
              className={[
                "h-1.5 w-1.5 shrink-0 rounded-full",
                plan.featured ? "bg-emerald-500" : "bg-gray-400",
              ].join(" ")}
              aria-hidden
            />
            {plan.badge}
          </div>
        </div>

        <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-400">
          {plan.name}
        </p>
        <div className="mb-1.5 flex flex-wrap items-baseline justify-center gap-x-2">
          <span className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            {plan.priceLabel}
          </span>
          {plan.priceSuffix ? (
            <span className="text-sm font-semibold text-gray-400">{plan.priceSuffix}</span>
          ) : null}
        </div>
        {plan.priceDetail ? (
          <p className="mx-auto mb-1 max-w-xs text-xs text-gray-500">{plan.priceDetail}</p>
        ) : null}
        {plan.terms ? (
          <p className="mx-auto mb-1 max-w-sm text-sm leading-snug text-gray-700">{plan.terms}</p>
        ) : null}
        <p className="mx-auto mb-4 max-w-sm text-xs leading-relaxed text-gray-500">{plan.subline}</p>

        <div className="border-t border-gray-100 pt-4">
          <p className="mb-2.5 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-400">
            Included
          </p>
          <ul className="mx-auto max-w-sm space-y-2 text-left">
            {plan.features.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 + i * 0.05, duration: 0.35 }}
                className="flex items-start gap-2.5 text-sm leading-snug text-gray-700"
              >
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-green-50 ring-1 ring-green-100">
                  <Check className="h-2.5 w-2.5 text-green-600" strokeWidth={3} />
                </span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-5">
          <Button
            href={plan.href}
            external
            variant={plan.buttonVariant}
            size="lg"
            className={[
              "flex w-full justify-center rounded-xl text-[15px] font-semibold tracking-tight sm:text-base",
              plan.featured
                ? "bg-[color:var(--color-brand-500)] text-white shadow-[0_10px_28px_-12px_var(--color-brand-glow)] hover:bg-[color:var(--color-brand-600)] hover:shadow-[0_14px_32px_-12px_var(--color-brand-glow)]"
                : "!border-gray-300 !bg-white !text-gray-900 !shadow-[0_4px_14px_-8px_rgba(15,23,42,0.18)] hover:!border-gray-400 hover:!bg-gray-50 hover:!text-gray-900 hover:!shadow-md",
            ].join(" ")}
          >
            {plan.ctaLabel}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 md:py-28"
    >
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[color:var(--color-brand-100)]/40 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionEyebrow>Pricing</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <SectionHeading className="mb-0 max-w-2xl">
            Start free. Go further when it&apos;s working.
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.07}>
          <SectionLead className="mb-12 max-w-xl">
            Try it free, buy the Pilot, or message us for a 7-day Pilot trial.
          </SectionLead>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3 md:gap-4 lg:gap-6">
            {PRICING_PLANS.map((plan, index) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                index={index}
                reducedMotion={reducedMotion}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
