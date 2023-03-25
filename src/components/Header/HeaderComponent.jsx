import React from "react";

import icon from "../../resources/icons/logo.svg";

const HeaderComponent = () => {
    return (
        <div className="sticky top-0 flex w-full justify-between bg-custom-black px-6 py-6 md:fixed md:bg-inherit md:p-12">
            <div className="flex items-center gap-x-1">
                <img src={icon} alt="icon" className="h-5 md:h-6" />
                <div className="text-2xl font-semibold tracking-widest md:text-3xl">
                    KONEVRE
                </div>
            </div>
            <button className="border-md ml-0 rounded-md border-2 border-custom-white px-6 py-2 font-semibold tracking-wide duration-300 hover:bg-custom-white hover:text-custom-black hover:ease-in-out md:px-8">
                Contact
            </button>
        </div>
    );
};

export default HeaderComponent;
