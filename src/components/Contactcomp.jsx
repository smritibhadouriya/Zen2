import React from 'react';
import connect from '../assets/connect.jpg';
import ParallaxBackground from './Parallex';

const Contactcomp = () => {
  return (
  <section className="flex items-center justify-center overflow-hidden py-10">
  <div className="relative z-10 max-w-7xl w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

    {/* Left - Image */}
    <div className="flex">
      <div className="relative w-full h-full min-h-[520px] overflow-hidden  ">
        <img
          src={connect}
          alt="Team collaboration and creativity"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
    </div>

    {/* Right - Form */}
    <div className="flex">
      <div className="w-full h-full min-h-[520px] bg-white  p-10 flex flex-col justify-center">

        <p className="text-lg md:text-xl text-gray-600 mb-8  font-semibold">
          Tell us about your brand and goals. We’ll get back to you within 24 hours.
        </p>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your full name"
            className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />

          <input
            type="email"
            placeholder="your@email.com"
            className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />

          <input
            type="tel"
            placeholder="(555) 123-4567"
            className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500"
          />

          <select
            defaultValue=""
            className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          >
            <option value="" disabled>Select a service</option>
            <option>Display Advertising</option>
            <option>Influencer Marketing</option>
            <option>Mobile Marketing</option>
            <option>Email Marketing</option>
            <option>Video Advertising</option>
            <option>ORM Solutions</option>
            <option>SEO Optimization</option>
            <option>Social Media Marketing</option>
            <option>Content Marketing</option>
            <option>Other</option>
          </select>

          <textarea
            rows="4"
            placeholder="Tell us about your project, goals, and how we can help..."
            className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500 resize-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-700  text-white py-4 rounded-full hover:from-blue-800 hover:to-pink-700 transition shadow-lg"
          >
            Send Message
          </button>
        </form>

      </div>
    </div>

  </div>
</section>

  );
};

export default Contactcomp;

// // import React from 'react';
// // import { FaPaperPlane } from 'react-icons/fa';
// // import rocket from '../assets/service/rocketicon.png'
// // import write from '../assets/service/writeicon.png'
// // const Contactcomp = () => {
// //   return (
// //     <div className=" px-4 py-10 md:py-12 lg:py-4  lg:px-35">
// //       <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
// // {/* Text Section */}
// // <div className="lg:w-1/2 flex-col items-center mt-30">
// //   <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-left">
// //     Like exploring new <span className='text-pink-500'> dimensions in art</span>, we seek out every opportunity to create <span className='text-blue-800'>meaningful impact</span>.
// //   </h2>
// //   <div className="flex space-x-15 mt-4">
// //     {/* First image-text pair */}
// //     <div className="flex items-center mt-4">
// //       <img src={rocket} className="h-10 w-10 rounded-full bg-blue-100 mr-3" />
// //       <p className="text-lg text-gray-700 font-semibold leading-tight"> Strategies that <br /> actually take off</p>
// //     </div>
// //     {/* Second image-text pair */}
// //     <div className="flex items-center mt-4">
// //       <img src={write} className="h-10 w-10 rounded-full bg-blue-100 mr-3" />
// //        <p className="text-lg text-gray-700 font-semibold leading-tight">Ideas that <br /> speak your brand  </p>
// //     </div>
// //   </div>
// // </div>

// //         {/* Form Section */}
// //         <div className="lg:w-1/2">
// //           <section className="w-full bg-white p-6 md:p-8 rounded-xl border border-gray-300">
// //             <form className="space-y-6">
// //               <div className="space-y-2">
               
// //                 <input
// //                   type="text"
// //                   id="fullName"
// //                   className="block w-full rounded-md border border-gray-300 p-3 focus:outline-blue-500 focus:outline-2"
// //                   placeholder="Your full name"
// //                   required
// //                 />
// //               </div>

// //               <div className="space-y-2">
              
