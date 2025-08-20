import React from 'react';

const Navbar = ({ setCurrentPage }) => {
  return (
    <div className="w-full">
      {/* Top Blue Bar */}
      <div className="w-full h-1 bg-blue-600"></div>
      
      {/* Red Bar with EVENTS */}
      <div className="w-full bg-red-800 h-12 flex items-center relative">
        <div className="bg-orange-500 text-white px-6 py-2 flex items-center gap-2 h-full relative cursor-pointer hover:bg-orange-600 transition-colors">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
          <span className="font-semibold">EVENTS</span>
          <div className="absolute right-0 top-0 w-0 h-0 border-l-[20px] border-l-orange-500 border-t-[48px] border-t-transparent border-b-[48px] border-b-transparent"></div>
        </div>
      </div>
      
      {/* White Bar with Sub-Navigation */}
      <div className="w-full bg-white py-3 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-700">
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
        </div>
      </div>
      
      {/* White Bar with Logo and Contact Info */}
      <div className="w-full bg-white py-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-4 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <div className="relative">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <div>
                
                <div className="text-2xl font-bold text-red-800"> VIDYA BHARATI ENGLISH </div>
                <div className="w-16 h-0.5 bg-gray-400 my-1"></div>
                <div className="text-xl font-bold text-blue-600"> MEDIUM PRIMARY SCHOOL</div>
              </div>
            </div>
            
            {/* Contact Info Section */}
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
                  <div className="text-xs text-gray-600">+91 63619 66567, +91 94499 59786</div>
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
                  <div className="text-xs text-gray-600"> vbskcbse2014@gmail.com</div>
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
                  <div className="text-xs text-gray-600">AFF NO.: 831506 | CODE: 47185</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation Bar - Dark Red */}
      <div className="w-full bg-red-800 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <a 
                href="#" 
                className="text-white font-bold text-sm hover:text-orange-300 transition-colors cursor-pointer"
                onClick={() => setCurrentPage('home')}
              >
                HOME
              </a>
              <div className="flex items-center space-x-1">
                <a 
                  href="#" 
                  className="text-white font-bold text-sm hover:text-orange-300 transition-colors cursor-pointer"
                  onClick={() => setCurrentPage('about')}
                >
                  ABOUT US
                </a>
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex items-center space-x-1">
                <a 
                  href="#" 
                  className="text-white font-bold text-sm hover:text-orange-300 transition-colors cursor-pointer"
                  onClick={() => setCurrentPage('admission')}
                >
                  ADMISSION
                </a>
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <a 
                href="#" 
                className="text-white font-bold text-sm hover:text-orange-300 transition-colors cursor-pointer"
                onClick={() => setCurrentPage('facilities')}
              >
                FACILITIES
              </a>
              <a 
                href="#" 
                className="text-white font-bold text-sm hover:text-orange-300 transition-colors cursor-pointer"
                onClick={() => setCurrentPage('disclosure')}
              >
                MANDATORY PUBLIC DISCLOSURE
              </a>
              <a 
                href="#" 
                className="text-white font-bold text-sm hover:text-orange-300 transition-colors cursor-pointer"
                onClick={() => setCurrentPage('gallery')}
              >
                GALLERY
              </a>
              <a 
                href="#" 
                className="text-white font-bold text-sm hover:text-orange-300 transition-colors cursor-pointer"
                onClick={() => setCurrentPage('contact')}
              >
                CONTACT US
              </a>
            </div>
            
            {/* Search Icon */}
            <div className="flex items-center">
              <svg className="w-5 h-5 text-white cursor-pointer hover:text-orange-300 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar; 