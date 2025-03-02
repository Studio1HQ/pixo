import React from "react";
import Draggable from "react-draggable";
import { useEditorCanvas } from "../../hooks/useEditorCanvas";

function EditorCanvas() {
  const {
    image,
    zoom,
    brightness,
    contrast,
    saturation,
    filter,
    stickers,
    lightFlare,
    shadow,
    overlay,
    updateStickerPosition,
    resetCanvas,
    canvasRef,
    stickerRefs,
    handleZoomIn,
    handleZoomOut,
    applyFilter,
    getCropStyle,
    downloadImage,
  } = useEditorCanvas();

  return (
    <div className="flex-1 flex flex-col min-h-screen">
      <div className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="flex space-x-3">
          <button
            className="p-2 text-gray-300 rounded-full hover:bg-gray-700 transition-colors"
            onClick={resetCanvas}
          >
            <span className="material-symbols-outlined">restart_alt</span>
          </button>
        </div>
        <div className="flex space-x-2">
          <button
            className="px-3 py-1.5 bg-gray-700 text-white text-sm rounded-md hover:bg-gray-600 transition-colors"
            onClick={() => downloadImage("jpg")}
          >
            JPG
          </button>
          <button
            className="px-3 py-1.5 bg-gray-700 text-white text-sm rounded-md hover:bg-gray-600 transition-colors"
            onClick={() => downloadImage("png")}
          >
            PNG
          </button>
        </div>
      </div>

      <div className="flex-1 bg-[#1e1e1e] flex items-center justify-center p-4 relative">
        <div className="relative w-[600px] h-[300px] bg-white rounded-md overflow-hidden group">
          <canvas ref={canvasRef} className="hidden"></canvas>
          {image ? (
            <div style={getCropStyle()} className="relative">
              <img
                src={image}
                alt="Uploaded"
                className="w-full h-full object-contain"
                style={{
                  transform: `scale(${zoom})`,
                  filter: `${filter} brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`,
                }}
              />
              {lightFlare && (
                <div
                  className={`absolute inset-0 ${lightFlare.style}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    transform: `scale(${zoom})`,
                  }}
                ></div>
              )}
              {shadow && (
                <div
                  className={`absolute inset-0 ${shadow.style}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    transform: `scale(${zoom})`,
                  }}
                ></div>
              )}
              {overlay && (
                <img
                  src={overlay}
                  alt="Overlay"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ transform: `scale(${zoom})`, opacity: 0.6 }}
                />
              )}
              {stickers.map((sticker, index) => {
                if (!stickerRefs.current[index]) {
                  stickerRefs.current[index] = React.createRef();
                }
                return (
                  <Draggable
                    key={index}
                    nodeRef={stickerRefs.current[index]}
                    defaultPosition={sticker.position}
                    onStop={(e, data) =>
                      updateStickerPosition(index, { x: data.x, y: data.y })
                    }
                  >
                    <div
                      ref={stickerRefs.current[index]}
                      className="absolute"
                      style={{ top: 0, left: 0 }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "2rem" }}
                      >
                        {sticker.icon}
                      </span>
                    </div>
                  </Draggable>
                );
              })}
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <div className="text-center">
                <span className="material-symbols-outlined text-6xl">
                  image
                </span>
                <p className="mt-4">No image loaded</p>
                <p className="text-sm">Upload an image to start editing</p>
              </div>
            </div>
          )}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex flex-col space-y-2">
              <button
                className="p-2 bg-black bg-opacity-60 text-white rounded-full hover:bg-opacity-80 transition-colors"
                onClick={handleZoomIn}
              >
                <span className="material-symbols-outlined">zoom_in</span>
              </button>
              <button
                className="p-2 bg-black bg-opacity-60 text-white rounded-full hover:bg-opacity-80 transition-colors"
                onClick={handleZoomOut}
              >
                <span className="material-symbols-outlined">zoom_out</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 border-t border-gray-200">
        <h2 className="font-medium mb-3">Filters & Effects</h2>
        <div className="flex space-x-3 overflow-x-auto pb-2">
          <div className="flex-shrink-0 w-20">
            <div
              className="h-20 bg-gray-200 rounded-md mb-1 overflow-hidden hover:ring-2 hover:ring-indigo-500 transition-all cursor-pointer"
              onClick={() => applyFilter("none")}
            ></div>
            <p className="text-xs text-center">Original</p>
          </div>
          <div className="flex-shrink-0 w-20">
            <div
              className="h-20 bg-gray-300 rounded-md mb-1 overflow-hidden hover:ring-2 hover:ring-indigo-500 transition-all cursor-pointer"
              style={{ filter: "grayscale(100%)" }}
              onClick={() => applyFilter("grayscale(100%)")}
            ></div>
            <p className="text-xs text-center">Grayscale</p>
          </div>
          <div className="flex-shrink-0 w-20">
            <div
              className="h-20 bg-[#e0c9a1] rounded-md mb-1 overflow-hidden hover:ring-2 hover:ring-indigo-500 transition-all cursor-pointer"
              style={{ filter: "sepia(100%)" }}
              onClick={() => applyFilter("sepia(100%)")}
            ></div>
            <p className="text-xs text-center">Sepia</p>
          </div>
          <div className="flex-shrink-0 w-20">
            <div
              className="h-20 bg-gray-200 rounded-md mb-1 overflow-hidden hover:ring-2 hover:ring-indigo-500 transition-all cursor-pointer"
              style={{ filter: "blur(2px)" }}
              onClick={() => applyFilter("blur(2px)")}
            ></div>
            <p className="text-xs text-center">Blur</p>
          </div>
          <div className="flex-shrink-0 w-20">
            <div
              className="h-20 bg-amber-100 rounded-md mb-1 overflow-hidden hover:ring-2 hover:ring-indigo-500 transition-all cursor-pointer"
              onClick={() => applyFilter("brightness(1.2) saturate(1.2)")}
            ></div>
            <p className="text-xs text-center">Warm</p>
          </div>
          <div className="flex-shrink-0 w-20">
            <div
              className="h-20 bg-blue-100 rounded-md mb-1 overflow-hidden hover:ring-2 hover:ring-indigo-500 transition-all cursor-pointer"
              onClick={() => applyFilter("brightness(0.8) saturate(1.2)")}
            ></div>
            <p className="text-xs text-center">Cool</p>
          </div>
          <div className="flex-shrink-0 w-20">
            <div
              className="h-20 bg-gray-800 rounded-md mb-1 overflow-hidden hover:ring-2 hover:ring-indigo-500 transition-all cursor-pointer"
              style={{ filter: "grayscale(100%) brightness(0.5)" }}
              onClick={() => applyFilter("grayscale(100%) brightness(0.5)")}
            ></div>
            <p className="text-xs text-center">B&W</p>
          </div>
          <div className="flex-shrink-0 w-20">
            <div
              className="h-20 bg-amber-200 rounded-md mb-1 overflow-hidden hover:ring-2 hover:ring-indigo-500 transition-all cursor-pointer"
              style={{ filter: "brightness(0.8) contrast(1.2)" }}
              onClick={() => applyFilter("brightness(0.8) contrast(1.2)")}
            ></div>
            <p className="text-xs text-center">Vintage</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditorCanvas;
