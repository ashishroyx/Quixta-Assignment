'use client';

import React from 'react';
import { Button } from './Button'; // Adjust path based on your file structure

export function AboutBrand() {
    return (
        <section className="relative w-full min-h-[600px] md:h-[800px] flex items-center justify-center overflow-hidden bg-black">
            {/* 1. Background Video Container */}
            <div className="absolute inset-0 w-full h-full z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-80"
                >
                    <source src="/about-bg-video.mp4" type="video/mp4" />
                </video>
                {/* Subtle overlay to ensure text contrast */}
                <div className="absolute inset-0 bg-black/20 z-1" />
            </div>

            {/* 2. Glassmorphism Card */}
            <div className="relative z-10 w-full max-w-5xl rounded-[40px] md:rounded-[60px] 
                      border border-white/20 bg-white/10 backdrop-blur-xl 
                      p-8 md:p-24 flex flex-col items-center text-center shadow-2xl">

                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-8">
                    Our Journey Towards <br className="hidden md:block" />
                    Innovation and Excellence
                </h2>

                <p className="text-sm md:text-lg text-white/70 max-w-2xl font-light leading-relaxed mb-10">
                    Brand is an advanced luminescent materials company,
                    leveraging synergies of cutting-edge chemistries to deliver
                    solutions, not just products.
                </p>

                {/* Using your secondary variant button */}
                <Button variant="secondary" className="px-10 py-4 text-sm md:text-base font-semibold">
                    About Brand
                </Button>
            </div>
        </section>
    );
}