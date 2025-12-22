import { useState } from "react";
import { } from "react-icons/fi"; // From Feather Icons (light & modern)
import Performance1 from "../assets/imagesuse/performance.jpg";
import social from "../assets/imagesuse/social.jpg";
import web from "../assets/imagesuse/web.jpg";
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";

export default function Chooseus() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Social & Content",
      description:
        "From scroll-stopping Instagram Reels to LinkedIn thought leadership. We create compelling content that holds your attention and gets your likes.",
      image: social,
    },
    {
      title: "Performance Marketing",
      description:
        "Paid ads that actually pay off. We use predictive algorithms to bid smarter, lowering CPC and increasing ROI.",
      image: Performance1,
    },
    {
      title: "Web & Tech",
      description:
        "Websites that load faster than you can say 'conversion rate.' Modern, scalable, and conversion-optimized tech solutions.",
      image: web,
    },
  ];

  const stats = [
    { value: "50+", label: "Brands Scaled" },
    { value: "1.5M+", label: "Organic Reach Generated Last Month" },
    { value: "98%", label: "Client Retention Rate" },
    { value: "24/7", label: "Real-time Optimization" },
  ];

  return (
    <section className="relative overflow-hidden bg-blue-900/10">
      {/* 360° Digital Domination Section */}
      <div className="relative z-10 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-800 mb-4">
              360° Digital Domination
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive strategies that cover every angle of your digital presence.
            </p>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-start">
            {/* Tabs */}
            <div className="space-y-4 lg:space-y-6 order-1 lg:order-2">
              {tabs.map((tab, index) => {
                const isActive = activeTab === index;

                return (
                  <div
                    key={index}
                    onClick={() => setActiveTab(isActive ? -1 : index)} // Toggle open/close
                    className={`cursor-pointer rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 backdrop-blur-sm border flex items-start gap-5 group ${
                      isActive
                        ? "bg-white/90 border-white/70 shadow-2xl scale-100 lg:scale-105"
                        : "bg-white/40 border-white/30 hover:bg-white/60"
                    }`}
                  >
                  

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-3">
                        {tab.title}
                      </h3>
                      <p
                        className={`text-sm sm:text-base lg:text-xl text-gray-600 leading-relaxed transition-all duration-500 overflow-hidden ${
                          isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        {tab.description}
                      </p>
                    </div>

                      {/* Plus / Minus Circle Icon */}
                    <div className="flex-shrink-0 transition-all duration-300">
                      {isActive ? (
                        <BiMinusCircle className="w-5 h-5  text-pink-500" />
                      ) : (
                        <BiPlusCircle className="w-5 h-5  text-blue-500 group-hover:scale-110 transition-transform" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Image (hidden on mobile) */}
            <div className="hidden md:block relative h-64 sm:h-80 lg:h-96 xl:h-[490px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <img
                src={tabs[activeTab === -1 ? 0 : activeTab].image}
                alt={tabs[activeTab === -1 ? 0 : activeTab].title}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 w-full py-16 sm:py-20 bg-[#111488]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed max-w-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}