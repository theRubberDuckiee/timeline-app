// For rendering different Zoom levels
import React from 'react';
import TimelineItem from './TimelineItem';

interface TimelineProps {
  zoomLevel: number;
  timelineItems: { date: Date; type: string; content: string }[];
  addTimelineItem: (date: Date, type: string, content: string) => void;
}

const Timeline: React.FC<TimelineProps> = ({ zoomLevel, timelineItems, addTimelineItem }) => {
  const renderTimeline = () => {
    if (zoomLevel >= 4) return <div>Days View</div>;
    if (zoomLevel === 3) return <div>Months View</div>;
    if (zoomLevel === 2) return <div>Years View</div>;
    return <div>Decades View</div>;
  };

  // Handle adding a new item
  const handleAddItem = () => {
    const content = prompt("Enter content for the item");
    if (content) addTimelineItem(new Date(), 'note', content);
  };

  return (
    <div onClick={handleAddItem} style={{ display: 'inline-block', padding: '1rem' }}>
      {renderTimeline()}
      {timelineItems.map((item, index) => (
        <TimelineItem key={index} type={item.type} content={item.content} />
      ))}
    </div>
  );
};

export default Timeline;