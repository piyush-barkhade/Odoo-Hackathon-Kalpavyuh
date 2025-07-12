import React from "react";

const listingImages = [
  "https://cdn.prod.website-files.com/6256995755a7ea0a3d8fbd11/6257ec4fcb33ee42cdba135e_61b9b7e9effa0fc28ea1bf51_Frame%25207.jpeg", // Item 1
  "https://images-cdn.ubuy.co.in/6613cb75a323b407bd014d6e-kaoayi-kids-clothing-for-boy-spring.jpg", // Item 2
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV0WPiJacl0UN7e8zktbnNnKvANh0ZJ28geA&s", // Item 3
  "https://assets.ajio.com/medias/sys_master/root/20230828/gZzr/64eca55eafa4cf41f59099d4/-473Wx593H-466509618-blue-MODEL.jpg", // Item 4
];

const purchaseImages = [
  "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSyS3s6DDIJ7Rq8aXseBKvuFezNjJAI3jaU_h1FsyEhlRWXLaAnooSXhL0IYYnA7VYfsT1txvBdGbx1lmi2gZfcp_pxApRJPd2YTM3PFmKrOj7J3X4T0nw9kp0", // Purchase 1
  "https://ginatricot-cms.imgix.net/media/cms/2025-v22/sommarshop/kla%CC%88nningar.jpg?auto=format,compress", // Purchase 2
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh2yRIEVaCZiih9WC-3Y3el_7zwM7FT1eShg&s", // Purchase 3
  "https://images.meesho.com/images/products/336992493/uhfdk_512.webp", // Purchase 4
];

export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-[#f5efeb] text-[#2f4156] p-6">
      <h1 className="text-3xl font-bold mb-12 text-center">User Dashboard</h1>

      {/* 👤 Profile Section */}
      <div className="relative mb-12">
        <div className="h-40 w-full bg-gradient-to-r from-[#c8d9e6] to-[#f5efeb] rounded-xl shadow-inner"></div>
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

      <div className="h-12"></div>

      {/* 📦 My Listings */}
<div className="mb-12">
  <h2 className="text-xl font-semibold mb-4">My Listings</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {listingImages.map((url, index) => (
      <div
        key={index}
        className="bg-white rounded-xl shadow p-3 flex items-center justify-center"
      >
        <img
          src={url}
          alt={`Listing ${index + 1}`}
          className="w-40 h-48 object-cover rounded-lg"
        />
      </div>
    ))}
  </div>
</div>

{/* 🛒 My Purchases */}
<div>
  <h2 className="text-xl font-semibold mb-4">My Purchases</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {purchaseImages.map((url, index) => (
      <div
        key={index}
        className="bg-white rounded-xl shadow p-3 flex items-center justify-center"
      >
        <img
          src={url}
          alt={`Purchase ${index + 1}`}
          className="w-40 h-48 object-cover rounded-lg"
        />
      </div>
    ))}
  </div>
</div>

    </div>
  );
}
