import React, { useEffect } from "react";
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Seo from "../components/seo/Seo";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white text-gray-900">
      <Seo
        title="Contact Zentrix | Strategy-First Digital Marketing Agency"
        description="Ready to scale? Talk strategy with Zentrix. No fluff. No sales scripts. Just clarity, growth, and execution."
        href="https://zentrix.media/contact"
      />

      {/* HERO */}
      <section className="w-full border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 pt-35 pb-15 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
            Ready to Scale? <br />
            <span className="text-gray-800">
              Let’s Crunch the Numbers.
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            No fluff. No sales scripts. Just honest strategy, clear execution,
            and growth that actually compounds.
          </p>

          <div className="mt-6 text-sm text-gray-500">
            <Link to="/" className="hover:text-gray-800">Home</Link> / Contact
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start with a Conversation.
            </h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Whether you’re a startup ready to disrupt or a legacy brand ready
              to evolve, the first step is clarity. Tell us about your goals,
              timeline, and ambition — we’ll tell you exactly how to get there.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-800">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">business@zentrix.media</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-800">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-600">Mumbai, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="border border-gray-200 rounded-xl p-8 shadow-sm">
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full name"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />

              <input
                type="email"
                placeholder="Work email"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />

              <select className="w-full border border-gray-300 rounded-md p-3 text-gray-600">
                <option>Select a service</option>
                <option>SEO & Growth Strategy</option>
                <option>Paid Media</option>
                <option>Social Media</option>
                <option>Content & Branding</option>
                <option>Other</option>
              </select>

              <select className="w-full border border-gray-300 rounded-md p-3 text-gray-600">
                <option>Estimated budget</option>
                <option>Under $5,000 / month</option>
                <option>$5,000 – $10,000</option>
                <option>$10,000 – $25,000</option>
                <option>$25,000+</option>
              </select>

              <textarea
                rows="4"
                placeholder="Tell us about your goals, challenges, and expectations…"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-4 rounded-full flex items-center justify-center gap-2 hover:bg-gray-800 transition"
              >
                <FaPaperPlane /> Send Message
              </button>

              <p className="text-xs text-gray-500 text-center">
                We usually respond within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.70176810728!2d72.71412747332744!3d19.082482210877554"
          width="100%"
          height="420"
          className="rounded-xl border border-gray-200"
          loading="lazy"
          title="Zentrix Location"
        />
      </section>

      {/* FOOTER NOTE */}
      <section className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <p className="text-lg font-semibold text-gray-800">
            “The best time to plant a tree was 20 years ago.
          </p>
          <p className="text-lg font-semibold text-gray-800">
            The best time to fix your digital strategy is now.”
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
