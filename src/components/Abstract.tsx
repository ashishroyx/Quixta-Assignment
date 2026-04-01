'use client';

import React from 'react';

const Abstract: React.FC = () => {
    // FIGMA GRADIENT: #FFFFFF 0% -> #3B3B3B -> #FFFFFF 0%
    const glassGradient = 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(59,59,59,1) 50%, rgba(255,255,255,0) 100%)';

    return (
        <section className="relative w-full min-h-screen md:h-screen bg-black overflow-hidden flex items-center justify-center py-20 md:py-0">

            {/* 1. CONTENT LAYER */}
            {/* Switched to flex-col on mobile, grid on desktop */}
            <div className="relative z-30 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-0 items-center">
                <div className="w-full max-w-2xl text-left space-y-8 md:space-y-12">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight font-bold">
                        Sustainability at the <br /> heart of Innovation
                    </h1>
                    <p className="text-gray-400 text-base md:text-xl leading-relaxed max-w-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button className="group relative inline-flex items-center justify-center bg-white text-black px-8 py-3 md:px-12 md:py-4 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg w-fit">
                        Get into Details
                    </button>
                </div>

                {/* Spacer for mobile to push content away from the glass effect overlay */}
                <div className="hidden md:block w-full h-full"></div>
            </div>

            {/* 2. MEDIA & DEEP CAVE GLASS LAYER */}
            {/* Container becomes full inset on mobile to act as background, half-width on desktop */}
            <div className="absolute inset-0 md:left-1/2 md:right-0 z-10 flex items-center justify-end overflow-hidden">
                <div className="relative w-full h-full scale-125 md:scale-100 md:w-[120%] md:h-[120%] md:-right-10 overflow-hidden">

                    {/* The Video Layer */}
                    <video
                        autoPlay loop muted playsInline
                        className="absolute inset-0 w-full h-full object-cover scale-110"
                    >
                        <source src="/glass-abstract.mp4" type="video/mp4" />
                    </video>

                    {/* --- THE DEEP CAVE GLASS OVERLAY --- */}
                    {/* Width adjusts: full width on mobile for "bg" feel, half on desktop */}
                    <div className="absolute inset-y-0 left-0 w-full md:w-1/2 h-full z-20 overflow-hidden pointer-events-none">

                        {/* LAYER 1: 100px BASE BLUR */}
                        <div className="absolute inset-0 backdrop-blur-[60px] md:backdrop-blur-[110px] bg-white/[0.01]" />

                        {/* LAYER 2: FIGMA OVERLAY GRADIENT */}
                        <div
                            className="absolute inset-0 mix-blend-overlay opacity-90"
                            style={{ background: glassGradient }}
                        />

                        {/* LAYER 3: VERTICAL REFRACTION STRATA */}
                        <div className="absolute inset-0 flex opacity-20">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="flex-1 h-full border-r border-white/20" />
                            ))}
                        </div>

                        {/* --- THE "CORNER CRUSH" (THE CAVE EFFECT) --- */}
                        <div className="absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-black via-black to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black via-black to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,black_90%)] opacity-80" />

                        {/* 4. Left Edge "Bite" */}
                        <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-black via-black to-transparent" />

                        {/* 5. Right Edge "Thickness" */}
                        <div className="absolute inset-y-0 right-0 w-1 bg-white/10 blur-[1px]" />
                        <div className="absolute inset-y-0 right-0 w-12 md:w-20 bg-gradient-to-l from-black/20 to-transparent" />

                    </div>
                </div>
            </div>

            {/* Overall Ambient Darkening */}
            <div className="absolute inset-0 bg-black/30 z-0 pointer-events-none" />
        </section>
    );
};

export default Abstract;