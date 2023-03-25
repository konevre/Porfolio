import React, { useState } from "react";

import chevronDown from "../../resources/icons/chevron-down.svg";

const ScrollDownComponent = ({ handleScrollDown }) => {
    const [mouse, setMouse] = useState("translate-y-0");

    const handleMouseEnter = () => {
        setMouse("translate-y-3");
    };
    const handleMouseLeave = () => {
        setMouse("translate-y-0");
    };

    return (
        <a
            onClick={handleScrollDown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            href="#"
            className="fixed right-0 bottom-20 hidden flex-col lg:flex"
        >
            <div className="mb-10 -rotate-90 text-sm text-[#6B6F73]">
                Scroll Down
            </div>
            <img
                src={chevronDown}
                alt="chevron"
                className={`${mouse} h-3 transition duration-500 ease-in-out`}
            />
        </a>
    );
};

export default ScrollDownComponent;
