import React, { useEffect, useRef } from 'react';
import Islands from './Islands';
import Header from '../components/Header/Header';
import HeaderCourseDetail from '@/components/Header/HeaderCourseDetail';
import Footer from '../components/Footer/Footer';

const IslandsPage: React.FC = () => {
  const islandsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (islandsRef.current) {
      islandsRef.current.focus();
    }
  }, []);

  return (
    <div className="app-container">
      <Header />
      <HeaderCourseDetail />
      <div ref={islandsRef} tabIndex={-1}>
        <Islands />
      </div>
      <Footer />
    </div>
  );
};

export default IslandsPage;
