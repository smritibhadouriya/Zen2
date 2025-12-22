import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBullhorn, FaLightbulb, FaChartLine, FaUsers } from "react-icons/fa";
import { services } from "../Data/Services";
import Seo from "../components/seo/Seo";
import User from "../assets/floting/user.png";
import Phone_icon from "../assets/floting/phone_icon03.png";
import email2 from "../assets/floting/email2.png";
import Contactb from '../assets/floting/contact.png'
import locationicon from '../assets/floting/location.png'
import { useInView } from "react-intersection-observer";

const iconMap = {
  FaBullhorn: FaBullhorn,
  FaLightbulb: FaLightbulb,
  FaChartLine: FaChartLine,
  FaUsers: FaUsers,
};

const Service = () => {
   const [visibleFeatureIndex, setVisibleFeatureIndex] = useState(null);
  const location = useLocation();
  const servicePath = location.pathname.split("/").pop();
  const service = services.find(
    (s) => s.path.toLowerCase().replace(/\s+/g, "-") === servicePath
  ) || {
    name: "Service Not Found",
    path: "",
    description: "",
    image: "",
    BannerImage: "",
    details: {
      title: "Service Not Found",
      intro: "Sorry, the service you requested is not available.",
      detailedIntro:
        "Please explore our other services or contact us for more information.",
      features: [],
      process: [],
      benefits: [],
    },
  };

  const serviceInfo = service.details;

  useEffect(() => {
    console.log("Service:", service);
    console.log("Service Path:", servicePath);
    console.log("Features:", serviceInfo.features);
    window.scrollTo(0, 0);
  }, [service, servicePath]);

  const seoData = {
    title:
      serviceInfo.title === "Service Not Found"
        ? "Service Not Found - Zentrix Digital Marketing Agency"
        : `${serviceInfo.title} Services | Expert ${serviceInfo.title} Agency - Zentrix`,
    description:
      serviceInfo.title === "Service Not Found"
        ? "The service you requested is not available. Explore our comprehensive digital marketing services including SEO, PPC, social media marketing, and more at Zentrix."
        : `Professional ${serviceInfo.title.toLowerCase()} services that drive results. Our expert team delivers comprehensive ${serviceInfo.title.toLowerCase()} strategies with proven ROI. Contact us for a free consultation and grow your business today.`,
    keywords: serviceInfo.keywords || [
      `${serviceInfo.title.toLowerCase()} services`,
      `${serviceInfo.title.toLowerCase()} agency`,
      `${serviceInfo.title.toLowerCase()} company`,
      "digital marketing",
      "Zentrix",
      "business growth",
      "online marketing",
    ],
    href: `https://zentrix.media${location.pathname}`,
  };


  

  return (
    <div className="font-sans">
      <Seo
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        href={seoData.href}
      />
      {/* Header Section */}
      <header className="relative text-center py-16 md:py-20 px-4 md:px-8 w-full min-h-[400px] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={Phone_icon}
            alt="Floating decoration 1"
            className="absolute w-16 md:w-20 h-16 md:h-20 opacity-60 animate-float top-25 left-10 md:left-20"
          />
          <img
            src={email2}
            alt="Floating decoration 2"
            className="absolute w-12 md:w-16 h-12 md:h-16 opacity-30 animate-float-delayed bottom-24 right-20 md:right-60"
          />
          <img
            src={User}
            alt="Floating decoration 3"
            className="absolute w-20 md:w-24 h-20 md:h-24 opacity-80 animate-float bottom-5 left-1/4 md:left-1/3"
          />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 md:mb-8 relative z-10 tracking-tight lg:mt-15">
          {serviceInfo.title}
        </h1>
        <Link className="relative z-10 inline-block px-6 py-3 bg-gray-200 text-gray-800 font-medium text-base md:text-lg rounded-full hover:bg-gray-300 transition-all">
          <span className="text-gray-500">Home</span> / Service /{" "}
          {serviceInfo.title}
        </Link>
      </header>

      {/* Introduction Section */}
      <section className="px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-1">
        <div className="max-w-6xl mx-auto space-y-12">

           <img
                      src={locationicon}
                      alt="Floating decoration"
                      className="absolute w-16 md:w-20 opacity-60 animate-float top-150 left-10 md:left-60"
                    />
                    <img
                      src={Contactb}
                      alt="Floating decoration"
                      className="absolute w-12 md:w-16 opacity-100 animate-float-delayed top-125 right-20 md:right-40"
                    />
          {/* Hero Image with Pop */}
          <div className="flex justify-center">
            <img
              src={service.BannerImage || service.image || 'https://via.placeholder.com/400x300?text=Fallback+Image'}
              alt={`${serviceInfo.title} Image`}
              className="w-full md:w-3/5 lg:w-2/5 h-auto"
            />
          </div>

          {/* Why Us Section */}
          <div className="text-center space-y-6 px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-0">
            <h2 className="text-4xl md:text-5xl font-extrabold">
              Why We're the{" "}
              <span className="text-pink-500">{serviceInfo.title}</span> GOATs
            </h2>
            <p className="text-xl text-gray-800 leading-relaxed max-w-3xl mx-auto font-medium">
              {serviceInfo.detailedIntro}
            </p>
          </div>

          {/* Benefits Section */}
          <div className="text-center space-y-6 px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-8">
              What's <span className="text-blue-800">the Tea</span> on Our {serviceInfo.title} ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {serviceInfo.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-pink-400 flex items-center gap-3"
                >
                  <span className="text-2xl">🔥</span>
                  <p className="text-gray-800 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features Section */}
           <div className="text-center space-y-12 px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-10">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-8">
        {serviceInfo.title} <span className="text-pink-500">Features</span> That Glow
      </h2>
      <div className="space-y-16 max-w-5xl mx-auto">
        {serviceInfo.features.map((feature, index) => {
          const { ref, inView } = useInView({
            triggerOnce: false, // Allow multiple triggers for showing/hiding
            threshold: 0.5, // Trigger when 50% of the feature is in view
          });

          useEffect(() => {
            if (inView) {
              setVisibleFeatureIndex(index); // Set the currently visible feature
            }
          }, [inView, index]);

          const isEven = index % 2 === 0;
          const imageUrl = feature.image || `https://via.placeholder.com/400x300?text=Feature+${index + 1}`;

          return (
            <div
              key={index}
              ref={ref}
              className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 transition-all duration-1000 ${
                visibleFeatureIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 h-0 overflow-hidden'
              }`}
            >
              <div className="w-full">
                <img
                  src={imageUrl}
                  alt={feature.text}
                  className="w-full h-70 object-contain"
                />
              </div>
              <div className="w-full p-6 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  {feature.text}
                </h3>
                <p className="text-gray-700 text-center">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>

         {/* Process Section */}
<div className="text-center space-y-6 px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:pt-1 lg:pb-20">
  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-10">
    How We Make <span className="text-pink-500">{serviceInfo.title}</span> Pop Off
  </h2>

  <div className="max-w-6xl mx-auto flex flex-row flex-wrap justify-center gap-6">
    {serviceInfo.process.map((step, index) => (
      <div
        key={index}
        className="relative w-64 h-64 p-6 bg-white shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-start justify-center overflow-hidden"
      >
        {/* Wavy border */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 300 300"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 Q75,10 150,40 T300,40 L300,260 Q225,290 150,260 T0,260 Z"
            fill="white"
            stroke="#d1d5db"
            strokeWidth="2"
          />
        </svg>

        {/* Content on top */}
        <div className="relative z-10">
          <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
          <p className="text-gray-700 text-sm">{step.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>


        </div>
      </section>

      {/* Call to Action */}
      <div
        className="flex flex-col md:justify-center md:items-center md:p-8 gap-6 py-10 md:py-15 px-5 md:px-6 text-gray-300"
        style={{
          background: "linear-gradient(360deg, #111488 0%, #0d1066 100%)",
        }}
      >
        <h1 className="text-4xl font-bold mt-4 text-white">
          Don’t Just Dream It. Do It.
        </h1>
        <div className="text-lg max-w-2xl text-center">
          Explore how our {serviceInfo.title} services help you act fast, stay
          ahead, and grow smarter.
        </div>
        <Link
          href="/contact"
          className="inline-block bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-pink-700 transition-colors duration-300 transform hover:scale-105"
        >
          Contact Us <span className="ml-2">&rarr;</span>
        </Link>
      </div>
    </div>
  );
};

export default Service; // Ensure default export