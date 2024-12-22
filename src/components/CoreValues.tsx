import React from 'react';
import { Lightbulb, Target, Shield, BarChart, Leaf } from 'lucide-react';

const CoreValues = () => {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-[#9064ac]" />,
      title: 'Innovation',
      description: 'Driving creative solutions and embracing new technologies'
    },
    {
      icon: <Target className="h-8 w-8 text-[#9064ac]" />,
      title: 'Impact',
      description: 'Creating meaningful change and measurable results'
    },
    {
      icon: <Shield className="h-8 w-8 text-[#9064ac]" />,
      title: 'Integrity',
      description: 'Maintaining highest ethical standards in all operations'
    },
    {
      icon: <BarChart className="h-8 w-8 text-[#9064ac]" />,
      title: 'Operational Excellence',
      description: 'Delivering superior quality and efficiency'
    },
    {
      icon: <Leaf className="h-8 w-8 text-[#9064ac]" />,
      title: 'Sustainability',
      description: 'Ensuring long-term success and environmental responsibility'
    }
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#003366] sm:text-4xl">
            Our Core Values
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            The principles that guide our commitment to excellence
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((value, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="inline-block p-3 bg-white rounded-full shadow-lg">
                  {value.icon}
                </div>
              </div>
              <div className="pt-8 text-center">
                <h3 className="text-lg font-semibold text-[#003366] mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;