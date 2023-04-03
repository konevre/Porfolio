import React from "react";

const SidebarComponent = () => {
    return (
        <>
            <nav className="nav__wrapper fixed right-10 top-1/3 z-10 hidden gap-x-3 lg:flex">
                <ul id="side_nav">
                    <li data-menuanchor="home" className="hoverSection">
                        <a href="#home" title="home">
                            00
                        </a>
                    </li>
                    <li data-menuanchor="about" className="hoverSection">
                        <a href="#about" title="about">
                            01
                        </a>
                    </li>
                    <li data-menuanchor="skills" className="hoverSection">
                        <a href="#skills" title="skills">
                            02
                        </a>
                    </li>
                    <li data-menuanchor="projects" className="hoverSection">
                        <a href="#projects" title="portfolio">
                            03
                        </a>
                    </li>
                    <li data-menuanchor="contact" className="hoverSection">
                        <a href="#contact" title="contact">
                            04
                        </a>
                    </li>
                    <div className="line"></div>
                </ul>
            </nav>
        </>
    );
};

export default SidebarComponent;
