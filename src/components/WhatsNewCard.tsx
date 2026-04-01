import React from 'react';

interface WhatsNewCardProps {
    title: string;
    date: string;
    summary: string;
    backgroundImage?: string;
}

const WhatsNewCard: React.FC<WhatsNewCardProps> = ({ title, date, summary, backgroundImage }) => {
    return (
        <div
            className="relative w-full h-[450px] md:h-[520px] rounded-[40px] bg-[#0A0A0A] border border-white/5 p-8 md:p-10 flex flex-col justify-start overflow-hidden group"
            style={backgroundImage ? {
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            } : {}}
        >

            <div className="relative z-10 flex flex-col h-full">

                <h3 className="text-white text-xl md:text-2xl font-medium leading-snug mb-8">
                    {title}
                </h3>


                <p className="text-gray-500 text-sm mb-6">
                    {date}
                </p>


                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-auto">
                    {summary}
                </p>


                <button className="w-fit mt-8 px-8 py-3 rounded-xl border border-white/10 bg-transparent text-white text-sm font-medium transition-all hover:bg-white hover:text-black">
                    Read More
                </button>
            </div>


            {backgroundImage && (
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black pointer-events-none" />
            )}
        </div>
    );
};

export default WhatsNewCard;