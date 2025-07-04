import React from 'react';
import { X, ZoomIn, ZoomOut, RotateCw } from 'lucide-react';

interface ImageViewerProps {
  src: string;
  title: string;
  onClose: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ src, title, onClose }) => {
  const [zoom, setZoom] = React.useState(1);
  const [rotation, setRotation] = React.useState(0);

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleRotate = () => {
    setRotation(prev => prev + 90);
  };

  const handleReset = () => {
    setZoom(1);
    setRotation(0);
  };

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
      <div className="relative w-full h-full flex items-center justify-center p-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Controls */}
        <div className="absolute top-4 left-4 flex space-x-2 z-10">
          <button
            onClick={handleZoomIn}
            className="bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
            title="Zoom In"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
          <button
            onClick={handleZoomOut}
            className="bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
            title="Zoom Out"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          <button
            onClick={handleRotate}
            className="bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
            title="Rotate"
          >
            <RotateCw className="w-5 h-5" />
          </button>
          <button
            onClick={handleReset}
            className="bg-black/60 text-white px-3 py-2 rounded-full hover:bg-black/80 transition-colors text-sm"
            title="Reset"
          >
            Reset
          </button>
        </div>

        {/* Image */}
        <div className="max-w-full max-h-full overflow-auto">
          <img
            src={src}
            alt={title}
            className="max-w-none transition-transform duration-300 cursor-move"
            style={{
              transform: `scale(${zoom}) rotate(${rotation}deg)`,
              transformOrigin: 'center'
            }}
            draggable={false}
          />
        </div>

        {/* Title */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-gray-300 mt-1">
            Zoom: {Math.round(zoom * 100)}% | Rotation: {rotation}°
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;