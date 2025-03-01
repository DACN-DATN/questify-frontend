import React from 'react';

const Logo: React.FC = () => {
  return (
    <>
      <div>
        <svg
          width="42"
          height="40"
          viewBox="0 0 42 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="logo-icon"
          style={{ width: '40px', height: '40px' }}
        >
          <path
            d="M2.25 15L21 5L39.75 15L21 25L2.25 15Z"
            stroke="#00ADB5"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M30.375 37.5V20L21 15"
            stroke="#00ADB5"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35.375 17.3333V25.8521C35.3755 26.1218 35.2884 26.3843 35.1266 26.6001C34.074 28.0008 29.6333 33.1249 21 33.1249C12.3667 33.1249 7.92597 28.0008 6.87336 26.6001C6.71165 26.3843 6.62449 26.1218 6.625 25.8521V17.3333"
            stroke="#00ADB5"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h1 className="text-3xl font-semibold tracking-tighter text-neutral-800">Questify</h1>
    </>
  );
};

export default Logo;
