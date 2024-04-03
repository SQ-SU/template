import React, { createContext, useState, useEffect } from 'react';
import App from '../app/App';

export const GlobalContext = createContext();

export const GlobalContainer = (props) => {

    const [isMobile, setIsMobile] = useState(true);
    const [isSmallScreen, setIsSmallScreen] = useState(true);

    const [analytics, setAnalytics] = useState(localStorage.getItem("cookieAnalytics") ? +localStorage.getItem("cookieAnalytics") : 0);
    // const [analytics, setAnalytics] = useState(props.analytics);
    const [preference, setPreference] = useState(localStorage.getItem("cookiePreference") ? +localStorage.getItem("cookiePreference") : 0);
    const [privacy, setPrivacy] = useState(localStorage.getItem("cookiePrivacy") ? +localStorage.getItem("cookiePrivacy") : 0);

    function setAnalyticsFunc(n) {
        setAnalytics(n);
        props.setAnalytics(n);
    }

    useEffect(() => {
        setIsMobile(window.innerWidth < 430);
        setIsSmallScreen(window.innerWidth < 640);

        function handleResize() {
            setIsMobile(window.innerWidth < 430);
            setIsSmallScreen(window.innerWidth < 640);
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <GlobalContext.Provider value={{
            isMobile, setIsMobile,
            isSmallScreen, setIsSmallScreen,
            analytics, setAnalyticsFunc,
            preference, setPreference,
            privacy, setPrivacy,
        }} >
            <App />
        </GlobalContext.Provider>
    );
};