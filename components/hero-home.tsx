'use client';

import PageIllustration from "@/components/page-illustration";
import Link from "next/link";

export default function HeroHome() {
    return (
        <section className="relative">
            <style>{`
 
                
                @keyframes shift-gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                
                .gradient-button {
                    background: linear-gradient(-45deg, #ff4338, #ef4444, #dc2626, #b91c1c);
                    background-size: 300% 300%;
                    animation: shift-gradient 6s ease infinite;
                    box-shadow: 0 0 20px rgba(255, 67, 56, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.2);
                }
                
                .gradient-button:hover {
                    animation: pulse-glow 1s ease-in-out infinite, shift-gradient 1s ease infinite;
                }
            `}</style>
            <PageIllustration />
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
                {/* Hero content */}
                <div className="pb-12 pt-32 md:pb-0 md:pt-35">
                    {/* Section header */}
                    <div className="pb-12 text-center md:pb-0">
                        <div
                            className="mb-6 border-y pt-2 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]"
                            data-aos="zoom-y-out"
                        >
                            <div
                                className="mb-2 inline-block border border-gray-200 rounded-full bg-white px-6 py-2"
                                data-aos="zoom-y-out"
                            >
                                <p className="flex items-center text-sm font-medium text-gray-700">

                                    Built on insights from 50+ Founders & HR Leaders
                                </p>
                            </div>
                        </div>
                        <div
                            className="mb-6  text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
                            data-aos="zoom-y-out"
                            data-aos-delay={150}
                        >
                            <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900  drop-shadow-sm" style={{ opacity: 1, filter: "blur(0px)" }}>Forms Built for <br className="md:hidden" /><span className="text-gray-900">Clarity, Not Just Collection.</span></h1>
                        </div>
                        <div className="mx-auto max-w-3xl">
                            <p
                                className="mb-8 text-lg text-gray-700"
                                data-aos="zoom-y-out"
                                data-aos-delay={300}
                            >
                                Clearform improves response quality at the source — so teams receive structured, decision-ready feedback instead of vague opinions.

                            </p>
                            <div className="relative  before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                                <div
                                    className="flex flex-col items-center justify-center mx-auto pt-6 pb-7 max-w-md"
                                    data-aos="zoom-y-out"
                                    data-aos-delay={450}
                                >
                                    <Link href="/early-access">
                                        <button
                                            className="gradient-button px-8 py-3 text-white rounded-xl whitespace-nowrap font-bold shadow-2xl transition-all duration-300 text-lg tracking-wide relative overflow-hidden group hover:scale-105"
                                        >
                                            <span className="relative z-10 flex items-center justify-center gap-2">
                                                Get Early Access
                                                <span className="group-hover:translate-x-1 transition-transform duration-100">→</span>
                                            </span>
                                            <div
                                                className="absolute inset-0 bg-linear-to-r from-red-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-100"
                                            />
                                        </button>
                                    </Link>
                                    <p className="text-sm mx-auto text-gray-600 mt-3 text-center sm:text-left">
                                        Free early access. Limited pilot spots for startups & product teams.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Hero image */}
                    <div
                        className="mx-auto max-w-3xl"
                        data-aos="zoom-y-out"
                        data-aos-delay={600}
                    >
                    </div>
                </div>
            </div>
        </section >
    );
}
