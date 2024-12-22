import React from 'react';
import { formatNumberInput, parseNumberInput } from '../../../utils/formatters';

interface InputFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  type?: string;
  min?: number;
  max?: number;
}

const InputField = ({ label, value, onChange, type = 'text', min, max }: InputFieldProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    
    // Allow empty input
    if (rawValue === '') {
      onChange(0);
      return;
    }

    // Parse the input value
    const parsedValue = parseNumberInput(rawValue);
    if (!isNaN(parsedValue)) {
      onChange(parsedValue);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type="text"
        value={value === 0 ? '' : formatNumberInput(value)}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#282c64] focus:border-transparent transition-colors duration-200"
      />
    </div>
  );
};

export default InputField;