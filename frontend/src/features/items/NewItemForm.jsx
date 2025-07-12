import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewItemForm = () => {
  const [preview, setPreview] = useState(null);
  const [thumbnails, setThumbnails] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");

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

    if (!productName.trim() || !description.trim() || thumbnails.length === 0) {
      toast.error("❌ Please fill in all fields and add at least one image.");
      return;
    }

    // Simulate successful upload
    console.log("Form submitted!");

    toast.success("✅ Item uploaded successfully!");

    // Add uploaded images to global uploaded list
    setUploadedImages((prev) => [...prev, ...thumbnails]);

    // Clear form fields
    setPreview(null);
    setThumbnails([]);
    setProductName("");
    setDescription("");
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

      {/* Main Layout */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Left: Product Image & Upload */}
        <div className="bg-white p-4 rounded shadow-md">
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-gray-200 rounded flex items-center justify-center overflow-hidden">
              {preview ? (
                <img
                  src={preview}
                  alt="Main"
                  className="object-cover w-full h-full"
                />
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
            <p className="text-sm text-gray-500 mt-1 text-center">
              Only image files are allowed
            </p>
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="bg-white p-4 rounded shadow-md flex flex-col justify-between">
          <div>
            <label className="block text-sm font-medium mb-1">
              Product Name
            </label>
            <input
              type="text"
              placeholder="Enter name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full border px-3 py-2 rounded mb-4"
            />

            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              rows="6"
              placeholder="Enter product description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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

      {/* Product Image Cards Grid */}
      {uploadedImages.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">
            Uploaded Product Images
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {uploadedImages.map((img, idx) => (
              <div
                key={idx}
                className="bg-white p-2 rounded shadow hover:shadow-md transition duration-200"
              >
                <img
                  src={img}
                  alt={`product-${idx}`}
                  className="w-full h-40 object-cover rounded"
                />
                <p className="text-sm text-gray-600 mt-2 text-center">
                  Image {idx + 1}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewItemForm;
