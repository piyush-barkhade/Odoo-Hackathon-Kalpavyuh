import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../api/api";

const Signup = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/auth/signup", { name, email, password, phone });
      toast.success("🎉 Registration successful! Please log in.");
      navigate("/login");
    } catch (err) {
      console.error("Signup error:", err);

      let message = "Registration failed. Please try again.";
      if (err?.response?.data?.message) {
        if (/exists|already/i.test(err.response.data.message)) {
          message =
            "A user with this email already exists. Please login instead.";
        } else if (/invalid/i.test(err.response.data.message)) {
          message =
            "Please enter valid details. Check your email and password.";
        } else {
          message = err.response.data.message;
        }
      }

      toast.error(`❌ ${message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: "#c8d9e6" }}
    >
      <div
        className="max-w-md w-full p-8 rounded-xl shadow-xl border border-gray-200 transition-all duration-300"
        style={{ backgroundColor: "#f5efeb" }}
      >
        <h2
          className="text-3xl font-extrabold mb-2 text-center tracking-tight"
          style={{ color: "#2f4156" }}
        >
          Join ReWear
        </h2>
        <p className="text-center text-sm mb-6 text-gray-700">
          Create your account for sustainable fashion.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-1 text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f4156] transition"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium mb-1 text-gray-700"
            >
              Phone (optional)
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Optional phone number"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f4156] transition"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1 text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f4156] transition"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1 text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="At least 8 characters"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f4156] transition"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-md font-semibold text-white transition-colors duration-200 ${
              loading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#3e556e]"
            }`}
            style={{
              backgroundColor: "#2f4156",
            }}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <div className="text-center text-sm mt-6 text-gray-700">
          <p>
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
