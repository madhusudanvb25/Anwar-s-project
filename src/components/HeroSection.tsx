import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Cinematic Storytelling",
      subtitle: "Capturing emotions through the lens",
      description: "Every frame tells a story. Every story deserves to be told beautifully with passion and precision.",
      image: "https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    },
    {
      title: "Wedding Cinematography",
      subtitle: "Preserving your most precious moments",
      description: "From the first look to the last dance, we capture the magic of your special day with timeless elegance.",
      image: "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    },
    {
      title: "Creative Vision",
      subtitle: "Beyond conventional boundaries",
      description: "Pushing creative limits to bring your vision to life with soul, authenticity, and artistic excellence.",
      image: "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            {slides[currentSlide].title}
          </h1>

          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-6"></div>

          <p className="text-xl md:text-2xl mb-4 text-emerald-200 animate-fade-in-delay">
            {slides[currentSlide].subtitle}
          </p>

          <p className="text-lg mb-8 max-w-2xl mx-auto animate-fade-in-delay-2">
            {slides[currentSlide].description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-3">
            <button
              onClick={scrollToPortfolio}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch My Work
            </button>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-emerald-400' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
