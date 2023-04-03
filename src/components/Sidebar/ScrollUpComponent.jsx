import React, { useState, useEffect } from "react";

import chevronUp from "../../resources/icons/chevron-up.svg";
import chevronDown from "../../resources/icons/chevron-down.svg";

const ScrollUpComponent = () => {
    const [hash, setHash] = useState(window.location.hash.slice(1));
    const hashObj = {
        home: "#about",
        about: "#skills",
        skills: "#projects",
        projects: "#contact",
        "projects/hero": "#contact",
        "projects/todo": "#contact",
        "projects/weather": "#contact",
        contact: "#home",
    };
    useEffect(() => {
        window.addEventListener("hashchange", () => {
            const hash = window.location.hash.slice(1);
            setHash(hash);
        });

        return () => {
            window.removeEventListener("hashchange", () => {});
        };
    }, []);
    return (
        <>
            {hash === "contact" ? (
                <a
                    id="scroll"
                    href={hashObj[hash]}
                    className="group fixed right-0 bottom-10 z-10 hidden cursor-pointer flex-col lg:flex xl:bottom-20"
                >
                    <img
                        src={chevronUp}
                        alt="chevron"
                        className={`h-3 transition duration-500 ease-in-out group-hover:-translate-y-5`}
                    />
                    <div className="mt-10 -rotate-90 text-sm text-[#6B6F73]">
                        Back To Top
                    </div>
                </a>
            ) : (
                <a
                    href={hashObj[hash]}
                    className="group fixed right-0 bottom-10 z-30 hidden cursor-pointer flex-col lg:flex xl:bottom-20"
                >
                    <div className="mb-10 -rotate-90 text-sm text-[#6B6F73]">
                        Scroll Down
                    </div>
                    <img
                        src={chevronDown}
                        alt="chevron"
                        className={`h-3 transition duration-500 ease-in-out group-hover:translate-y-5`}
                    />
                </a>
            )}
        </>
    );
};

export default ScrollUpComponent;
