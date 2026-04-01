import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { VerticalTrackSection } from '@/components/VerticalTrack';
import { Footer } from '@/components/Footer';
import { AboutBrand } from '@/components/AboutBrand';
import { GuidedPath } from '@/components/GuidedPath';
import Bubble from '@/components/Bubble';
import Innovation from '@/components/Innovation';
import Abstract from '@/components/Abstract';
import Questions from '@/components/Questions';
import { WhatsNew } from '@/components/WhatsNew';

export default function Home() {
  return (
    <div className="min-h-screen  w-full overflow-x-hidden selection:bg-brand-orange/30">
      <Navbar />

      <main className="flex flex-col">
        <HeroSection />
        <VerticalTrackSection />
        <AboutBrand />
        <GuidedPath />
        <Bubble />
        <Innovation />
        <Abstract />
        <WhatsNew />
        <Questions />
      </main>

      <Footer />
    </div>
  );
}
