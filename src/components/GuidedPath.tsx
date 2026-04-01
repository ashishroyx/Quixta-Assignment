'use client';

export function GuidedPath() {
    const orange = "#FF7300";
    const purple = "#6B0BEC";

    return (

        <section className="relative w-full bg-black min-h-screen h-fit overflow-hidden flex flex-col">

            <div className="absolute inset-0 z-0 pointer-events-none">
                <svg
                    width="100%"
                    height="100%"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMaxYMin slice"
                    className="w-full h-full"
                >
                    <defs>
                        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor={orange} />
                            <stop offset="100%" stopColor={purple} />
                        </linearGradient>
                    </defs>


                    <svg viewBox="50 150 400 1200" width="100%" height="100%" className="block md:hidden min-[628px]:hidden min-[860px]:hidden">
                        <g>
                            <path d="M 50 0 V 150 Q 50 250 150 250 H 310 Q 450 250 450 350 V 1400" stroke="url(#lineGrad)" strokeWidth="6" strokeLinecap="round" />
                            <path d="M 42 0 V 150 Q 42 258 150 258 H 310 Q 442 258 442 350 V 1400" stroke="url(#lineGrad)" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M 58 0 V 150 Q 58 242 150 242 H 310 Q 458 242 458 350 V 1400" stroke="url(#lineGrad)" strokeWidth="1.5" strokeLinecap="round" />
                        </g>
                    </svg>

                    <svg viewBox="0 100 800 1200" width="100%" height="100%" className="hidden md:block lg:hidden min-[628px]:hidden min-[860px]:hidden">
                        <g>
                            <path d="M 100 0 V 150 Q 100 250 200 250 H 600 Q 700 250 700 350 V 1400" stroke="url(#lineGrad)" strokeWidth="6" strokeLinecap="round" />
                            <path d="M 92 0 V 150 Q 92 258 200 258 H 600 Q 692 258 692 350 V 1400" stroke="url(#lineGrad)" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M 108 0 V 150 Q 108 242 200 242 H 600 Q 708 242 708 350 V 1400" stroke="url(#lineGrad)" strokeWidth="1.5" strokeLinecap="round" />
                        </g>
                    </svg>


                    <svg viewBox="200 200 1400 1200" width="100%" height="100%" className="hidden lg:block">
                        <g>
                            <path d="M 400 0 V 150 Q 400 250 500 250 H 1350 Q 1450 250 1450 350 V 1550" stroke="url(#lineGrad)" strokeWidth="6" strokeLinecap="round" />
                            <path d="M 392 0 V 150 Q 392 258 500 258 H 1350 Q 1442 258 1442 350 V 1550" stroke="url(#lineGrad)" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M 408 0 V 150 Q 408 242 500 242 H 1350 Q 1458 242 1458 350 V 1550" stroke="url(#lineGrad)" strokeWidth="1.5" strokeLinecap="round" />
                        </g>
                    </svg>
                </svg>
            </div>


            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-32 lg:py-25 flex flex-col">

                {/* 1. HEADLINE LAYER */}
                <header className="w-full relative">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-3xlrelative top-18 md:top-20 lg:top-20 mb-20 md:mb-24 lg:mb-48">
                        Advanced Materials and <br className="hidden lg:block" /> Integrative Solutions
                    </h1>
                </header>


                <div className="flex flex-col gap-20 md:gap-32 lg:gap-40 w-full relative">
                    {[
                        {
                            logo: "/blogo1.png",
                            title: "Securing every physical product  counterfeit protection",
                            desc: "Reyal™ makes it eay for brand  identify revenues and preserve brand integrity.",
                            alt: "Idylle",
                            logoH: "h-16 md:h-22 lg:h-26",

                            offset: "relative top-0 md:top-[50px] lg:top-0"
                        },
                        {
                            logo: "/blogo2.png",
                            title: "Accelerating biomedical",
                            desc: "Luminicell empowers researchers to achieve  at a .",
                            alt: "Labscoop",
                            logoH: "h-10 md:h-12 lg:h-16",

                            offset: "relative top-0 md:top-[50px] lg:top-0"
                        }
                    ].map((brand, idx) => (
                        <div
                            key={idx}
                            className={`
                    ${brand.offset} 
                    flex flex-col lg:grid lg:grid-cols-[280px_1fr] 
                    items-start gap-10 lg:gap-0 w-full
                `}
                        >

                            <div className="flex items-center justify-start relative">
                                <img
                                    src={brand.logo}
                                    alt={brand.alt}
                                    className={`${brand.logoH} w-auto object-contain transition-all duration-300`}
                                />
                            </div>


                            <div className="max-w-md lg:max-w-lg space-y-5 md:space-y-6 relative">
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold leading-snug">
                                    {brand.title}
                                </h3>
                                <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed">
                                    {brand.desc}
                                </p>
                                <button className="group relative inline-flex items-center justify-center bg-[#FF7300] text-white px-8 py-3 rounded-full font-medium transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:shadow-[0_0_30px_rgba(255,107,0,0.5)]">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}