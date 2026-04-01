import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-20 pb-10 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">

        {/* Top Section: Logo & Contact Info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12">
          <div className="text-4xl md:text-5xl font-bold tracking-tight">
            LOGO
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-20 text-lg md:text-2xl font-light">
            <Link href="mailto:info@brand.com" className="hover:text-gray-400 transition-colors">
              info@brand.com
            </Link>
            <Link href="tel:+6588082159" className="hover:text-gray-400 transition-colors">
              +65 8808 2159
            </Link>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-white/10 mb-16" />

        {/* Middle Section: Description & Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

          {/* Company Bio */}
          <div className="md:col-span-4">
            <p className="text-white/60 text-lg leading-relaxed max-w-xs mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elitctetur adipiscing elit.
            </p>
            <div className="flex gap-4 text-lg">
              <SocialIcon icon={<FaFacebookF />} />
              <SocialIcon icon={<FaTwitter />} />
              <SocialIcon icon={<FaInstagram />} />
            </div>
          </div>

          {/* Link Columns */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            <FooterColumn
              title="Solutions"
              links={["Reyal", "Luminicell"]}
            />
            <FooterColumn
              title="Quick links"
              links={["Get Started", "Technology", "Newsroom", "Careers"]}
            />
            <FooterColumn
              title="Who are We"
              links={["Brand at a Glance", "Mission & Vision", "Our Team", "Partnerships", "Sustainability & Social Impact"]}
            />
          </div>
        </div>

        {/* Bottom Section: Legal */}
        <div className="w-full h-px bg-white/10 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] md:text-sm text-white/40 font-light">
          <p>© 2025 Brand. All rights reserved.</p>
          <div className="flex gap-8 md:gap-20">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
            <p>Designed and Powered by Quixta.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Internal Helper: Social Icon Button
function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer">
      {icon}
    </div>
  );
}

// Internal Helper: Column Layout
function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">{title}</h4>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link}>
            <Link href="#" className="text-white/50 hover:text-white transition-colors text-sm md:text-base font-light">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}