import React from "react";

const categories = [
  { id: 1, name: "Tops" },
  { id: 2, name: "Bottoms" },
  { id: 3, name: "Footwear" },
  { id: 4, name: "Ethnic Wear" },
  { id: 5, name: "Accessories" },
  { id: 6, name: "Winter Wear" },
];

const CategoriesSection = () => {
  return (
    <section
      id="categories"
      className="py-20 px-8 text-center border-b-2 border-[#2f4156]"
      style={{
        background: `radial-gradient(circle at center, #e6ebf0 0%, #d9e2ec 80%, #c5d3e3 90%, #b0c3db 97%, #2f4156 100%)`,
      }}
    >
      <h2 className="text-[2.75rem] text-[#2f4156] font-extrabold mb-12 relative after:block after:w-14 after:h-1 after:bg-[#2f4156] after:mx-auto after:mt-4 after:rounded">
        Browse by Category
      </h2>

      <div className="grid grid-cols-3 gap-y-8 gap-x-32 justify-center max-w-[1000px] mx-auto">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="w-40 h-44 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center cursor-pointer hover:bg-[#f5efeb]"
          >
            <p className="text-[#2f4156] font-bold text-lg">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
