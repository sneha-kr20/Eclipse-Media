import React from "react";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <>

      <section className="relative text-center mt-20 text-white px-4">
        <h2 className="text-4xl md:text-5xl font-bold brand-text animate-text-glow">
          Welcome to Eclipse Media
        </h2>
        <Hero />
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fadeUp">
          We design unforgettable events, capture stunning visuals, and bring stories to life.  
          Explore our world of creativity and impact.
        </p>

        <div className="mt-10 flex justify-center">
          <button className="btn-primary animate-pulseSoft">
            Get Started
          </button>
        </div>
      </section>
    </>
  );
}
