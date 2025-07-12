import { useEffect, useState } from "react";
import api from "../../api/api";
import { toast } from "react-toastify";
import { FaCheck, FaTimes, FaSync, FaEdit, FaTrash } from "react-icons/fa";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("listings");

  // Data states
  const [pendingItems, setPendingItems] = useState([]);
  const [allListings, setAllListings] = useState([]);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);

  // Loading states
  const [loading, setLoading] = useState(false);
  const [actionLoadingId, setActionLoadingId] = useState(null);

  // -------------------------
  // STATIC SAMPLE DATA
  // -------------------------
  const staticListings = [
    {
      _id: "1",
      title: "Vintage Denim Jacket",
      description: "Classic blue denim jacket in great condition",
      owner: { email: "user1@example.com" },
    },
    {
      _id: "2",
      title: "Floral Summer Dress",
      description: "Lightweight and comfy, size M",
      owner: { email: "user2@example.com" },
    },
  ];

  const staticOrders = [
    {
      _id: "order1",
      user: { email: "buyer1@example.com" },
      totalAmount: 450,
    },
    {
      _id: "order2",
      user: { email: "buyer2@example.com" },
      totalAmount: 1200,
    },
  ];

  const staticUsers = [
    {
      _id: "user1",
      name: "Alice Johnson",
      email: "alice@example.com",
      phone: "9876543210",
    },
    {
      _id: "user2",
      name: "Bob Smith",
      email: "bob@example.com",
      phone: "8765432109",
    },
  ];

  // -------------------------
  // FETCH FUNCTIONS
  // -------------------------
  const fetchListings = async () => {
    setLoading(true);
    try {
      const res = await api.get("/admin/pending-items");
      setPendingItems(res.data);
    } catch {
      setPendingItems(staticListings);
    } finally {
      setLoading(false);
    }
  };

  const fetchAllListings = async () => {
    setLoading(true);
    try {
      const res = await api.get("/admin/all-listings");
      setAllListings(res.data);
    } catch {
      setAllListings(staticListings);
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
      setOrders(staticOrders);
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
      setUsers(staticUsers);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === "listings") {
      fetchListings();
      fetchAllListings();
    }
    if (activeTab === "orders") fetchOrders();
    if (activeTab === "users") fetchUsers();
  }, [activeTab]);

  // -------------------------
  // APPROVE / REJECT
  // -------------------------
  const handleApprove = async (id) => {
    setActionLoadingId(id);
    try {
      await api.post(`/admin/approve/${id}`);
      toast.success("✅ Item approved");
      await fetchListings();
    } catch {
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
      toast.error(" ");
    } finally {
      setActionLoadingId(null);
    }
  };

  // -------------------------
  // EDIT / DELETE - Placeholder
  // -------------------------
  const handleEdit = (type, item) => {
    toast.info(`✏️ Edit ${type}: ${item._id}`);
  };

  const handleDelete = (type, item) => {
    if (window.confirm(`Delete this ${type}?`)) {
      toast.success(`🗑️ Deleted ${type}: ${item._id}`);
    }
  };

  // -------------------------
  // TABS
  // -------------------------
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

  // -------------------------
  // RENDER
  // -------------------------
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

        <div className="flex justify-center mb-6 gap-6 text-xl flex-wrap">
          {tabButton("users", "Manage Users")}
          {tabButton("orders", "Manage Orders")}
          {tabButton("listings", "Manage Listings")}
        </div>

        {loading && (
          <div className="text-center py-10 text-[#2f4156]">Loading...</div>
        )}

        {!loading && activeTab === "listings" && (
          <>
            <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
              <p className="text-sm text-gray-600">
                Moderate and approve/reject item listings here.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={fetchListings}
                  className="flex items-center gap-2 bg-[#2f4156] text-white px-3 py-2 rounded hover:bg-[#3e556e] transition text-sm shadow"
                >
                  <FaSync /> Refresh Pending
                </button>
                <button
                  onClick={fetchAllListings}
                  className="flex items-center gap-2 bg-[#2f4156] text-white px-3 py-2 rounded hover:bg-[#3e556e] transition text-sm shadow"
                >
                  <FaSync /> Load All Listings
                </button>
              </div>
            </div>

            <h3 className="text-lg font-bold mb-2 text-[#2f4156]">
              Pending Listings
            </h3>
            {pendingItems.length === 0 ? (
              <div className="text-center py-6 text-green-700">
                🎉 No pending items to moderate.
              </div>
            ) : (
              <div className="space-y-4 mb-6">
                {pendingItems.map((item) => (
                  <div
                    key={item._id}
                    className="border border-[#2f4156]/20 rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h2 className="text-lg font-semibold mb-1 text-[#2f4156]">
                          {item.title}
                        </h2>
                        <p className="text-gray-700 text-sm mb-2">
                          {item.description}
                        </p>
                        <p className="text-xs text-gray-500">
                          Listed by: {item.owner?.email || "Unknown"}
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <button
                          onClick={() => handleApprove(item._id)}
                          disabled={actionLoadingId === item._id}
                          className="bg-green-600 hover:bg-green-500 text-white px-3 py-2 rounded text-sm shadow disabled:opacity-50 flex items-center justify-center gap-2"
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
                          className="bg-red-600 hover:bg-red-500 text-white px-3 py-2 rounded text-sm shadow disabled:opacity-50 flex items-center justify-center gap-2"
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
                  </div>
                ))}
              </div>
            )}

            <h3 className="text-lg font-bold mb-2 text-[#2f4156]">
              All Listings
            </h3>
            {allListings.length === 0 ? (
              <div className="text-center py-6 text-gray-600">
                No listings found.
              </div>
            ) : (
              <div className="space-y-4">
                {allListings.map((item) => (
                  <div
                    key={item._id}
                    className="border border-[#2f4156]/20 rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition flex justify-between items-center"
                  >
                    <div>
                      <h2 className="text-lg font-semibold text-[#2f4156]">
                        {item.title}
                      </h2>
                      <p className="text-gray-700 text-sm">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit("listing", item)}
                        className="bg-yellow-500 hover:bg-yellow-400 text-white px-3 py-2 rounded text-sm shadow flex items-center justify-center gap-2"
                      >
                        <FaEdit /> Edit
                      </button>
                      <button
                        onClick={() => handleDelete("listing", item)}
                        className="bg-red-600 hover:bg-red-500 text-white px-3 py-2 rounded text-sm shadow flex items-center justify-center gap-2"
                      >
                        <FaTrash /> Delete
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
                    className="border border-[#2f4156]/20 rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition flex justify-between items-center"
                  >
                    <div>
                      <h2 className="text-lg font-semibold text-[#2f4156]">
                        Order ID: {order._id}
                      </h2>
                      <p className="text-gray-700 text-sm">
                        User: {order.user?.email || "Unknown"}
                      </p>
                      <p className="text-xs text-gray-500">
                        Total: ₹{order.totalAmount}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit("order", order)}
                        className="bg-yellow-500 hover:bg-yellow-400 text-white px-8 py-2 rounded text-sm shadow flex items-center justify-center gap-2"
                      >
                        <FaEdit /> Edit
                      </button>
                      <button
                        onClick={() => handleDelete("order", order)}
                        className="bg-red-600 hover:bg-red-500 text-white px-6 py-2 rounded text-sm shadow flex items-center justify-center gap-2"
                      >
                        <FaTrash /> Delete
                      </button>
                    </div>
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
                className="flex items-center gap-2 bg-[#2f4156] text-white px-4 py-2 rounded hover:bg-[#3e556e] transition text-sm shadow "
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
                    className="border border-[#2f4156]/20 rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition flex justify-between items-center"
                  >
                    <div>
                      <h2 className="text-lg font-semibold text-[#2f4156]">
                        {user.name || "Unnamed User"}
                      </h2>
                      <p className="text-gray-700 text-sm">
                        Email: {user.email}
                      </p>
                      <p className="text-xs text-gray-500">
                        Phone: {user.phone || "N/A"}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit("user", user)}
                        className="bg-yellow-500 hover:bg-yellow-400 text-white px-3 py-2 rounded text-sm shadow flex items-center justify-center gap-2"
                      >
                        <FaEdit /> Edit
                      </button>
                      <button
                        onClick={() => handleDelete("user", user)}
                        className="bg-red-600 hover:bg-red-500 text-white px-3 py-2 rounded text-sm shadow flex items-center justify-center gap-2"
                      >
                        <FaTrash /> Delete
                      </button>
                    </div>
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
