import React from 'react';
import { TaxObligation } from '../../../types/tax';
import { Calendar, Coins, AlertTriangle } from 'lucide-react';

interface TaxCardProps {
  tax: TaxObligation;
}

const TaxCard = ({ tax }: TaxCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-4">
          <h3 className="text-base sm:text-lg font-semibold text-[#282c64]">{tax.name}</h3>
          <span className="inline-block px-3 py-1 bg-[#282c64]/10 text-[#282c64] rounded-full text-xs sm:text-sm whitespace-nowrap">
            {tax.frequency}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">{tax.description}</p>

        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-start gap-3">
            <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-700">Filing Deadline</p>
              <p className="text-xs sm:text-sm text-gray-600">{tax.filingDeadline}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Coins className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-700">Payment Deadline</p>
              <p className="text-xs sm:text-sm text-gray-600">{tax.paymentDeadline}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-700">Penalties</p>
              <p className="text-xs sm:text-sm text-gray-600">
                <span className="block">Filing: {tax.penaltiesFiling}</span>
                <span className="block">Payment: {tax.penaltiesPayment}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxCard;