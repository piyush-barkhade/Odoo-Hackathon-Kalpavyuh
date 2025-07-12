import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-700 p-4 text-white flex justify-between">
      <Link to="/" className="font-bold text-xl">
        ReWear
      </Link>
      <div className="space-x-4">
        <Link to="/browse">Browse</Link>
        <Link to="/new-item">List Item</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
