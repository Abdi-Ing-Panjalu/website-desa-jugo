import React from 'react';

const Line = () => {
  return (
    <div className="relative flex items-center mt-8">
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="flex-shrink mx-4 text-gray-500 font-semibold text-lg">✦</span> {/* You can replace this with any icon or text */}
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
};

export default Line;
