import React from 'react';
import { Camera, Award, Users, Clock } from 'lucide-react';

const AboutSection: React.FC = () => {
  const stats = [
    { icon: <Camera className="w-6 h-6" />, value: '50+', label: 'Projects Completed' },
    { icon: <Award className="w-6 h-6" />, value: '3+', label: 'Years Experience' },
    { icon: <Users className="w-6 h-6" />, value: '30+', label: 'Happy Clients' },
    { icon: <Clock className="w-6 h-6" />, value: '24/7', label: 'Support Available' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-emerald-900 to-green-800 text-white relative">
      {/* Background Nature Images */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Nature background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About Anwar
            </h2>
            <p className="text-xl text-emerald-100 mb-6">
             Hi, I’m Anwar—a Cinematographer and Visual Storyteller based in Bangalore.

My journey into filmmaking began with curiosity and a camera. While working as an engineer in a defense manufacturing company, I followed my passion for storytelling on the side—capturing moments, experimenting with visuals, and building my understanding of the craft. In 2022, I took a leap of faith and pursued formal training at Bangalore Film Academy, which laid the foundation for my professional career behind the lens.

Since then, I’ve worked across independent short films, assisted on a Telugu feature (awaiting release), and created impactful social media content for Karnataka’s political leaders during my time at Vote Market. Currently, I’m with MERAGI as a Cinematographer and Editor, crafting cinematic wedding documentaries that balance emotional storytelling with stylized, vibrant visuals.

I approach every frame with intent—to create work that feels timeless and to keep exploring new genres and stories yet to be told.
            </p>
            <p className="text-lg text-emerald-200 mb-6">
              Though much of my recent work has been in weddings and social formats like reels, 
              my vision isn't confined to a genre. I'm drawn to any story that has soul — whether 
              it's a brand narrative, a documentary piece, a music video, or a passion project.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-emerald-400 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-emerald-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://pub-961c95f591224066973079e771269d48.r2.dev/Anwar's-certificate.jpg"
                alt="Anwar - Cinematographer"
                className="w-full rounded-lg shadow-2xl"
              />
              <img
                src="https://pub-961c95f591224066973079e771269d48.r2.dev/Anwar's-award.jpg"
                alt="Anwar - Cinematographer"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 rounded-lg transform rotate-3 -z-10"></div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold mb-6">My Vision</h3>
          <p className="text-xl text-emerald-100 max-w-4xl mx-auto">
            This portfolio is a reflection of where I am and where I'm headed. I'm looking forward 
            to collaborating on projects that challenge the norm, push creative boundaries, and 
            connect across cultures and mediums.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;