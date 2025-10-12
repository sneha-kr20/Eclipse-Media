import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white text-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Eclipse Media</h1>
      <p className="text-xl md:text-2xl mb-8">Turning Moments into Memories</p>
      <button className="bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition">
        View Our Work
      </button>
    </section>
  );
};

export default Hero;
