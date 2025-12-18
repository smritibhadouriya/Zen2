// This is the new section — place it AFTER the ParallaxSection component in your page
import Background from "../assets/banner2.jpeg";

export default function AboutZentrix() {
  const services = [
    {
      title: "  100% Agility",
      description:
        " We are young, fast, and allergic to “the way it’s always been done.”",
    },
    {
      title: "  AI-Native",
      description:
        " While others are still figuring out AI tools, we use it every day and save 40% more time.",
    },
    {
      title: " Laser Precision",
      description:
        " No guessing. Our proprietary data analysis delivers better ROI.",
    },
  ];

  return (
    <section className="relative  pt-10 overflow-hidden "
       style={{
            background: `url(${Background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed", // Optional: nice parallax effect on desktop
          }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-gray-800 tracking-wide">
           Why We’re Different  
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-600 font-light max-w-4xl mx-auto">
            We speak Human fluently,but we constantly think in code, data, and trends
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group backdrop-blur-sm bg-white/50 border border-white/40 rounded-3xl p-10 lg:p-12 shadow-xl transition-all duration-500 hover:bg-white/70 hover:shadow-2xl hover:-translate-y-2"
            >
              <h3 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-6">
                {service.title}
              </h3>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Optional subtle divider line or accent */}
        <div className="mt-20 lg:mt-28 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      </div>
    </section>
  );
}