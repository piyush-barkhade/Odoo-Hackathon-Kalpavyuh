import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../api/api";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { setLoginSession } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post("/auth/login", { email, password });
      setLoginSession(res.data.token);
      toast.success("Login successful! Welcome back.");
      navigate("/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      let message = "Login failed. Please try again.";
      if (err?.response?.data?.message) {
        if (/invalid/i.test(err.response.data.message)) {
          message = "Invalid email or password. Please check your credentials.";
        } else {
          message = err.response.data.message;
        }
      }
      toast.error(`${message}`);
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
        className="max-w-md w-full p-8 rounded-xl shadow-lg transition-all duration-300"
        style={{ backgroundColor: "#f5efeb" }}
      >
        <h2
          className="text-3xl font-extrabold mb-3 text-center"
          style={{ color: "#2f4156" }}
        >
          Welcome Back to ReWear
        </h2>
        <p className="text-center text-sm mb-6 text-gray-700">
          Sign in to continue your sustainable shopping journey.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
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
              placeholder="Your secure password"
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
            className="w-full py-3 rounded-md font-semibold transition-colors duration-200 text-white"
            style={{
              backgroundColor: loading ? "#3e556e" : "#2f4156",
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="text-center text-sm mt-6 text-gray-700">
          <p>
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
