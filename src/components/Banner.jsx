// BannerSection.jsx
import { useState, useEffect } from 'react';
import Background from "../assets/imagesuse/background.png";
import Mobileimage from '../assets/imagesuse/backgroundmobile.png';
import EnquiryModal from '../components/Enquiry'; // Adjust path as needed

export default function BannerSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1029);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <header
        className="relative text-center py-20 md:py-45 px-4 md:px-8 bg-cover bg-no-repeat bg-center overflow-hidden"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
           <div className="absolute inset-0 bg-black/50"></div>
        {/* Left Content */}
         <div className="relative max-w-6xl mx-auto">
           <h1 className="text-4xl md:text-5xl  font-semibold mb-6 text-white leading-tight animate-fade-in-up">
            Zentrix Media
          </h1>
          <p className="text-xl  text-white/90 mb-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
            We are an AI-forward, 360° digital agency turning raw data into vibrant experiences. We help brands stop guessing and start growing.
          </p>
         
            <button
              onClick={openModal}
              className="inline-flex items-center px-8 py-4 bg-pink-600 text-white font-bold text-lg rounded-full hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse-slow"
            >
              Discover More
            </button>
         
        </div>
      </header>

      {/* Reusable Enquiry Modal */}
      <EnquiryModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}