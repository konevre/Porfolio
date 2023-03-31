import React, { useState } from "react";

const ScrollDownComponent = () => {
    return (
        <a href="#" className="fixed right-0 bottom-20 hidden flex-col lg:flex">
            <div className="mb-10 -rotate-90 text-sm text-[#6B6F73]">
                Scroll Down
            </div>
            <img
                src={chevronDown}
                alt="chevron"
                className={`h-3 transition duration-500 ease-in-out`}
            />
        </a>
    );
};

export default ScrollDownComponent;
