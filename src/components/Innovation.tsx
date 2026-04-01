'use client';

import InnovationCard from './InnovationCard';

export default function Innovation() {

    const richGradient = 'linear-gradient(180deg, #FF7300 0%, #FF2975 40%, #D414E2 70%, #6B0BEC 100%)';

    const cardData = [
        {
            title: "Synthesis",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
            backgroundImage: "/bg-card-1.jpg"
        },
        {
            title: "Formulations",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
            backgroundImage: "/bg-card-2.jpg"
        },
        {
            title: "Diverse Materials",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
            backgroundImage: "/bg-card-3.jpg"
        },
        {
            title: "Manipulation of Light",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
            backgroundImage: "/bg-card-4.jpg"
        }
    ];

    return (
        <section className="relative w-full min-h-screen bg-black overflow-hidden py-24 text-white">


            <div className="absolute inset-y-0 right-6 md:right-12 lg:right-24 z-0 flex flex-col items-center w-fit pointer-events-none">
                <div className="relative flex items-center justify-center h-[80vh] md:h-[90vh] lg:h-screen min-h-[500px]">

                    <div
                        className="w-[1px] md:w-[1.5px] h-full absolute -left-1.5 md:-left-1.5"
                        style={{ background: richGradient }}
                    />


                    <div
                        className="w-[4px] md:w-[4px] h-full rounded-full"
                        style={{ background: richGradient }}
                    />


                    <div
                        className="w-[1px] md:w-[1.5px] h-full absolute -right-1.5 md:-right-1.5"
                        style={{ background: richGradient }}
                    />
                </div>
                <div className="w-[1.5px] md:w-[5px] flex-1 min-h-[200px] bg-white/20" />
            </div>


            <div className="relative z-10 max-w-7xl mx-auto 
    px-6                     
    pr-16                    
    md:pr-20 lg:pr-32        
    md:pl-12 lg:pl-24        
">


                <header className="w-full relative mb-16 md:mb-24 lg:mb-32">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-tight relative top-0 md:top-[120px] lg:top-0">
                        The Science Behind Our <br /> Innovative Solutions
                    </h1>
                </header>


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