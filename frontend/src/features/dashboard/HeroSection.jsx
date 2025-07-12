import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#2f4156] via-[#c8d9e6] to-[#2f4156] py-24 px-6 flex items-center justify-center text-center border-b-[4px] border-[#2f4156]">
      <div className="max-w-4xl px-4">
        <h1 className="text-5xl font-extrabold text-[#2f4156] mb-4 leading-tight tracking-tight">
          ReWear:{' '}
          <span className="block text-2xl font-semibold mt-2 text-[#2f4156]">
            Sustainable Clothing Exchange
          </span>
        </h1>
        <p className="text-xl font-normal leading-8 text-[#2f4156] my-6">
          Built for the Hack-a-Solution 2025 – ReWear empowers communities to{' '}
          <strong className="font-semibold">swap, reuse, and reduce waste</strong> through a circular clothing exchange platform.
        </p>
        <div className="flex flex-wrap justify-center gap-5 mt-8">
          <button className="bg-[#2f4156] text-white py-3 px-7 text-base font-semibold rounded-full shadow-md hover:bg-[#1e2e3f] hover:scale-105 transition-all duration-300">
            Start Swapping
          </button>
          <button className="bg-transparent border-2 border-[#2f4156] text-[#2f4156] py-3 px-7 text-base font-semibold rounded-full hover:bg-[#e9e3e0] transition-all duration-300">
            Browse Item
          </button>
          <button className="bg-transparent border-2 border-[#2f4156] text-[#2f4156] py-3 px-7 text-base font-semibold rounded-full hover:bg-[#e9e3e0] transition-all duration-300">
            List Item
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
