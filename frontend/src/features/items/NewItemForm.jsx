import React, { useState } from "react";

const NewItemForm = () => {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your upload logic here
    console.log("Form submitted!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full transition-transform hover:scale-[1.01]">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Upload New Item</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Custom file input */}
          <div className="flex flex-col items-center">
            <label className="cursor-pointer bg-[#2f4156] text-white px-6 py-2 rounded-md hover:bg-[#1e2d3f] transition-colors text-sm font-medium">
              Choose Image
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
            <p className="text-sm text-gray-500 mt-2">Only image files are allowed</p>
          </div>

          {/* Image preview */}
          {preview && (
            <div className="flex justify-center">
              <img
                src={preview}
                alt="Preview"
                className="mt-4 w-40 h-40 object-cover rounded-lg border border-gray-300 shadow-sm"
              />
            </div>
          )}

          {/* Submit button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#2f4156] text-white px-6 py-2 rounded-md hover:bg-[#1e2d3f] transition-colors font-semibold shadow-md"
            >
              Upload Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewItemForm;
