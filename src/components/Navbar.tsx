import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 py-4 md:py-6 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - Slightly smaller on mobile/tablet */}
        <div className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wider text-white shrink-0">
          <Link href="/">LOGO</Link>
        </div>

        {/* Navigation Links - Fixed for iPad */}
        {/* 1. Changed hidden md:flex to hidden lg:flex to keep it clean on smaller iPads */}
        {/* 2. Added xl:gap-10 and lg:gap-6 to scale the spacing based on screen width */}
        <div className="hidden lg:flex items-center lg:gap-6 xl:gap-10 text-[13px] xl:text-sm font-light text-white/90 whitespace-nowrap">
          <Link href="#" className="hover:text-white transition-colors">Who We Are</Link>
          <Link href="#" className="hover:text-white transition-colors">Technology</Link>
          <Link href="#" className="hover:text-white transition-colors">Solutions</Link>
          <Link href="#" className="hover:text-white transition-colors">Newsroom</Link>
          <Link href="#" className="hover:text-white transition-colors">Careers</Link>
        </div>

        {/* CTA Button - Shrink-0 prevents the button from squishing */}
        <button className="flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-5 md:py-2.5 border border-white/40 rounded-xl text-white text-[10px] md:text-xs lg:text-sm hover:bg-white hover:text-black transition-all group uppercase shrink-0">
          <span className="hidden sm:inline">Get Started</span>
          <span className="sm:hidden">Start</span>
          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </nav>
  );
}