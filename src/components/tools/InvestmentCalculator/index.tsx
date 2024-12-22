import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import InputField from './InputField';
import ResultsDisplay from './ResultsDisplay';
import { ROIInputs, ROIResult } from '../../../types/roi';
import { calculateROI } from '../../../utils/roiCalculator';

const InvestmentCalculator = () => {
  const [inputs, setInputs] = useState<ROIInputs>({
    initialInvestment: 0,
    projectedAnnualRevenue: 0,
    annualOperatingCosts: 0,
    projectDuration: 1,
    interestRate: 12
  });

  const [result, setResult] = useState<ROIResult | null>(null);
  const [isCalculated, setIsCalculated] = useState(false);

  const handleCalculate = () => {
    if (inputs.initialInvestment > 0 && inputs.projectedAnnualRevenue > 0) {
      const results = calculateROI(inputs);
      setResult(results);
      setIsCalculated(true);
    }
  };

  const handleReset = () => {
    setInputs({
      initialInvestment: 0,
      projectedAnnualRevenue: 0,
      annualOperatingCosts: 0,
      projectDuration: 1,
      interestRate: 12
    });
    setResult(null);
    setIsCalculated(false);
  };

  const handleInputChange = (field: keyof ROIInputs, value: number) => {
    const newInputs = { ...inputs, [field]: value };
    setInputs(newInputs);
    
    // Automatically recalculate if we've already done the initial calculation
    if (isCalculated && newInputs.initialInvestment > 0 && newInputs.projectedAnnualRevenue > 0) {
      const newResults = calculateROI(newInputs);
      setResult(newResults);
    }
  };

  const isCalculateDisabled = inputs.initialInvestment === 0 || inputs.projectedAnnualRevenue === 0;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-[#282c64]/10 rounded-lg">
          <Calculator className="h-6 w-6 text-[#282c64]" />
        </div>
        <h2 className="text-xl font-semibold text-[#282c64]">Investment Analysis Calculator</h2>
      </div>

      <div className="grid gap-6">
        <InputField
          label="Initial Investment (KES)"
          value={inputs.initialInvestment}
          onChange={(value) => handleInputChange('initialInvestment', value)}
          min={0}
        />

        <InputField
          label="Projected Annual Revenue (KES)"
          value={inputs.projectedAnnualRevenue}
          onChange={(value) => handleInputChange('projectedAnnualRevenue', value)}
          min={0}
        />

        <InputField
          label="Annual Operating Costs (KES)"
          value={inputs.annualOperatingCosts}
          onChange={(value) => handleInputChange('annualOperatingCosts', value)}
          min={0}
        />

        <InputField
          label="Project Duration (Years)"
          value={inputs.projectDuration}
          onChange={(value) => handleInputChange('projectDuration', Math.max(1, Math.min(20, value)))}
          min={1}
          max={20}
        />

        <InputField
          label="Interest Rate (%)"
          value={inputs.interestRate}
          onChange={(value) => handleInputChange('interestRate', Math.max(0, Math.min(100, value)))}
          min={0}
          max={100}
        />

        <div className="flex gap-4">
          <button
            onClick={handleCalculate}
            disabled={isCalculateDisabled}
            className={`flex-1 bg-[#282c64] text-white py-2 px-4 rounded-lg transition-colors duration-300 ${
              isCalculateDisabled 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-[#363b7d]'
            }`}
          >
            Calculate Investment
          </button>

          <button
            onClick={handleReset}
            className="flex-1 border border-[#282c64] text-[#282c64] py-2 px-4 rounded-lg hover:bg-[#282c64]/5 transition-colors duration-300"
          >
            Reset
          </button>
        </div>
      </div>

      {result && <ResultsDisplay result={result} />}
    </div>
  );
};

export default InvestmentCalculator;