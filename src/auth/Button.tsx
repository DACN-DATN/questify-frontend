import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
}) => {
  const baseStyles =
    'text-sm font-medium rounded-xl cursor-pointer border-[none] h-[41px] w-full max-sm:h-[45px]';

  const variantStyles = {
    primary: 'text-white bg-teal-500 shadow-[0px_4px_10px_rgba(233,68,75,0.25)]',
    secondary:
      'text-black border border-solid border-black border-opacity-30 shadow-[0px_4px_10px_rgba(0,0,0,0.25)]',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
