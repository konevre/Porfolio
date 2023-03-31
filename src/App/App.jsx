import React from "react";

import ReactFullpage from "@fullpage/react-fullpage";

import HeaderComponent from "../components/Header/HeaderComponent";
import SidebarComponent from "../components/Sidebar/SidebarComponent";
import GitLinkComponent from "../components/GitLink/GitLinkComponent";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import SkillsPage from "../pages/SkillsPage";
import ProjectsPage from "../pages/ProjectsPage";
import ContactPage from "../pages/ContactPage";
import ScrollUpComponent from "../components/Sidebar/ScrollUpComponent";

const App = () => {
    return (
        <>
            <HeaderComponent />
            <SidebarComponent />
            <ScrollUpComponent />
            <GitLinkComponent />
            <ReactFullpage
                licenseKey={"32LN8-21K48-3LGJ9-JQP1J-SOPTO"}
                anchors={["home", "about", "skills", "projects", "contact"]}
                animateAnchor={true}
                fixedElements="#scroll"
                easingcss3={"cubic-bezier(0.88, 0, 0.265, 1)"}
                scrollingSpeed={1200}
                menu="#side_nav"
                credits={{ enabled: false }}
                controlArrows={false}
                slidesNavigation={true}
                slidesNavPosition="bottom"
                onLeave={() => {}}
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <HomePage state={state} />
                            <AboutPage state={state} />
                            <SkillsPage state={state} />
                            <ProjectsPage />
                            <ContactPage state={state} />
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        </>
    );
};

export default App;
