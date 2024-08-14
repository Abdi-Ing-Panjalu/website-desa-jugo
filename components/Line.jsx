import React from 'react';

const Line = () => {
  return (
    <div className="relative flex items-center justify-center w-full py-8">
      {/* Line */}
      <div className="w-full h-[2px] bg-gray-400"></div>

      {/* Circle */}
      <div className="absolute">
        <div className="w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default Line;
