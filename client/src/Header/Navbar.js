import React from 'react';
import './style.css';
import {
    notificationIcon,
    favoritesIcon,
    cartIcon,
    logoIcon,
    avatarIcon,
    searchIcon
} from '../icons/icons';

function Navbar1() {
    return (
        <div className="navbar1 bg-black text-white py-0">
            <div className="navbar__container">
                <div className="navbar__links-container flex">
                    <a href="/" className="navbar__links-current">
                        Home
                    </a>
                    <a href="/courses" className="navbar__links">
                        Courses
                    </a>
                </div>
                <div className="navbar__links-container flex">
                    <select className="navbar__select">
                        <option>USD</option>
                        <option>VND</option>
                    </select>
                    <select className="navbar__select">
                        <option>English</option>
                        <option>Vietnamese</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

function Navbar2() {
    return (
        <div className="navbar2 w-full navbar__container">
            <div className="flex">
                <a href="/" className="flex navbar__name">
                    <img
                        src={logoIcon}
                        alt="Questify Logo"
                        width={32}
                        height={32}
                        className="w-8 h-8"
                    />
                    <span className="navbar__brand">Questify</span>
                </a>
            </div>
            <div className="flex search__container">
                <select className="navbar__browse-select">
                    <option>Browse</option>
                </select>
                <div className="navbar__search-container">
                    <img src={searchIcon} alt="Search"/>
                    <input
                        type="text"
                        placeholder="What do you want to learn?"
                        className="navbar__search-input"
                    />
                </div>
            </div>
            <div className="flex navbar__icons">
                <img src={notificationIcon} alt="Notification" className="notification" />
                <img src={favoritesIcon} alt="Favorites" className="favorites" />
                <img src={cartIcon} alt="Cart" className="cart" />
                <img src={avatarIcon} alt="Profile" className="profile-pic" />
            </div>
        </div>
    );
}

function HeaderNavbar() {
    return (
        <div>
            <Navbar1 />
            <Navbar2 />
        </div>
    );
}

export default HeaderNavbar;