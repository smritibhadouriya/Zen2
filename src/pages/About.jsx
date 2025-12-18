import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import background from '../assets/bannerbg1.jpeg';
import ParallaxBackground from "../components/Parallex"; // Same as service pages

export default function AboutUs() {
  // Scroll reveal for differentiators (matching service pages style)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-12");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".core-differentiator").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const differentiators = [
    {
      title: "The Visionaries",
      description: "We don't just look at 1 quarter at a time. We build long-term, sustainable growth strategies that evolve with your brand.",
      imageSrc: "https://www.timechamp.io/blogs/wp-content/uploads/2024/05/Why-Long-term-planning-is-Important-3.jpg",
      alt: "Long-term business vision and strategy",
      reverse: false,
    },
    {
      title: "The Tech",
      description: "We use AI not to replace humans, but to give them superpowers. This allows our team to focus 80% of their time on creative strategy rather than repetitive tasks.",
      imageSrc: "https://iddigital.com.au/hubfs/AI-Generated%20Media/Images/The%20image%20depicts%20a%20vibrant%20futuristic%20creative%20workspace%20bustling%20with%20activity%20On%20one%20side%20a%20sleek%20humanoid%20robot%20is%20intently%20generating%20digital%20artwork%20on%20a%20highresolution%20screen%20its%20mechanical%20fingers%20deftly%20manipulating%20a%20stylus%20The%20artwork%20show-1.jpeg",
      alt: "AI enhancing human creativity in digital marketing",
      reverse: true,
    },
    {
      title: "The Vibe",
      description: "Professional? Yes. Boring? Never. We believe the best work happens when you’re genuinely having fun solving hard problems.",
      imageSrc: "https://thumbs.dreamstime.com/b/happy-office-workers-jumping-vector-illustration-up-fun-people-work-workplace-corporate-culture-company-cheerful-working-day-127480741.jpg",
      alt: "Fun and positive creative team vibe",
      reverse: false,
    },
  ];

  return (
    <div className="font-sans bg-white">
      {/* Hero Section - Fully matching service pages theme */}
      <header
        className="relative min-h-screen flex items-center justify-center text-center py-20 md:py-32 px-4 md:px-8 bg-cover bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 mb-8 leading-tight animate-fade-in-up">
            About Zentrix Media
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
            The modern digital landscape is quite dynamic and the brand’s needs are constantly evolving. One day it's SEO, the next it's AI Search and you need a guide who can pivot instantly.
          </p>
          <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
            At Zentrix Media, we are versatile by design and more than happy to partner with you and help you accomplish your goals. We don't just "do digital marketing" — we act as your external growth engine.
          </p>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
            Whether you are a startup looking for your first 10,000 users or a legacy brand needing a digital facelift, we have the tools, the data, the energy, and the right mettle to make it happen.
          </p>
          <p className="text-2xl md:text-3xl text-gray-700 font-semibold animate-fade-in-up animation-delay-300">
            We are a team of digital natives, data geeks, and creative rebels on a mission to rewrite the rules of modern marketing.
          </p>
        </div>
      </header>

      {/* Zentrix's Story - With Parallax (matching service detailed intro) */}
      <section className="relative overflow-hidden min-h-screen">
        <ParallaxBackground speed={0.6} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
                Zentrix's Story
              </h2>
              <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                <p>
                  We didn't start Zentrix Media to be another agency with a foosball table and vague promises. We started it because we saw a gap.
                </p>
                <p>
                  The digital landscape was changing faster than traditional agencies could keep up. AI was rising. Attention spans were shrinking. Data was everywhere, but nobody knew how to read it.
                </p>
                <p>
                  So, we built Zentrix Media. We are a collective of young, dynamic professionals who grew up on the internet. We understand the memes, the algorithms, and the culture because we live in it.
                </p>
                <p className="font-semibold text-gray-900">
                  But we back that intuition with hardcore data science and deliver results every single time.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://www.shutterstock.com/image-photo/team-professionals-having-meeting-digital-260nw-2324978167.jpg"
                alt="Zentrix Media team in creative meeting"
                className="w-full rounded-3xl shadow-2xl object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founders - Clean cards matching overall theme */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6">
            Meet the Founders
          </h2>
          <p className="text-2xl text-gray-600 mb-20">
            Young Blood. Old Souls. Sharp Minds.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Founder 1 */}
            <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <img
                src="https://as2.ftcdn.net/jpg/02/05/57/31/1000_F_205573127_717UojzrGbQjHC4Ctn06kFjoZ7Hl6oX3.jpg"
                alt="Omkar - Founder"
                className="rounded-full w-64 h-64 mx-auto mb-8 object-cover"
              />
              <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">Omkar</h3>
              <p className="text-lg text-gray-600">Visionary leader driving Zentrix's growth strategy.</p>
            </div>
            {/* Founder 2 - Placeholder */}
            <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <img
                src="https://fortune.com/img-assets/wp-content/uploads/2025/04/16-9.jpg"
                alt="Co-Founder"
                className="rounded-full w-64 h-64 mx-auto mb-8 object-cover"
              />
              <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">[Co-Founder Name]</h3>
              <p className="text-lg text-gray-600">Creative force behind our campaigns.</p>
            </div>
            {/* Founder 3 - Placeholder */}
            <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <img
                src="https://experience.mcintire.virginia.edu/wp-content/uploads/2024/04/FoundersForum-768x460.jpg"
                alt="Co-Founder"
                className="rounded-full w-64 h-64 mx-auto mb-8 object-cover"
              />
              <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">[Co-Founder Name]</h3>
              <p className="text-lg text-gray-600">Data-driven strategist mastering performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Differentiators - Matching service "detailed intro" style */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <p className="text-3xl md:text-4xl text-gray-800 mb-20 font-semibold italic max-w-5xl mx-auto text-center">
            We are the bridge between "Viral Creativity" and "Business Logic."
          </p>
          <div className="space-y-32">
            {differentiators.map((diff, index) => (
              <div
                key={index}
                className="core-differentiator grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center opacity-0 translate-y-12 transition-all duration-1000"
              >
                <div className={`${diff.reverse ? "lg:order-2" : "lg:order-1"} space-y-8`}>
                  <h3 className="text-4xl lg:text-5xl font-semibold text-gray-900">
                    {diff.title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    {diff.description}
                  </p>
                </div>
                <div className={`${diff.reverse ? "lg:order-1" : "lg:order-2"}`}>
                  <img
                    src={diff.imageSrc}
                    alt={diff.alt}
                    className="w-full rounded-3xl shadow-2xl object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Matching service pages */}
      <section className="py-24 lg:py-32 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-10">
            Enough about us.<br />Let’s talk about YOU.
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center px-12 py-6 bg-pink-600 text-white text-xl font-bold rounded-full hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Shared Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animation-delay-300 { animation-delay: 0.3s; }
      `}</style>
    </div>
  );
}