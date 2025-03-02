import React from "react";
import Sidebar from "./ui/Sidebar";
import EditorCanvas from "./ui/EditorCanvas";
import ElementsGallery from "./ui/ElementsGallery";

function PhotoEditor() {
  return (
    <>
      <div id="webcrumbs" className="w-full flex justify-center">
        <div className="w-full flex justify-center items-center">
          <div className="w-full bg-gray-50 font-sans rounded-lg shadow-xl">
            <div className="flex">
              <Sidebar />

              <EditorCanvas />

              <ElementsGallery />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhotoEditor;
