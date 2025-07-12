import React from 'react';
import Slider from 'react-slick';

const items = [
  {
    id: 1,
    title: 'Floral Summer Dress',
    size: 'Size M',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    title: 'Blue Denim Jacket',
    size: 'Size L',
    image: 'https://images.unsplash.com/photo-1602810316574-b4e31a7a1f33?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    title: 'Classic White Shirt',
    size: 'Size S',
    image: 'https://images.unsplash.com/photo-1586449480106-0864479b253f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    title: 'Striped T-Shirt',
    size: 'Size M',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2f2b7f9f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 5,
    title: 'Red Hoodie',
    size: 'Size XL',
    image: 'https://images.unsplash.com/photo-1602810316475-810cdb0efc8f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 6,
    title: 'Beige Cotton Kurta',
    size: 'Size L',
    image: 'https://images.unsplash.com/photo-1618354691373-84548d0400a6?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 7,
    title: 'Green Casual Blazer',
    size: 'Size M',
    image: 'https://images.unsplash.com/photo-1618354691642-91d885dd38b7?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 8,
    title: 'Black Sports Jacket',
    size: 'Size L',
    image: 'https://images.unsplash.com/photo-1581349487569-65b5e0d446de?auto=format&fit=crop&w=400&q=80',
  },
];

const ProductListingSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'ease-in-out',
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section
      id="listings"
      className="py-12 text-center bg-gradient-to-r from-[#2f4156] via-[#c8d9e6] to-[#2f4156]"
    >
      <h2 className="text-3xl font-bold text-[#2f4156] mb-8">Featured Items</h2>

      <Slider {...settings} className="px-4">
        {items.map((item) => (
          <div key={item.id} className="w-[90%] max-w-[300px] mx-auto p-4 bg-[#f5efeb] rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 hover:scale-[1.02] hover:bg-[#e0ebf2] text-[#2f4156] cursor-pointer">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <h4 className="mt-4 text-lg font-bold">{item.title}</h4>
            <p className="text-sm opacity-85">Gently used · {item.size}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProductListingSection;
