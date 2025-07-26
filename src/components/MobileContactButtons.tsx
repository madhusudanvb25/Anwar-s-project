import React, { useState, useEffect } from 'react';
import { MessageCircle, Mail, Instagram, X } from 'lucide-react';

const MobileContactButtons: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show buttons after scrolling down 100px
      setIsVisible(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 md:hidden">
      {/* Expanded Buttons */}
      {isExpanded && (
        <div className="mb-4 space-y-3">
          <a
            href="https://wa.me/+919964758833?text=Hi%20Anwar,%20I'm%20interested%20in%20your%20cinematography%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors animate-fade-in"
          >
            <MessageCircle className="w-6 h-6" />
          </a>
          
          <a
            href="mailto:info@pelfilms.in?subject=Cinematography%20Inquiry"
            className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors animate-fade-in"
          >
            <Mail className="w-6 h-6" />
          </a>
          
          <a
            href="https://www.instagram.com/cinesoulanwar?igsh=NWZ3aGZuaGNuZzhr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition-colors animate-fade-in"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={toggleExpanded}
        className={`flex items-center justify-center w-14 h-14 bg-emerald-600 text-white rounded-full shadow-lg hover:bg-emerald-700 transition-all duration-300 ${
          isExpanded ? 'rotate-45' : ''
        }`}
      >
        {isExpanded ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default MobileContactButtons;