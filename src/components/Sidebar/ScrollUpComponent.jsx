import React, { useState } from "react";

import chevronUp from "../../resources/icons/chevron-up.svg";

const ScrollUpComponent = ({ handleScrollUp }) => {
    const [mouse, setMouse] = useState("translate-y-0");

    const handleMouseEnter = () => {
        setMouse("-translate-y-3");
    };
    const handleMouseLeave = () => {
        setMouse("translate-y-0");
    };
    return (
        <a
            onClick={handleScrollUp}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            href="#"
            className="fixed right-0 bottom-20 hidden flex-col lg:flex"
        >
            <img
                src={chevronUp}
                alt="chevron"
                className={`${mouse} h-3 transition duration-500 ease-in-out`}
            />
            <div className="mt-10 -rotate-90 text-sm text-[#6B6F73]">
                Back To Top
            </div>
        </a>
    );
};

export default ScrollUpComponent;
