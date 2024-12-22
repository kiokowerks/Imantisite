import React, { useState } from 'react';
import { Receipt, Search } from 'lucide-react';
import { taxObligations } from '../../../data/taxObligations';
import TaxCard from './TaxCard';

const TaxCompliance = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFrequency, setSelectedFrequency] = useState<string>('all');

  const frequencies = ['all', 'monthly', 'quarterly', 'annual'];

  const filteredTaxes = taxObligations.filter(tax => {
    const matchesSearch = tax.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tax.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFrequency = selectedFrequency === 'all' || 
                            tax.frequency.toLowerCase() === selectedFrequency;
    return matchesSearch && matchesFrequency;
  });

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-[#282c64]/10 rounded-lg">
          <Receipt className="h-6 w-6 text-[#282c64]" />
        </div>
        <h2 className="text-xl font-semibold text-[#282c64]">Tax Compliance Guide</h2>
      </div>

      <div className="mb-6 space-y-4">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search tax obligations..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#282c64] focus:border-transparent"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>

        <div className="flex gap-2">
          {frequencies.map((frequency) => (
            <button
              key={frequency}
              onClick={() => setSelectedFrequency(frequency)}
              className={`px-4 py-2 rounded-lg text-sm transition-colors duration-300 ${
                selectedFrequency === frequency
                  ? 'bg-[#282c64] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {frequency.charAt(0).toUpperCase() + frequency.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTaxes.map((tax) => (
          <TaxCard key={tax.id} tax={tax} />
        ))}
      </div>
    </div>
  );
};

export default TaxCompliance;