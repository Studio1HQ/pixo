import React from "react";
import { usePhotoStore } from "../../store/usePhotoStore";

function ElementsGallery() {
  const addSticker = usePhotoStore((state) => state.addSticker);
  const setLightFlare = usePhotoStore((state) => state.setLightFlare);
  const setShadow = usePhotoStore((state) => state.setShadow);
  const setOverlay = usePhotoStore((state) => state.setOverlay);

  const handleAddSticker = (icon) => {
    addSticker({ icon, position: { x: 0, y: 0 } });
  };

  const handleSetLightFlare = (style) => {
    setLightFlare({ style });
  };

  const handleSetShadow = (style) => {
    setShadow({ style });
  };

  const handleSetOverlay = (overlay) => {
    setOverlay(overlay);
  };

  return (
    <div className="w-64 bg-white border-l border-gray-200 p-4 overflow-y-auto">
      <h2 className="font-medium mb-4">Elements Gallery</h2>

      <div className="space-y-4">
        <details className="group">
          <summary className="flex items-center justify-between cursor-pointer list-none font-medium p-2 hover:bg-gray-50 rounded-md">
            <span>Stickers</span>
            <span className="material-symbols-outlined transition-transform group-open:rotate-180">
              expand_more
            </span>
          </summary>
          <div className="pl-2 mt-2 grid grid-cols-3 gap-2">
            <div
              className="w-16 h-16 bg-yellow-100 rounded-md flex items-center justify-center cursor-pointer hover:bg-yellow-200 transition-colors"
              onClick={() => handleAddSticker("sentiment_satisfied")}
            >
              <span className="material-symbols-outlined text-yellow-500">
                sentiment_satisfied
              </span>
            </div>
            <div
              className="w-16 h-16 bg-red-100 rounded-md flex items-center justify-center cursor-pointer hover:bg-red-200 transition-colors"
              onClick={() => handleAddSticker("favorite")}
            >
              <span className="material-symbols-outlined text-red-500">
                favorite
              </span>
            </div>
            <div
              className="w-16 h-16 bg-blue-100 rounded-md flex items-center justify-center cursor-pointer hover:bg-blue-200 transition-colors"
              onClick={() => handleAddSticker("star")}
            >
              <span className="material-symbols-outlined text-blue-500">
                star
              </span>
            </div>
          </div>
        </details>

        <details className="group">
          <summary className="flex items-center justify-between cursor-pointer list-none font-medium p-2 hover:bg-gray-50 rounded-md">
            <span>Shadows</span>
            <span className="material-symbols-outlined transition-transform group-open:rotate-180">
              expand_more
            </span>
          </summary>
          <div className="pl-2 mt-2 grid grid-cols-2 gap-2">
            <div
              className="w-24 h-16 bg-gray-900 bg-opacity-20 rounded-md cursor-pointer hover:bg-opacity-30 transition-opacity"
              onClick={() => handleSetShadow("bg-gray-900 bg-opacity-20")}
            ></div>
            <div
              className="w-24 h-16 bg-gray-900 bg-opacity-10 rounded-md cursor-pointer hover:bg-opacity-20 transition-opacity"
              onClick={() => handleSetShadow("bg-gray-900 bg-opacity-10")}
            ></div>
          </div>
        </details>

        <details className="group">
          <summary className="flex items-center justify-between cursor-pointer list-none font-medium p-2 hover:bg-gray-50 rounded-md">
            <span>Light Flares</span>
            <span className="material-symbols-outlined transition-transform group-open:rotate-180">
              expand_more
            </span>
          </summary>
          <div className="pl-2 mt-2 grid grid-cols-2 gap-2">
            <div
              className="w-24 h-16 bg-gradient-to-br from-sky-300 to-transparent rounded-md cursor-pointer hover:from-sky-400 transition-colors"
              onClick={() =>
                handleSetLightFlare(
                  "bg-gradient-to-br from-sky-300 to-transparent"
                )
              }
            ></div>
            <div
              className="w-24 h-16 bg-gradient-to-tr from-white via-yellow-100 to-transparent rounded-md cursor-pointer hover:via-yellow-200 transition-colors"
              onClick={() =>
                handleSetLightFlare(
                  "bg-gradient-to-tr from-white via-yellow-100 to-transparent"
                )
              }
            ></div>
          </div>
        </details>

        <details className="group">
          <summary className="flex items-center justify-between cursor-pointer list-none font-medium p-2 hover:bg-gray-50 rounded-md">
            <span>Overlay Elements</span>
            <span className="material-symbols-outlined transition-transform group-open:rotate-180">
              expand_more
            </span>
          </summary>
          <div className="pl-2 mt-2 grid grid-cols-2 gap-2">
            <div
              className="w-24 h-16 bg-cover bg-center rounded-md cursor-pointer hover:opacity-80 transition-opacity"
              style={{ backgroundImage: "url('/overlay1.webp')", opacity: 0.6 }}
              onClick={() => handleSetOverlay("/overlay1.webp")}
            ></div>
            <div
              className="w-24 h-16 bg-cover bg-center rounded-md cursor-pointer hover:opacity-80 transition-opacity"
              style={{ backgroundImage: "url('/overlay2.png')", opacity: 0.6 }}
              onClick={() => handleSetOverlay("/overlay2.png")}
            ></div>
          </div>
        </details>
      </div>
    </div>
  );
}

export default ElementsGallery;
