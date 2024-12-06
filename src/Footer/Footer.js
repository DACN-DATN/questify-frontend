import React from 'react';
import {
    logoIcon,
    facebookIcon,
    instagramIcon,
    linkedinIcon,
    twitterIcon,
    youtubeIcon
} from '../icons/icons';
import './style.css';

const Footer = () => {
    return (
        <footer className="footer w-full bg-black py-0 px-0">
            <div className="footer__center w-full">
                <div className="footer__top">
                    <div className="footer__logo">
                        <img
                            src={logoIcon}
                            alt="Questify Logo"
                            width={46}
                            height={46}
                            className="mx-2"
                        />
                        <span className="text-white">Questify</span>
                    </div>

                    <div className="footer__links">
                        Contact: <a href="/" className="hover:text-white footer__links">support@questify.io</a>
                    </div>

                    <div className="">
                        <a href="/">
                            <img
                                src={facebookIcon}
                                alt="Facebook Logo"
                                width={46}
                                height={46}
                                className="mx-1"
                            />
                        </a>
                        <a href="/">
                            <img
                                src={instagramIcon}
                                alt="Instagram Logo"
                                width={46}
                                height={46}
                                className="mx-1"
                            />
                        </a>
                        <a href="/">
                            <img
                                src={linkedinIcon}
                                alt="Linkedin Logo"
                                width={46}
                                height={46}
                                className="mx-1"
                            />
                        </a>
                        <a href="/">
                            <img
                                src={twitterIcon}
                                alt="Twitter Logo"
                                width={46}
                                height={46}
                                className="mx-1"
                            />
                        </a>
                        <a href="/">
                            <img
                                src={youtubeIcon}
                                alt="Youtube Logo"
                                width={46}
                                height={46}
                                className="mx-1"
                            />
                        </a>
                    </div>
                </div>
                <hr/>
                <div className="footer__copyright">
                    <p style={{ color: '#8C94A3' }}>
                        © 2024 - Questify. All rights reserved
                    </p>
                    <div className="bg-transparent border-zinc-700" style={{ color: '#8C94A3' }}>
                        <select defaultValue="english" className="w-full bg-transparent border-none" style={{ color: '#8C94A3' }}>
                            <option value="english">English</option>
                            <option value="vietnamese">Vietnamese</option>
                        </select>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;