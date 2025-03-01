'use client';

import React from 'react';

interface EyeIconProps {
  className?: string;
}

const EyeIcon: React.FC<EyeIconProps> = ({ className = '' }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 4.24927C4.5 4.24927 1.5 12.0001 1.5 12.0001C1.5 12.0001 4.5 19.7493 12 19.7493C19.5 19.7493 22.5 12.0001 22.5 12.0001C22.5 12.0001 19.5 4.24927 12 4.24927Z"
        stroke="#4E5566"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15.7501C14.0711 15.7501 15.75 14.0711 15.75 12.0001C15.75 9.92899 14.0711 8.25006 12 8.25006C9.92893 8.25006 8.25 9.92899 8.25 12.0001C8.25 14.0711 9.92893 15.7501 12 15.7501Z"
        stroke="#4E5566"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EyeIcon;
