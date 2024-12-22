import React from 'react';
import { Briefcase, BarChart2, TrendingUp, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TailoredBusinessSolutions = () => {
  const navigate = useNavigate();
  
  const solutions = [
    {
      icon: <Briefcase className="h-12 w-12" />,
      title: "Business Strategy",
      image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740",
      description: "Our comprehensive business planning and strategic development services help you create a roadmap for success. We work closely with you to:",
      features: [
        "Develop clear business objectives and goals",
        "Create actionable strategic plans",
        "Identify growth opportunities",
        "Optimize business processes",
        "Monitor and measure performance"
      ]
    },
    {
      icon: <BarChart2 className="h-12 w-12" />,
      title: "Market Analysis",
      image: "https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9",
      description: "Make informed decisions with our in-depth market research and competitive analysis services. We provide:",
      features: [
        "Comprehensive market research reports",
        "Competitor analysis and benchmarking",
        "Industry trends and insights",
        "Customer behavior analysis",
        "Market opportunity assessment"
      ]
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Feasibility Studies",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095",
      description: "Minimize risks and maximize success with our detailed project viability assessments. Our studies include:",
      features: [
        "Technical feasibility analysis",
        "Economic viability assessment",
        "Risk assessment and mitigation strategies",
        "Resource requirement analysis",
        "Return on investment projections"
      ]
    }
  ];

  const handleGetStarted = () => {
    navigate('/request/business');
  };

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-[#003366] to-[#004080] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Tailored Business Solutions</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Strategic planning and market analysis solutions designed to drive sustainable growth and success for your business.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-300 overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-[400px] object-cover object-center"
                />
              </div>
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#9064ac]/10 rounded-lg flex items-center justify-center text-[#9064ac]">
                      {solution.icon}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-2xl font-bold text-[#003366] mb-4">{solution.title}</h2>
                    <p className="text-gray-600 mb-6">{solution.description}</p>
                    <ul className="space-y-4">
                      {solution.features.map((feature, featureIndex) => (
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

export default TailoredBusinessSolutions;