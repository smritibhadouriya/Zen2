import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch, FaFileAlt, FaMapMarkerAlt, FaChartBar, FaRocket } from "react-icons/fa";
import Seo from "../../components/seo/Seo";
import { useInView } from "react-intersection-observer";
import background from '../../assets/bannerbg1.jpeg';
import Contactcomp from "../../components/Contactcomp";
import ParallaxBackground from "../../components/Parallex";

const SEO = () => {
  const location = useLocation();
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log("SEO Service Loaded");
    window.scrollTo(0, 0);
  }, []);

  const seoData = {
    title: `SEO Services | Search Engine Optimisation Agency - Zentrix Media`,
    description: `Invisible Brands Go Broke. Let’s Get You Found. Topical Authority, Technical SEO, Content Strategy & Local SEO that wins in the age of AI and SGE.`,
    keywords: ["seo services", "search engine optimisation", "topical authority", "technical seo", "local seo", "zentrix media", "AEO", "GEO"],
    href: `https://zentrix.media${location.pathname}`,
  };

  const headline = "Invisible Brands Go Broke. Let’s Get You Found.";
  const subheadline = "SEO isn't just stuffing keywords into a blog post anymore. It has evolved, and continues to do so every day.";
  const detailedIntro = "With the rise of Answer Engine Optimisation (AEO), Generative Engine Optimisation (GEO), Search Generative Experience (SGE) and AI answers, the game has changed. Today, SEO is all about Topical Authority. You need to prove to Google and the online audience that you are the expert in your domain. We focus on technical health and high-value content that answers the questions AI is asking, allowing your brand to be relevant, visible to every query that users have about your industry.";

  const whatWeDeliver = [
    {
      icon: FaSearch,
      title: "Technical SEO Audits",
      description: "Fixing the broken code that's killing your ranking."
    },
    {
      icon: FaFileAlt,
      title: "Content Strategy",
      description: "Specifically crafted content to satisfy user intent, and not just for search bots."
    },
    {
      icon: FaMapMarkerAlt,
      title: "Local SEO",
      description: "Dominating your immediate geography."
    },
    {
      icon: FaChartBar,
      title: "Ranking",
      description: "Getting your brand’s website right up there on the Search Engine Results Page (SERP)"
    }
  ];

  const zentrixEdge = "We analyse thousands of SERPs (Search Engine Results Pages) to reverse-engineer exactly what Google rewards in your specific niche right now.";

  const itemsCount = whatWeDeliver.length;
  const firstRowCount = itemsCount === 3 ? 3 : Math.ceil(itemsCount / 2);
  const secondRowCount = itemsCount - firstRowCount;

  return (
    <div className="font-sans bg-white">
      <Seo
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        href={seoData.href}
      />

      {/* Hero Header - Matching Social & Performance */}
      <header 
        className="relative text-center py-20 md:py-32 px-4 md:px-8 bg-cover bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: `center ${offsetY * 0.4}px`,
        }}
      >
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="relative max-w-6xl mx-auto pt-30">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6 text-gray-900 leading-tight animate-fade-in-up">
            {headline}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
            {subheadline}
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-4 bg-pink-600 text-white font-bold text-lg rounded-full hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse-slow relative z-10"
          >
            Get Found Now <FaRocket className="ml-2" />
          </Link>
          <div className="mt-12 relative z-10">
            <Link className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
              Home / Services / Search Engine Optimisation (SEO)
            </Link>
          </div>
        </div>
      </header>

      {/* Detailed Intro with Parallax - Matching Social & Performance */}
      <section className="relative overflow-hidden min-h-screen">
        <ParallaxBackground speed={0.6} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen">
            <div className="order-2 lg:order-1 space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
                Mastering Topical Authority in the AI Era
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {detailedIntro}
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://webseowrite.pk/wp-content/uploads/2025/07/A-man-use-computer-to-search-the-topic-of-Deep-SEO-and-AI-Powered-Search-in-2025.jpg.webp"
                alt="SEO Expert Mastering Topical Authority in the AI Era"
                className="w-full rounded-3xl shadow-2xl object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver - Smart adaptive layout (4 items → 2+2, centered on desktop) */}
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
            {/* First Row */}
            <div className="flex flex-col lg:flex-row divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-white/20 lg:justify-center">
              {whatWeDeliver.slice(0, firstRowCount).map((item, index) => {
                const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    ref={ref}
                    className={`flex-1 p-4 md:p-6 transition-all duration-700 ${
                      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="text-center space-y-3 group h-full flex flex-col justify-center">
                      <div className="flex justify-center">
                        <Icon className="text-3xl md:text-4xl text-pink-300 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-white">{item.title}</h3>
                      <p className="text-gray-100 leading-relaxed text-sm md:text-base">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Second Row - Only for 4+ items */}
            {secondRowCount > 0 && (
              <div className="flex flex-col lg:flex-row divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-white/20 lg:justify-center">
                {whatWeDeliver.slice(firstRowCount).map((item, index) => {
                  const globalIndex = firstRowCount + index;
                  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
                  const Icon = item.icon;
                  return (
                    <div
                      key={globalIndex}
                      ref={ref}
                      className={`flex-1 lg:flex-none lg:w-1/2 p-4 md:p-6 transition-all duration-700 ${
                        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                      }`}
                      style={{ animationDelay: `${globalIndex * 200}ms` }}
                    >
                      <div className="text-center space-y-3 group h-full flex flex-col justify-center">
                        <div className="flex justify-center">
                          <Icon className="text-3xl md:text-4xl text-pink-300 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-white">{item.title}</h3>
                        <p className="text-gray-100 leading-relaxed text-sm md:text-base">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* The Zentrix Edge - Simple plain style like Social */}
      <section className="rounded-3xl p-12 md:p-16 text-center animate-slide-in">
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

export default SEO;