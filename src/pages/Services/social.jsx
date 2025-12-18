// Social.jsx - Place this in your components or pages directory, e.g., src/pages/services/Social.jsx
// Ensure you add a route in your router: <Route path="/services/social" element={<Social />} />
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaVideo, FaCommentDots, FaUsers, FaChartLine, FaPen, FaRocket } from "react-icons/fa";
import Seo from "../../components/seo/Seo";
import { useInView } from "react-intersection-observer";
import SocialBanner from "../../assets/service/social.png"; // Banner image
import background from  '../../assets/bannerbg1.jpeg'
import Contactcomp from "../../components/Contactcomp";
import ParallaxBackground from "../../components/Parallex";

const Social = () => {
  const location = useLocation();
  const [offsetY, setOffsetY] = useState(0);

useEffect(() => {
  const handleScroll = () => setOffsetY(window.scrollY);
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  useEffect(() => {
    console.log("Social Service Loaded");
    window.scrollTo(0, 0);
  }, []);

  const seoData = {
    title: `Social Media Marketing Services | Expert Social Media Marketing Agency - Zentrix`,
    description: `Stop the scroll and start conversations with Zentrix Media's social media strategies built for the attention economy. Drive resonance, engagement, and growth.`,
    keywords: ["social media marketing services", "social media agency", "attention economy", "Zentrix", "viral content", "brand resonance"],
    href: `https://zentrix.media${location.pathname}`,
  };

  const headline = "Stop the Scroll. Start the Conversation.";
  const subheadline = "Most agencies think social media is about 'posting every day.' At Zentrix Media, we know it’s much beyond writing creative captions and posting fancy pictures.";
  const detailedIntro = "We truly know the truth - It’s about the Attention Economy. In a world where the average human attention span is less than a goldfish (literally), 'good enough' content is invisible and won’t do any good to your brand. You don't need more posts; you need resonance. We understand that Instagram, X, requires raw authenticity while LinkedIn demands polished thought leadership and we never mix the two.";

  const whatWeDeliver = [
    {
      icon: FaVideo,
      title: "Short-Form Video Production",
      description: "Reels that hook viewers in the first 0.03 seconds."
    },
    {
      icon: FaCommentDots,
      title: "Interaction and Engagement",
      description: "We make the audience stop, interact, talk and share about your brand."
    },
    {
      icon: FaUsers,
      title: "Community Management",
      description: "We don’t just reply; we build cult-like followings."
    },
    {
      icon: FaChartLine,
      title: "Trend-Jacking",
      description: "Identifying and leveraging latest trends and memes before they peak."
    },
    {
      icon: FaPen,
      title: "Blogs",
      description: "Highly engaging, relevant, SEO-optimised and share worthy content across all platforms."
    }
  ];

  const zentrixEdge = "We analyse engagement sentiment 24x7 and predict viral potential before we even hit record. This isn't guessing; it's calculated creativity.";


  return (
    <div className="font-sans bg-white">
      <Seo
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        href={seoData.href}
      />
      
      {/* Hero Header */}
    <header 
  className="relative text-center py-20 md:py-32 px-4 md:px-8 bg-cover bg-no-repeat overflow-hidden"
  style={{
    backgroundImage: `url(${background})`,
    backgroundPosition: `center ${offsetY * 0.4}px`,
  }}
>
        <div className="absolute inset-0  bg-white/10"></div>
        <div className="relative max-w-6xl mx-auto pt-30">
          <h1 className="text-5xl md:text-6xl  font-semibold mb-6 text-gray-900 leading-tight animate-fade-in-up">
            {headline}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
            {subheadline}
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-4 bg-pink-600 text-white font-bold text-lg rounded-full hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse-slow relative z-10"
          >
            Ignite Your Brand <FaRocket className="ml-2" />
          </Link>
          <div className="mt-12 relative z-10">
            <Link className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
              Home / Services / Social Media Marketing
            </Link>
          </div>
        </div>
      </header>


<section className="relative overflow-hidden min-h-screen">
  {/* PARALLAX BACKGROUND */}
  <ParallaxBackground speed={0.6} />

  {/* CONTENT CONTAINER */}
  <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen">
      
      <div className="order-2 lg:order-1 space-y-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
          Mastering the Attention Economy
        </h2>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          {detailedIntro}
        </p>
      </div>

      <div className="order-1 lg:order-2">
        <img
          src="https://media.gettyimages.com/id/1495076182/photo/close-up-of-young-woman-using-smartphone-on-social-media-network-application-viewing-posts.jpg?s=612x612&w=0&k=20&c=P4IrTU9PcvbyReCt7mgQRp4SZju6WnsbfS-TpPdrBXM="
          alt="Attention Economy in Action"
          className="w-full rounded-3xl shadow-2xl object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>

    </div>
  </div>
</section>



            {/* What We Deliver - Redesigned with right-side lines per row */}
        <section className="relative overflow-hidden py-14 md:py-10"
         style={{
        background: 'linear-gradient(180deg, #111488 0%, #0d1066 100%)',
      }}>
          {/* Decorative overlay for depth */}
          <div className="absolute inset-0 bg-white/10"></div>
          <div className="relative max-w-6xl mx-auto px-4 md:px-8 space-y-8 md:space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                What We Deliver
              </h2>
            </div>
            <div className="space-y-2 lg:space-y-4">
              {/* Top row: 3 items */}
              <div className="flex flex-col lg:flex-row divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-white/20">
                {whatWeDeliver.slice(0, 3).map((item, index) => {
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
              {/* Bottom row: 2 items */}
              <div className="flex flex-col lg:flex-row divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-white/20 lg:justify-start">
                {whatWeDeliver.slice(3, 5).map((item, index) => {
                  const globalIndex = index + 3;
                  const { ref, inView } = useInView({ 
                    triggerOnce: true, 
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px'
                  });
                  const Icon = item.icon;
                  return (
                    <div
                      key={globalIndex}
                      ref={ref}
                      className={`flex-1 lg:flex-none lg:w-1/2 p-4 md:p-6 transition-all duration-700 ${
                        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                      }`}
                      style={{
                        animationDelay: `${globalIndex * 200}ms`
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

        {/* Zentrix Edge */}
        <section className=" rounded-3xl p-12 md:p-16 text-center animate-slide-in">
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
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Social;