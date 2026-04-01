'use client';

import React from 'react';
import WhatsNewCard from './WhatsNewCard'; // Ensure the filename matches

export function WhatsNew() {
    const newsData = [
        {
            title: "Brand Unveils Breakthrough in Product Authentication Technology",
            date: "March 08, 2025",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur.",
            backgroundImage: "/news-bg-1.png"
        },
        {
            title: "LumiLab — Exploring the science and innovation behind luminescent materials.",
            date: "March 08, 2025",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur.",
        },
        {
            title: "The Glow Factor — Trends, discoveries, and applications in photonic materials.",
            date: "March 08, 2025",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur.",
        },
        {
            title: "Brand Unveils Breakthrough in Product Authentication Technology",
            date: "March 08, 2025",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur.",
        }
    ];

    return (
        /* pb-0 ensures no space between this and the video component below */
        <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-42 bg-black flex overflow-hidden pt-24 pb-0">
            <div className="flex gap-8 md:gap-20 lg:gap-32 w-full">

                {/* LEFT SIDE: THE PATTERN LOGIC (UNTOUCHED) */}
                <div className="relative flex flex-col items-center flex-shrink-0 pt-4 md:pt-10">
                    <div className="relative flex items-center justify-center min-h-[1500px] md:min-h-[1500px] w-4 md:w-6">
                        {/* Outer Left Line */}
                        <div className="w-[1.5px] md:w-[2px] h-full absolute -left-[1px] md:-left-[0.5px]"
                            style={{ background: 'linear-gradient(180deg, #FF7300 0%, #6B0BEC 100%)' }} />

                        {/* Center Main Line */}
                        <div className="w-[4px] md:w-[6px] h-full rounded-full relative z-10"
                            style={{ background: 'linear-gradient(180deg, #FF7300 0%, #6B0BEC 100%)' }} />

                        {/* Outer Right Line */}
                        <div className="w-[1.5px] md:w-[2px] h-full absolute -right-[1px] md:-right-[0.5px]"
                            style={{ background: 'linear-gradient(180deg, #FF7300 0%, #6B0BEC 100%)' }} />
                    </div>

                    {/* This tail now stretches to the very bottom pixel of the section */}
                    <div className="w-[4px] md:w-[6px] flex-1 bg-white/20" />
                </div>

                {/* RIGHT SIDE: CONTENT LAYER */}
                <div className="flex-1 flex flex-col pb-24">
                    <header className="mb-16">
                        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                            What’s New at Brand
                        </h2>
                    </header>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                        {newsData.map((item, idx) => (
                            <WhatsNewCard
                                key={idx}
                                title={item.title}
                                date={item.date}
                                summary={item.summary}
                                backgroundImage={item.backgroundImage}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}