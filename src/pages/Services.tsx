import React from "react";
import {
  Home,
  Building2,
  Hammer,
  PaintBucket,
  Wrench,
  Lightbulb,
  DoorOpen as Door,
  AppWindow as Window,
  Warehouse,
  Waves,
  Grid,
  Droplet,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Interior Remodeling",
      description:
        "Transform your living spaces with our expert remodeling services.",
      features: [
        "Kitchen Remodeling",
        "Bathroom Remodeling",
        "Basement Remodeling",
        "Wood Flooring Installation",
        "Ceramic Tile Installation",
      ],
    },
    {
      icon: Warehouse,
      title: "Exterior Construction",
      description:
        "Enhance your home's exterior with our quality construction services.",
      features: [
        "Custom Deck Building",
        "Garage Construction",
        "Siding Installation",
        "Roofing Services",
        "Door Installation",
      ],
    },
    {
      icon: Window,
      title: "Windows & Doors",
      description:
        "Improve your home's efficiency and appearance with quality installations.",
      features: [
        "Window Replacement",
        "Door Installation",
        "Storm Doors",
        "Energy Efficient Options",
        "Custom Sizing",
      ],
    },
    {
      icon: PaintBucket,
      title: "Painting Services",
      description: "Professional painting services for any surface.",
      features: [
        "Interior Painting",
        "Exterior Painting",
        "Cabinet Refinishing",
        "Deck Staining",
        "Color Consultation",
      ],
    },
    {
      icon: Droplet,
      title: "Plumbing Services",
      description: "Complete plumbing solutions for your home.",
      features: [
        "Fixture Installation",
        "Pipe Repair",
        "Water Heater Service",
        "Bathroom Plumbing",
        "Kitchen Plumbing",
      ],
    },
    {
      icon: Lightbulb,
      title: "Electrical Services",
      description: "Professional electrical work for safety and efficiency.",
      features: [
        "Wiring Installation",
        "Lighting Installation",
        "Panel Upgrades",
        "Safety Inspections",
        "Outlet Installation",
      ],
    },
  ];

  const serviceAreas = [
    {
      county: "Bucks County",
      description:
        "Serving Perkasie, Doylestown, Quakertown, and surrounding areas",
    },
    {
      county: "Montgomery County",
      description:
        "Serving Lansdale, Collegeville, Blue Bell, and surrounding areas",
    },
    {
      county: "Lehigh County",
      description: "Serving Allentown, Emmaus, Macungie, and surrounding areas",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url("/images/projects/servicesHero.jpg")',
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white bg-black/30 backdrop-blur-md p-8 rounded-lg max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">
              Our <span className="text-zwolinski-navy">Services</span>
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Comprehensive construction and remodeling services delivered with
              expertise and dedication to quality.
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

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-zwolinski-burgundy"
              >
                <service.icon className="h-12 w-12 text-zwolinski-burgundy mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-zwolinski-navy">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="h-1.5 w-1.5 bg-zwolinski-burgundy rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-zwolinski-navy">
            Service Areas
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-zwolinski-burgundy"
                >
                  <h3 className="text-xl font-semibold text-zwolinski-navy mb-2">
                    {area.county}
                  </h3>
                  <p className="text-gray-600">{area.description}</p>
                </div>
              ))}
            </div>
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
    </div>
  );
};

export default Services;
