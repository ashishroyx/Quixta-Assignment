export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center">

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60 md:opacity-100"
      >
        <source src="/hero-bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>


      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 10%, rgba(0,0,0,0.8) 50%, black 60%)',
        }}
      />


      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col items-center justify-center px-6 text-center gap-6 md:gap-8 pt-20 md:pt-32 pb-12">


        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-7xl text-white tracking-tighter leading-[1.1] max-w-[15ch] md:max-w-4xl font-bold uppercase">
          Future of <span className="block md:inline">Advanced Materials</span>
        </h1>


        <p className="mt-2 md:mt-8 text-sm sm:text-lg md:text-xl text-white/70 max-w-[320px] sm:max-w-xl md:max-w-2xl font-light leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>


        <button className="mt-6 md:mt-8 flex items-center gap-2.5 px-5 py-2 md:px-8 md:py-2 bg-white text-black rounded-xl text-sm md:text-base font-bold hover:bg-gray-200 transition-all active:scale-95">
          Get Started
        </button>
      </div>
    </section>
  );
}