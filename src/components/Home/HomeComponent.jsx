import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import comp from "../../resources/icons/comp.svg";
import dots from "../../resources/icons/side-dots.png";
import romb from "../../resources/icons/romb.png";
import useWobble from "../../hooks/useWobble";

import LinesComponent from "../UI/linesComponent";
import MoreComponent from "../UI/MoreComponent";

const HomeComponent = () => {
    const { wobbleText } = useWobble("Front-End Software Developer", 18);
    const compAnimation = {
        hidden: { y: "-80vh", opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 3,
                type: "spring",
                ease: "easeOut",
                delay: 0.1,
            },
        },
    };
    const rombAnimation = {
        hidden: { y: "-70vh", opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1.5,
                type: "spring",
                ease: "easeOut",
                delay: 0.2,
            },
        },
    };

    const textAnimation = {
        hidden: { y: "-30vh", opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 2,
                type: "spring",
                ease: "easeInOut",
                delay: 0.1,
            },
        },
    };

    const [mouse, setMouse] = useState("rotate-0");

    const handleMouseEnter = () => {
        setMouse("rotate-90");
    };
    const handleMouseLeave = () => {
        setMouse("rotate-0");
    };
    return (
        <section
            id="home"
            className="relative m-auto mt-0 flex h-screen max-w-container snap-center snap-always flex-col-reverse items-center p-8 md:flex-row"
        >
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={textAnimation}
                viewport={{ once: false }}
                className="flex basis-2/5 flex-col"
            >
                <div className="whitespace-nowrap text-3xl font-bold lg:text-6xl">
                    {wobbleText}
                </div>
                <div className="mt-8 text-lg">
                    Resolving design problems, building smart user interfaces{" "}
                    and useful interactions, developing rich web applications{" "}
                    and seamless web experiences.
                </div>
                <MoreComponent title="About me" styles="mt-8 p-5 pl-0" />
            </motion.div>
            <div className="pointer-events-none relative flex h-full basis-3/5 items-center justify-center">
                <motion.img
                    initial="hidden"
                    whileInView="visible"
                    variants={compAnimation}
                    src={comp}
                    alt="comp"
                    className="w-2/3"
                />
                <img
                    src={dots}
                    alt="dots"
                    className="absolute left-[10%] -z-10 h-1/4 "
                />
            </div>

            <motion.img
                initial="hidden"
                whileInView="visible"
                variants={rombAnimation}
                viewport={{ once: false }}
                src={romb}
                alt="romb"
                className="absolute bottom-5 left-1/3 hidden md:block"
            />
            <LinesComponent dir="left" />
        </section>
    );
};

export default HomeComponent;
