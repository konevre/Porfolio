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
        "projects/1": "#contact",
        "projects/2": "#contact",
        contact: "#home",
    };
    useEffect(() => {
        window.addEventListener("hashchange", () => {
            const hash = window.location.hash.slice(1);
            setHash(hash);
        });

        return () => {
            window.removeEventListener("hashchange", () => {
                const hash = window.location.hash.slice(1);
            });
        };
    }, []);
    return (
        <>
            {hash === "contact" ? (
                <a
                    id="scroll"
                    href={hashObj[hash]}
                    className="fixed right-0 bottom-20 z-10 hidden cursor-pointer flex-col lg:flex"
                >
                    <img
                        src={chevronUp}
                        alt="chevron"
                        className={` h-3 transition duration-500 ease-in-out`}
                    />
                    <div className="mt-10 -rotate-90 text-sm text-[#6B6F73]">
                        Back To Top
                    </div>
                </a>
            ) : (
                <a
                    href={hashObj[hash]}
                    className="fixed right-0 bottom-20 z-10 hidden flex-col lg:flex"
                >
                    <div className="mb-10 -rotate-90 text-sm text-[#6B6F73]">
                        Scroll Down
                    </div>
                    <img
                        src={chevronDown}
                        alt="chevron"
                        className={`h-3 transition duration-500 ease-in-out`}
                    />
                </a>
            )}
        </>
    );
};

export default ScrollUpComponent;
