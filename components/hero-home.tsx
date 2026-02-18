'use client';

import PageIllustration from "@/components/page-illustration";

export default function HeroHome() {
    return (
        <section className="relative">
            <PageIllustration />
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
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
                            <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900  drop-shadow-sm" style={{ opacity: 1, filter: "blur(0px)" }}>Welcome to <br className="md:hidden" /><span className="text-gray-900">Feedback Intelligence.</span></h1>
                        </div>
                        <div className="mx-auto max-w-3xl">
                            <p
                                className="mb-8 text-lg text-gray-700"
                                data-aos="zoom-y-out"
                                data-aos-delay={300}
                            >
                               Stop collecting static data. Start understanding user intent with AI-driven insights.
                            </p>
                            <div className="relative  before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                                <div
                                    className="flex flex-col items-center justify-center mx-auto pt-11 pb-12 max-w-md"
                                    data-aos="zoom-y-out"
                                    data-aos-delay={450}
                                >
                                    <form className="flex flex-col sm:flex-row gap-3">
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="flex-1 px-4 py-3 rounded-lg bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                        <button
                                            type="submit"
                                            className="btn px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 whitespace-nowrap font-medium shadow-sm"
                                        >
                                            Join early access
                                        </button>
                                    </form>
                                    <p className="text-sm mx-auto text-gray-600 mt-3 text-center sm:text-left">
                                        Free to join. We'll reach out if you're a fit for a 2-4 week pilot.
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
