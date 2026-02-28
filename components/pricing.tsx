"use client";

import { Check } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const betaFeatures = [
    "Structured form builder",
    "Real-time response monitoring",
    "Decision Readiness scoring (core version)",
    "Basic response analytics",
    "Google Sheets export",
    "CSV export",
    "Up to 500 responses/month",
    "Email support",
];

const proFeatures = [
    "Advanced Decision Readiness scoring",
    "Response quality benchmarking",
    "Slack integration",
    "WhatsApp automation",
    "Notion sync",
    "Workflow triggers (webhooks)",
    "Custom form logic rules",
    "Branded white-label forms",
    "Priority support",
    "Higher response limits",
];

// Variants for the staggered card grid
const gridVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 },
    },
};

const cardVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { ease: [0.16, 1, 0.3, 1], duration: 0.7 },
    },
};

export default function Pricing() {
    const betaBtnRef = useRef<HTMLAnchorElement>(null);

    const handleJoinBetaClick = () => {
        const btn = betaBtnRef.current;
        if (!btn) return;
        btn.classList.remove("animate-shake");
        void btn.offsetWidth;
        btn.classList.add("animate-shake");
        btn.addEventListener("animationend", () => btn.classList.remove("animate-shake"), { once: true });
    };

    return (
        <>
            <style>{`
        @keyframes shake {
          0%   { transform: translateX(0); }
          15%  { transform: translateX(-6px); }
          30%  { transform: translateX(6px); }
          45%  { transform: translateX(-5px); }
          60%  { transform: translateX(5px); }
          75%  { transform: translateX(-3px); }
          90%  { transform: translateX(3px); }
          100% { transform: translateX(0); }
        }
        .animate-shake { animation: shake 0.5s ease; }
      `}</style>

            <section id="pricing" className="max-w-4xl mx-auto px-4">

                {/* ── Masked Text Reveal Header ── */}
                <div className="text-center mb-10">
                    <div className="overflow-hidden">
                        <motion.h2
                            className="text-3xl font-semibold tracking-tight text-gray-900"
                            initial={{ y: "100%", opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.8 }}
                        >
                            Simple, transparent pricing
                        </motion.h2>
                    </div>
                    <motion.p
                        className="mt-2 text-gray-500 text-base"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.8, delay: 0.15 }}
                    >
                        Start for free during our beta. Upgrade when you need power.
                    </motion.p>
                </div>

                {/* ── Staggered Cards Grid ── */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Left Card: Clearform Beta */}
                    <motion.div
                        className="bg-[#f8f9fa] rounded-2xl p-6 md:p-8 flex flex-col"
                        variants={cardVariants}
                    >
                        <span className="inline-block self-start rounded-full bg-blue-50 border border-blue-100 px-3 py-0.5 text-xs font-semibold text-blue-600">
                            Early Access
                        </span>

                        <h3 className="text-2xl font-medium mt-3 text-gray-900">Clearform Beta</h3>
                        <p className="text-lg mt-1 text-gray-700">$0<span className="text-sm font-normal text-gray-500">/month</span></p>

                        <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                            Built for teams who want structured, decision-ready feedback — without complexity.
                        </p>

                        <Link
                            href="/early-access"
                            ref={betaBtnRef}
                            onClick={handleJoinBetaClick}
                            className="mt-6 block w-full text-center bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-full py-2.5 transition-colors duration-200"
                        >
                            Join Beta
                        </Link>

                        <div className="border-t border-gray-200 my-6" />

                        <p className="text-xs font-semibold text-gray-700 mb-3">Plan Includes:</p>
                        <ul className="space-y-2.5 flex-1">
                            {betaFeatures.map((feature) => (
                                <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-600">
                                    <Check className="h-3.5 w-3.5 mt-0.5 shrink-0 text-gray-700" strokeWidth={2.5} />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <p className="mt-6 text-xs text-gray-400 text-center">Free during beta. Limited seats.</p>
                    </motion.div>

                    {/* Right Card: Clearform Pro */}
                    <motion.div
                        className="bg-[#f8f9fa] rounded-2xl p-6 md:p-8 flex flex-col"
                        variants={cardVariants}
                    >
                        <span className="inline-block self-start rounded-full bg-blue-50 border border-blue-100 px-3 py-0.5 text-xs font-semibold text-blue-600">
                            Recommended
                        </span>

                        <h3 className="text-2xl font-medium mt-3 text-gray-900">Clearform Pro</h3>
                        <p className="text-lg mt-1 text-gray-500 font-normal">Coming Soon</p>

                        <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                            For teams that rely on feedback to make high-stakes decisions.
                        </p>

                        <button
                            disabled
                            className="mt-6 w-full bg-gray-200 text-gray-400 text-sm font-medium rounded-full py-2.5 cursor-not-allowed"
                        >
                            Coming Soon
                        </button>

                        <p className="mt-2 text-center text-xs text-gray-400">
                            <Link href="/early-access" className="underline underline-offset-2 hover:text-gray-600 transition-colors">
                                Join waitlist for early upgrade access.
                            </Link>
                        </p>

                        <div className="border-t border-gray-200 my-6" />

                        <p className="text-xs font-semibold text-gray-700 mb-3">Everything in Beta, plus:</p>
                        <ul className="space-y-2.5 flex-1">
                            {proFeatures.map((feature) => (
                                <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-600">
                                    <Check className="h-3.5 w-3.5 mt-0.5 shrink-0 text-gray-700" strokeWidth={2.5} />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>
            </section>
        </>
    );
}
