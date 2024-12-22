import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { InstallmentTaxInputs, InstallmentTaxResult } from '../../../types/tax';
import { calculateInstallmentTax } from '../../../utils/installmentTaxCalculator';
import { formatCurrency } from '../../../utils/formatters';

const InstallmentTaxCalculator = () => {
  const [inputs, setInputs] = useState<InstallmentTaxInputs>({
    calculationMethod: 'prior',
    priorYearTax: 0,
    estimatedTax: 0,
    sector: 'general'
  });

  const [result, setResult] = useState<InstallmentTaxResult | null>(null);

  const handleCalculate = () => {
    try {
      const result = calculateInstallmentTax(inputs);
      setResult(result);
    } catch (error) {
      console.error('Failed to calculate installment tax:', error);
    }
  };

  const handleInputChange = (field: keyof InstallmentTaxInputs, value: any) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-[#282c64]/10 rounded-lg">
          <Calculator className="h-6 w-6 text-[#282c64]" />
        </div>
        <h3 className="text-lg font-semibold text-[#282c64]">Installment Tax Calculator</h3>
      </div>

      <div className="grid gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Calculation Method
          </label>
          <div className="flex gap-4">
            <button
              onClick={() => handleInputChange('calculationMethod', 'prior')}
              className={`flex-1 py-2 px-4 rounded-lg transition-colors duration-300 ${
                inputs.calculationMethod === 'prior'
                  ? 'bg-[#282c64] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Prior Year Basis
            </button>
            <button
              onClick={() => handleInputChange('calculationMethod', 'current')}
              className={`flex-1 py-2 px-4 rounded-lg transition-colors duration-300 ${
                inputs.calculationMethod === 'current'
                  ? 'bg-[#282c64] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Current Year Estimate
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Business Sector
          </label>
          <div className="flex gap-4">
            <button
              onClick={() => handleInputChange('sector', 'general')}
              className={`flex-1 py-2 px-4 rounded-lg transition-colors duration-300 ${
                inputs.sector === 'general'
                  ? 'bg-[#282c64] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              General Sector
            </button>
            <button
              onClick={() => handleInputChange('sector', 'agricultural')}
              className={`flex-1 py-2 px-4 rounded-lg transition-colors duration-300 ${
                inputs.sector === 'agricultural'
                  ? 'bg-[#282c64] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Agricultural Sector
            </button>
          </div>
        </div>

        {inputs.calculationMethod === 'prior' ? (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Previous Year Tax Amount (KES)
            </label>
            <input
              type="number"
              value={inputs.priorYearTax || ''}
              onChange={(e) => handleInputChange('priorYearTax', Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#282c64] focus:border-transparent"
              placeholder="Enter previous year tax amount"
            />
          </div>
        ) : (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Estimated Tax for Current Year (KES)
            </label>
            <input
              type="number"
              value={inputs.estimatedTax || ''}
              onChange={(e) => handleInputChange('estimatedTax', Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#282c64] focus:border-transparent"
              placeholder="Enter estimated tax amount"
            />
          </div>
        )}

        <button
          onClick={handleCalculate}
          className="bg-[#282c64] text-white py-2 px-4 rounded-lg hover:bg-[#363b7d] transition-colors duration-300"
        >
          Calculate Installments
        </button>
      </div>

      {result && (
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h4 className="text-lg font-semibold text-[#282c64] mb-4">Payment Schedule</h4>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="text-blue-800">
              Total Tax Amount: {formatCurrency(result.totalTax)}
              {inputs.calculationMethod === 'prior' && (
                <span className="text-sm ml-2">(110% of previous year)</span>
              )}
            </p>
          </div>

          <div className="grid gap-4">
            {result.payments.map((payment, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h5 className="font-medium text-gray-900">
                      {payment.percentage}% Payment
                    </h5>
                    <p className="text-sm text-gray-600">Due: {payment.dueDate}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-[#282c64]">
                      {formatCurrency(payment.amount)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InstallmentTaxCalculator;