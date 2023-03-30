import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useScroll } from "framer-motion";
import ReactFullpage from "@fullpage/react-fullpage";

import HeaderComponent from "../components/Header/HeaderComponent";
import SidebarComponent from "../components/Sidebar/SidebarComponent";
import GitLinkComponent from "../components/GitLink/GitLinkComponent";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import SkillsPage from "../pages/SkillsPage";
import ProjectsPage from "../pages/ProjectsPage";
import ContactPage from "../pages/ContactPage";

const App = () => {
    // // const { scrollYProgress } = useScroll();
    // const [fullpage, setFullpage] = useState(null);
    // // console.log(fullpage);
    return (
        <>
            <HeaderComponent />
            <SidebarComponent />
            <GitLinkComponent />
            <ReactFullpage
                licenseKey={"32LN8-21K48-3LGJ9-JQP1J-SOPTO"}
                anchors={["home", "about", "skills", "projects", "contact"]}
                animateAnchor={true}
                easingcss3={"cubic-bezier(0.88, 0, 0.265, 1)"}
                scrollingSpeed={1200}
                menu={"#myMenu"}
                credits={{ enabled: false }}
                onLeave={(origin, destination, direction) => {
                    // console.log("onLeave event", {
                    //     origin,
                    //     destination,
                    //     direction,
                    // });
                    // setFullpage({ origin, destination, direction });
                }}
                slid
                render={({ state, fullpageApi }) => {
                    // setFullpage(state);
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
