import React from "react";

export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-[#f5efeb] text-[#2f4156] p-6">
      <h1 className="text-3xl font-bold mb-12 text-center">User Dashboard</h1>

      {/* 👤 Profile Section */}
      <div className="relative mb-12">
        {/* Cover background */}
        <div className="h-40 w-full bg-gradient-to-r from-[#c8d9e6] to-[#f5efeb] rounded-xl shadow-inner"></div>

        {/* Profile Card - shifted left */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 absolute top-5 left-6 w-[95%] md:w-[100%] border border-[#c8d9e6]">
          <div className="relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm7NqghggULBIVDvWxoJPqDqZLzDmG0ES8CA&s"
              alt="Profile Avatar"
              className="w-28 h-28 rounded-full border-4 border-[#2f4156] shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-[#2f4156]">Shubhi Dubey</h2>
            <p className="text-[#2f4156]/70 mb-2">shubhi@example.com</p>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <span className="bg-[#c8d9e6] px-4 py-1 rounded-full text-[#2f4156] font-medium text-sm shadow-sm">
                🌟 120 Points
              </span>
              <button className="bg-[#2f4156] text-white text-sm px-4 py-1 rounded-full shadow hover:bg-[#1e2e40] transition">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-12"></div>

      {/* 📦 My Listings */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">My Listings</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl shadow p-2 flex items-center justify-center"
            >
              <img
                src={`https://via.placeholder.com/150?text=Item+${item}`}
                alt={`Item ${item}`}
                className="w-32 h-32 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 🛒 My Purchases */}
      <div>
        <h2 className="text-xl font-semibold mb-4">My Purchases</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl shadow p-2 flex items-center justify-center"
            >
              <img
                src={`https://via.placeholder.com/150?text=Purchase+${item}`}
                alt={`Purchase ${item}`}
                className="w-32 h-32 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
