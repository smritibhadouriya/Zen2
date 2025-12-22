// BannerSection.jsx
import { useState, useEffect } from 'react';
import Background from "../assets/imagesuse/baclground1.png";
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
      <section
        className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32"
        style={{
          backgroundImage: `url(${isMobile ? Mobileimage : Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Left Content */}
        <div className="relative z-10 w-full lg:w-1/2 space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto lg:mx-0">
          <p className="text-5xl lg:text-6xl font-bold text-white lg:text-gray-900 m-0 leading-tight">
            Zentrix Media
          </p>
          <p className="lg:text-gray-900 text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed px-2 lg:px-0">
            We are an AI-forward, 360° digital agency turning raw data into vibrant experiences. We help brands stop guessing and start growing.
          </p>
          <div className="flex justify-center lg:justify-start mt-4 sm:mt-6">
            <button
              onClick={openModal}
              className="px-6 py-3 sm:px-8 sm:py-4 md:px-10 bg-[#EF4B93] text-white rounded-full text-base sm:text-lg md:text-xl font-medium shadow-xl hover:bg-[#EF4B93]/90 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 whitespace-nowrap"
            >
              Discover More
            </button>
          </div>
        </div>
      </section>

      {/* Reusable Enquiry Modal */}
      <EnquiryModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}