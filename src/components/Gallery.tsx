import React from 'react';

const Gallery = () => {
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
      title: "Business Strategy Session",
      description: "Strategic planning and consultation with entrepreneurs"
    },
    {
      url: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
      title: "Team Workshop",
      description: "Interactive training and development sessions"
    },
    {
      url: "https://images.unsplash.com/photo-1566492031773-4f4e44671857",
      title: "Leadership Development",
      description: "Empowering future business leaders"
    },
    {
      url: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
      title: "Business Networking",
      description: "Building valuable professional connections"
    },
    {
      url: "https://images.unsplash.com/photo-1513759565286-20e9c5fad06b",
      title: "Professional Development",
      description: "Continuous learning and growth opportunities"
    },
    {
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      title: "Collaborative Projects",
      description: "Working together to achieve business excellence"
    }
  ];

  return (
    <div className="pt-20 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#003366] sm:text-4xl">
            Our Gallery
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Showcasing excellence in business transformation and growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#003366] mb-2">
                  {image.title}
                </h3>
                <p className="text-gray-600">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;