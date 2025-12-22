import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFunnelDollar, FaSearchDollar, FaChartPie, FaRocket } from "react-icons/fa";
import Seo from "../../components/seo/Seo";
import { useInView } from "react-intersection-observer";
import background from '../../assets/bannerbg1.jpeg';
import Contactcomp from "../../components/Contactcomp";
import EnquiryModal from '../../components/Enquiry'; // Adjust the path if needed

const Performance = () => {
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
    console.log("Performance Marketing Service Loaded");
    window.scrollTo(0, 0);
  }, []);

  const seoData = {
    title: `Performance Marketing Services | Data-Driven Ads Agency - Zentrix Media`,
    description: `Turn ₹1 into ₹4 with Zentrix Media's performance marketing. Creative strategy + first-party data for maximum ROI on Meta, Google, LinkedIn, and more.`,
    keywords: ["performance marketing", "paid ads agency", "PPC services", "conversion rate optimization", "Zentrix Media", "ROI focused marketing"],
    href: `https://zentrix.media${location.pathname}`,
  };

  const headline = "We Turn ₹1 into ₹4. It’s Not Magic, It’s Math.";
  const subheadline = "Performance marketing is often treated like a slot machine. At Zentrix Media, we treat it like the stock market.";
  const detailedIntro = "With third-party cookies crumbling, the \"spray and pray\" method is dead. We focus on Creative Strategy + First-Party Data. The algorithm favours the best creative; we build the ads the algorithm wants to show.";

  const whatWeDeliver = [
    {
      icon: FaFunnelDollar,
      title: "Paid Social",
      description: "Architect funnels across online channels, including Meta, Google, LinkedIn that convert cold traffic into loyal fans."
    },
    {
      icon: FaSearchDollar,
      title: "PPC & Google Ads",
      description: "Capturing high-intent users exactly when they are ready to buy."
    },
    {
      icon: FaChartPie,
      title: "Conversion Rate Optimisation (CRO)",
      description: "Tweaking your landing pages because a 1% increase in conversion can double your profit."
    }
  ];

  const zentrixEdge = "Our bidding scripts work 24/7, optimizing your budget every single second. While your competitors sleep, we lower Cost Per Acquisition (CPA).";

  return (
    <div className="font-sans bg-white">
      <Seo
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        href={seoData.href}
      />
      {/* Hero Header - Matches Social exactly (dark overlay, white text) */}
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
            Scale Your ROI <FaRocket className="ml-2" />
          </Link>
        </div>
      </header>

      <EnquiryModal isOpen={isEnquiryOpen} onClose={closeEnquiry} />

      {/* Detailed Intro Section - Matches Social (light background, text left, image right) */}
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
              <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 leading-tight">
                Data-Driven Performance Mastery
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {detailedIntro}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver - Identical layout to Social (single centered row for 3 items) */}
      <section className="relative overflow-hidden py-14 md:py-20"
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

      {/* The Zentrix Edge - Matches Social (subtle fade-in on scroll) */}
      <section className="p-12 md:p-16 text-center animate-slide-in bg-blue-900/10">
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

export default Performance;