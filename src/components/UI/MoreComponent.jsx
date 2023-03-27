import React, { useState } from "react";
import { motion } from "framer-motion";
import chevron from "../../resources/icons/chevron-right.svg";
import { makeVariant } from "../../utils/utils";

const MoreComponent = ({ title, styles }) => {
    const [mouse, setMouse] = useState("rotate-0");

    const handleMouseEnter = () => {
        setMouse("rotate-90");
    };
    const handleMouseLeave = () => {
        setMouse("rotate-0");
    };
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={makeVariant("5vh", 3, 0.2, 1)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`${styles} flex w-fit cursor-pointer items-center text-lg font-semibold text-custom-purple`}
        >
            <div>{title}</div>
            <img
                src={chevron}
                alt="chevron right"
                className={`${mouse} ml-2 h-4 transition duration-500 ease-in-out`}
            />
        </motion.div>
    );
};

export default MoreComponent;
