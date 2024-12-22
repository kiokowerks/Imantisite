import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  multiline?: boolean;
  rows?: number;
}

const Input = ({ label, multiline = false, rows = 4, ...props }: InputProps) => {
  const containerStyles = "relative";
  const baseStyles = `
    w-full
    px-4
    py-3
    border
    border-[#9064ac]
    rounded-md
    focus:outline-none
    focus:ring-1
    focus:ring-[#9064ac]
    focus:border-[#9064ac]
    transition
    duration-200
    bg-white
    placeholder-transparent
  `;
  
  const labelStyles = `
    absolute
    -top-2.5
    left-2
    px-1
    text-sm
    font-medium
    text-gray-700
    bg-white
    transition-all
    duration-200
  `;

  if (multiline) {
    return (
      <div className={containerStyles}>
        <textarea
          rows={rows}
          placeholder={label}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          className={baseStyles}
        />
        <label className={labelStyles}>
          {label}
        </label>
      </div>
    );
  }

  return (
    <div className={containerStyles}>
      <input
        placeholder={label}
        {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        className={baseStyles}
      />
      <label className={labelStyles}>
        {label}
      </label>
    </div>
  );
};

export default Input;