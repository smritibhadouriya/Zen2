import React, { useEffect, useState } from "react";
import { FaRocket } from "react-icons/fa";
import background from '../assets/bannerbg1.jpeg';
import Seo from "../components/seo/Seo";
import EnquiryModal from '../components/Enquiry';

export default function AboutUs() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const openEnquiry = () => setIsEnquiryOpen(true);
  const closeEnquiry = () => setIsEnquiryOpen(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const seoData = {
    title: "About Zentrix Media | Your External Growth Engine",
    description: "We are digital natives, data geeks, and creative rebels building sustainable growth for brands in a fast-changing digital world.",
    keywords: ["about zentrix media", "digital marketing agency", "performance marketing", "creative strategy", "data-driven marketing"],
    href: "https://zentrix.media/about-us",
  };

  const differentiators = [
    {
      title: "The Visionaries",
      desc: "We don't just look at 1 quarter at a time. We build long-term, sustainable growth strategies that evolve with your brand.",
      img: "https://businessmap.io/wp-content/uploads/website-images/strategic-execution/strategic-mapping-key-ingredients.png",
      alt: "Strategic roadmap for long-term business vision",
    },
    {
      title: "The Tech",
      desc: "We use AI not to replace humans, but to give them superpowers. This allows our team to focus 80% of their time on creative strategy rather than repetitive tasks.",
      img: "https://emt.gartnerweb.com/ngw/globalassets/en/marketing/images/covers/genai-in-marketing.png",
      alt: "AI unlocking creativity in marketing",
    },
    {
      title: "The Vibe",
      desc: "Professional? Yes. Boring? Never. We believe the best work happens when you’re genuinely having fun solving hard problems.",
      img: "https://epaouydin3q.exactdn.com/wp-content/uploads/2024/07/fun-onboarding-activities-for-team-building.jpg?strip=all&lossy=1&ssl=1",
      alt: "Energetic and fun team culture",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % differentiators.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans bg-white">
      <Seo title={seoData.title} description={seoData.description} keywords={seoData.keywords} href={seoData.href} />

      {/* Hero Header */}
      <header
        className="relative text-center py-20 md:py-32 px-4 md:px-8 bg-cover bg-no-repeat bg-center overflow-hidden"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 text-white leading-tight animate-fade-in-up">
            About Zentrix Media
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/70 mb-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
            We are the bridge between "Viral Creativity" and "Business Logic."
          </p>
        </div>
      </header>

      {/* Intro Section – Mobile: Image first, then text */}
      <section className="py-20 bg-blue-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2">
              <img
                src="https://images.pexels.com/photos/6913338/pexels-photo-6913338.jpeg"
                alt="Zentrix Media team brainstorming"
                className="w-full h-auto md:h-[540px] object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="space-y-8 order-2 lg:order-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-800 mb-4">
                The modern digital landscape is quite dynamic
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                One day it's SEO, the next it's AI Search — and you need a guide who can pivot instantly. At Zentrix Media, we are versatile by design and more than happy to partner with you to accomplish your goals. We don't just "do digital marketing" — we act as your external growth engine.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Whether you are a startup looking for your first 10,000 users or a legacy brand needing a digital facelift, we have the tools, the data, the energy, and the right mettle to make it happen.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                We are a team of digital natives, data geeks, and creative rebels on a mission to rewrite the rules of modern marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founders */}
      <section className="relative overflow-hidden py-20" style={{ background: 'linear-gradient(180deg, #111488 0%, #0d1066 100%)' }}>
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 text-center space-y-12">
          <div>
             <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-4">Meet the Founders</h1>
            <p className="text-lg sm:text-xl text-white/80 mt-4">Young Blood. Old Souls. Sharp Minds.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3  gap-12">
            <div className="space-y-4 group">
              <div className="rounded-full md:rounded-xl lg:rounded-full overflow-hidden shadow-2xl mx-auto w-72 h-72 md:w-100 md:h-80 lg:w-80 lg:h-80 ">
                <img src="https://as1.ftcdn.net/jpg/02/39/52/18/1000_F_239521839_UFOyptLnxGBJx2TGYqHxa37RTVrMQ81k.jpg" alt="Omkar" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-white">Omkar</h3>
              <p className="text-gray-200 px-4">Visionary leader with a passion for scaling brands through innovative digital strategies.</p>
            </div>
            <div className="space-y-4 group">
              <div className="rounded-full md:rounded-xl lg:rounded-full overflow-hidden shadow-2xl mx-auto w-72 h-72 md:w-100 md:h-80 lg:w-80 lg:h-80 ">
                <img src="https://media.istockphoto.com/id/179330060/photo/young-group-of-students-or-start-up-founders.jpg?s=170667a&w=0&k=20&c=IIN0I6eY94tJSSCNII3bSv3hn3FR6Vb6dNkD2uvgVxY=" alt="Co-founder" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-white">[Co-Founder Name]</h3>
              <p className="text-gray-200 px-4">Creative powerhouse crafting viral campaigns that blend culture and storytelling.</p>
            </div>
            <div className="space-y-4 group">
              <div className="rounded-full md:rounded-xl lg:rounded-full overflow-hidden shadow-2xl mx-auto w-72 h-72 md:w-100 md:h-80 lg:w-80 lg:h-80 ">
                <img src="https://img.freepik.com/premium-photo/business-people-happy-portrait-outdoor-collaboration-diversity-confident-group-staff-digital-agency-smile-face-teamwork-multicultural-professional-career-with-management_590464-512622.jpg" alt="Co-founder" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-white">[Co-Founder Name]</h3>
              <p className="text-gray-200 px-4">Data science expert turning insights into measurable ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder’s Story – Mobile: Image first, then text */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2">
              <img
                src="https://www.shutterstock.com/image-photo/professionals-diverse-group-collaborate-boardroom-600nw-2431976515.jpg"
                alt="Zentrix founders and team"
                className="w-full h-auto md:h-[400px] object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="space-y-8 order-2 lg:order-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-800 mb-4">
                The Founder’s Story
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                We didn't start Zentrix Media to be another agency with a foosball table and vague promises. We started it because we saw a gap. The digital landscape was changing faster than traditional agencies could keep up.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                AI was rising. Attention spans were shrinking. Data was everywhere, but nobody knew how to read it. So, we built Zentrix Media — a collective of young, dynamic professionals who grew up on the internet.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                We understand the memes, the algorithms, and the culture because we live in it. But we back that intuition with hardcore data science and deliver results every single time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-blue-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-800 mb-10 text-center">
            What Makes Us Different
          </h1  >

          {/* Desktop Layout: Side-by-side (unchanged) */}
          <div className="hidden md:grid md:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl sticky top-30">
              <img
                key={activeIndex}
                src={differentiators[activeIndex].img}
                alt={differentiators[activeIndex].alt}
                className="w-full h-[500px] object-cover transition-all duration-1000 ease-in-out hover:scale-105"
              />
            </div>

            {/* All three items vertically */}
            <div className="space-y-10">
              {differentiators.map((item, index) => (
                <div
                  key={index}
                  className="group space-y-6 pb-8 border-b border-gray-300 last:border-0 transition-all duration-500 cursor-pointer"
                  onClick={() => setActiveIndex(index)}
                >
                  <h3
                    className={`text-3xl md:text-4xl font-bold text-gray-900 relative inline-block pb-4 transition-all duration-500 
                      after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-1 after:bg-pink-600 after:transition-all after:duration-500
                      ${index === activeIndex ? "after:w-full" : "after:w-0 group-hover:after:w-full"}`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Layout: Image first, then ONLY the active content below it */}
          <div className="md:hidden space-y-12">
            {/* Changing Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                key={activeIndex}
                src={differentiators[activeIndex].img}
                alt={differentiators[activeIndex].alt}
                className="w-full h-auto object-cover transition-all duration-1000 ease-in-out"
              />
            </div>

            {/* Only Active Item Content */}
            <div className="text-center px-4 animate-fade-in">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {differentiators[activeIndex].title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                {differentiators[activeIndex].desc}
              </p>
            </div>

            {/* Optional: Dots indicator for mobile */}
            <div className="flex justify-center gap-2 mt-8">
              {differentiators.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-pink-600 w-8" : "bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-center bg-gray-100">
        <h2  className="text-4xl  font-semibold text-gray-800 mb-4">
          Enough about us.<br className="sm:hidden" /> Let’s talk about YOU.
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto font-semibold mb-10">
          Ready to turn creativity into measurable growth?
        </p>
        <button
          onClick={openEnquiry}
          className="inline-flex items-center px-8 py-4 bg-pink-600 text-white font-bold text-lg rounded-full hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse-slow"
        >
          Get in Touch <FaRocket className="ml-2" />
        </button>
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

        /* Simple fade-in for mobile active content */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fadeIn 0.6s ease-out; }
      `}</style>
    </div>
  );
}