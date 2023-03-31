import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

import ScrollDownComponent from "./ScrollDownComponent";
import ScrollUpComponent from "./ScrollUpComponent";

const SidebarComponent = () => {
    // TODO - refactor tags
    return (
        <>
            <nav className="nav__wrapper fixed right-10 top-1/3 z-10 hidden gap-x-3 lg:flex">
                <ul id="side_nav">
                    <li data-menuanchor="home" className="">
                        <a href="#home" title="home">
                            00
                        </a>
                    </li>
                    <li data-menuanchor="about" className="">
                        <a href="#about" title="about">
                            01
                        </a>
                    </li>
                    <li data-menuanchor="skills" className="">
                        <a href="#skills" title="skills">
                            02
                        </a>
                    </li>
                    <li data-menuanchor="projects" className="">
                        <a href="#projects" title="portfolio">
                            03
                        </a>
                    </li>
                    <li data-menuanchor="contact" className="">
                        <a href="#contact" title="contact">
                            04
                        </a>
                    </li>
                    <div className="line"></div>
                </ul>
            </nav>
            {/* TODO */}

            {/* <ScrollUpComponent fullpage={fullpage} /> */}
            {/* <ScrollDownComponent /> */}
        </>
    );
};

export default SidebarComponent;
