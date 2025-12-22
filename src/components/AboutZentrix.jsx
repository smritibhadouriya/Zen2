import { useEffect } from "react";
import Background from "../assets/banner2.jpeg";

export default function AboutZentrix() {
  const services = [
    { title: "100% Agility", description: "We are young, fast, and allergic to “the way it’s always been done.”" },
    { title: "AI-Native", description: "While others are still figuring out AI tools, we use it every day and save 40% more time." },
    { title: "Laser Precision", description: "No guessing. Our proprietary data analysis delivers better ROI." },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-flyIn");
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -50px 0px" } // Triggers when ~30% visible
    );

    document.querySelectorAll(".scroll-animate").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative pt-16 overflow-hidden bg-blue-900/10">
      <div className="max-w-7xl mx-auto px-10">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-800 mb-4">
            Why We’re Different
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We speak Human fluently, but we constantly think in code, data, and trends
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start ">
          {/* Left: Points with scroll-triggered fly-in */}
          <ol className="space-y-8 md:space-y-20 list-none px-10">
            {services.map((service, index) => (
              <li
                key={index}
                className="scroll-animate flex gap-8 group opacity-0 -translate-x-32"
                style={{ animationDelay: `${index * 250}ms` }}
              >
                {/* Number with glow */}
                <div className="flex-shrink-0 relative">
                  <span className="text-5xl font-bold text-gray-400/50">
                    0{index + 1}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-blue-600/10 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-4">
                  <h3 className="text-3xl md:text-4xl font-medium mb-4 text-gray-900  relative inline-block
                    after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-0 after:h-px after:bg-blue-600
                    after:transition-all after:duration-500 group-hover:after:w-full">
                    {service.title}
                  </h3>
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/* Right: Image grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {/* Your 6 images here (same as before) */}
            <div className="aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl relative group">
              <img src="https://thumbs.dreamstime.com/b/futuristic-glowing-neural-network-dark-minimal-tech-space-bright-neural-fibers-intertwine-glowing-violet-blue-hues-406750576.jpg" alt="Futuristic Glowing Neural Network" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700"></div>
            </div>
            {/* Repeat the other 5 images exactly as in previous versions */}
            <div className="aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl relative group">
              <img src="https://static.vecteezy.com/system/resources/previews/060/597/892/non_2x/futuristic-technology-background-with-glowing-abstract-neural-network-blue-energy-sphere-and-vibrant-electric-light-trails-data-flow-on-a-purple-gradient-background-with-ui-elements-vector.jpg" alt="Glowing Abstract Neural Network Sphere" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700"></div>
            </div>
            <div className="aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl relative group">
              <img src="https://thumbs.dreamstime.com/b/digital-abstract-grid-blue-purple-glowing-connections-futuristic-network-background-digital-abstract-grid-blue-402367434.jpg" alt="Digital Abstract Grid Neural Network" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700"></div>
            </div>
            <div className="aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl relative group">
              <img src="https://thumbs.dreamstime.com/b/vector-abstract-futuristic-speed-motion-blur-over-dark-blue-background-science-energy-technology-concept-digital-image-87847110.jpg" alt="Abstract Speed Motion Blur" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700"></div>
            </div>
            <div className="aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl relative group">
              <img src="https://thumbs.dreamstime.com/b/artificial-intelligence-background-futuristic-purple-neural-network-blue-lines-neurons-presented-glowing-shapes-ai-164842537.jpg" alt="Purple Neural Network AI" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700"></div>
            </div>
            <div className="aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl relative group">
              <img src="https://thumbs.dreamstime.com/b/abstract-futuristic-technology-background-concept-speed-movement-pattern-motion-blur-over-dark-blue-global-digital-data-orbits-165605078.jpg" alt="Futuristic Speed Motion Globe" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700"></div>
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-28 h-px bg-gradient-to-r from-transparent via-gray-300/40 to-transparent" />
      </div>

      {/* Custom keyframes */}
      <style jsx>{`
        @keyframes flyIn {
          from {
            opacity: 0;
            transform: translateX(-128px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-flyIn {
          animation: flyIn 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}