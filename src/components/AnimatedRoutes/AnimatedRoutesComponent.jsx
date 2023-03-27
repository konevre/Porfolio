import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";

const AnimatedRoutesComponent = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutesComponent;
