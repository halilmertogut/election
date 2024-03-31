// ScrollingText.js
import React from 'react';
import './ScrollingText.css'; // We will create this CSS file next

const ScrollingText = ({ text }) => {
  return (
    <div className="scrolling-text-container">
      <div className="scrolling-text">{text}</div>
    </div>
  );
};

export default ScrollingText;
