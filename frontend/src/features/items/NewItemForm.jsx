import React, { useState } from "react";

const NewItemForm = () => {
  const [preview, setPreview] = useState(null);
  const [thumbnails, setThumbnails] = useState([]);

  const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
    setThumbnails((prev) => [...prev, imageUrl]);
  }
};


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Item Listing</h1>
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border rounded-md shadow-sm w-1/3"
        />
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Image Upload */}
        <div className="bg-white p-4 rounded shadow-md">
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-gray-200 rounded flex items-center justify-center overflow-hidden">
              {preview ? (
                <img src={preview} alt="Main" className="object-cover w-full h-full" />
              ) : (
                <span className="text-gray-400">Product Image</span>
              )}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex flex-wrap gap-2 mt-4">
            {thumbnails.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                className="w-16 h-16 object-cover rounded border"
              />
            ))}
          </div>

          {/* Upload Button */}
          <div className="mt-4 flex flex-col items-center">
            <label className="cursor-pointer bg-[#2f4156] text-white px-4 py-2 rounded hover:bg-[#1e2d3f] inline-block">
              Choose Image
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
            <p className="text-sm text-gray-500 mt-1 text-center">Only image files are allowed</p>
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="bg-white p-4 rounded shadow-md flex flex-col justify-between">
          <div>
            <label className="block text-sm font-medium mb-1">Product Name</label>
            <input
              type="text"
              placeholder="Enter name"
              className="w-full border px-3 py-2 rounded mb-4"
            />

            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              rows="6"
              placeholder="Enter product description"
              className="w-full border px-3 py-2 rounded resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-6 bg-[#2f4156] text-white px-6 py-2 rounded hover:bg-[#1e2d3f] shadow-md self-start"
          >
            Upload Item
          </button>
        </div>
      </form>

      {/* Previous Listings */}
      {thumbnails.length > 0 && (
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Previous Listings</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {thumbnails.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Listing ${index + 1}`}
                className="w-full h-60 object-cover rounded shadow"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewItemForm;

