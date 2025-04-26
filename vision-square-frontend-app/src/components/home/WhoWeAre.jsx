import { NavLink } from "react-router-dom";

const WhoWeAre = () => {
  return (
    <section className="py-12 md:py-3 bg-background text-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-5 py-2 text-sm font-semibold text-primary bg-primary/10 rounded-full uppercase tracking-widest">
            About Vision Square
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral mt-4 mb-4">
            Empowering Your Global Education Journey
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Vision Square is your dedicated guide to academic success abroad.
            With a legacy built on trust, results, and personalized support, we
            help students unlock their global potential.
          </p>
        </div>

        {/* Content Flex Layout */}
        <div className="flex flex-col md:flex-row md:items-start gap-12">
          {/* Image Column */}
          <div className="md:w-1/3 flex justify-center">
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl transform rotate-2 group-hover:rotate-0 transition duration-500"></div>
              <img
                src="/images/PreviewImage.jpg" // ✅ Corrected path
                alt="Vision Square team"
                className="relative rounded-xl shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="md:w-2/3">
            <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-8">
              Why Vision Square?
            </h3>

            <div className="space-y-8">
              {/* Feature Items */}
              {[
                {
                  title: "5+ Years of Expertise",
                  description:
                    "We’ve guided over 10,000 students to top universities worldwide, delivering consistent visa success.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  ),
                },
                {
                  title: "Personalized, End-to-End Guidance",
                  description:
                    "From choosing the right course to pre-departure prep, we stay by your side every step of the journey.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  ),
                },
                {
                  title: "Global University Network",
                  description:
                    "Access over 500 prestigious institutions across 20+ countries through our exclusive global partnerships.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  ),
                },
                {
                  title: "Career-Focused Counseling",
                  description:
                    "We align your education plan with your long-term career goals, ensuring a future-ready path.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 17v-4H5l7-7 7 7h-4v4H9z"
                    />
                  ),
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg mr-5">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {feature.icon}
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-neutral mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12">
              <NavLink to="/about">
                <span className="inline-block px-6 py-3 bg-primary hover:bg-blue-700 text-white font-medium rounded-full transition duration-300 transform hover:scale-105 shadow-md">
                  Learn More About Us
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
