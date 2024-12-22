import React from 'react';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Newsletter from './Newsletter';
import KwerksLogo from './ui/KwerksLogo';

const Footer = () => {
  return (
    <footer className="bg-[#003366] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Imanti</h3>
            <p className="text-gray-300">
              Empowering Start-ups & MSMEs for Sustainable Growth
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#9064ac] transition duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#9064ac] transition duration-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#9064ac] transition duration-300">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:info@imanti.co.ke" className="text-gray-300 hover:text-[#9064ac] transition duration-300">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#9064ac] transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-gray-300 hover:text-[#9064ac] transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-[#9064ac] transition duration-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-gray-300 hover:text-[#9064ac] transition duration-300">
                  Business Tools
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tailored-business-solutions" className="text-gray-300 hover:text-[#9064ac] transition duration-300">
                  Business Solutions
                </Link>
              </li>
              <li>
                <Link to="/business-support-services" className="text-gray-300 hover:text-[#9064ac] transition duration-300">
                  Support Services
                </Link>
              </li>
              <li>
                <Link to="/training-development" className="text-gray-300 hover:text-[#9064ac] transition duration-300">
                  Training and Development
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <Newsletter />
          </div>
        </div>
      </div>

      <div className="bg-black border-t border-white/20 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © 2025 Imanti Consulting. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-400">Powered by</span>
              <a 
                href="https://kwerks.net" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transform hover:scale-105 transition-transform duration-300"
              >
                <KwerksLogo />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;