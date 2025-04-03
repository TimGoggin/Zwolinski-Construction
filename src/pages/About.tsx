import React from "react";
import { Award, Users, Clock, Shield, ArrowRight } from "lucide-react";

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
      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/gallery/kitchens/IMG_0577.JPG")',
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white bg-black/30 backdrop-blur-md p-8 rounded-lg max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">
              About <span className="text-zwolinski-burgundy">Zwolinski</span>{" "}
              <br />
              Quality Construction
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Building trust through quality craftsmanship and exceptional
              service.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-zwolinski-burgundy text-white rounded-md hover:bg-opacity-90 transition-colors"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-[#C0C0C0]">
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
            <div className="w-full">
              <img
                src="/images/projects/aboutLivingRoom.jpg"
                alt="Living Room"
                className="rounded-lg shadow-xl w-full max-h-[700px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg shadow-xl border border-gray-600"
              >
                <value.icon className="h-12 w-12 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {value.title}
                </h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-zwolinski-burgundy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8">
            Contact us today for a free consultation and estimate.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-zwolinski-navy text-white rounded-md hover:bg-opacity-90 transition-colors font-semibold"
          >
            Contact Us Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-zwolinski-navy">
            Our Reviews
          </h2>
          <div className="flex gap-8 justify-center items-stretch">
            <a
              href="https://www.google.com/search?q=zwolinski+quality+construction&oq=zwolinski+qu&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyEAgBEC4YrwEYxwEYgAQYjgUyBggCEEUYOTIKCAMQABiABBiiBDIKCAQQABiABBiiBDIGCAUQRRg9MgYIBhBFGDwyBggHEEUYPNIBCDI3NTNqMGo5qAIAsAIB&sourceid=chrome&ie=UTF-8#lrd=0x89c6a05cc01b6e05:0x4f72758643065789,1,,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 max-w-md bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8 border-2 border-zwolinski-burgundy flex flex-col items-center justify-center text-center"
            >
              <img
                src="/images/google-logo.png"
                alt="Google Reviews"
                className="w-24 h-24 mb-4"
              />
              <h3 className="text-2xl font-bold text-zwolinski-navy mb-2">
                Google Reviews
              </h3>
              <p className="text-gray-600 mb-4">
                See what our clients are saying about us on Google
              </p>
              <span className="text-zwolinski-burgundy font-semibold">
                Read Reviews →
              </span>
            </a>

            <a
              href="https://www.homeadvisor.com/rated.ZWOLINSKIQuality.8386546.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 max-w-md bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8 border-2 border-zwolinski-burgundy flex flex-col items-center justify-center text-center"
            >
              <img
                src="/images/homeadvisor-logo.png"
                alt="HomeAdvisor Reviews"
                className="w-24 h-24 mb-4"
              />
              <h3 className="text-2xl font-bold text-zwolinski-navy mb-2">
                HomeAdvisor Reviews
              </h3>
              <p className="text-gray-600 mb-4">
                Check out our reviews on HomeAdvisor
              </p>
              <span className="text-zwolinski-burgundy font-semibold">
                Read Reviews →
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
