'use client';

import { motion, Variants } from 'framer-motion';
import { Brand } from './BrandProps';

export function VerticalTrackSection() {
    const lineVariants: Variants = {
        hidden: { clipPath: "inset(0 100% 0 0)" },
        visible: {
            clipPath: "inset(0 0% 0 0)",
            transition: {
                duration: 2,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    };

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.4,
            }
        }
    };

    const originalLines = [
        "Lorem ipsum dolor sit amet,",
        "consectetur adipiscing elit.",
        "eiusmod tempor incididunt ut",
        "et dolore magna aliqua. Ut enim",
        "minim veniam, quis nostrud",
        "ullamco laboris nisi ut aliquip."
    ];

    return (
        <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-42 bg-black flex overflow-hidden">
            <div className="flex gap-8 md:gap-20 lg:gap-32 w-full">

                {/* LEFT SIDE: THE PATTERN LOGIC */}
                <div className="relative flex flex-col items-center flex-shrink-0 pt-4 md:pt-10">

                    {/* 1. THE GRADIENT TRIPLE TRACK 
                        We use a fixed min-height for mobile/desktop to ensure visibility, 
                        but allow it to grow with the text.
                    */}
                    <div className="relative flex items-center justify-center min-h-[300px] md:min-h-[500px] w-4 md:w-6">
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

                    {/* 2. THE GREY TAIL
                        flex-1 makes it stretch to the very bottom of the <section>
                    */}
                    <div className="w-[4px] md:w-[6px] flex-1 bg-white/20 min-h-[200px]" />
                </div>

                {/* RIGHT SIDE: Animated Content Section */}
                <motion.div
                    className="flex-1 pt-4 md:pt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                    variants={containerVariants}
                >
                    <div className="max-w-3xl space-y-4">
                        {originalLines.map((text, i) => (
                            <div key={i} className="relative">
                                <p className="text-2xl md:text-5xl font-normal text-white/10 leading-tight">
                                    {text}
                                </p>
                                <motion.p
                                    variants={lineVariants}
                                    className="text-2xl md:text-5xl font-normal text-white leading-tight absolute inset-0 z-10"
                                >
                                    {text}
                                </motion.p>
                            </div>
                        ))}
                    </div>

                    {/* Partner Logo Grid */}
                    <div className="mt-20 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-4 pb-20">
                        <Brand src="/blogo1.png" alt="Labscoop" />
                        <Brand src="/blogo2.png" alt="Idylle" />
                        <Brand src="/blogo3.png" alt="Merck" />
                        <Brand src="/blogo4.png" alt="Idylle" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}