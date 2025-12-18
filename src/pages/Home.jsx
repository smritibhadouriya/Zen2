import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import {  FaArrowUp} from 'react-icons/fa';
import { testimonials } from '../Data/Testimonials';
import Seo from '../components/seo/Seo';
import OurServices from '../components/OurServices';
import Chooseus from '../components/Chooseus';
import AboutZentrix from '../components/AboutZentrix';
import OurProject from '../components/OurProject';
import OurClient from '../components/OurClient';
import Contactcomp from '../components/Contactcomp';

const Home = () => {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    const handleScroll = () => {
      if (!localStorage.getItem("subscribed-popup-shown")) {
        setShowSubscribe(true);
        localStorage.setItem("subscribed-popup-shown", "true");
        window.removeEventListener("scroll", handleScroll);
      }
      // Show scroll-to-top button after scrolling past the banner (approx. 500px)
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Seo
        title="Zentrix | Digital Marketing Agency - SEO, PPC & Social Media"
        description="Transform your business with Zentrix's award-winning digital marketing services. Expert SEO, PPC, social media marketing, and content strategy. 500+ clients served, 7+ years of excellence. Start growing today!"
        keywords={[
          "digital marketing agency",
          "Zentrix",
          "SEO services",
          "PPC advertising",
          "social media marketing",
          "content marketing agency",
          "digital marketing company",
          "online advertising",
          "brand strategy",
          "lead generation services",
          "e-commerce marketing",
          "B2B marketing agency",
          "digital transformation",
          "marketing ROI optimization"
        ]} 
        href="https://zentrix.media/"
      />
      <Banner />
    <Chooseus />
<AboutZentrix />
    <Contactcomp />

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-4 bg-pink-600 text-white rounded-full shadow-lg transition-opacity duration-300 hover:bg-pink-700 focus:outline-none ${
          showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Scroll to top of the page"
      >
        <FaArrowUp size={20} />
      </button>
    </div>
  );
};

export default Home;