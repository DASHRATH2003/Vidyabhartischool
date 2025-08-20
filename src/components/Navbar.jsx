import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../assets/Emblemlogo.jpg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="w-full">
      {/* Top Blue Bar */}
      <div className="w-full h-1 bg-blue-600"></div>
      
      {/* Red Bar with EVENTS - Mobile Optimized */}
      <div className="w-full bg-red-800 h-12 flex items-center relative">
        <div className="bg-orange-500 text-white px-3 md:px-6 py-2 flex items-center gap-2 h-full relative cursor-pointer hover:bg-orange-600 transition-colors">
          <svg className="w-3 h-3 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
          <span className="font-bold text-xs md:text-base">EVENTS</span>
          <div className="absolute right-0 top-0 w-0 h-0 border-l-[12px] md:border-l-[20px] border-l-orange-500 border-t-[48px] border-t-transparent border-b-[48px] border-b-transparent"></div>
        </div>
      </div>
      
      {/* White Bar with Sub-Navigation - Mobile Optimized */}
      <div className="w-full bg-white py-2 md:py-3 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-2 md:px-4">
          <div className="hidden md:flex items-center justify-center space-x-6 text-sm text-gray-700">
            <a href="#" className="hover:text-red-800 cursor-pointer">Management</a>
            <div className="w-px h-4 bg-gray-300"></div>
            <a href="#" className="hover:text-red-800 cursor-pointer">Admission</a>
            <div className="w-px h-4 bg-gray-300"></div>
            <a href="#" className="hover:text-red-800 cursor-pointer">School Info</a>
            <div className="w-px h-4 bg-gray-300"></div>
            <a href="#" className="hover:text-red-800 cursor-pointer">Vision & Mission</a>
            <div className="w-px h-4 bg-gray-300"></div>
            <a href="#" className="hover:text-red-800 cursor-pointer">Our Staff</a>
            <div className="w-px h-4 bg-gray-300"></div>
            <a href="#" className="hover:text-red-800 cursor-pointer">Admin Login</a>
            <div className="w-px h-4 bg-gray-300"></div>
            <a href="#" className="hover:text-red-800 cursor-pointer">Student Login</a>
            <div className="w-px h-4 bg-gray-300"></div>
            <a href="#" className="hover:text-red-800 cursor-pointer">Carrier</a>
          </div>
          {/* Mobile Sub Navigation - Fixed Layout */}
          <div className="md:hidden grid grid-cols-4 gap-2 text-xs text-gray-700">
            <a href="#" className="hover:text-red-800 cursor-pointer text-center py-1">Management</a>
            <a href="#" className="hover:text-red-800 cursor-pointer text-center py-1">Admission</a>
            <a href="#" className="hover:text-red-800 cursor-pointer text-center py-1">School Info</a>
            <a href="#" className="hover:text-red-800 cursor-pointer text-center py-1">Staff</a>
          </div>
        </div>
      </div>
      
      {/* White Bar with Logo and Contact Info - Mobile Optimized */}
      <div className="w-full bg-white py-4 md:py-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-2 md:px-4">
          {/* Mobile Layout */}
          <div className="md:hidden">
            {/* Logo Section - Mobile */}
            <div className="flex items-center justify-center mb-4">
              <Link to="/" className="flex items-center space-x-3 cursor-pointer">
                <div className="relative">
                  <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center overflow-hidden">
                    <img src={logoImage} alt="School Logo" className="w-12 h-12 object-cover rounded-full" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <div className="text-center">
                  <span>Vidya Bharati Shikshna Kendra </span>
                  <div className="text-xl font-bold text-red-800">VIDYA BHARATI </div>
                  <div className="text-lg font-bold text-blue-600"> ENGLISH MEDIUM PRIMARY SCHOOL -(CBSC)</div>
                  <div className="text-lg font-bold text-blue-600"> RAICHUR</div>
                </div>
              </Link>
            </div>
            
            {/* Contact Info Section - Mobile */}
            <div className="space-y-3">
              {/* Call Info */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-800">CALL :</div>
                  <div className="text-sm text-blue-600">+91 8532-221980
                  </div>
                </div>
              </div>
              
              {/* Email Info */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-800">EMAIL :</div>
                  <div className="text-sm text-blue-600 break-all">vbskcbse2014@gmail.com</div>
                </div>
              </div>
              
              {/* Affiliation Info */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-800">AFFILIATED TO CBSE</div>
                  <div className="text-sm text-blue-600">AFF NO.: 830589 | CODE: 45582</div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between">
            {/* Logo Section */}
            <Link to="/" className="flex items-center space-x-4 cursor-pointer">
              <div className="relative">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center overflow-hidden">
                  <img src={logoImage} alt="School Logo" className="w-14 h-14 object-cover rounded-full" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <div >
                <span>Vidya Bharati Shikshna Kendra </span>
                <div className="text-xl font-bold text-red-800">VIDYA BHARATI </div>
                <div className="text-lg font-bold text-blue-600"> ENGLISH MEDIUM PRIMARY SCHOOL -(CBSC) </div>
                <div className="text-lg font-bold text-blue-600"> RAICHUR</div>
              </div>
            </Link>
            
            {/* Contact Info Section - Desktop */}
            <div className="flex items-center space-x-8">
              {/* Call Info */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-800">CALL :</div>
                  <div className="text-xs text-gray-600">+91 8532-221980                  </div>
                </div>
              </div>
              
              {/* Email Info */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-800">EMAIL :</div>
                  <div className="text-xs text-gray-600">vbskcbse2014@gmail.com</div>
                </div>
              </div>
              
              {/* Affiliation Info */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-800">AFFILIATED TO CBSE</div>
                  <div className="text-xs text-gray-600">AFF NO.: 830589 | CODE: 45582</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation Bar - Dark Red */}
      <div className="w-full bg-red-800 py-3 md:py-4">
        <div className="max-w-7xl mx-auto px-2 md:px-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <Link 
                to="/" 
                className={`font-bold text-sm transition-colors cursor-pointer ${
                  location.pathname === '/' ? 'text-orange-300' : 'text-white hover:text-orange-300'
                }`}
              >
                HOME
              </Link>
              <div className="flex items-center space-x-1">
                <Link 
                  to="/about" 
                  className={`font-bold text-sm transition-colors cursor-pointer ${
                    location.pathname === '/about' ? 'text-orange-300' : 'text-white hover:text-orange-300'
                  }`}
                >
                  ABOUT US
                </Link>
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex items-center space-x-1">
                <Link 
                  to="/admission" 
                  className={`font-bold text-sm transition-colors cursor-pointer ${
                    location.pathname === '/admission' ? 'text-orange-300' : 'text-white hover:text-orange-300'
                  }`}
                >
                  ADMISSION
                </Link>
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <Link 
                to="/facilities" 
                className={`font-bold text-sm transition-colors cursor-pointer ${
                  location.pathname === '/facilities' ? 'text-orange-300' : 'text-white hover:text-orange-300'
                }`}
              >
                FACILITIES
              </Link>
              <Link 
                to="/disclosure" 
                className={`font-bold text-sm transition-colors cursor-pointer ${
                  location.pathname === '/disclosure' ? 'text-orange-300' : 'text-white hover:text-orange-300'
                }`}
              >
                MANDATORY PUBLIC DISCLOSURE
              </Link>
              <Link 
                to="/gallery" 
                className={`font-bold text-sm transition-colors cursor-pointer ${
                  location.pathname === '/gallery' ? 'text-orange-300' : 'text-white hover:text-orange-300'
                }`}
              >
                GALLERY
              </Link>
              <Link 
                to="/contact" 
                className={`font-bold text-sm transition-colors cursor-pointer ${
                  location.pathname === '/contact' ? 'text-orange-300' : 'text-white hover:text-orange-300'
                }`}
              >
                CONTACT US
              </Link>
            </div>
            
            {/* Search Icon */}
            <div className="flex items-center">
              <svg className="w-5 h-5 text-white cursor-pointer hover:text-orange-300 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-3">
                <Link 
                  to="/" 
                  className={`font-semibold text-sm transition-colors cursor-pointer ${
                    location.pathname === '/' ? 'text-orange-300' : 'text-white hover:text-orange-300'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  HOME
                </Link>
                <Link 
                  to="/about" 
                  className={`font-semibold text-sm transition-colors cursor-pointer ${
                    location.pathname === '/about' ? 'text-orange-300' : 'text-white hover:text-orange-300'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ABOUT US
                </Link>
                <Link 
                  to="/admission" 
                  className={`font-semibold text-sm transition-colors cursor-pointer ${
                    location.pathname === '/admission' ? 'text-orange-300' : 'text-white hover:text-orange-300'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ADMISSION
                </Link>
                <Link 
                  to="/facilities" 
                  className={`font-semibold text-sm transition-colors cursor-pointer ${
                    location.pathname === '/facilities' ? 'text-orange-300' : 'text-white hover:text-orange-300'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FACILITIES
                </Link>
                <Link 
                  to="/disclosure" 
                  className={`font-semibold text-sm transition-colors cursor-pointer ${
                    location.pathname === '/disclosure' ? 'text-orange-300' : 'text-white hover:text-orange-300'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  MANDATORY PUBLIC DISCLOSURE
                </Link>
                <Link 
                  to="/gallery" 
                  className={`font-semibold text-sm transition-colors cursor-pointer ${
                    location.pathname === '/gallery' ? 'text-orange-300' : 'text-white hover:text-orange-300'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  GALLERY
                </Link>
                <Link 
                  to="/contact" 
                  className={`font-semibold text-sm transition-colors cursor-pointer ${
                    location.pathname === '/contact' ? 'text-orange-300' : 'text-white hover:text-orange-300'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  CONTACT US
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar; 