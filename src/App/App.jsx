import React from "react";

import HeaderComponent from "../components/Header/HeaderComponent";
import HomePage from "../pages/HomePage";
import SidebarComponent from "../components/Sidebar/SidebarComponent";
import GitLinkComponent from "../components/GitLink/GitLinkComponent";

const App = () => {
    return (
        <>
            <HeaderComponent />
            <SidebarComponent />
            <HomePage />
            <GitLinkComponent />
        </>
    );
};

export default App;
