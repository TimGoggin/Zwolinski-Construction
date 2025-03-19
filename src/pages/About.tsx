import React from "react";
import { Award, Users, Clock, Shield } from "lucide-react";
import AboutHero from "src/assets/images/projects/AboutHero.jpg"; // Assuming AboutHero.jpg is in the same directory

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Craftsmanship",
      description:
        "We take pride in delivering exceptional workmanship on every project.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description:
        "Your satisfaction is our top priority. We listen, communicate, and deliver.",
    },
    {
      icon: Clock,
      title: "Timely Completion",
      description: "We respect deadlines and complete projects on schedule.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description:
        "Honest pricing, transparent communication, and reliable service.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-zwolinski-navy text-white py-20">
        <div className="relative max-w-7xl mx-auto px-4">
          {" "}
          {/* Added relative positioning */}
          <AboutHero /> {/* Replaced the image */}
          <div className="absolute inset-0 bg-opacity-50"></div>{" "}
          {/* Added a semi-transparent overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-4xl font-bold mb-6">
              About <span className="text-zwolinski-burgundy">Zwolinski</span>{" "}
              Quality Construction
            </h1>
            <p className="text-xl max-w-3xl">
              Building trust through quality craftsmanship and exceptional
              service since 2003.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-zwolinski-navy">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Arnold Zwolinski and Zwolinski Quality Construction provide a
                complete solution for all your home improvement, remodeling, and
                renovation needs. We work with you personally from first design
                through finished project and we care about the details. Because
                we understand how important your home is for you and your
                family, and we take pride in every job we do.
              </p>
              <p className="text-gray-600 mb-4">
                Your greatest investment is also our greatest invention: whether
                it's time to remodel your kitchen or bathroom, or expand your
                living space by remodeling your basement, Zwolinski Quality
                Construction will turn dreams into affordable realities.
              </p>
              <p className="text-gray-600 mb-4">
                Whether it's decks, garages, windows, siding, hardwood floors,
                tiles, or any other home improvement project, our wide range of
                professional experience guarantees that your project will be
                completed with the utmost efficiency and top-quality
                workmanship.
              </p>
              <p className="text-gray-600">
                We take pride in our many satisfied customers, and we look
                forward to making you one of them. So for all your remodeling
                needs look to Zwolinski for the best in quality, reliability,
                and service!
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80"
                alt="Construction team"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-zwolinski-navy">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-zwolinski-burgundy"
              >
                <value.icon className="h-12 w-12 mx-auto mb-4 text-zwolinski-burgundy" />
                <h3 className="text-xl font-semibold mb-2 text-zwolinski-navy">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
