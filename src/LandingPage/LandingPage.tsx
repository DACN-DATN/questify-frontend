import React, { useEffect, useRef } from 'react';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { HeaderNavbar } from '@/components/Header/Header';
import PageHeader from './components/PageHeader';
import Category from './components/Category';
import TopCourse from './components/TopCourse';

const LandingPage: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.focus();
    }
  }, []);

  return (
    <div className="app-container">
      <HeaderNavbar />
      <div ref={contentRef} tabIndex={-1}>
        <PageHeader />
        <Category />
        <TopCourse /> 
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;

