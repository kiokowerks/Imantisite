import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div id="home" className="relative bg-gradient-to-r from-[#282c64] to-[#363b7d] min-h-screen flex items-center">
      <div className="absolute inset-0 bg-white/5">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978"
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold text-white">
            <span className="block mb-2">Empowering Start-ups & MSMEs</span>
            <span className="block text-[#9064ac]">for Sustainable Growth</span>
          </h1>
          
          <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl text-gray-300">
            Founded in 2020, Imanti Consulting delivers tailored solutions, training, and consultancy services to help entrepreneurs thrive.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
            <a
              href="#about"
              className="rounded-md bg-[#282c64] px-6 sm:px-8 py-3 text-base font-medium text-white hover:bg-[#363b7d] md:py-4 md:text-lg flex items-center justify-center gap-2 transition duration-300 transform hover:scale-105"
            >
              Learn More About Us
              <ArrowRight className="h-5 w-5" />
            </a>
            
            <a
              href="#services"
              className="rounded-md bg-white px-6 sm:px-8 py-3 text-base font-medium text-[#282c64] hover:bg-gray-100 md:py-4 md:text-lg flex items-center justify-center gap-2 transition duration-300 transform hover:scale-105"
            >
              Explore Services
              <ArrowRight className="h-5 w-5" />
            </a>
            
            <button
              onClick={() => navigate('/tools')}
              className="rounded-md bg-transparent border-2 border-white px-6 sm:px-8 py-3 text-base font-medium text-white hover:bg-white hover:text-[#282c64] md:py-4 md:text-lg flex items-center justify-center gap-2 transition duration-300 transform hover:scale-105"
            >
              Business Tools
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;