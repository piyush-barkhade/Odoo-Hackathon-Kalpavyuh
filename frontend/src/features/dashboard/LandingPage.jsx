import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const featuredItems = [
  {
    id: 1,
    title: "Floral Summer Dress",
    size: "M",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    title: "Blue Denim Jacket",
    size: "L",
    image:
      "https://m.media-amazon.com/images/I/414NniPU2ML._AC_.jpg",
  },
  {
    id: 3,
    title: "Classic White Shirt",
    size: "S",
    image:
      "https://m.media-amazon.com/images/I/71R-E74D9QL._SY879_.jpg",
  },
];

// Featured items array
const featuredItem = [
  {
    id: 1,
    title: " Leather jacket",
    size: "Medium",
    image:
      "https://m.media-amazon.com/images/I/71ma-aIucEL._SY879_.jpg",
  },
  {
    id: 2,
    title: "Summer Dress",
    size: "Large",
    image:
      "https://m.media-amazon.com/images/I/61w+5MIGRGL._SY879_.jpg",
  },
  {
    id: 3,
    title: "Striped t-shirt",
    size: "Small",
    image:
      "https://i.pinimg.com/736x/f8/aa/dc/f8aadcd4acb2947920654ebd2b391039.jpg",
  },
  {
    id: 4,
    title: "Denim jacket",
    size: "Small",
    image:
      "https://m.media-amazon.com/images/I/414NniPU2ML._AC_.jpg",
  },
  {
    id: 5,
    title: "Men's shirt",
    size: "Large",
    image:
      "https://m.media-amazon.com/images/I/71R4eQXT0OL._SY879_.jpg",
  },
  {
    id: 6,
    title: "Hoddie",
    size: "Medium",
    image:
      "https://m.media-amazon.com/images/I/61Jx9DZ7sHL._SY879_.jpg",
  },
];

// Slick carousel settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


export default function LandingPage() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#f5efeb] via-[#c8d9e6]/40 to-[#f5efeb]">
      {/* HERO SECTION */}
      <section className="relative py-24 md:py-32 text-center flex items-center justify-center overflow-hidden">
        <div className="max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#2f4156] leading-tight tracking-tight drop-shadow">
            ReWear
          </h1>
          <p className="mt-4 md:mt-6 text-lg md:text-2xl text-[#2f4156] opacity-90 max-w-2xl mx-auto">
            Built for Hack-a-Solution 2025 – empowering communities to{" "}
            <span className="font-bold">swap, reuse, and reduce waste</span>{" "}
            through a circular clothing exchange.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/browse"
              className="bg-[#2f4156] text-white py-3 px-7 rounded-full font-semibold shadow hover:bg-[#1e2e3f] hover:scale-105 transition-all"
            >
              Browse Items
            </Link>
            <Link
              to="/new-item"
              className="border border-[#2f4156] text-[#2f4156] bg-[#f5efeb]/70 backdrop-blur-md py-3 px-7 rounded-full font-semibold hover:bg-[#f5efeb] hover:scale-105 transition-all"
            >
              List an Item
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20 px-6 text-center bg-[#f5efeb]/70 backdrop-blur">
        <h2 className="text-4xl font-bold text-[#2f4156] mb-12 relative">
          Browse by Category
          <span className="block w-16 h-1 mt-3 mx-auto bg-[#2f4156] rounded"></span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-16 max-w-5xl mx-auto">
          {[
            {
              name: "Tops",
              image:
                "https://m.media-amazon.com/images/I/81pCdAm35JL._SY879_.jpg",
            },
            {
              name: "Bottoms",
              image:
                "https://m.media-amazon.com/images/I/51sMcIKpF2L._SY879_.jpg",
            },
            {
              name: "Footwear",
              image:
                "https://m.media-amazon.com/images/I/51aeu7hreFL._SY695_.jpg",
            },
            {
              name: "Ethnic Wear",
              image:
                "https://m.media-amazon.com/images/I/71mX4WATh-L._SX679_.jpg",
            },
            {
              name: "Sports Wear",
              image:
                "https://m.media-amazon.com/images/I/51Dt17fkanL._SX679_.jpg",
            },
            {
              name: "Winter Wear",
              image:
                "https://m.media-amazon.com/images/I/61+dgzjDkRL._SY879_.jpg",
            },
          ].map((cat, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow hover:shadow-xl cursor-pointer group transition-all"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-44 object-cover transform group-hover:scale-105 group-hover:brightness-90 transition duration-300"
              />
              <div className="absolute inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center">
                <span className="text-[#2f4156] font-bold text-lg">
                  {cat.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

     <section className="py-20 px-4 text-center bg-gradient-to-r from-[#f5efeb] via-[#c8d9e6]/20 to-[#f5efeb]">
  <h2 className="text-4xl font-bold text-[#2f4156] mb-10">
    Featured Items
    <span className="block w-16 h-1 mt-3 mx-auto bg-[#2f4156] rounded"></span>
  </h2>

  <Slider {...sliderSettings} className="max-w-6xl mx-auto">
    {featuredItem.map((item) => (
      <div key={item.id} className="px-3">
        <div className="bg-white/80 backdrop-blur border border-[#c8d9e6] p-4 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1.5 hover:scale-[1.02]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h4 className="text-lg font-bold text-[#2f4156]">
            {item.title}
          </h4>
          <p className="text-sm text-[#2f4156]/85">
            Gently used · {item.size}
          </p>
        </div>
      </div>
    ))}
  </Slider>
</section>

    </div>
  );
}
