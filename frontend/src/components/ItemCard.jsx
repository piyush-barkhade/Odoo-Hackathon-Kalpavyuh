import { Link } from "react-router-dom";

export default function ItemCard({ item }) {
  return (
    <div className="border rounded shadow p-4">
      <img
        src={item.imageUrl}
        alt={item.title}
        className="h-48 w-full object-cover mb-2"
      />
      <h3 className="font-bold">{item.title}</h3>
      <p className="text-sm">{item.condition}</p>
      <Link to={`/items/${item.id}`} className="text-green-600">
        View Details
      </Link>
    </div>
  );
}
