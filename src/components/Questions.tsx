'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const Questions: React.FC = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black py-20">

            {/* 1. BACKGROUND VIDEO LAYER */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay loop muted playsInline
                    className="w-full h-full object-cover opacity-80"
                >
                    <source src="/liquid-abstract.mp4" type="video/mp4" />
                </video>
                {/* Dark overlay to keep text readable */}
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* 2. CONTENT GRID */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

                    {/* LEFT CARD: Main CTA */}
                    <div className="
                        relative overflow-hidden
                        bg-white/5 backdrop-blur-[40px] 
                        border border-white/10 rounded-[40px]
                        p-10 md:p-16 flex flex-col justify-between
                        min-h-[400px] md:min-h-[500px]
                    ">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                Have Questions? <br /> Let’s Talk!
                            </h2>
                            <p className="text-gray-300 text-lg max-w-md">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet, consectetur.
                            </p>
                        </div>

                        <button className="w-fit bg-white/90 hover:bg-white text-black px-10 py-4 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 mt-10">
                            Get Started
                        </button>
                    </div>

                    {/* RIGHT SIDE: Vertical Stack */}
                    <div className="flex flex-col gap-6 md:gap-8">

                        {/* Partnerships Card */}
                        <div className="
                            group relative overflow-hidden
                            bg-white/5 backdrop-blur-[40px] 
                            border border-white/10 rounded-[40px]
                            p-10 md:p-12 flex items-center justify-between
                            cursor-pointer transition-all hover:bg-white/10
                        ">
                            <h3 className="text-3xl md:text-4xl font-bold text-white">Partnerships</h3>
                            <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                <ArrowRight className="w-6 h-6" />
                            </div>
                        </div>

                        {/* Careers Card */}
                        <div className="
                            group relative overflow-hidden
                            bg-white/5 backdrop-blur-[40px] 
                            border border-white/10 rounded-[40px]
                            p-10 md:p-12 flex items-center justify-between
                            cursor-pointer transition-all hover:bg-white/10
                        ">
                            <h3 className="text-3xl md:text-4xl font-bold text-white">Careers</h3>
                            <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                <ArrowRight className="w-6 h-6" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Questions;