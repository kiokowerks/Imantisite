import React from 'react';
import { Target, Compass } from 'lucide-react';

const About = () => {
  return (
    <div id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
              alt="Team meeting"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-10 -right-10 hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
                alt="Business discussion"
                className="w-48 h-48 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="mt-10 lg:mt-0">
            <h2 className="text-3xl font-bold text-[#003366] sm:text-4xl mb-8">
              About Imanti Consulting
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Target className="h-8 w-8 text-[#9064ac]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#003366] mb-2">
                    Our Mission
                  </h3>
                  <p className="text-gray-600">
                    To equip entrepreneurs with essential skills and knowledge for sustainable growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Compass className="h-8 w-8 text-[#9064ac]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#003366] mb-2">
                    Our Vision
                  </h3>
                  <p className="text-gray-600">
                    To be the leading partner for start-ups and MSMEs, known for impactful business solutions.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-semibold text-[#003366] mb-4">
                  Our Approach
                </h3>
                <p className="text-gray-600">
                  We collaborate with skilled professionals to offer flexible, tailored services that foster success. Our personalized approach ensures that each client receives solutions specifically designed for their unique challenges and goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;