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
      toast.success("🌿 Login successful! Welcome back.");
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

      toast.error(`❌ ${message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-100 to-yellow-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4 text-center">
          Welcome Back to ReWear
        </h2>
        <p className="text-center text-purple-500 mb-6 text-sm">
          Sign in to continue your sustainable shopping journey.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Your secure password"
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-white py-3 rounded font-semibold transition"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="text-center text-sm mt-6">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-500 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
          {/* <p className="mt-2">
            <Link
              to="/forgot-password"
              className="text-orange-500 font-semibold hover:underline"
            >
              Forgot Password?
            </Link>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
