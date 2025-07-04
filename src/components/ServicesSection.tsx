import React from 'react';
import { Camera, Video, Edit3, Palette, Film, Heart, Sparkles, Star } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Wedding Cinematography",
      description: "Capturing the magic of your special day with cinematic storytelling that preserves every precious moment for eternity.",
      features: ["Full ceremony coverage", "Reception highlights", "Drone footage", "Same-day edit"],
      color: "emerald",
      gradient: "from-emerald-500 to-green-600"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Brand Storytelling",
      description: "Crafting compelling visual narratives that connect your brand with audiences on an emotional level and drive engagement.",
      features: ["Brand videos", "Commercial content", "Social media reels", "Product showcase"],
      color: "green",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: <Edit3 className="w-8 h-8" />,
      title: "Video Editing",
      description: "Post-production excellence with color grading, sound design, and seamless storytelling that brings your vision to life.",
      features: ["Color correction", "Audio enhancement", "Motion graphics", "Final delivery"],
      color: "teal",
      gradient: "from-teal-500 to-green-600"
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: "Documentary Projects",
      description: "Authentic storytelling for documentaries, interviews, and passion projects that matter and make a lasting impact.",
      features: ["Interview setups", "B-roll footage", "Narrative structure", "Sound recording"],
      color: "emerald",
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Music Videos",
      description: "Creative visual concepts that bring music to life with artistic flair, technical precision, and innovative storytelling.",
      features: ["Creative concepts", "Multi-camera setup", "Special effects", "Rhythm editing"],
      color: "green",
      gradient: "from-green-600 to-emerald-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Personal Projects",
      description: "Collaborative approach to passion projects that push creative boundaries and tell meaningful stories with authenticity.",
      features: ["Creative collaboration", "Custom concepts", "Flexible scheduling", "Artistic freedom"],
      color: "teal",
      gradient: "from-teal-600 to-green-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100 relative overflow-hidden">
      {/* Enhanced Background with Animated Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-green-800/20"></div>
        <img 
          src="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Nature background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-green-300/20 rounded-full blur-lg animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-emerald-100/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-teal-200/20 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-emerald-600 mr-3 animate-pulse" />
            <Star className="w-6 h-6 text-green-500 animate-spin" style={{ animationDuration: '3s' }} />
            <Sparkles className="w-8 h-8 text-emerald-600 ml-3 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 transform hover:scale-105 transition-transform duration-300">
            My Services
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-green-600 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From intimate moments to grand celebrations, I bring stories to life through the art of cinematography 
            and visual storytelling with passion, precision, and creative excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 hover:rotate-1 overflow-hidden border border-emerald-100/50"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
              
              <div className="p-8">
                {/* Icon with Enhanced Animation */}
                <div className={`text-${service.color}-600 mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  <div className="relative">
                    {service.icon}
                    <div className={`absolute inset-0 bg-${service.color}-400/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300`}></div>
                  </div>
                </div>
                
                <h3 className={`text-2xl font-bold text-gray-900 mb-4 group-hover:text-${service.color}-700 transition-colors duration-300`}>
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Enhanced Feature List */}
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-center text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`}></div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Call to Action */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <button className={`text-${service.color}-600 hover:text-${service.color}-700 font-semibold text-sm flex items-center group-hover:translate-x-2 transition-all duration-300`}>
                    Learn More
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                </div>
              </div>
              
              {/* Hover Overlay Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
            </div>
          ))}
        </div>
        
        {/* Call to Action Section */}
        <div className="text-center mt-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-2xl mx-auto border border-emerald-100/50">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Create Something Amazing?</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Let's collaborate to bring your vision to life with professional cinematography and storytelling.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;