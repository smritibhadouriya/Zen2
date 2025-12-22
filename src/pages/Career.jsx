import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaRocket, FaUsers, FaBrain, FaChartLine } from "react-icons/fa";
import background from '../assets/bannerbg1.jpeg';
import Seo from "../components/seo/Seo";
import EnquiryModal from '../components/Enquiry';

export default function Careers() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const openPositionsRef = useRef(null);
  const location = useLocation();

  const openEnquiry = () => setIsEnquiryOpen(true);
  const closeEnquiry = () => setIsEnquiryOpen(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (location.state?.scrollToPositions && openPositionsRef.current) {
      openPositionsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const benefits = [
    {
      title: "The Best Toys",
      desc: "Access to premium AI tools (Google Gemini, GPT-4, Custom Enterprise Tools) to supercharge your workflow.",
      img: "https://images.ui8.net/uploads/75ctfuvygbiuh_1751900293200.png",
      alt: "AI-Powered Marketing Dashboard Interface",
    },
    {
      title: "High-Octane Fuel",
      desc: "Coffee, snacks, and the occasional pizza brainstorm.",
      img: "https://media.istockphoto.com/id/1337433833/photo/excited-diverse-employees-eating-pizza-during-break-in-office-together.jpg?s=612x612&w=0&k=20&c=taxl2M_NjqFdaTox0GcQ5iyKgH1NS7FDOHIni7H_ngI=",
      alt: "Diverse team enjoying pizza during office break",
    },
    {
      title: "Hybrid Flex",
      desc: "We value output, not chair time.",
      img: "https://media.gettyimages.com/id/1460885939/photo/young-man-working-remotely-hybrid-with-laptop-in-cafe.jpg?s=1024x1024&w=gi&k=20&c=NJe5ho4Z2oRieCEvB8mLqq8ZLUYQ_XpGnrNDdxN199Y=",
      alt: "Person working remotely with laptop in a cafe",
    },
    {
      title: "Career Velocity",
      desc: "We are growing fast. Perform well, and you’ll rise faster here than anywhere else.",
      img: "https://static.vecteezy.com/system/resources/previews/071/790/690/non_2x/illustration-of-career-growth-and-business-startup-success-rocket-or-spaceship-launching-upward-arrow-symbolizes-progress-ambition-and-rising-achievement-in-professional-development-vector.jpg",
      alt: "Rocket launching symbolizing fast career growth",
    },
  ];

  const [activeBenefitIndex, setActiveBenefitIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBenefitIndex((prev) => (prev + 1) % benefits.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const seoData = {
    title: "Careers at Zentrix Media | Join the Intelligence Revolution",
    description: "Join Zentrix Media. Work with AI, data, and creativity. Zero ego. High velocity. Real impact.",
    keywords: ["careers at zentrix media", "digital marketing jobs", "performance marketing careers", "creative agency jobs"],
    href: "https://zentrix.media/career",
  };

  const activeBenefit = benefits[activeBenefitIndex];

  return (
    <div className="font-sans bg-white">
      <Seo title={seoData.title} description={seoData.description} keywords={seoData.keywords} href={seoData.href} />

      {/* Hero Header */}
      <header
        className="relative text-center py-20 md:py-32 px-4 md:px-8 bg-cover bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6 text-white leading-tight animate-fade-in-up">
            Join the Intelligence Revolution.<br />
            Warning: We Move Fast, Like, AI-Fast
          </h1>
          <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
            We are always looking for the misfits, the data-wizards, and the creative rebels who are tired of corporate safe. If you are one, Welcome to a space that feels like home.
          </p>
          <Link
            to="/career"
            state={{ scrollToPositions: true }}
            className="inline-flex items-center px-8 py-4 bg-pink-600 text-white font-bold text-lg rounded-full hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse-slow"
          >
            Look Available Positions <FaRocket className="ml-2" />
          </Link>
        </div>
      </header>

      {/* Work Smarter Section - Image first on mobile/small screens */}
      <section className="py-20 bg-blue-900/10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl md:order-1 order-1">
            <img
              src="https://gorevity.com/wp-content/uploads/2025/08/A-team-working-at-a-table-with-laptops-charts-and-digital-icons-representing-AI-and-data-analysis.jpg"
              alt="Zentrix Media team collaborating on intelligent marketing strategies with AI"
              className="w-full h-[300px] md:h-[540px] object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className="space-y-8 md:order-2 order-2">
             <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-800 mb-4">
              Work Smarter, Not Harder
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              At most agencies, you spend 50% of your time on busy work. At Zentrix Media, we don’t want you to do the boring stuff—reporting, scheduling, basic code.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We encourage automation for all the run-of-the-mill tasks so you can spend 100% of your brainpower on Strategy, Creativity, and Innovation and do things that help you grow personally and professionally.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed ">
              We don't care about your university grades. We care about your portfolio, your hunger to learn, and your ability to look at a dataset and see a story.
            </p>
          </div>
        </div>
      </section>

      {/* Culture Code */}
      <section className="relative overflow-hidden py-20" style={{ background: 'linear-gradient(180deg, #111488 0%, #0d1066 100%)' }}>
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl  font-semibold text-white mb-15">
            Our Culture Code
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4 group">
              <FaUsers className="text-6xl text-pink-300 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-white">Zero Ego</h3>
              <p className="text-gray-200">The intern’s good idea beats the founder’s bad idea. Every time.</p>
            </div>
            <div className="space-y-4 group">
              <FaBrain className="text-6xl text-pink-300 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-white">Always Beta</h3>
              <p className="text-gray-200">We are constantly learning. If you aren't upgrading your skills weekly, you're falling behind.</p>
            </div>
            <div className="space-y-4 group">
              <FaChartLine className="text-6xl text-pink-300 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-white">Data-Backed Creativity</h3>
              <p className="text-gray-200">We don't guess. We test.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why You’ll Love It Here - New Layout: On small screens → Image + active benefit below it; On large → original side-by-side interactive */}
      <section className="py-20 bg-blue-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-800 mb-10 text-center">
            Why You’ll Love It Here
          </h1>

          {/* Mobile/Small Screen Layout: Single active benefit with image on top */}
          <div className="md:hidden flex flex-col items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl w-full mb-12">
              <img
                key={activeBenefitIndex}
                src={activeBenefit.img}
                alt={activeBenefit.alt}
                className="w-full h-[300px] md:h-[500px] object-cover transition-all duration-1000 ease-in-out"
              />
            </div>
            <div className="w-full space-y-10 max-w-2xl mx-auto">
              <div className="space-y-6 pb-8 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {activeBenefit.title}
                </h3>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  {activeBenefit.desc}
                </p>
              </div>
            </div>
            {/* Simple dot indicators for mobile */}
            <div className="flex justify-center space-x-3 mt-8">
              {benefits.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveBenefitIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeBenefitIndex ? 'bg-blue-600 w-8' : 'bg-gray-400'
                  }`}
                  aria-label={`Go to benefit ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop/Large Screen Layout: Original interactive side-by-side */}
          <div className="hidden md:grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Vertical List */}
            <div className="space-y-10">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className={`space-y-6 pb-8 border-b border-gray-300 last:border-0 transition-all duration-500 cursor-pointer group
                    ${index === activeBenefitIndex ? 'opacity-100' : 'opacity-70 hover:opacity-90'}
                  `}
                  onMouseEnter={() => setActiveBenefitIndex(index)}
                >
                  <h3
                    className={`text-3xl md:text-4xl font-bold text-gray-900 relative inline-block pb-3 transition-all duration-500
                      ${index === activeBenefitIndex
                        ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-blue-600"
                        : "after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-blue-600 group-hover:after:w-full"
                      } after:transition-all after:duration-500
                    `}
                  >
                    {item.title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            {/* Right: Changing Image (sticky) */}
            <div className="rounded-3xl overflow-hidden shadow-2xl sticky top-30">
              <img
                key={activeBenefitIndex}
                src={activeBenefit.img}
                alt={activeBenefit.alt}
                className="w-full h-[500px] object-cover transition-all duration-1000 ease-in-out hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section ref={openPositionsRef} className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-gray-800 rounded-3xl p-8 hover:bg-gray-700 transition-all duration-300">
              <FaBrain className="text-6xl text-pink-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-2 text-gray-500">The Wordsmith <span className="block text-lg text-white">(Copywriter)</span></h3>
              <p className="text-gray-300">Can you write headlines that stop thumbs?</p>
            </div>
            <div className="bg-gray-800 rounded-3xl p-8 hover:bg-gray-700 transition-all duration-300">
              <FaChartLine className="text-6xl text-pink-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-2 text-gray-500">The Alchemist <span className="block text-lg text-white">(Performance Marketer)</span></h3>
              <p className="text-gray-300">Can you turn ad spend into gold?</p>
            </div>
            <div className="bg-gray-800 rounded-3xl p-8 hover:bg-gray-700 transition-all duration-300">
              <FaRocket className="text-6xl text-pink-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-2 text-gray-500">The Visionary <span className="block text-lg text-white">(Graphic Designer)</span></h3>
              <p className="text-gray-300">Can you speak in pixels?</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-center bg-blue-900/20">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Think you can keep up?<br />Apply to the Future
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
          Let’s build something intelligent together.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-8 py-4 bg-pink-600 text-white font-bold text-lg rounded-full hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse-slow"
        >
          Connect Us <FaRocket className="ml-2" />
        </Link>
      </section>

      <EnquiryModal isOpen={isEnquiryOpen} onClose={closeEnquiry} />

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
}