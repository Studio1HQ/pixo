import React, { useState } from "react";
import { usePhotoStore } from "../../store/usePhotoStore";

function Sidebar() {
  const setImage = usePhotoStore((state) => state.setImage);
  const setBrightness = usePhotoStore((state) => state.setBrightness);
  const setContrast = usePhotoStore((state) => state.setContrast);
  const setSaturation = usePhotoStore((state) => state.setSaturation);
  const setCrop = usePhotoStore((state) => state.setCrop);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4 flex flex-col">
      <h1 className="text-2xl font-bold mb-6 text-indigo-600">PhotoEditor</h1>

      <div className="mb-6">
        <label className="block mb-2 font-medium">Upload Image</label>
        <label className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="text-center">
            <span className="material-symbols-outlined text-4xl text-gray-400">
              cloud_upload
            </span>
            <p className="mt-2 text-sm text-gray-500">Click to upload</p>
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>
        </label>
      </div>

      <div className="mb-6">
        <h2 className="font-medium mb-3">Basic Adjustments</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between">
              <label className="text-sm text-gray-600">Brightness</label>
              <span className="text-sm text-gray-500">50%</span>
            </div>
            <input
              type="range"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              min="0"
              max="200"
              defaultValue="100"
              onChange={(e) => setBrightness(e.target.value)}
            />
          </div>
          <div>
            <div className="flex justify-between">
              <label className="text-sm text-gray-600">Contrast</label>
              <span className="text-sm text-gray-500">50%</span>
            </div>
            <input
              type="range"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              min="0"
              max="200"
              defaultValue="100"
              onChange={(e) => setContrast(e.target.value)}
            />
          </div>
          <div>
            <div className="flex justify-between">
              <label className="text-sm text-gray-600">Saturation</label>
              <span className="text-sm text-gray-500">50%</span>
            </div>
            <input
              type="range"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              min="0"
              max="200"
              defaultValue="100"
              onChange={(e) => setSaturation(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="font-medium mb-3">Crop & Resize</h2>
        <div className="grid grid-cols-3 gap-2">
          <button
            className="py-2 px-3 bg-gray-100 rounded-md text-sm hover:bg-gray-200 transition-colors"
            onClick={() => setCrop("1/1")}
          >
            Square
          </button>
          <button
            className="py-2 px-3 bg-gray-100 rounded-md text-sm hover:bg-gray-200 transition-colors"
            onClick={() => setCrop("16/9")}
          >
            16:9
          </button>
          <button
            className="py-2 px-3 bg-gray-100 rounded-md text-sm hover:bg-gray-200 transition-colors"
            onClick={() => setCrop("4/3")}
          >
            4:3
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
