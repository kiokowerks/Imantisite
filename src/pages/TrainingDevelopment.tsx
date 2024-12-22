import React from 'react';
import { BookOpen, Users2, Target, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TrainingDevelopment = () => {
  const navigate = useNavigate();
  
  const programs = [
    {
      icon: <BookOpen className="h-12 w-12" />,
      title: "Professional Workshops",
      image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8",
      description: "Interactive learning sessions designed to develop essential business skills. Our workshops cover:",
      features: [
        "Business planning and strategy",
        "Financial management",
        "Marketing and sales",
        "Operations management",
        "Digital transformation"
      ]
    },
    {
      icon: <Users2 className="h-12 w-12" />,
      title: "Leadership Programs",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      description: "Comprehensive leadership development training to build strong business leaders. Programs include:",
      features: [
        "Strategic leadership skills",
        "Team management",
        "Decision-making and problem-solving",
        "Communication and negotiation",
        "Change management"
      ]
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: "Mentorship Program",
      image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66",
      description: "One-on-one guidance and support from experienced business professionals:",
      features: [
        "Personalized mentorship sessions",
        "Career development guidance",
        "Business growth strategies",
        "Network building opportunities",
        "Industry-specific insights"
      ]
    }
  ];

  const handleGetStarted = () => {
    navigate('/request/training');
  };

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-[#282c64] to-[#363b7d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Training & Development</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Empowering individuals and organizations through comprehensive training and development programs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-300 overflow-hidden">
              <div className="relative h-[400px] w-full">
                <img
                  src={program.image}
                  alt={program.title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h2 className="text-3xl font-bold text-white mb-2">{program.title}</h2>
                </div>
              </div>
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#282c64]/10 rounded-lg flex items-center justify-center text-[#282c64]">
                      {program.icon}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-600 mb-6">{program.description}</p>
                    <ul className="space-y-4">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <ArrowRight className="h-6 w-6 text-[#282c64] flex-shrink-0 mt-1" />
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
            className="inline-flex items-center gap-2 bg-[#282c64] text-white px-8 py-3 rounded-lg hover:bg-[#363b7d] transition duration-300"
          >
            Get Started
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainingDevelopment;