import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from '../layouts/Header/Header';
import Footer from '../layouts/Footer/Footer';
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage';
import HomePage from '../pages/HomePage/HomePage';
// import ContactUsPage from '../pages/ContactUsPage/ContactUsPage';
// import { PoliciesCookies, PoliciesPrivacy, PoliciesTerms } from '../pages/Policies/Policies';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <main  >
                <Routes>
                    <Route path="/about-us" element={<AboutUsPage />} />
                    {/* <Route path="/contact-us" element={<ContactUsPage />} /> */}
                    <Route path="/" element={<HomePage />} />
                    {/* <Route path="/policies/terms-and-conditions" element={<PoliciesTerms />} />
                    <Route path="/policies/privacy-policy" element={<PoliciesPrivacy />} />
                    <Route path="/policies/cookies-policy" element={<PoliciesCookies />} /> */}
                </Routes>
            </main>
            {/* <BannerCookie /> */}
            <FooterWithLocation />
        </BrowserRouter>
    );
}

const FooterWithLocation = () => {
    const location = useLocation();
    return location.pathname !== "/contact-us" ? <Footer /> : null;
};