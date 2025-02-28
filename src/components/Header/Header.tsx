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
} from '@/assets/icons/icons';
import style from '@/styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <div className="border-b border-F5F7FA">
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


export default Header;
