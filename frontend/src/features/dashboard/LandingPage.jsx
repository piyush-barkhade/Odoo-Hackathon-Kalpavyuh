import React from "react";
import HeroSection from "./HeroSection";
import CategoriesSection from "./CategoriesSection";
import ProductListingSection from "./ProductListingSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-r from-[#8aadc3] via-[#f5efeb] to-[#8aadc3] min-h-screen">
      <HeroSection />
      <CategoriesSection />
      <ProductListingSection />
    </div>
  );
};

export default LandingPage;
