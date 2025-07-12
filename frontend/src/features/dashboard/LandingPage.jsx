import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to ReWear</h1>
      <p className="mb-6">
        Exchange unused clothing sustainably. Swap directly or redeem points.
      </p>
      <div className="space-x-4">
        <Link to="/browse" className="bg-green-500 text-white p-2 rounded">
          Browse Items
        </Link>
        <Link to="/new-item" className="bg-green-700 text-white p-2 rounded">
          List an Item
        </Link>
        <Link to="/signup" className="bg-green-900 text-white p-2 rounded">
          Start Swapping
        </Link>
      </div>
    </div>
  );
}
