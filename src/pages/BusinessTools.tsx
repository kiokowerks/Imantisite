import React, { useState } from 'react';
import { Activity, Calculator, Receipt, Landmark } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SMEHealthCheck from '../components/tools/SMEHealthCheck';
import InvestmentCalculator from '../components/tools/InvestmentCalculator';
import LoanCalculator from '../components/tools/LoanCalculator';
import TaxCompliance from '../components/tools/TaxCompliance';

const tools = [
  {
    id: 'health-check',
    name: 'Business Health Check',
    icon: Activity,
    description: 'Assess your business performance and get recommendations'
  },
  {
    id: 'investment',
    name: 'Investment Analysis',
    icon: Calculator,
    description: 'Calculate ROI and analyze investment opportunities'
  },
  {
    id: 'loan',
    name: 'Loan Calculator',
    icon: Landmark,
    description: 'Calculate loan payments and total interest costs'
  },
  {
    id: 'tax',
    name: 'Tax Compliance',
    icon: Receipt,
    description: 'Guide to tax obligations and deadlines'
  }
];

const BusinessTools = () => {
  const [activeTool, setActiveTool] = useState<string>('health-check');

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-[#282c64] mb-8">Business Assessment Tools</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <motion.button
                key={tool.id}
                onClick={() => setActiveTool(tool.id)}
                className={`p-4 rounded-xl text-left transition-all duration-300 ${
                  activeTool === tool.id
                    ? 'bg-[#282c64] text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg ${
                    activeTool === tool.id
                      ? 'bg-white/10'
                      : 'bg-[#282c64]/10'
                  }`}>
                    <Icon className={`h-5 w-5 ${
                      activeTool === tool.id
                        ? 'text-white'
                        : 'text-[#282c64]'
                    }`} />
                  </div>
                  <h3 className="font-semibold">{tool.name}</h3>
                </div>
                <p className={`text-sm ${
                  activeTool === tool.id
                    ? 'text-white/80'
                    : 'text-gray-500'
                }`}>
                  {tool.description}
                </p>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTool}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {activeTool === 'health-check' && <SMEHealthCheck />}
            {activeTool === 'investment' && <InvestmentCalculator />}
            {activeTool === 'loan' && <LoanCalculator />}
            {activeTool === 'tax' && <TaxCompliance />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BusinessTools;