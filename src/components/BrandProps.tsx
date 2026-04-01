
import Image from 'next/image';

interface BrandProps {
    src: string;
    alt: string;
}

export function Brand({ src, alt }: BrandProps) {
    return (
        <div className="aspect-square bg-[#0A0A0A] rounded-[32px] border border-white/5 flex items-center justify-center p-6 md:p-10 overflow-hidden group">
            <div className="relative w-full h-full">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-contain brightness-0 invert opacity-50 group-hover:opacity-100 transition-all duration-300"
                />
            </div>
        </div>
    );
}