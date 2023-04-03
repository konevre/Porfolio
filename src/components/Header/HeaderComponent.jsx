import React from "react";

import icon from "../../resources/icons/logo1.svg";

const HeaderComponent = () => {
    return (
        <div className="fixed top-0 z-10 flex w-full cursor-default justify-between bg-custom-black px-4 py-4 md:fixed md:p-4 lg:bg-inherit lg:p-12">
            <a href="#about" className="flex items-center gap-x-1">
                <img
                    src={icon}
                    alt="icon"
                    className="pointer-events-none h-5 md:h-6"
                />
                <div className="text-2xl font-semibold tracking-widest md:text-3xl">
                    KONEVRE
                </div>
            </a>
            <a
                href="#contact"
                className="border-md ml-0 rounded-md border-2 border-custom-white px-6 py-2 font-semibold tracking-wide duration-300 hover:bg-custom-white hover:text-custom-black hover:ease-in-out md:px-8"
            >
                Contact
            </a>
        </div>
    );
};

export default HeaderComponent;
