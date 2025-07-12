import React from "react";

const listingImages = [
  "https://cdn.prod.website-files.com/6256995755a7ea0a3d8fbd11/6257ec4fcb33ee42cdba135e_61b9b7e9effa0fc28ea1bf51_Frame%25207.jpeg",
  "https://images-cdn.ubuy.co.in/6613cb75a323b407bd014d6e-kaoayi-kids-clothing-for-boy-spring.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV0WPiJacl0UN7e8zktbnNnKvANh0ZJ28geA&s",
  "https://assets.ajio.com/medias/sys_master/root/20230828/gZzr/64eca55eafa4cf41f59099d4/-473Wx593H-466509618-blue-MODEL.jpg",
];

const purchaseImages = [
  "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSyS3s6DDIJ7Rq8aXseBKvuFezNjJAI3jaU_h1FsyEhlRWXLaAnooSXhL0IYYnA7VYfsT1txvBdGbx1lmi2gZfcp_pxApRJPd2YTM3PFmKrOj7J3X4T0nw9kp0",
  "https://ginatricot-cms.imgix.net/media/cms/2025-v22/sommarshop/kla%CC%88nningar.jpg?auto=format,compress",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh2yRIEVaCZiih9WC-3Y3el_7zwM7FT1eShg&s",
  "https://images.meesho.com/images/products/336992493/uhfdk_512.webp",
];

export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-[#f5efeb] text-[#2f4156] px-3 py-4 sm:px-4 sm:py-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-center">
        User Dashboard
      </h1>

      {/* 👤 Profile Section */}
      <div className="relative mb-20 sm:mb-16">
        <div className="h-28 sm:h-36 w-full bg-gradient-to-r from-[#c8d9e6] to-[#f5efeb] rounded-xl shadow-inner"></div>

        <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 absolute top-4 sm:top-5 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[90%] lg:w-[80%] border border-[#c8d9e6]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm7NqghggULBIVDvWxoJPqDqZLzDmG0ES8CA&s"
            alt="Profile Avatar"
            className="w-20 h-20 sm:w-24 sm:h-12 md:w-28 md:h-14 rounded-full border-4 border-[#2f4156] shadow-md hover:scale-105 transition-transform duration-300 object-cover"
          />
          <div className="text-center sm:text-left flex-1">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#2f4156]">
              Shubhi Dubey
            </h2>
            <p className="text-[#2f4156]/70 text-sm sm:text-base mb-2">
              shubhi@example.com
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <span className="bg-[#c8d9e6] px-3 py-1 rounded-full text-[#2f4156] font-medium text-xs sm:text-sm shadow-sm">
                🌟 120 Points
              </span>
              <button className="bg-[#2f4156] text-white text-xs sm:text-sm px-4 py-1 rounded-full shadow hover:bg-[#1e2e40] transition">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 📦 My Listings */}
      <div className="mb-12">
        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center sm:text-left">
          My Listings
        </h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {listingImages.map((url, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-2 sm:p-3 flex items-center justify-center"
            >
              <img
                src={url}
                alt={`Listing ${index + 1}`}
                className="w-full h-48 sm:h-56 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 🛒 My Purchases */}
      <div>
        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center sm:text-left">
          My Purchases
        </h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {purchaseImages.map((url, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-2 sm:p-3 flex items-center justify-center"
            >
              <img
                src={url}
                alt={`Purchase ${index + 1}`}
                className="w-full h-48 sm:h-56 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
