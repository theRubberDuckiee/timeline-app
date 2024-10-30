// For zooming in and out
import React from 'react';

interface ZoomControlsProps {
  zoomLevel: number;
  setZoomLevel: React.Dispatch<React.SetStateAction<number>>;
}

const ZoomControls: React.FC<ZoomControlsProps> = ({ zoomLevel, setZoomLevel }) => {
  return (
    <div>
      <button onClick={() => setZoomLevel(Math.max(1, zoomLevel - 1))}>-</button>
      <span>Zoom Level: {zoomLevel}</span>
      <button onClick={() => setZoomLevel(zoomLevel + 1)}>+</button>
    </div>
  );
};

export default ZoomControls;