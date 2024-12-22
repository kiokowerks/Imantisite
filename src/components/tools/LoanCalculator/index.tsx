import React, { useState } from 'react';
import { Landmark } from 'lucide-react';
import InputField from './InputField';
import ResultsDisplay from './ResultsDisplay';
import { LoanInputs, LoanResult } from '../../../types/loan';
import { calculateLoan } from '../../../utils/loanCalculator';

const LoanCalculator = () => {
  const [inputs, setInputs] = useState<LoanInputs>({
    loanAmount: 0,
    interestRate: 14, // Default rate for Kenya
    loanTerm: 1,
    paymentFrequency: 'monthly'
  });

  const [result, setResult] = useState<LoanResult | null>(null);
  const [isCalculated, setIsCalculated] = useState(false);

  const handleCalculate = () => {
    if (inputs.loanAmount > 0 && inputs.interestRate > 0 && inputs.loanTerm > 0) {
      const results = calculateLoan(inputs);
      setResult(results);
      setIsCalculated(true);
    }
  };

  const handleReset = () => {
    setInputs({
      loanAmount: 0,
      interestRate: 14,
      loanTerm: 1,
      paymentFrequency: 'monthly'
    });
    setResult(null);
    setIsCalculated(false);
  };

  const handleInputChange = (field: keyof LoanInputs, value: any) => {
    const newInputs = { ...inputs, [field]: value };
    setInputs(newInputs);
    
    // Automatically recalculate if we've already done the initial calculation
    if (isCalculated && newInputs.loanAmount > 0 && newInputs.interestRate > 0 && newInputs.loanTerm > 0) {
      const newResults = calculateLoan(newInputs);
      setResult(newResults);
    }
  };

  const isCalculateDisabled = inputs.loanAmount === 0 || inputs.interestRate === 0 || inputs.loanTerm === 0;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-[#282c64]/10 rounded-lg">
          <Landmark className="h-6 w-6 text-[#282c64]" />
        </div>
        <h2 className="text-xl font-semibold text-[#282c64]">Business Loan Calculator</h2>
      </div>

      <div className="grid gap-6">
        <InputField
          label="Loan Amount (KES)"
          value={inputs.loanAmount}
          onChange={(value) => handleInputChange('loanAmount', value)}
          min={0}
        />

        <InputField
          label="Interest Rate (%)"
          value={inputs.interestRate}
          onChange={(value) => handleInputChange('interestRate', Math.max(0, Math.min(100, value)))}
          min={0}
          max={100}
        />

        <InputField
          label="Loan Term (Years)"
          value={inputs.loanTerm}
          onChange={(value) => handleInputChange('loanTerm', Math.max(1, Math.min(30, value)))}
          min={1}
          max={30}
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Payment Frequency
          </label>
          <div className="flex gap-4">
            <button
              onClick={() => handleInputChange('paymentFrequency', 'monthly')}
              className={`flex-1 py-2 px-4 rounded-lg transition-colors duration-300 ${
                inputs.paymentFrequency === 'monthly'
                  ? 'bg-[#282c64] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => handleInputChange('paymentFrequency', 'annually')}
              className={`flex-1 py-2 px-4 rounded-lg transition-colors duration-300 ${
                inputs.paymentFrequency === 'annually'
                  ? 'bg-[#282c64] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Annually
            </button>
          </div>
        </div>

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
            Calculate Loan
          </button>

          <button
            onClick={handleReset}
            className="flex-1 border border-[#282c64] text-[#282c64] py-2 px-4 rounded-lg hover:bg-[#282c64]/5 transition-colors duration-300"
          >
            Reset
          </button>
        </div>
      </div>

      {result && <ResultsDisplay result={result} frequency={inputs.paymentFrequency} />}
    </div>
  );
};

export default LoanCalculator;