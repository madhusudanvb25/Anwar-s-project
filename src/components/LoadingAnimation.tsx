import React, { useState, useEffect } from 'react';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for fade out
    }, 10000); // 10 seconds visible + 0.5 second fade

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-gradient-to-br from-emerald-900 to-emerald-700 flex items-center justify-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Full Screen Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content */}
      <div className="text-center relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-fade-in">
          PEL FILMS
        </h1>
        <p className="text-2xl text-emerald-100 animate-fade-in-delay">
          Storytelling Beyond Labels
        </p>
        <div className="mt-8">
          <div className="w-16 h-1 bg-emerald-400 mx-auto animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;