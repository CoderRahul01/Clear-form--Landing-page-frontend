'use client';

import Image from "next/image";
import IimbNsrcl from "@/public/images/iimb&nsrcl.webp";
import Kltif from "@/public/images/SUPPORTER_kltif.png";
import MarwarVenture from "@/public/images/marwarventure.png";
import MeitY from "@/public/images/MeitYStartup.png";

export default function PreIncubated() {
    return (
        <section className="relative py-0 my-10">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                {/* Main content */}
                <div className="mb-12 text-center md:mb-8 pb-1fx ">
                    
                  
                    <div
                        className="flex justify-center"
                        data-aos="zoom-y-out"
                        data-aos-delay={450}
                    >
                       
                    </div>
                </div>

                {/* Partners section */}
                <div className=" pt-12 md:pt-0">
                    <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-gray-600">
                        PRE-INCUBATED & BACKED BY
                    </p>
                    <div className="grid grid-cols-2 gap-5 md:grid-cols-4 items-center justify-items-center">
                        {/* IIMB & NSRCEL */}
                        <div className="flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105">
                            <Image
                                src={IimbNsrcl}
                                alt="IIMB NSRCEL"
                                width={140}
                                height={80}
                                className="h-auto w-full max-w-75 object-contain grayscale transition-all duration-300 hover:grayscale-0"
                            />
                        </div>

                        {/* KLTIF */}
                        <div className="flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105">
                            <Image
                                src={Kltif}
                                alt="KL Technology Incubators Foundation"
                                width={140}
                                height={80}
                                className="h-auto w-full max-w-75 object-contain grayscale transition-all duration-300 hover:grayscale-0"
                            />
                        </div>

                        {/* Startup India */}
                        <div className="flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105">
                            <Image
                                src={MeitY}
                                alt="MeitY Startup Hub"
                                width={140}
                                height={80}
                                className="h-auto w-full max-w-75 object-contain grayscale transition-all duration-300 hover:grayscale-0"
                            />
                        </div>

                        {/* Marwar Venture */}
                        <div className="flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105">
                            <Image
                                src={MarwarVenture}
                                alt="Marwar Venture"
                                width={140}
                                height={80}
                                className="h-auto w-full max-w-75 object-contain grayscale transition-all duration-300 hover:grayscale-0"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
