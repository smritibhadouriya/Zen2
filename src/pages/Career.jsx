import React, { useEffect, useState } from "react";
import Seo from "../components/seo/Seo";
import { Link } from "react-router-dom";
import { FaRocket, FaBrain, FaUsers, FaChartLine, FaCoffee, FaLaptop } from "react-icons/fa";
import background from '../assets/bannerbg1.jpeg'; // Reusing the same parallax-capable background from Performance page
import ParallaxBackground from "../components/Parallex";

const Careers = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans bg-white text-gray-900">
      <Seo
        title="Careers at Zentrix | Build the Future of Intelligent Marketing"
        description="Join Zentrix Media. Work with AI, data, and creativity. Zero ego. High velocity. Real impact."
        href="https://zentrix.media/career"
      />

      {/* Hero Header - Now matching Performance page style: Parallax background, bold headline, CTA button */}
      <header 
        className="relative text-center py-20 md:py-32 px-4 md:px-8 bg-cover bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: `center ${offsetY * 0.4}px`,
        }}
      >
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="relative max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6 text-gray-900 leading-tight animate-fade-in-up">
            Join the Intelligence Revolution.
            <br />
            <span className="text-gray-800">
              Warning: We Move AI-Fast.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
            We’re looking for misfits, data-wizards, and creative rebels who are tired of corporate safe. If that sounds like you — welcome home.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-4 bg-pink-600 text-white font-bold text-lg rounded-full hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse-slow relative z-10"
          >
            Apply Now <FaRocket className="ml-2" />
          </Link>
          <div className="mt-12 relative z-10">
            <Link className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
              Home / Careers
            </Link>
          </div>
        </div>
      </header>

      {/* Work Smarter - With parallax section and image like Performance page */}
      <section className="relative overflow-hidden min-h-screen">
        <ParallaxBackground speed={0.6} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
                Work Smarter. Not Harder.
              </h2>
              <div className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-6">
                <p>
                  At most agencies, 50% of your time disappears into busy work — reporting, scheduling, basic execution. At Zentrix Media, we automate the boring stuff.
                </p>
                <p>
                  That means you spend 100% of your brainpower on strategy, creativity, and innovation — the work that actually compounds your growth, personally and professionally.
                </p>
                <p className="font-medium text-gray-800">
                  We don’t care about your university grades. We care about your portfolio, your curiosity, and your ability to look at data and see a story.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://cdn.prod.website-files.com/61e87f14968a3034b72bfe33/66f283b4383e20ace2706e9b_iStock-1480627823%20(1).jpg"
                alt="Zentrix Media team collaborating on intelligent marketing strategies"
                className="w-full rounded-3xl shadow-2xl object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Culture Code - Dark gradient section with icons, similar to "What We Deliver" in Performance */}
      <section 
        className="relative overflow-hidden py-20"
        style={{
          background: 'linear-gradient(180deg, #111488 0%, #0d1066 100%)',
        }}
      >
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12 drop-shadow-lg">
            Our Culture Code
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4 group">
              <FaUsers className="text-5xl text-pink-300 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-white">Zero Ego</h3>
              <p className="text-gray-100">The intern’s good idea beats the founder’s bad idea. Every. Single. Time.</p>
            </div>
            <div className="text-center space-y-4 group">
              <FaBrain className="text-5xl text-pink-300 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-white">Always Beta</h3>
              <p className="text-gray-100">We’re constantly learning. If you’re not upgrading your skills weekly, you’re falling behind.</p>
            </div>
            <div className="text-center space-y-4 group">
              <FaChartLine className="text-5xl text-pink-300 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-white">Data-Backed Creativity</h3>
              <p className="text-gray-100">We don’t guess. We test. Ideas earn their place with numbers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why You'll Love It Here - Grid with small visuals */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Why You’ll Love It Here</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex items-start space-x-6">
              <img 
                src="https://agencyanalytics.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fdfcvkz6j859j%2F1xZpHCqAF5P5ah0lzwh2GM%2F0d3d8d89086f131204e984f739e40e58%2FMarketing-Data-Visualization-Dashboard-Examples.png&w=3840&q=75" 
                alt="Premium AI tools and analytics dashboards" 
                className="w-32 h-32 object-cover rounded-2xl shadow-lg"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">The Best Toys</h3>
                <p className="text-gray-600">Access to premium AI tools — Google Gemini, GPT-4, and custom enterprise systems to supercharge your workflow.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <FaCoffee className="text-6xl text-pink-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">High-Octane Fuel</h3>
                <p className="text-gray-600">Coffee, snacks, and the occasional pizza-powered brainstorm.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <img 
                src="https://www.dbbnwa.com/content/images/size/w1304/format/webp/2025/09/AdobeStock_1635027376.jpeg" 
                alt="Hybrid flex remote work" 
                className="w-32 h-32 object-cover rounded-2xl shadow-lg"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">Hybrid Flex</h3>
                <p className="text-gray-600">We value output, not chair time.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <img 
                src="https://as1.ftcdn.net/jpg/05/76/72/74/1000_F_576727457_3cQXgw3rGQVtEbbdodjSKs4XZyp8NQ9z.jpg" 
                alt="Fast career growth rocket" 
                className="w-32 h-32 object-cover rounded-2xl shadow-lg"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">Career Velocity</h3>
                <p className="text-gray-600">We’re growing fast. Perform well, and you’ll rise faster here than anywhere else.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles - Kept dark, but with icons for visual pop */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Open Roles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="border border-gray-700 rounded-3xl p-8 text-center hover:border-pink-600 transition">
              <FaBrain className="text-5xl text-pink-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">The Wordsmith <span className="text-gray-400 block text-lg">(Copywriter)</span></h3>
              <p className="text-gray-300">Can you write headlines that stop thumbs and spark action?</p>
            </div>
            <div className="border border-gray-700 rounded-3xl p-8 text-center hover:border-pink-600 transition">
              <FaChartLine className="text-5xl text-pink-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">The Alchemist <span className="text-gray-400 block text-lg">(Performance Marketer)</span></h3>
              <p className="text-gray-300">Can you turn ad spend into gold — consistently?</p>
            </div>
            <div className="border border-gray-700 rounded-3xl p-8 text-center hover:border-pink-600 transition">
              <FaRocket className="text-5xl text-pink-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">The Visionary <span className="text-gray-400 block text-lg">(Graphic Designer)</span></h3>
              <p className="text-gray-300">Can you speak in pixels and build visual systems that convert?</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Matching Performance page style */}
      <section className="py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Think You Can Keep Up?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Apply to the future. Let’s build something intelligent together.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-8 py-4 bg-pink-600 text-white font-bold text-lg rounded-full hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse-slow"
        >
          Apply Now <FaRocket className="ml-2" />
        </Link>
      </section>

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
};

export default Careers;