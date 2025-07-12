import React from "react";

const HeroSection = () => {
  return (
    <section
      className="w-full py-24 px-6 flex items-center justify-center text-center border-b-[2px] border-[#1e293b]"
      style={{
        background: `radial-gradient(circle at center, #f1f5f9 0%, #e2e8f0 60%, #cbd5e1 90%, #94a3b8 100%)`,
      }}
    >
      <div className="max-w-4xl px-4">
        <h1 className="text-5xl font-extrabold text-[#1e293b] mb-4 leading-tight tracking-tight">
          ReWear:{" "}
          <span className="block text-2xl font-semibold mt-2 text-[#334155]">
            Sustainable Clothing Exchange
          </span>
        </h1>
        <p className="text-xl font-normal leading-8 text-[#475569] my-6">
          Built for the Hack-a-Solution 2025 – ReWear empowers communities to{" "}
          <strong className="font-semibold text-[#1e293b]">
            swap, reuse, and reduce waste
          </strong>{" "}
          through a circular clothing exchange platform.
        </p>
        <div className="flex flex-wrap justify-center gap-5 mt-8">
          <button className="bg-[#1e293b] text-white py-3 px-7 text-base font-semibold rounded-full shadow-md hover:bg-[#0f172a] hover:scale-105 transition-all duration-300">
            Start Swapping
          </button>
          <button className="bg-transparent border-2 border-[#1e293b] text-[#1e293b] py-3 px-7 text-base font-semibold rounded-full hover:bg-[#e2e8f0] transition-all duration-300">
            Browse Item
          </button>
          <button className="bg-transparent border-2 border-[#1e293b] text-[#1e293b] py-3 px-7 text-base font-semibold rounded-full hover:bg-[#e2e8f0] transition-all duration-300">
            List Item
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
