import React from 'react';

interface TimelineItemProps {
  type: string;
  content: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ type, content }) => {
  return (
    <div className="timeline-item">
      <span>{type === 'note' ? '📝' : '📷'}</span> {content}
    </div>
  );
};

export default TimelineItem;