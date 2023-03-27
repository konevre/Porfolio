import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

import ScrollDownComponent from "./ScrollDownComponent";
import ScrollUpComponent from "./ScrollUpComponent";

const SidebarComponent = () => {
    const translateObj = {
        0: "translate-y-0",
        1: "translate-y-12",
        2: "translate-y-24",
        3: "translate-y-36",
        4: "translate-y-48",
    };

    const [activePage, setPage] = useState(0);
    const [mouse, onMouse] = useState("translate-y-0");

    useEffect(() => {
        onMouse(translateObj[activePage]);
    }, [activePage]);

    const handleClick = (e) => {
        setPage(+e.target.id);
    };
    const handleMouseLeave = () => {
        onMouse(translateObj[activePage]);
    };
    const handleMouseEnter = (e) => {
        const yValue = +e.target.id;
        onMouse(translateObj[yValue]);
    };

    const handleScrollDown = () => {
        setPage((prevState) => prevState + 1);
    };

    const handleScrollUp = () => {
        setPage(0);
    };

    // TODO - refactor tags
    return (
        <>
            <nav className="fixed right-10 top-1/3 z-10 hidden gap-x-3 lg:flex">
                <div className="absolute right-0 block h-full w-px bg-custom-white opacity-40"></div>
                <ul className="flex flex-col">
                    <li className="h-12">
                        <a
                            onClick={handleClick}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            id="0"
                            href="#home"
                            className="flex h-full items-center justify-center text-sm"
                        >
                            00
                        </a>
                    </li>
                    <li className="flex h-12 items-center justify-center text-sm">
                        <a
                            onClick={handleClick}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            id="1"
                            href="#about"
                            className="flex h-full items-center justify-center text-sm font-normal"
                        >
                            01
                        </a>
                    </li>
                    <li className="flex h-12 items-center justify-center">
                        <a
                            onClick={handleClick}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            id="2"
                            href="#skills"
                            className="flex h-full items-center justify-center text-sm font-normal"
                        >
                            02
                        </a>
                    </li>
                    <li className="flex h-12 items-center justify-center text-sm">
                        <a
                            onClick={handleClick}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            id="3"
                            href="#projects"
                            className="flex h-full items-center justify-center text-sm font-normal"
                        >
                            03
                        </a>
                    </li>
                    <li className="flex h-12 items-center justify-center">
                        <a
                            onClick={handleClick}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            id="4"
                            href="#"
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
            {activePage === 4 ? (
                <ScrollUpComponent handleScrollUp={handleScrollUp} />
            ) : (
                <ScrollDownComponent handleScrollDown={handleScrollDown} />
            )}
        </>
    );
};

export default SidebarComponent;
