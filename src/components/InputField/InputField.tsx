import React from 'react';

interface InputFieldProps {
  label: string;
  type: string;
  placeholder?: string;
  value?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  value,
  className = '',
  onChange,
}) => {
  return (
    <div className={`w-full ${className}`}>
      <label className="mb-2 text-sm font-medium text-neutral-900 block">{label}</label>
      <div className="w-full rounded-xl border border-solid border-black border-opacity-30 h-[52px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)]">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="px-4 py-0 text-sm border-[none] size-full text-zinc-600 rounded-xl"
        />
      </div>
    </div>
  );
};

export default InputField;