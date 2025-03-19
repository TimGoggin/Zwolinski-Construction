
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { galleryData } from '../types/gallery';

const Gallery = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const filteredSections = selectedSection 
    ? galleryData.filter(section => section.id === selectedSection)
    : galleryData;

  return (
    <div>
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-zwolinski-navy">
            Our Project <span className="text-zwolinski-burgundy">Gallery</span>
          </h1>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setSelectedSection(null)}
              className={`px-4 py-2 rounded-md transition-colors ${
                !selectedSection 
                  ? 'bg-zwolinski-burgundy text-white' 
                  : 'bg-white text-zwolinski-navy hover:bg-gray-100'
              }`}
            >
              All Projects
            </button>
            {galleryData.map((section) => (
              <button
                key={section.id}
                onClick={() => setSelectedSection(section.id)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  selectedSection === section.id
                    ? 'bg-zwolinski-burgundy text-white'
                    : 'bg-white text-zwolinski-navy hover:bg-gray-100'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {filteredSections.map((section) => (
            <div key={section.id} className="mb-16">
              <h2 className="text-3xl font-bold mb-4 text-zwolinski-navy">{section.title}</h2>
              {section.description && (
                <p className="text-gray-600 mb-8">{section.description}</p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.images.length > 0 ? (
                  section.images.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className="relative group overflow-hidden rounded-lg h-[300px]"
                    >
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <h3 className="text-white text-xl font-semibold mb-2">
                          {image.title}
                        </h3>
                        {image.description && (
                          <p className="text-white text-sm">
                            {image.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12 bg-gray-50 rounded-lg">
                    <p className="text-gray-500">Coming soon...</p>
                  </div>
                )}
              </div>
            </div>
          ))}
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

export default Gallery;
