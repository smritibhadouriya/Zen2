import { useEffect, useState } from "react";
import ParallaxBackground from "./Parallex";
import dotted from '../assets/dj.png';

export default function Chooseus() {
  const [currentStat, setCurrentStat] = useState(0);
  const stats = [
    { value: "50+", label: "Brands Scaled" },
    { value: "1.5M+", label: "Organic Reach Generated Last Month" },
    { value: "98%", label: "Client Retention Rate" },
    { value: "24/7", label: "Real-time Optimization" },
  ];

  // Auto-rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevStat = (currentStat - 1 + stats.length) % stats.length;
  const nextStat = (currentStat + 1) % stats.length;

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-white">
      {/* Single Parallax Background for the entire section */}
      <ParallaxBackground speed={1} />

      {/* First Part: 360° Digital Domination + Cards */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center w-full">
          <h2 className="text-5xl md:text-6xl text-gray-800 mb-8">
            360° Digital Domination
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-20 max-w-4xl mx-auto leading-relaxed">
            Comprehensive strategies that cover every angle of your
            <br className="hidden md:block" />
            digital presence.
          </p>

          {/* Minimal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
            <div className="backdrop-blur-sm bg-white/50 border border-white/40 rounded-3xl p-10 shadow-xl transition-all duration-500 hover:bg-white/70 hover:shadow-2xl">
              <h3 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-5">
                Social & Content
              </h3>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                From scroll-stopping Instagram Reels to LinkedIn thought leadership. We create compelling content that holds your attention and gets your likes.
              </p>
            </div>
            <div className="backdrop-blur-sm bg-white/50 border border-white/40 rounded-3xl p-10 shadow-xl transition-all duration-500 hover:bg-white/70 hover:shadow-2xl">
              <h3 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-5">
                Performance Marketing
              </h3>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                Paid ads that actually pay off. We use predictive algorithms to bid smarter, lowering CPC and increasing ROI.
                <br className="hidden md:block" />
              </p>
            </div>
            <div className="backdrop-blur-sm bg-white/50 border border-white/40 rounded-3xl p-10 shadow-xl transition-all duration-500 hover:bg-white/70 hover:shadow-2xl">
              <h3 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-5">
                Web & Tech
              </h3>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                Websites that load faster than you can say 'conversion rate.'
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Part: Numbers Don't Lie - Full Width Dotted Background */}
      <div className="relative z-10 w-full py-32 overflow-hidden">
        {/* Full-width dotted background */}
        <div
          className="absolute inset-0 opacity-15 -z-10"
          style={{
            backgroundImage: `url(${dotted})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        <div className="px-6 text-center">
          <h3 className="text-3xl lg:text-4xl font-medium text-gray-800 mb- tracking-wide">
            Numbers Don't Lie
          </h3>
          <div className="relative h-96 flex items-center justify-center">
            {/* Previous Stat */}
            <div className="absolute top-8 flex flex-col items-center opacity-30 scale-75 transition-all duration-700">
              <div className="text-3xl md:text-4xl text-gray-700">
                {stats[prevStat].value}
              </div>
              <div className="text-sm md:text-base text-gray-500 mt-2">
                {stats[prevStat].label}
              </div>
            </div>

            {/* Current Stat */}
            <div className="flex flex-col items-center transition-all duration-700">
              <div className="text-6xl lg:text-7xl font-bold text-gray-900 mb-4 tracking-tight">
                {stats[currentStat].value}
              </div>
              <div className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-2xl mx-auto text-center leading-relaxed">
                {stats[currentStat].label}
              </div>
            </div>

            {/* Next Stat */}
            <div className="absolute bottom-8 flex flex-col items-center opacity-30 scale-75 transition-all duration-700">
              <div className="text-3xl md:text-4xl text-gray-700">
                {stats[nextStat].value}
              </div>
              <div className="text-sm md:text-base text-gray-500 mt-2">
                {stats[nextStat].label}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breathing Animation */}
      <style jsx>{`
        @keyframes breathe {
          0%,
          100% {
            opacity: 0.7;
            transform: scale(1);
          }
          50% {
            opacity: 0.95;
            transform: scale(1.2);
          }
        }
      `}</style>
    </section>
  );
}