import React from 'react';
import styles from "./Footer.module.css";
import { NavLink } from 'react-router-dom';
// import logo from "../../assets/media/company/cizhou-logo.png";

const Footer: React.FC = () => {
    return (
        <footer className={`${styles.footerContainer} border-t px-20 py-10`}>
            {/* <NavLink to="/"><img className="h-8" src={logo} alt="company logo" /></NavLink> */}
            <ul className='flex gap-5 mt-10 font-bold'>
                <li><NavLink to="/about-us">关于我们</NavLink></li>
                <li><NavLink to="/">联系我们</NavLink></li>
            </ul>
            <p className='text-sm opacity-40 mt-10 text-left'>&copy;</p>
        </footer>
    );
};

export default Footer;
