import { useRef } from "react";
import { usePhotoStore } from "../store/usePhotoStore";

export const useEditorCanvas = () => {
  const image = usePhotoStore((state) => state.image);
  const zoom = usePhotoStore((state) => state.zoom);
  const brightness = usePhotoStore((state) => state.brightness);
  const contrast = usePhotoStore((state) => state.contrast);
  const saturation = usePhotoStore((state) => state.saturation);
  const filter = usePhotoStore((state) => state.filter);
  const crop = usePhotoStore((state) => state.crop);
  const stickers = usePhotoStore((state) => state.stickers);
  const lightFlare = usePhotoStore((state) => state.lightFlare);
  const shadow = usePhotoStore((state) => state.shadow);
  const overlay = usePhotoStore((state) => state.overlay);
  const setZoom = usePhotoStore((state) => state.setZoom);
  const setFilter = usePhotoStore((state) => state.setFilter);
  const setBrightness = usePhotoStore((state) => state.setBrightness);
  const setContrast = usePhotoStore((state) => state.setContrast);
  const setSaturation = usePhotoStore((state) => state.setSaturation);
  const updateStickerPosition = usePhotoStore(
    (state) => state.updateStickerPosition
  );
  const resetCanvas = usePhotoStore((state) => state.resetCanvas);

  const canvasRef = useRef(null);
  const stickerRefs = useRef([]);

  const handleZoomIn = () => {
    setZoom(zoom + 0.1);
  };

  const handleZoomOut = () => {
    setZoom(zoom - 0.1);
  };

  const applyFilter = (filter) => {
    if (filter === "none") {
      setBrightness(100);
      setContrast(100);
      setSaturation(100);
      setFilter("none");
    } else {
      setFilter(filter);
    }
  };

  const getCropStyle = () => {
    switch (crop) {
      case "1/1":
        return { width: "100%", height: "100%" };
      case "16/9":
        return { width: "100%", height: "56.25%" };
      case "4/3":
        return { width: "100%", height: "75%" };
      default:
        return { width: "100%", height: "100%" };
    }
  };

  const downloadImage = (format) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Set canvas dimensions
    canvas.width = 600;
    canvas.height = 300;

    // Load base image
    const img = new Image();
    img.src = image;
    img.onload = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.filter = `${filter} brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`;
      context.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Draw the light flare
      if (lightFlare) {
        context.globalCompositeOperation = "lighter";
        context.fillStyle = lightFlare.style;
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.globalCompositeOperation = "source-over";
      }

      // Draw the shadow
      if (shadow) {
        context.fillStyle = shadow.style;
        context.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Draw the overlay (ensure it loads before downloading)
      if (overlay) {
        const overlayImg = new Image();
        overlayImg.src = overlay;
        overlayImg.onload = () => {
          context.globalAlpha = 0.6; // Set opacity to 0.6
          context.drawImage(overlayImg, 0, 0, canvas.width, canvas.height);
          context.globalAlpha = 1;

          // Draw the stickers AFTER overlay
          stickers.forEach((sticker, index) => {
            const stickerImg = new Image();
            stickerImg.src = sticker.icon;
            stickerImg.onload = () => {
              context.drawImage(
                stickerImg,
                sticker.position.x,
                sticker.position.y,
                100,
                100
              );
            };
          });

          // Wait for stickers to load, then download
          setTimeout(() => {
            const link = document.createElement("a");
            link.download = `image.${format}`;
            link.href = canvas.toDataURL(`image/${format}`);
            link.click();
          }, 300); // Short delay to ensure all images are rendered
        };
      } else {
        setTimeout(() => {
          const link = document.createElement("a");
          link.download = `image.${format}`;
          link.href = canvas.toDataURL(`image/${format}`);
          link.click();
        }, 300);
      }
    };
  };

  return {
    image,
    zoom,
    brightness,
    contrast,
    saturation,
    filter,
    crop,
    stickers,
    lightFlare,
    shadow,
    overlay,
    setZoom,
    setFilter,
    setBrightness,
    setContrast,
    setSaturation,
    updateStickerPosition,
    resetCanvas,
    canvasRef,
    stickerRefs,
    handleZoomIn,
    handleZoomOut,
    applyFilter,
    getCropStyle,
    downloadImage,
  };
};
