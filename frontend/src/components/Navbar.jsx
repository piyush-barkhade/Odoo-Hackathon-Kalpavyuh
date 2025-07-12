import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FiUser } from "react-icons/fi";

export default function Navbar() {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <nav className="bg-green-700 p-4 text-white flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">
        ReWear
      </Link>

      <div className="space-x-4 flex items-center">
        <Link to="/" className="hover:text-yellow-300">
          Home
        </Link>
        <Link to="/browse" className="hover:text-yellow-300">
          Browse
        </Link>
        <Link to="/new-item" className="hover:text-yellow-300">
          List Item
        </Link>
        <Link to="/dashboard" className="hover:text-yellow-300">
          Dashboard
        </Link>

        {user ? (
          <>
            <button
              onClick={() => navigate("/profile")}
              className="flex items-center space-x-1 hover:text-yellow-300"
            >
              <FiUser className="text-xl" />
              <span>Profile</span>
            </button>
            <button
              onClick={handleLogout}
              className="bg-yellow-400 text-green-800 px-3 py-1 rounded hover:bg-yellow-300 font-semibold transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="bg-yellow-400 text-green-800 px-3 py-1 rounded hover:bg-yellow-300 font-semibold transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-yellow-400 text-green-800 px-3 py-1 rounded hover:bg-yellow-300 font-semibold transition"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
