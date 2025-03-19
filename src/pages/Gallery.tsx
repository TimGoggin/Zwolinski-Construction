import React from 'react';

const Gallery = () => {
  const projects = [
    {
      category: "Custom Homes",
      images: [
        {
          url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
          title: "Modern Family Home"
        },
        {
          url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
          title: "Luxury Estate"
        }
      ]
    },
    {
      category: "Kitchen Remodels",
      images: [
        {
          url: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80",
          title: "Contemporary Kitchen"
        },
        {
          url: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&q=80",
          title: "Modern Kitchen Design"
        }
      ]
    },
    {
      category: "Bathroom Renovations",
      images: [
        {
          url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80",
          title: "Luxury Bathroom"
        },
        {
          url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80",
          title: "Modern Bathroom"
        }
      ]
    },
    {
      category: "Commercial Projects",
      images: [
        {
          url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
          title: "Office Building"
        },
        {
          url: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80",
          title: "Retail Space"
        }
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-zwolinski-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">
            Our Project <span className="text-zwolinski-burgundy">Gallery</span>
          </h1>
          <p className="text-xl max-w-3xl">
            Explore our portfolio of completed projects showcasing our commitment to quality and craftsmanship.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {projects.map((category, index) => (
            <div key={index} className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-zwolinski-navy">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.images.map((image, imageIndex) => (
                  <div key={imageIndex} className="relative group overflow-hidden rounded-lg">
                    <img 
                      src={image.url}
                      alt={image.title}
                      className="w-full h-[400px] object-cover rounded-lg shadow-md transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zwolinski-navy to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 rounded-lg flex items-end justify-start p-6">
                      <h3 className="text-white text-xl font-semibold">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-zwolinski-navy">Inspired by What You See?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can bring your vision to life.
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-zwolinski-burgundy text-white rounded-md hover:bg-opacity-90 transition-colors font-semibold"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;