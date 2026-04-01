'use client';

export default function Bubble() {
    return (
        <section className="relative w-full h-[50vh] md:h-[70vh] lg:h-screen min-h-[400px] flex items-center justify-center overflow-hidden bg-black">

            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-80"
                >

                    <source src="/bubbles-bg.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>


                <div className="absolute inset-0 bg-black/20 z-[1]" />
            </div>


            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
                <h2 className="
          text-3xl sm:text-4xl md:text-5xl lg:text-7xl 
           text-white leading-tight tracking-tight
          max-w-5xl mx-auto
          drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]
        ">
                    Revolutionizing luminescence to <br className="hidden md:block" />
                    power the next generation of <br className="hidden md:block" />
                    technology
                </h2>
            </div>
        </section>
    );
}