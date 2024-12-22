import React from 'react';
import { Calculator, Users, Megaphone, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BusinessSupportServices = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      icon: <Calculator className="h-12 w-12" />,
      title: "Accounting & Payroll",
      image: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c",
      description: "Comprehensive financial management services to keep your business running smoothly. Our services include:",
      features: [
        "Bookkeeping and accounting",
        "Payroll processing and management",
        "Tax planning and compliance",
        "Financial reporting and analysis",
        "Budgeting and forecasting"
      ]
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "HR Management",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
      description: "Complete human resource solutions to help you manage and develop your team. We offer:",
      features: [
        "Recruitment and talent acquisition",
        "Employee onboarding and training",
        "Performance management systems",
        "HR policy development",
        "Employee relations management"
      ]
    },
    {
      icon: <Megaphone className="h-12 w-12" />,
      title: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1553484771-689277e6fa16",
      description: "Strategic online presence and marketing campaigns to grow your business. Our services include:",
      features: [
        "Social media management",
        "Content marketing strategy",
        "Search engine optimization (SEO)",
        "Email marketing campaigns",
        "Digital advertising management"
      ]
    }
  ];

  const handleGetStarted = () => {
    navigate('/request/support');
  };

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-[#003366] to-[#004080] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Business Support Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Essential operational support services designed to optimize your business performance and efficiency.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-300 overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[400px] object-cover object-center"
                />
              </div>
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#9064ac]/10 rounded-lg flex items-center justify-center text-[#9064ac]">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-2xl font-bold text-[#003366] mb-4">{service.title}</h2>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <ArrowRight className="h-6 w-6 text-[#9064ac] flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={handleGetStarted}
            className="inline-flex items-center gap-2 bg-[#003366] text-white px-8 py-3 rounded-lg hover:bg-[#004080] transition duration-300"
          >
            Get Started
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessSupportServices;