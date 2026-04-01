'use client';

import { Brand } from './BrandProps';
import { Button } from './Button';

export function SolutionsTrackSection() {
    return (
        <section className="relative w-full bg-black overflow-hidden py-32 px-6 md:px-24 min-h-[1200px]">


            <div className="absolute inset-0 z-0 pointer-events-none">
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 1200 1200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    className="w-full h-full opacity-80"
                >
                    <defs>
                        <linearGradient id="sTrackGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#FF7300" />
                            <stop offset="100%" stopColor="#6B0BEC" />
                        </linearGradient>
                    </defs>


                    <g transform="translate(80, 0)">

                        <path
                            d="M 0 0 V 150 Q 0 250 100 250 H 800 Q 900 250 900 350 V 1200"
                            stroke="url(#sTrackGradient)"
                            strokeWidth="6"
                            strokeLinecap="round"
                        />

                        <path
                            d="M -8 0 V 150 Q -8 258 100 258 H 800 Q 892 258 892 350 V 1200"
                            stroke="url(#sTrackGradient)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />

                        <path
                            d="M 8 0 V 150 Q 8 242 100 242 H 800 Q 908 242 908 350 V 1200"
                            stroke="url(#sTrackGradient)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                    </g>
                </svg>
            </div>


            <div className="relative z-10 max-w-7xl mx-auto">
                <h2 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-32 max-w-2xl">
                    Advanced Materials and <br /> Integrative Solutions
                </h2>

                <div className="flex flex-col gap-64">


                    <div className="flex flex-col md:flex-row gap-12 items-start max-w-4xl">
                        <div className="shrink-0">
                            <Brand src="/blogo2.png" alt="Idylle" />
                        </div>
                        <div className="pt-4 max-w-lg">
                            <h3 className="text-white text-2xl md:text-3xl font-semibold mb-4 leading-snug">
                                Securing every physical product for counterfeit protection
                            </h3>
                            <p className="text-white/50 text-base md:text-lg mb-8 font-light leading-relaxed">
                                Reyal™ makes it easy for brand owners and governments to effectively
                                identify counterfeits, secure revenues and preserve brand integrity.
                            </p>
                            <Button variant="primary">Learn More</Button>
                        </div>
                    </div>


                    <div className="flex flex-col md:flex-row-reverse gap-12 items-start max-w-4xl self-end text-right md:text-left">
                        <div className="shrink-0">
                            <Brand src="/blogo1.png" alt="Labscoop" />
                        </div>
                        <div className="pt-4 max-w-lg md:text-right">
                            <h3 className="text-white text-2xl md:text-3xl font-semibold mb-4 leading-snug">
                                Accelerating biomedical research with next-generation bio-probes
                            </h3>
                            <p className="text-white/50 text-base md:text-lg mb-8 font-light leading-relaxed">
                                Luminicell empowers researchers to achieve breakthroughs at a faster
                                pace by powering long live-cell tracking and deep tissue bio-imaging.
                            </p>
                            <Button variant="primary">Learn More</Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}