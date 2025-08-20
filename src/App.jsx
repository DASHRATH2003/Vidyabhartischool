import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Admission from './components/Admission'
import Facilities from './components/Facilities'
import Disclosure from './components/Disclosure'
import Gallery from './components/Gallery'
import ContactUs from './components/ContactUs'

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <AboutUs />;
      case 'admission':
        return <Admission />;
      case 'facilities':
        return <Facilities />;
      case 'disclosure':
        return <Disclosure />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <ContactUs />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App