import React from 'react';
import './ScrollingText.css';

const ScrollingText = ({ text }) => {
  return (
    <div className="scrolling-text-wrapper overflow-hidden whitespace-nowrap font-montserrat">
      <div className="scrolling-text animate-scroll">{text}</div>
    </div>
  );
};

export default ScrollingText;
