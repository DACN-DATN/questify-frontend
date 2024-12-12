import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  notificationIcon,
  favoritesIcon,
  cartIcon,
  logoIcon,
  avatarIcon,
  searchIcon,
  backButtonIcon,
  sectionsIcon,
  lecturesIcon,
  timeIcon,
} from '@/icons/icons';
import style from '@/styles/Header.module.css';

const HeaderNavbar: React.FC = () => {
  return (
    <div>
      <div className={`${style.navbar1} bg-black text-white py-0`}>
        <div className={style.navbar__container}>
          <div className={`${style.navbar__linksContainer} flex`}>
            <Link href="/" className={style.navbar__linksCurrent}>
              Home
            </Link>
            <Link href="/courses" className={style.navbar__links}>
              Courses
            </Link>
          </div>
          <div className={`${style.navbar__linksContainer} flex`}>
            <select className={style.navbar__select}>
              <option>USD</option>
              <option>VND</option>
            </select>
            <select className={style.navbar__select}>
              <option>English</option>
              <option>Vietnamese</option>
            </select>
          </div>
        </div>
      </div>
      <div className={`${style.navbar2} w-full ${style.navbar__container}`}>
        <div className="flex">
          <Link href="/" className={`flex ${style.navbar__name}`}>
            <Image src={logoIcon} alt="Questify Logo" width={32} height={32} className="w-8 h-8" />
            <span className={style.navbar__brand}>Questify</span>
          </Link>
        </div>
        <div className={`flex ${style.search__container}`}>
          <select className={style.navbar__browseSelect}>
            <option>Browse</option>
          </select>
          <div className={style.navbar__searchContainer}>
            <Image src={searchIcon} alt="Search" />
            <input
              type="text"
              placeholder="What do you want to learn?"
              className={style.navbar__searchInput}
            />
          </div>
        </div>
        <div className={`flex ${style.navbar__icons}`}>
          <Image src={notificationIcon} alt="Notification" className={style.notification} />
          <Image src={favoritesIcon} alt="Favorites" className={style.favorites} />
          <Image src={cartIcon} alt="Cart" className={style.cart} />
          <Image src={avatarIcon} alt="Profile" className={style.profilePic} />
        </div>
      </div>
    </div>
  );
};

const HeaderCourseDetail: React.FC = () => {
  return (
    <div className={`${style.courseDetail} bg-F5F7FA`}>
      <div className={style.courseDetail__container}>
        <div className={style.courseDetail__part1}>
          <button className={style.courseDetail__backButton}>
            <Image src={backButtonIcon} alt="Back" />
          </button>
          <div className={style.courseDetail__info}>
            <h1 className={style.courseDetail__title}>Data Structures and Algorithms</h1>
            <div className={style.courseDetail__meta}>
              <div className={style.courseDetail__metaItem}>
                <Image src={sectionsIcon} alt="Sections" />
                <span>6 Sections</span>
              </div>
              <div className={style.courseDetail__metaItem}>
                <Image src={lecturesIcon} alt="Lectures" />
                <span>202 Lectures</span>
              </div>
              <div className={style.courseDetail__metaItem}>
                <Image src={timeIcon} alt="Time" />
                <span>19h 37m</span>
              </div>
            </div>
          </div>
        </div>
        <div className={style.courseDetail__part2}>
          <button className={style.courseDetail__reviewButton}>Write a Review</button>
        </div>
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <div>
      <HeaderNavbar />
      <HeaderCourseDetail />
    </div>
  );
};

export default Header;
