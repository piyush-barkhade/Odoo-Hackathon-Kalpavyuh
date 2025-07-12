import React from "react";
import { Link } from "react-router-dom";

export default function ItemCard({ item }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-[#2f4156]">
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-full h-60 object-cover rounded-md"
      />
      <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
      <p className="text-sm text-opacity-80">Condition: {item.condition}</p>

      <Link
        to={`/items/${item.id}`}
        className="inline-block mt-3 text-sm text-[#2f4156] border border-[#2f4156] px-4 py-1 rounded-full hover:bg-[#2f4156] hover:text-white transition"
      >
        View Details
      </Link>
    </div>
  );
}
