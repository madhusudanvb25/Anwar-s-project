import React from 'react';
import { Heart, Camera } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Camera className="w-8 h-8 text-emerald-400 mr-3" />
              <span className="text-2xl font-bold">Skandana Creations</span>
            </div>
            <p className="text-gray-400 mb-4">
              Storytelling beyond labels. Capturing emotions through cinematic vision.
            </p>
            <p className="text-sm text-gray-500">
              © 2024 Skandana Creations. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Wedding Cinematography</li>
              <li>Brand Storytelling</li>
              <li>Music Videos</li>
              <li>Documentary Projects</li>
              <li>Video Editing</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>anwar@skandana.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Available Worldwide</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-2 text-red-500" /> by Anwar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;