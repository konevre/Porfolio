import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useScroll } from "framer-motion";

import HeaderComponent from "../components/Header/HeaderComponent";
import SidebarComponent from "../components/Sidebar/SidebarComponent";
import GitLinkComponent from "../components/GitLink/GitLinkComponent";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import SkillsPage from "../pages/SkillsPage";
import ProjectsPage from "../pages/ProjectsPage";

const App = () => {
    // const { scrollYProgress } = useScroll();
    return (
        <>
            <HeaderComponent />
            <SidebarComponent />
            <GitLinkComponent />
            <HomePage />
            <AboutPage />
            <SkillsPage />
            <ProjectsPage />
        </>
    );
};

export default App;
