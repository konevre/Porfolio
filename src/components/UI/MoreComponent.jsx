import React, { useState } from "react";
import { motion } from "framer-motion";
import chevron from "../../resources/icons/chevron-right.svg";
import { makeVariant } from "../../utils/utils";

const MoreComponent = ({ title, hash, effect }) => {
    const onHover =
        effect === "rotate"
            ? "group-hover:rotate-90"
            : "group-hover:translate-x-5";
    return (
        <a
            href={hash}
            className="group flex w-fit cursor-pointer items-center text-lg font-semibold text-custom-purple hover:text-[#751E85]"
        >
            {title}
            <img
                src={chevron}
                alt="chevron right"
                className={`ml-4 h-4 transition duration-500 ease-in-out ${onHover}`}
            />
        </a>
    );
};

export default MoreComponent;
