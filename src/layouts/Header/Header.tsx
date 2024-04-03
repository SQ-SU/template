import React, { useContext, useState } from 'react';
import styles from "./Header.module.css";
import { NavLink, useLocation } from 'react-router-dom';
// import logo from "../../assets/media/company/cizhou-logo.png";

const Header: React.FC = () => {
    return (
        <header className={`${styles.headerContainer} flex justify-between p-4 pr-8`}>
            <NavLink to="/" className='flex items-center gap-3'>
                {/* <img className="max-h-12" src={logo} about='Cizhou logo' /> */}
                <p className='font-bold'></p>
            </NavLink>
            <ul className='flex gap-8 items-center font-semibold'>
                <li><NavLink to="/about-us"></NavLink></li>
                <li><NavLink to="/about-us"></NavLink></li>
                <li><NavLink to="/about-us"></NavLink></li>
            </ul>
        </header>
    );
};

export default Header;
