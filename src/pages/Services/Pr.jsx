import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaNewspaper, FaFireAlt, FaUserTie, FaRocket } from "react-icons/fa";
import Seo from "../../components/seo/Seo";
import { useInView } from "react-intersection-observer";
import background from '../../assets/bannerbg1.jpeg';
import Contactcomp from "../../components/Contactcomp";
import EnquiryModal from '../../components/Enquiry'; // Adjust the path if needed
const PR = () => {
  const location = useLocation();
  const [offsetY, setOffsetY] = useState(0);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const openEnquiry = () => setIsEnquiryOpen(true);
  const closeEnquiry = () => setIsEnquiryOpen(false);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log("PR Service Loaded");
    window.scrollTo(0, 0);
  }, []);

  const seoData = {
    title: `Public Relations (PR) Services | Digital PR Agency - Zentrix Media`,
    description: `Get famous for the right reasons. Modern digital PR focused on narrative control, SEO-driven storytelling, and real-time brand protection.`,
    keywords: ["digital PR", "public relations agency", "crisis management", "influencer relations", "brand narrative", "Zentrix Media"],
    href: `https://zentrix.media${location.pathname}`,
  };

  const headline = "Get Famous For the Right Reasons and Be the Talk of the Town";
  const subheadline = "The days of the dusty press release have become rather obsolete. Modern PR is about Digital Footprint and Narrative Control.";

  const detailedIntro = "It's not just about getting featured in the top publication and becoming the headlines, it's about what shows up when a potential investor or customer Googles your name. We blend traditional storytelling with SEO-driven PR to ensure your brand isn't just heard but understood correctly and respected.";

  const whatWeDeliver = [
    {
      icon: FaNewspaper,
      title: "Digital Storytelling",
      description: "Crafting angles journalists actually want to read."
    },
    {
      icon: FaFireAlt,
      title: "Crisis Management",
      description: "Putting out fires before they burn the house down."
    },
    {
      icon: FaUserTie,
      title: "Influencer Relations",
      description: "Connecting you with voices that matter, not just faces that look pretty."
    }
  ];

  const zentrixEdge = "We monitor brand sentiment in real-time across the web. If the vibe shifts, we know instantly and pivot the strategy before Monday morning.";

  return (
    <div className="font-sans bg-white">
      <Seo
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        href={seoData.href}
      />

      {/* Hero Header - Now matches Social.jsx style (dark overlay, white text, no parallax here) */}
      <header
        className="relative text-center py-20 px-4 md:px-8 bg-cover bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-6xl mx-auto pt-30">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 text-white leading-tight animate-fade-in-up">
            {headline}
          </h1>
           <p className="text-lg sm:text-xl md:text-2xl text-white/70 mb-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
            {subheadline}
          </p>
          <Link
           onClick={openEnquiry}
            className="inline-flex items-center px-8 py-4 bg-pink-600 text-white font-bold text-lg rounded-full hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse-slow relative z-10"
          >
            Control Your Narrative <FaRocket className="ml-2" />
          </Link>
        </div>
      </header>
<EnquiryModal isOpen={isEnquiryOpen} onClose={closeEnquiry} />
      {/* Detailed Intro Section - Now matches Social.jsx (light background, text left, image right) */}
  
      <section className="py-20 bg-blue-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image - moves to top on mobile */}
            <div className="rounded-3xl overflow-hidden shadow-2xl md:order-2">
              <img 
                src="https://images.pexels.com/photos/5380792/pexels-photo-5380792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Attention Economy in Action"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>

            {/* Text content */}
            <div className="space-y-8 md:order-1">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Modern Digital PR Mastery
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {detailedIntro}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver - Matches Social.jsx (3 items in one centered row with dividers) */}
      <section className="relative overflow-hidden py-14 md:py-10"
        style={{
          background: 'linear-gradient(180deg, #111488 0%, #0d1066 100%)',
        }}>
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 space-y-8 md:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
              What We Deliver
            </h2>
          </div>
          <div className="space-y-2 lg:space-y-4">
            {/* Single row for 3 items, centered */}
            <div className="flex flex-col lg:flex-row divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-white/20 lg:justify-center">
              {whatWeDeliver.map((item, index) => {
                const { ref, inView } = useInView({
                  triggerOnce: true,
                  threshold: 0.1,
                  rootMargin: '0px 0px -50px 0px'
                });
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    ref={ref}
                    className={`flex-1 p-4 md:p-6 transition-all duration-700 ${
                      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                    style={{
                      animationDelay: `${index * 200}ms`
                    }}
                  >
                    <div className="text-center space-y-3 group h-full flex flex-col justify-center">
                      <div className="flex justify-center">
                        <Icon className="text-3xl md:text-4xl text-pink-300 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-100 leading-relaxed text-sm md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* The Zentrix Edge - Matches Social.jsx (light subtle background, subtle fade-in) */}
      <section className="  p-12 md:p-16 text-center animate-slide-in bg-blue-900/10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Zentrix Edge
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-semibold leading-relaxed">
            {zentrixEdge}
          </p>
         
        </section>

      <Contactcomp />

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-slide-in { animation: slide-in 0.6s ease-out forwards; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default PR;