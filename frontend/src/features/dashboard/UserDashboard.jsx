import React, { useState } from "react";

export default function UserDashboard() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedImage) {
      alert("Image uploaded successfully (mock only)");
      setSelectedImage(null);
      setPreview(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5efeb] text-[#2f4156] p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">User Dashboard</h1>


      {/* My Listings */}
      <div className="mb-8">
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

      {/* My Purchases */}
      <div>
        <h2 className="text-xl font-semibold mb-4">My Purchases</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[5, 6, 7].map((item) => (
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
