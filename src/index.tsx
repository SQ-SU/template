import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { GlobalContainer } from './context/globalContext';
import ReactGA from "react-ga4";
import 'tailwindcss/tailwind.css';


ReactGA.initialize("G-PN1DSW3WKE");

const SendAnalytics = () => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
};


const RootComponent = () => {
  const [analytics, setAnalytics] = useState(localStorage.getItem("cookieAnalytics") ? +localStorage.getItem("cookieAnalytics")! : 0);
  useEffect(() => {
    if (analytics) {
      console.log("in analytics");
      reportWebVitals(SendAnalytics);
    }
  }, [analytics]);

  return (
    <React.StrictMode>
      <GlobalContainer setAnalytics={setAnalytics} />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<RootComponent />);