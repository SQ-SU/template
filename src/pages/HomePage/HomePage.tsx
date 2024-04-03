import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import styles from './HomePage.module.css';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../../context/globalContext';

const HomePage: React.FC = () => {
    const { isSmallScreen } = useContext(GlobalContext);

    return (
        <div className={`${styles.homePage} max-w-[920px] mx-auto mb-72`}>
        </div>
    );
};

export default HomePage;

