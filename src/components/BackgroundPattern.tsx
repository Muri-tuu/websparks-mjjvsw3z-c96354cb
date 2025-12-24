import React from 'react';

const BackgroundPattern: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-700"></div>
      
      {/* Animated Circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse-soft"></div>
      <div className="absolute top-1/3 right-20 w-24 h-24 bg-white/5 rounded-full animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white/5 rounded-full animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-white/10 rounded-full animate-pulse-soft" style={{ animationDelay: '0.5s' }}></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-white/20"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackgroundPattern;
