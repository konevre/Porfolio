import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

import cube from "../../resources/icons/contact/white_cube.png";
import useAboutAnimation from "../../hooks/useAboutAnimation";

import GlobeComponent from "./GlobeComponent";

export const globeVariants = {
    onLeaveUp: {
        y: "50vh",
        opacity: 1,
        scale: 1,
        transition: {
            duration: 3,
            type: "spring",
            ease: "easeOut",
            delay: 0,
        },
    },
    moveTo: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 2,
            type: "spring",
            ease: "easeInOut",
            delay: 0,
        },
    },
    moveInitDown: {
        opacity: 0,
        scale: 0.5,
    },
    moveInitUp: {
        opacity: 0,
        scale: 1,
    },
};

export const cubeVariants = {
    onLeaveUp: {
        y: "50vh",
        opacity: 1,
        transition: {
            duration: 3,
            type: "spring",
            ease: "easeOut",
            delay: 0,
        },
    },
    moveTo: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 2,
            type: "spring",
            ease: "easeInOut",
            delay: 0,
        },
    },
    moveInitDown: {
        y: "-5vh",
        opacity: 1,
    },
    moveInitUp: {
        opacity: 1,
    },
};

const ContactComponent = ({ state }) => {
    const { animation, initial } = useAboutAnimation(state, "contact");
    return (
        <div data-anchor="contact" className="section">
            <section className="relative flex h-screen max-w-container items-center">
                <motion.div
                    variants={globeVariants}
                    whileInView={animation}
                    initial={initial}
                    className="relative basis-2/5"
                >
                    <GlobeComponent state={state} />
                </motion.div>
                <div className="z-10 flex basis-[23%] flex-col gap-y-5">
                    <p className="text-lg">
                        What would you do if you had a software expert available
                        at your fingertips?
                    </p>
                    <p className="text-lg">
                        Want to start new project? Or just say hey. <br />
                        You can also follow me on{" "}
                        <a
                            href="#"
                            className="text-lg text-amber-400 hover:underline hover:underline-offset-4"
                        >
                            Instagram
                        </a>{" "}
                    </p>
                    <h2 className="cursor-pointer text-3xl font-bold duration-300 hover:text-amber-300 hover:ease-in-out">
                        konevre@mail.ru
                    </h2>
                </div>
                <motion.img
                    src={cube}
                    alt="cube"
                    variants={cubeVariants}
                    whileInView={animation}
                    initial={initial}
                    className="absolute bottom-24 right-12"
                />
            </section>
        </div>
    );
};

export default ContactComponent;
