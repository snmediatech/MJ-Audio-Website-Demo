import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Star, Facebook, Instagram, Youtube } from 'lucide-react';
import { businessInfo } from '../mock';

export const Footer = () => {
  const socialLinks = [
    { 
      name: 'Facebook', 
      url: 'https://www.facebook.com/mjaudiotherealcinema/',
      icon: Facebook 
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/mjaudiotherealcinema/',
      icon: Instagram 
    },
    { 
      name: 'YouTube', 
      url: 'https://www.youtube.com/channel/UCzZFiPwtIlCVWIf9IE330VA',
      icon: Youtube 
    }
  ];

  return (
    <footer className="bg-black border-t border-lime-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="mb-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_mjaudiovision/artifacts/3t1khq80_MJ%20audio%20%281%29%20-%20Copy.png" 
                alt="MJ Audio Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Leading Home Theater and Cinema Audio-Video installation service provider in Tirunelveli.
            </p>
            <div className="flex items-center space-x-2 text-lime-500">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-white font-semibold">{businessInfo.rating}</span>
              <span className="text-gray-400 text-sm">Rating</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-400 hover:text-lime-500 transition-colors duration-300 text-sm">
                Home
              </Link>
              <Link to="/about" className="text-gray-400 hover:text-lime-500 transition-colors duration-300 text-sm">
                About
              </Link>
              <Link to="/solutions" className="text-gray-400 hover:text-lime-500 transition-colors duration-300 text-sm">
                Solutions
              </Link>
              <Link to="/cinema-design" className="text-gray-400 hover:text-lime-500 transition-colors duration-300 text-sm">
                Home Cinema Design
              </Link>
              <Link to="/portfolio" className="text-gray-400 hover:text-lime-500 transition-colors duration-300 text-sm">
                Portfolio
              </Link>
              <Link to="/brands" className="text-gray-400 hover:text-lime-500 transition-colors duration-300 text-sm">
                Our Brands
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-lime-500 transition-colors duration-300 text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-lime-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-400 text-sm">{businessInfo.address}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-lime-500 flex-shrink-0" />
                <a href={`tel:${businessInfo.phone}`} className="text-gray-400 hover:text-lime-500 transition-colors duration-300 text-sm">
                  {businessInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-lime-500 flex-shrink-0" />
                <p className="text-gray-400 text-sm">{businessInfo.hours}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-lime-900/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm">
            © 2025 MJ Audio. All rights reserved.
          </p>
          
          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-zinc-900 border border-lime-900/30 rounded-lg flex items-center justify-center text-gray-400 hover:text-lime-500 hover:border-lime-600/50 hover:bg-lime-600/10 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          <p className="text-gray-500 text-sm">
            Tirunelveli's Premier Home Theater Specialist
          </p>
        </div>
      </div>
    </footer>
  );
};
