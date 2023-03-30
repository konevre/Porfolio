import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

import ScrollDownComponent from "./ScrollDownComponent";
import ScrollUpComponent from "./ScrollUpComponent";

const SidebarComponent = () => {
    const translateObj = {
        home: "translate-y-0",
        about: "translate-y-12",
        skills: "translate-y-24",
        projects: "translate-y-36",
        contact: "translate-y-48",
    };

    const [activePage, setPage] = useState(window.location.hash.slice(1));
    const [mouse, onMouse] = useState(
        translateObj[window.location.hash.slice(1)]
    );

    useEffect(() => {
        window.addEventListener("hashchange", () => {
            const hash = window.location.hash.slice(1);
            setPage(hash);
            onMouse(translateObj[hash]);
        });

        return () => {
            window.removeEventListener("hashchange", () => {
                const hash = window.location.hash.slice(1);
                setPage(hash);
                onMouse(translateObj[hash]);
            });
        };
    }, []);

    const handleClick = (e) => {
        setPage(e.target.title);
    };
    const handleMouseLeave = () => {
        onMouse(translateObj[activePage]);
    };
    const handleMouseEnter = (e) => {
        const yValue = e.target.title;
        onMouse(translateObj[yValue]);
    };

    // TODO
    // const handleScrollDown = () => {
    //     setPage((prevState) => prevState + 1);
    // };

    // const handleScrollUp = () => {
    //     setPage(0);
    // };

    // TODO - refactor tags
    return (
        <>
            <nav className="fixed right-10 top-1/3 z-10 hidden gap-x-3 lg:flex">
                <div className="absolute right-0 block h-full w-px bg-custom-white opacity-40"></div>
                <ul id="myMenu" className="flex flex-col">
                    <li data-menuanchor="home" className="h-12">
                        <a
                            onClick={handleClick}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            id="0"
                            title="home"
                            href="#home"
                            className="flex h-full items-center justify-center text-sm"
                        >
                            00
                        </a>
                    </li>
                    <li
                        data-menuanchor="about"
                        className="flex h-12 items-center justify-center text-sm"
                    >
                        <a
                            onClick={handleClick}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            id="1"
                            href="#about"
                            title="about"
                            className="flex h-full items-center justify-center text-sm font-normal"
                        >
                            01
                        </a>
                    </li>
                    <li
                        data-menuanchor="skills"
                        className="flex h-12 items-center justify-center"
                    >
                        <a
                            onClick={handleClick}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            id="2"
                            title="skills"
                            href="#skills"
                            className="flex h-full items-center justify-center text-sm font-normal"
                        >
                            02
                        </a>
                    </li>
                    <li
                        data-menuanchor="projects"
                        className="flex h-12 items-center justify-center text-sm"
                    >
                        <a
                            onClick={handleClick}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            id="3"
                            title="projects"
                            href="#projects"
                            className="flex h-full items-center justify-center text-sm font-normal"
                        >
                            03
                        </a>
                    </li>
                    <li
                        data-menuanchor="contact"
                        className="flex h-12 items-center justify-center"
                    >
                        <a
                            onClick={handleClick}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            id="4"
                            href="#contact"
                            className="flex h-full items-center justify-center text-sm font-normal"
                        >
                            04
                        </a>
                    </li>
                </ul>
                <div
                    className={`${mouse} h-12 w-0.5 bg-custom-white transition duration-1000 ease-in-out`}
                ></div>
            </nav>
            {/* TODO */}
            {/* {activePage === 4 ? (
                <ScrollUpComponent handleScrollUp={handleScrollUp} />
            ) : (
                <ScrollDownComponent handleScrollDown={handleScrollDown} />
            )} */}
        </>
    );
};

export default SidebarComponent;