// //                 <input
// //                   type="email"
// //                   id="email"
// //                   className="block w-full rounded-md border border-gray-300 p-3 focus:outline-blue-500 focus:outline-2"
// //                   placeholder="your@email.com"
// //                   required
// //                 />
// //               </div>

// //               <div className="space-y-2">
              
// //                 <input
// //                   type="tel"
// //                   id="phone"
// //                   className="block w-full rounded-md border border-gray-300 p-3 focus:outline-blue-500 focus:outline-2"
// //                   placeholder="(555) 123-4567"
// //                 />
// //               </div>

// //               <div className="space-y-2">
             
// //                 <select
// //                   id="service"
// //                   className="block w-full rounded-md border border-gray-300 p-3 focus:outline-blue-500 focus:outline-2"
// //                   defaultValue=""
// //                   required
// //                 >
// //                   <option value="" disabled>
// //                     Select a service
// //                   </option>
// //                   <option>Display Advertising</option>
// //                   <option>Influencer Marketing</option>
// //                   <option>Mobile Marketing</option>
// //                   <option>Email Marketing</option>
// //                   <option>Video Advertising</option>
// //                   <option>ORM Solutions</option>
// //                   <option>SEO Optimization</option>
// //                   <option>Social Media Marketing</option>
// //                   <option>Content Marketing</option>
// //                   <option>Other</option>
// //                 </select>
// //               </div>

// //               <div className="space-y-2">
            
// //                 <select
// //                   id="budget"
// //                   className="block w-full rounded-md border border-gray-300 p-3 focus:outline-blue-500 focus:outline-2"
// //                   defaultValue=""
// //                   required
// //                 >
// //                   <option value="" disabled>
// //                     Select budget range
// //                   </option>
// //                   <option>Under $5,000/month</option>
// //                   <option>$5,000 - $10,000/month</option>
// //                   <option>$10,000 - $25,000/month</option>
// //                   <option>$25,000 - $50,000/month</option>
// //                   <option>$50,000+/month</option>
// //                 </select>
// //               </div>

// //               <div className="space-y-2">
               
// //                 <textarea
// //                   id="message"
// //                   className="block w-full rounded-md border border-gray-300 p-3 focus:outline-blue-500 focus:outline-2"
// //                   rows="4"
// //                   placeholder="Tell us about your project, goals, and how we can help..."
// //                 ></textarea>
// //               </div>

// //               <button
// //                 type="submit"
// //                 className="w-full bg-blue-800 text-white py-4 rounded-md flex items-center justify-center hover:bg-pink-600 focus:outline-blue-500 focus:outline-2 transition-colors"
// //               >
// //                 <FaPaperPlane className="mr-2" /> Send Message
// //               </button>
// //             </form>
// //           </section>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// export default Contactcomp;
// import React, { useEffect, useRef } from 'react';
// import { FaPaperPlane } from 'react-icons/fa';
// import Connect from '../assets/connect.jpg'

// const Contactcomp = () => {
//   const circleRef = useRef(null);

//   // Same parallax effect as your first section
//   useEffect(() => {
//     const handleScroll = () => {
//       if (!circleRef.current) return;
//       const scrollY = window.scrollY;
//       circleRef.current.style.transform = `translateY(${scrollY * 0.6}px)`;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
//       {/* EXACT SAME Parallax Glowing Circles */}
//       <div
//         ref={circleRef}
//         className="relative inset-0 flex  pointer-events-none z-100"
//       >
//         {/* Large bottom pink circle */}
//         <div
//           className="absolute top-300vh left-1/3 w-19 h-19 rounded-full bg-pink-400 blur-[0px] shadow-2xl"
//           style={{
//             opacity: 0.85,
//             animation: "breathe 14s ease-in-out infinite 8s",
//           }}
//         />

