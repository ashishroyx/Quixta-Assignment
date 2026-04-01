'use client';

import React from 'react';
import InnovationCard from './InnovationCard';

export default function Innovation() {
    // 1. DEFINING THE NEW RICH GRADIENT
    const richGradient = 'linear-gradient(180deg, #FF7300 0%, #FF2975 40%, #D414E2 70%, #6B0BEC 100%)';

    const cardData = [
        {
            title: "Synthesis",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
            backgroundImage: "/bg-card-1.jpg" // The purple/blue glow
        },
        {
            title: "Formulations",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
            backgroundImage: "/bg-card-2.jpg" // The orange/red glow
        },
        {
            title: "Diverse Materials",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
            backgroundImage: "/bg-card-3.jpg" // The green/yellow glow
        },
        {
            title: "Manipulation of Light",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
            backgroundImage: "/bg-card-4.jpg" // The pink/magenta glow
        }
    ];

    return (
        <section className="relative w-full min-h-screen bg-black overflow-hidden py-24 text-white">

            {/* 2. THE VERTICAL GRADIENT LINE (Right Aligned) */}
            <div className="absolute inset-y-0 right-6 md:right-12 lg:right-24 z-0 flex flex-col items-center w-fit pointer-events-none">
                <div className="relative flex items-center justify-center h-[80vh] md:h-[90vh] lg:h-screen min-h-[500px]">
                    {/* Outer Left Thin Line */}
                    <div
                        className="w-[1px] md:w-[1.5px] h-full absolute -left-1.5 md:-left-1.5"
                        style={{ background: richGradient }}
                    />

                    {/* Center Thick Line */}
                    <div
                        className="w-[4px] md:w-[4px] h-full rounded-full"
                        style={{ background: richGradient }}
                    />

                    {/* Outer Right Thin Line */}
                    <div
                        className="w-[1px] md:w-[1.5px] h-full absolute -right-1.5 md:-right-1.5"
                        style={{ background: richGradient }}
                    />
                </div>
                <div className="w-[1.5px] md:w-[5px] flex-1 min-h-[200px] bg-white/20" />
            </div>

            {/* 3. CONTENT LAYER */}
            {/* Added pr-12 to pr-32 to create a "safety gap" so content doesn't hit the gradient */}
            {/* 3. CONTENT LAYER */}
            <div className="relative z-10 max-w-7xl mx-auto 
    px-6                     /* Standard mobile padding */
    pr-16                    /* NEW: Extra right padding on mobile to clear the line */
    md:pr-20 lg:pr-32        /* Tablet and Desktop padding you already have */
    md:pl-12 lg:pl-24        /* Left padding */
">

                {/* Headline Section */}
                <header className="w-full relative mb-16 md:mb-24 lg:mb-32">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-tight relative top-0 md:top-[120px] lg:top-0">
                        The Science Behind Our <br /> Innovative Solutions
                    </h1>
                </header>

                {/* Cards Grid */}
                {/* We add 'w-[calc(100%-10px)]' to ensure it shrinks away from the right edge */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl lg:max-w-6xl relative z-10 w-full">
                    {cardData.map((card, index) => (
                        <InnovationCard
                            key={index}
                            title={card.title}
                            summary={card.summary}
                            backgroundImage={card.backgroundImage}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}