import React from 'react';

interface InnovationCardProps {
    title: string;
    summary: string;
    backgroundImage: string;
}

const InnovationCard: React.FC<InnovationCardProps> = ({ title, summary, backgroundImage }) => {
    return (
        <div
            className="relative overflow-hidden w-full h-[420px] md:h-[480px] rounded-[40px] border border-white/5 flex flex-col p-8 md:p-10 group transition-all duration-500 bg-[#050505]"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >

            <div className="relative z-10 flex flex-col gap-6">
                <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
                    {title}
                </h2>

                <div className="space-y-4">
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                        {summary}
                    </p>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                        consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>


            <div className="absolute inset-0 bg-black/10 pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
        </div>
    );
};

export default InnovationCard;