//         {/* Middle blue circle */}
//         <div
//           className="absolute top-250vh left-160 w-30 h-30 rounded-full bg-blue-400 blur-[0px] shadow-2xl"
//           style={{
//             opacity: 0.8,
//             animation: "breathe 12s ease-in-out infinite 4s",
//           }}
//         />

//         {/* Top pink circle */}
//         <div
//           className="absolute top-20 left-170 w-40 h-40 rounded-full bg-pink-400 blur-[0px] shadow-2xl"
//           style={{
//             opacity: 0.9,
//             animation: "breathe 16s ease-in-out infinite",
//           }}
//         />

//         {/* Small accent circle */}
//         <div
//           className="absolute bottom-10 left-10 w-10 h-10 rounded-full bg-pink-400 blur-[20px] shadow-2xl"
//           style={{
//             opacity: 0.7,
//             animation: "breathe 10s ease-in-out infinite 6s",
//           }}
//         />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="flex flex-col lg:flex-row gap-12 lg:gap-25 items-center">
          
//           {/* Text Section */}
//      <div className="flex justify-center lg:justify-start">
//           <img
//             src={Connect}
//             alt="Contact"
//             className="w-full max-w-md rounded-3xl shadow-2xl object-cover"
//           />
//         </div>

//           {/* Form Section */}
//           <div className="w-full max-w-xl mx-auto">
//           <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl border border-gray-100">
//               <form className="space-y-6">
//                 <input
//                   type="text"
//                   placeholder="Your full name"
//                   className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500 transition"
//                   required
//                 />

//                 <input
//                   type="email"
//                   placeholder="your@email.com"
//                   className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500 transition"
//                   required
//                 />

//                 <input
//                   type="tel"
//                   placeholder="(555) 123-4567"
//                   className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500 transition"
//                 />

//                 <select
//                   defaultValue=""
//                   className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500 transition"
//                   required
//                 >
//                   <option value="" disabled>Select a service</option>
//                   <option>Display Advertising</option>
//                   <option>Influencer Marketing</option>
//                   <option>Mobile Marketing</option>
//                   <option>Email Marketing</option>
//                   <option>Video Advertising</option>
//                   <option>ORM Solutions</option>
//                   <option>SEO Optimization</option>
//                   <option>Social Media Marketing</option>
//                   <option>Content Marketing</option>
//                   <option>Other</option>
//                 </select>

//                 <select
//                   defaultValue=""
//                   className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500 transition"
//                   required
//                 >
//                   <option value="" disabled>Select budget range</option>
//                   <option>Under $5,000/month</option>
//                   <option>$5,000 - $10,000/month</option>
//                   <option>$10,000 - $25,000/month</option>
//                   <option>$25,000 - $50,000/month</option>
//                   <option>$50,000+/month</option>
//                 </select>

//                 <textarea
//                   rows="4"
//                   placeholder="Tell us about your project, goals, and how we can help..."
//                   className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500 transition resize-none"
//                 />

//                 <button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-blue-700 to-pink-600 text-white font-medium py-4 rounded-xl flex items-center justify-center hover:from-blue-800 hover:to-pink-700 transition-all duration-300 shadow-lg"
//                 >
//                   <FaPaperPlane className="mr-3" />
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Breathing Animation - Same as before */}
//       <style jsx>{`
//         @keyframes breathe {
//           0%, 100% {
//             opacity: 0.7;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 0.95;
//             transform: scale(1.2);
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Contactcomp;
// import { useEffect, useRef } from "react";
// import connect from '../assets/connect.jpg'

// export default function ContactUs() {
//   const circleRef = useRef(null);
//   const sectionRef = useRef(null);


//   // Parallax effect - identical to your original
//   useEffect(() => {
//   const handleScroll = () => {
//     if (!circleRef.current || !sectionRef.current) return;

//     const section = sectionRef.current;
//     const rect = section.getBoundingClientRect();
//     const windowHeight = window.innerHeight;

//     // progress from 0 → 1 while section is visible
//     const progress = Math.min(
//       Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0),
//       1
//     );

