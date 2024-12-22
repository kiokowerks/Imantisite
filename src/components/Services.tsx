import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart2, Calculator, Users, Megaphone, 
  BookOpen, Users2, Target, Briefcase, TrendingUp 
} from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      title: 'Tailored Business Solutions',
      description: 'Strategic planning and market analysis for sustainable growth',
      link: '/tailored-business-solutions',
      services: [
        {
          icon: <Briefcase className="h-6 w-6" />,
          name: 'Business Strategy',
          description: 'Comprehensive business planning and strategic development'
        },
        {
          icon: <BarChart2 className="h-6 w-6" />,
          name: 'Market Analysis',
          description: 'In-depth market research and competitive analysis'
        },
        {
          icon: <TrendingUp className="h-6 w-6" />,
          name: 'Feasibility Studies',
          description: 'Detailed project viability and risk assessment'
        }
      ]
    },
    {
      title: 'Business Support Services',
      description: 'Essential operational support for your business needs',
      link: '/business-support-services',
      services: [
        {
          icon: <Calculator className="h-6 w-6" />,
          name: 'Accounting & Payroll',
          description: 'Professional financial management services'
        },
        {
          icon: <Users className="h-6 w-6" />,
          name: 'HR Management',
          description: 'Comprehensive human resource solutions'
        },
        {
          icon: <Megaphone className="h-6 w-6" />,
          name: 'Digital Marketing',
          description: 'Strategic online presence and marketing campaigns'
        }
      ]
    },
    {
      title: 'Training and Development',
      description: 'Empowering growth through knowledge and skills',
      link: '/training-development',
      services: [
        {
          icon: <BookOpen className="h-6 w-6" />,
          name: 'Workshops',
          description: 'Interactive learning sessions for skill development'
        },
        {
          icon: <Users2 className="h-6 w-6" />,
          name: 'Leadership Programs',
          description: 'Comprehensive leadership development training'
        },
        {
          icon: <Target className="h-6 w-6" />,
          name: 'Mentorship Program',
          description: 'One-on-one guidance and professional support'
        }
      ]
    }
  ];

  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#003366] sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="mt-20 space-y-16">
          {serviceCategories.map((category, idx) => (
            <Link 
              key={idx} 
              to={category.link}
              className="block"
            >
              <div className="bg-white rounded-xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transform hover:-translate-y-1 transition-all duration-300">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#003366] mb-4">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-8">
                    {category.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.services.map((service, serviceIdx) => (
                      <div 
                        key={serviceIdx}
                        className="p-6 rounded-lg border border-gray-200 hover:border-[#9064ac] hover:shadow-lg transition-all duration-300"
                      >
                        <div className="text-[#9064ac] mb-4">
                          {service.icon}
                        </div>
                        <h4 className="text-lg font-semibold text-[#003366] mb-2">
                          {service.name}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {service.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;