import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useAuth } from "../context/AuthContext";
import {
  FiUser,
  FiHome,
  FiSearch,
  FiPlusSquare,
  FiSettings,
  FiLogIn,
  FiUserPlus,
  FiLogOut,
} from "react-icons/fi";

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
  className="flex items-center gap-2 font-extrabold text-4xl tracking-tight hover:opacity-90 transition duration-200"
>
  <img
    src={Logo}
    alt="ReWear Logo"
    className="w-10 h-10 rounded-full object-cover shadow-md"
  />
  <span>ReWear</span>
</Link>

      <div className="flex items-center flex-wrap gap-5 md:gap-6">
        <Link
          to="/"
          className="flex items-center gap-2 font-semibold hover:text-[#c8d9e6] hover:underline underline-offset-4 transition-colors duration-200"
        >
          <FiHome /> Home
        </Link>
        <Link
          to="/browse"
          className="flex items-center gap-2 font-semibold hover:text-[#c8d9e6] hover:underline underline-offset-4 transition-colors duration-200"
        >
          <FiSearch /> Browse
        </Link>
        <Link
          to="/new-item"
          className="flex items-center gap-2 font-semibold hover:text-[#c8d9e6] hover:underline underline-offset-4 transition-colors duration-200"
        >
          <FiPlusSquare /> List Item
        </Link>

        {user && user.role === "admin" && (
          <Link
            to="/admin"
            className="flex items-center gap-2 font-semibold hover:text-[#c8d9e6] hover:underline underline-offset-4 transition-colors duration-200"
          >
            <FiSettings /> Admin
          </Link>
        )}

        {user ? (
          <>
            <button
              onClick={() => navigate("/dashboard")}
              className="flex items-center gap-1 px-4 py-1.5 rounded-full border border-[#c8d9e6] font-semibold hover:bg-[#c8d9e6] hover:text-[#2f4156] transition duration-200"
            >
              <FiUser className="text-lg" />
              <span className="hidden sm:inline">Profile</span>
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center justify-center gap-1 min-w-[100px] text-center bg-[#c8d9e6] text-[#2f4156] px-4 py-1.5 rounded-full font-semibold border border-transparent hover:bg-[#f5efeb] hover:border-[#2f4156] transition duration-200"
            >
              <FiLogOut />
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="flex items-center justify-center gap-2 min-w-[100px] text-center bg-[#c8d9e6] text-[#2f4156] px-4 py-1.5 rounded-full font-semibold border border-transparent hover:bg-[#f5efeb] hover:border-[#2f4156] transition duration-200"
            >
              <FiLogIn />
              Login
            </Link>
            <Link
              to="/signup"
              className="flex items-center justify-center gap-2 min-w-[100px] text-center bg-[#c8d9e6] text-[#2f4156] px-4 py-1.5 rounded-full font-semibold border border-transparent hover:bg-[#f5efeb] hover:border-[#2f4156] transition duration-200"
            >
              <FiUserPlus />
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