//     circleRef.current.style.transform = `translateY(${progress * 120}px)`;
//   };

//   window.addEventListener("scroll", handleScroll);
//   handleScroll(); // run once on load
//   return () => window.removeEventListener("scroll", handleScroll);
// }, []);


//   return (
//     <section className="relative flex items-center justify-center overflow-hidden bg-white">
//       {/* Parallax layered glowing circles */}
//       <section
//   ref={sectionRef}
//   className="relative flex items-center justify-center overflow-hidden bg-white"
// >

//         <div
//           className="absolute top-200 left-170 w-19 h-19 rounded-full bg-pink-400 blur-[28px] shadow-2xl"
//           style={{
//             opacity: 0.85,
//             animation: "breathe 14s ease-in-out infinite 8s",
//           }}
//         />

//         <div
//           className="absolute top-200 left-160 w-30 h-30 rounded-full bg-blue-400 blur-[40px] shadow-2xl"
//           style={{
//             opacity: 0.8,
//             animation: "breathe 12s ease-in-out infinite 4s",
//           }}
//         />

//         <div
//           className="absolute top-200 left-170 w-40 h-40 rounded-full bg-pink-400 blur-[28px] shadow-2xl"
//           style={{
//             opacity: 0.9,
//             animation: "breathe 16s ease-in-out infinite",
//           }}
//         />

//         <div
//           className="absolute bottom-10 left-10 w-10 h-10 rounded-full bg-pink-400 blur-[20px] shadow-2xl"
//           style={{
//             opacity: 0.7,
//             animation: "breathe 10s ease-in-out infinite 6s",
//           }}
//         />
//       </section>

//       {/* Content - Split Layout */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 pb-2 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
//         {/* Left: Image */}
//         <div className="order-2 lg:order-1 flex justify-center lg:justify-end">
//           <div className="relative overflow-hidden shadow-2xl max-w-lg w-full">
//             <img
//               src={connect}
//               alt="Team collaboration and creativity"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
//           </div>
//         </div>

//         {/* Right: Contact Form */}
//         <div className="order-1 lg:order-2">
        

//           <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-lg leading-relaxed font-light">
//             Tell us about your brand and goals. We’ll get back to you within 24 hours.
//           </p>

//           <form className="space-y-6">
//             <input
//               type="text"
//               placeholder="Your full name"
//               className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500 transition"
//               required
//             />

//             <input
//               type="email"
//               placeholder="your@email.com"
//               className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500 transition"
//               required
//             />

//             <input
//               type="tel"
//               placeholder="(555) 123-4567"
//               className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500 transition"
//             />

//             <select
//               defaultValue=""
//               className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500 transition"
//               required
//             >
//               <option value="" disabled>Select a service</option>
//               <option>Display Advertising</option>
//               <option>Influencer Marketing</option>
//               <option>Mobile Marketing</option>
//               <option>Email Marketing</option>
//               <option>Video Advertising</option>
//               <option>ORM Solutions</option>
//               <option>SEO Optimization</option>
//               <option>Social Media Marketing</option>
//               <option>Content Marketing</option>
//               <option>Other</option>
//             </select>


//             <textarea
//               rows="4"
//               placeholder="Tell us about your project, goals, and how we can help..."
//               className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500 transition resize-none"
//             />

//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-700 to-pink-600 text-white font-medium py-4 rounded-xl flex items-center justify-center hover:from-blue-800 hover:to-pink-700 transition-all duration-300 shadow-lg"
//             >
//               Send Message
//             </button>
//           </form>

//           <p className="text-sm text-gray-500 mt-8 font-light">
//             We respect your privacy. No spam, ever.
//           </p>
//         </div>
//       </div>

//       {/* Breathing animation */}
//       <style jsx>{`
//         @keyframes breathe {
//           0%, 100% {
//             opacity: 0.7;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 0.95;
//             transform: scale(1.2);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }