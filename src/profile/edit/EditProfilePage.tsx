import React, { useEffect, useRef } from 'react';
import ProfileSettings from './ProfileSettings';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const IslandsPage: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <ProfileSettings />
      <Footer />
    </div>
  );
};

export default IslandsPage;
