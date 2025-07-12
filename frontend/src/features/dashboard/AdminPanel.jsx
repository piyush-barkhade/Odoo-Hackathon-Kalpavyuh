import { useEffect, useState } from "react";
import api from "../../api/api";
import { toast } from "react-toastify";
import { FaCheck, FaTimes, FaSync } from "react-icons/fa";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("listings");

  // Data states
  const [pendingItems, setPendingItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);

  // Loading states
  const [loading, setLoading] = useState(false);
  const [actionLoadingId, setActionLoadingId] = useState(null);

  // ------------- FETCHES ---------------
  const fetchListings = async () => {
    setLoading(true);
    try {
      const res = await api.get("/admin/pending-items");
      setPendingItems(res.data);
    } catch {
      toast.error("❌ Failed to load listings");
    } finally {
      setLoading(false);
    }
  };

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const res = await api.get("/admin/orders");
      setOrders(res.data);
    } catch {
      toast.error("❌ Failed to load orders");
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await api.get("/admin/users");
      setUsers(res.data);
    } catch {
      toast.error("❌ Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  // Fetch when tab changes
  useEffect(() => {
    if (activeTab === "listings") fetchListings();
    if (activeTab === "orders") fetchOrders();
    if (activeTab === "users") fetchUsers();
  }, [activeTab]);

  // ------------- APPROVE/REJECT LISTINGS ---------------
  const handleApprove = async (id) => {
    setActionLoadingId(id);
    try {
      await api.post(`/admin/approve/${id}`);
      toast.success("✅ Item approved");
      await fetchListings();
    } catch {
      toast.error("❌ Error approving item");
    } finally {
      setActionLoadingId(null);
    }
  };

  const handleReject = async (id) => {
    if (!window.confirm("Reject and delete this item?")) return;
    setActionLoadingId(id);
    try {
      await api.delete(`/admin/reject/${id}`);
      toast.success("🗑️ Item rejected");
      await fetchListings();
    } catch {
      toast.error("❌ Error rejecting item");
    } finally {
      setActionLoadingId(null);
    }
  };

  // ------------- TABS UI ---------------
  const tabButton = (tab, label) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`px-4 py-2 rounded-md text-xl font-semibold transition ${
        activeTab === tab
          ? "bg-[#2f4156] text-white shadow"
          : "bg-[#c8d9e6] text-[#2f4156] hover:bg-[#f5efeb]"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div
      className="min-h-screen px-4 py-8"
      style={{ backgroundColor: "#c8d9e6" }}
    >
      <div
        className="max-w-7xl mx-auto rounded-xl shadow-lg p-6"
        style={{ backgroundColor: "#f5efeb" }}
      >
        <h1
          className="text-3xl font-bold text-center mb-6"
          style={{ color: "#2f4156" }}
        >
          Admin Panel
        </h1>

        {/* TABS */}
        <div className="flex justify-center mb-6 gap-6 text-xl flex-wrap">
          {tabButton("users", "Manage Users")}
          {tabButton("orders", "Manage Orders")}
          {tabButton("listings", "Manage Listings")}
        </div>

        {/* CONTENT */}
        {loading && (
          <div className="text-center py-10 text-[#2f4156]">Loading...</div>
        )}

        {!loading && activeTab === "listings" && (
          <>
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-gray-600">
                Moderate and approve/reject item listings here.
              </p>
              <button
                onClick={fetchListings}
                className="flex items-center gap-2 bg-[#2f4156] text-white px-4 py-2 rounded hover:bg-[#3e556e] transition text-sm shadow"
              >
                <FaSync /> Refresh
              </button>
            </div>
            {pendingItems.length === 0 ? (
              <div className="text-center py-10 text-green-700">
                🎉 No pending items to moderate.
              </div>
            ) : (
              <div className="space-y-4">
                {pendingItems.map((item) => (
                  <div
                    key={item._id}
                    className="border border-[#2f4156]/20 rounded-lg p-4 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition bg-white"
                  >
                    <div className="flex-1">
                      <h2
                        className="text-lg font-semibold mb-1"
                        style={{ color: "#2f4156" }}
                      >
                        {item.title}
                      </h2>
                      <p className="text-gray-700 text-sm mb-2">
                        {item.description}
                      </p>
                      <p className="text-xs text-gray-500">
                        Listed by: {item.owner?.email || "Unknown"}
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => handleApprove(item._id)}
                        disabled={actionLoadingId === item._id}
                        className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded transition text-sm shadow disabled:opacity-50"
                      >
                        {actionLoadingId === item._id ? (
                          "Processing..."
                        ) : (
                          <>
                            <FaCheck /> Approve
                          </>
                        )}
                      </button>
                      <button
                        onClick={() => handleReject(item._id)}
                        disabled={actionLoadingId === item._id}
                        className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded transition text-sm shadow disabled:opacity-50"
                      >
                        {actionLoadingId === item._id ? (
                          "Processing..."
                        ) : (
                          <>
                            <FaTimes /> Reject
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {!loading && activeTab === "orders" && (
          <>
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-gray-600">
                View and manage orders here.
              </p>
              <button
                onClick={fetchOrders}
                className="flex items-center gap-2 bg-[#2f4156] text-white px-4 py-2 rounded hover:bg-[#3e556e] transition text-sm shadow"
              >
                <FaSync /> Refresh
              </button>
            </div>
            {orders.length === 0 ? (
              <div className="text-center py-10 text-green-700">
                No orders found.
              </div>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div
                    key={order._id}
                    className="border border-[#2f4156]/20 rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition"
                  >
                    <h2
                      className="text-lg font-semibold mb-1"
                      style={{ color: "#2f4156" }}
                    >
                      Order ID: {order._id}
                    </h2>
                    <p className="text-gray-700 text-sm mb-1">
                      User: {order.user?.email || "Unknown"}
                    </p>
                    <p className="text-xs text-gray-500">
                      Total: ₹{order.totalAmount}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {!loading && activeTab === "users" && (
          <>
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-gray-600">
                View and manage users here.
              </p>
              <button
                onClick={fetchUsers}
                className="flex items-center gap-2 bg-[#2f4156] text-white px-4 py-2 rounded hover:bg-[#3e556e] transition text-sm shadow"
              >
                <FaSync /> Refresh
              </button>
            </div>
            {users.length === 0 ? (
              <div className="text-center py-10 text-green-700">
                No users found.
              </div>
            ) : (
              <div className="space-y-4">
                {users.map((user) => (
                  <div
                    key={user._id}
                    className="border border-[#2f4156]/20 rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition"
                  >
                    <h2
                      className="text-lg font-semibold mb-1"
                      style={{ color: "#2f4156" }}
                    >
                      {user.name || "Unnamed User"}
                    </h2>
                    <p className="text-gray-700 text-sm mb-1">
                      Email: {user.email}
                    </p>
                    <p className="text-xs text-gray-500">
                      Phone: {user.phone || "N/A"}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
