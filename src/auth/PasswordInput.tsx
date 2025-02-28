'use client';

import React, { useState } from 'react';
import EyeIcon from './signup/EyeIcon';

interface PasswordInputProps {
  placeholder: string;
  className?: string;
  label: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ placeholder, className = '', label }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`flex flex-col gap-1.5 flex-1 mb-5`}>
      <label className="mb-2 text-sm font-medium text-neutral-900 block">{label}</label>
      <div className="relative w-full rounded-xl border border-solid border-black border-opacity-30 h-[52px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)]">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          className={`px-4 py-0 text-sm border-[none] size-full text-zinc-600 rounded-xl ${className}`}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          <EyeIcon />
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
