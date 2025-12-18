import { useEffect } from "react";
import Background from "../assets/banner2.jpeg";
import image from "../assets/new.png";

export default function BannerSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 py-40 md:py-16 lg:py-0 lg:pt-20"
      style={{
        background: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Optional: nice parallax effect on desktop
      }}
    >
      {/* Left Content */}
      <div className="relative z-10 w-full lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
        <p className="text-xl md:text-2xl lg:text-3xl  text-gray-800 leading-tight tracking-wide">
          We’re the{" "}
          <span className="text-pink-500 font-bold">AI-forward</span>, 360°
          digital agency that transforms raw data into vibrant experiences. With{" "}
          <span className="text-blue-500 font-bold">Zentrix Media</span>,
          brands stop guessing and start growing.
        </p>

        <div className="flex justify-center lg:justify-start">
          <button className="px-8 py-4 sm:px-10 sm:py-5 bg-blue-600 text-white rounded-full text-lg sm:text-xl  font-medium shadow-xl hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 active:scale-95">
            Discover More
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative z-10 w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end">
        <img
          src={image}
          alt="AI-powered digital transformation"
          className="w-[280px] sm:w-[400px] max-w-full h-auto animate-float drop-shadow-2xl"
        />
      </div>
    </section>
  );
}