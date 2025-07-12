import { useState } from "react";
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
  FiMenu,
  FiX,
} from "react-icons/fi";

export default function Navbar() {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
    setIsMenuOpen(false);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="relative z-50">
      <div
        className="p-4 text-white flex justify-between items-center shadow-md"
        style={{ backgroundColor: "#2f4156" }}
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-extrabold text-3xl sm:text-4xl tracking-tight hover:opacity-90 transition duration-200"
          onClick={closeMenu}
        >
          <img
            src={Logo}
            alt="ReWear Logo"
            className="w-10 h-10 rounded-full object-cover shadow-md"
          />
          <span>ReWear</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center flex-wrap gap-5 lg:gap-6">
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

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#2f4156] text-white flex flex-col gap-4 px-4 py-6 shadow-lg transition-all duration-300">
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2 text-lg font-semibold hover:text-[#c8d9e6] transition"
          >
            <FiHome /> Home
          </Link>
          <Link
            to="/browse"
            onClick={closeMenu}
            className="flex items-center gap-2 text-lg font-semibold hover:text-[#c8d9e6] transition"
          >
            <FiSearch /> Browse
          </Link>
          <Link
            to="/new-item"
            onClick={closeMenu}
            className="flex items-center gap-2 text-lg font-semibold hover:text-[#c8d9e6] transition"
          >
            <FiPlusSquare /> List Item
          </Link>
          {user && user.role === "admin" && (
            <Link
              to="/admin"
              onClick={closeMenu}
              className="flex items-center gap-2 text-lg font-semibold hover:text-[#c8d9e6] transition"
            >
              <FiSettings /> Admin
            </Link>
          )}

          {user ? (
            <>
              <button
                onClick={() => {
                  navigate("/dashboard");
                  closeMenu();
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#c8d9e6] font-semibold hover:bg-[#c8d9e6] hover:text-[#2f4156] transition"
              >
                <FiUser /> Profile
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 justify-center w-full bg-[#c8d9e6] text-[#2f4156] px-4 py-2 rounded-full font-semibold hover:bg-[#f5efeb] hover:border-[#2f4156] transition"
              >
                <FiLogOut /> Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={closeMenu}
                className="flex items-center gap-2 justify-center w-full bg-[#c8d9e6] text-[#2f4156] px-4 py-2 rounded-full font-semibold hover:bg-[#f5efeb] hover:border-[#2f4156] transition"
              >
                <FiLogIn /> Login
              </Link>
              <Link
                to="/signup"
                onClick={closeMenu}
                className="flex items-center gap-2 justify-center w-full bg-[#c8d9e6] text-[#2f4156] px-4 py-2 rounded-full font-semibold hover:bg-[#f5efeb] hover:border-[#2f4156] transition"
              >
                <FiUserPlus /> Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
