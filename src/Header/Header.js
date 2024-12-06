import React from 'react';
import './style.css';
import HeaderCourseDetail from './CourseDetail';
import HeaderNavbar from './Navbar';

const Header = () => {
  return <div>
        <HeaderNavbar />
        <HeaderCourseDetail />
    </div>;
}

export default Header;