import React, { useState } from 'react';
import ZoomControls from './ZoomControls';
import Timeline from './Timeline';

interface TimelineItem {
  date: Date;
  type: string;
  content: string;
}

const TimelineContainer: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [timelineItems, setTimelineItems] = useState<TimelineItem[]>([]);

  // Function to add a new timeline item
  const addTimelineItem = (date: Date, type: string, content: string) => {
    setTimelineItems([...timelineItems, { date, type, content }]);
  };

  return (
    <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
      {/* Pass state and setters as props to child components */}
      <ZoomControls zoomLevel={zoomLevel} setZoomLevel={setZoomLevel} />
      <Timeline
        zoomLevel={zoomLevel}
        timelineItems={timelineItems}
        addTimelineItem={addTimelineItem}
      />
    </div>
  );
};

export default TimelineContainer;