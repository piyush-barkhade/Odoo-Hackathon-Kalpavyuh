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
    <nav
      className="p-4 text-white flex justify-between items-center shadow-md"
      style={{ backgroundColor: "#2f4156" }}
    >
      <Link
        to="/"
        className="font-extrabold text-2xl tracking-tight hover:opacity-90 transition duration-200"
      >
        ReWear
      </Link>

      <div className="flex items-center flex-wrap gap-4 md:gap-6">
        <Link
          to="/"
          className="font-semibold hover:text-[#c8d9e6] hover:underline underline-offset-4 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          to="/browse"
          className="font-semibold hover:text-[#c8d9e6] hover:underline underline-offset-4 transition-colors duration-200"
        >
          Browse
        </Link>
        <Link
          to="/new-item"
          className="font-semibold hover:text-[#c8d9e6] hover:underline underline-offset-4 transition-colors duration-200"
        >
          List Item
        </Link>

        {user ? (
          <>
            <button
              onClick={() => navigate("/dashboard")}
              className="flex items-center space-x-1 px-4 py-1.5 rounded-full border border-[#c8d9e6] font-semibold hover:bg-[#c8d9e6] hover:text-[#2f4156] transition duration-200"
            >
              <FiUser className="text-lg" />
              <span className="hidden sm:inline">Profile</span>
            </button>

            <button
              onClick={handleLogout}
              className="min-w-[100px] text-center bg-[#c8d9e6] text-[#2f4156] px-4 py-1.5 rounded-full font-semibold border border-transparent hover:bg-[#f5efeb] hover:border-[#2f4156] transition duration-200"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="min-w-[100px] text-center bg-[#c8d9e6] text-[#2f4156] px-4 py-1.5 rounded-full font-semibold border border-transparent hover:bg-[#f5efeb] hover:border-[#2f4156] transition duration-200"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="min-w-[100px] text-center bg-[#c8d9e6] text-[#2f4156] px-4 py-1.5 rounded-full font-semibold border border-transparent hover:bg-[#f5efeb] hover:border-[#2f4156] transition duration-200"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
