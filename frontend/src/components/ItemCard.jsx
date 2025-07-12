import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md border border-gray-200 w-full max-w-md mx-auto">
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-full h-64 object-contain bg-white"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
        <p className="text-gray-700">Condition: {item.condition}</p>
      </div>
    </div>
  );
};

export default ItemCard;
