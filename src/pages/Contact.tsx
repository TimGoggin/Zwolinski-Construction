import React, { useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact | Zwolinski Quality Construction</title>
        <meta
          name="description"
          content="Get in touch with Zwolinski Quality Construction for expert remodeling services. Call, email, or visit our Perkasie office to schedule a consultation."
        />
        <meta
          name="keywords"
          content="contact Zwolinski Construction, get a quote, schedule consultation, contractor phone number, construction company email, Perkasie construction contact"
        />
        <link rel="canonical" href="https://zwolinskiconstr.com/contact" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Zwolinski Quality Construction",
            "url": "https://zwolinskiconstr.com/contact",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Zwolinski Quality Construction",
              "telephone": "+1-267-471-6120",
              "email": "arnoldzwolinski@verizon.net",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "166 E Walnut St",
                "addressLocality": "Perkasie",
                "addressRegion": "PA",
                "postalCode": "18944",
                "addressCountry": "US"
              },
              "openingHours": "Mo-Fr 09:00-17:00",
              "image": "https://zwolinskiconstr.com/images/zwol25.png",
              "url": "https://zwolinskiconstr.com"
            }
          }
        `}</script>
      </Helmet>

      <section
        className="relative h-[300px] md:h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/gallery/bathrooms/newBathroom3.jpg")',
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-gray-300 bg-black/80 backdrop-blur-md p-8 rounded-lg max-w-2xl border border-gray-700">
            <h1 className="text-5xl font-bold mb-4">
              Contact <span className="text-silver">Us</span>
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Let's discuss your project and bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-8 text-zwolinski-navy">
                Get In Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-white p-4 rounded-lg hover:bg-gray-50 transition-all border border-gray-300">
                  <Phone className="h-6 w-6 text-[#157FBB] mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Call Us
                    </h3>
                    <a
                      href="tel:+12674716120"
                      className="flex items-center space-x-2 text-gray-600 hover:text-gray-700"
                    >
                      <span className="text-gray-600">(267) 471-6120</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white p-4 rounded-lg hover:bg-gray-50 transition-all border border-gray-300">
                  <MessageSquare className="h-6 w-6 text-[#157FBB] mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Text Us
                    </h3>
                    <a
                      href="sms:+12674716120"
                      className="flex items-center space-x-2 text-gray-600 hover:text-gray-700"
                    >
                      <span className="text-gray-600">(267) 471-6120</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white p-4 rounded-lg hover:bg-gray-50 transition-all border border-gray-300">
                  <Mail className="h-6 w-6 text-[#157FBB] mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Email
                    </h3>
                    <a
                      href="mailto:arnoldzwolinski@verizon.net"
                      className="text-gray-600 hover:text-gray-700"
                    >
                      arnoldzwolinski@verizon.net
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white p-4 rounded-lg hover:bg-gray-50 transition-all border border-gray-300">
                  <MapPin className="h-6 w-6 text-[#157FBB] mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Location
                    </h3>
                    <a
                      href="https://www.google.com/maps/place/Zwolinski+Quality+Construction/@40.3507719,-75.2785989,17z/data=!3m1!4b1!4m6!3m5!1s0x89c6a05cc01b6e05:0x4f72758643065789!8m2!3d40.3507719!4d-75.276024!16s%2Fg%2F11clvrzxh5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-700"
                    >
                      166 E Walnut St, Perkasie, PA 18944
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white p-4 rounded-lg hover:bg-gray-50 transition-all border border-gray-300">
                  <Clock className="h-6 w-6 text-[#157FBB] mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday-Friday: 9:00AM - 5:00PM
                      <br />
                      Saturday-Sunday: Appointment Only
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Form */}
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-700 order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-8 text-white">
                Send Us a Message
              </h2>
              <div className="w-full h-[600px]">
                <iframe
                  src="https://bv6w3pwoi5y.typeform.com/to/lMePPdwo"
                  style={{ width: "100%", height: "100%", border: "0" }}
                  allow="camera; microphone; autoplay; encrypted-media;"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
