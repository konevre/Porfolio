import React from "react";
import { motion } from "framer-motion";

import cube from "../../resources/icons/contact/white_cube.png";
import useSectionAnimation from "../../hooks/useSectionAnimation";

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
    initialDown: {
        opacity: 0,
        scale: 0.5,
    },
    initialUp: {
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
    initialDown: {
        y: "-5vh",
        opacity: 1,
    },
    initialUp: {
        opacity: 1,
    },
};

const ContactComponent = ({ state }) => {
    const { animation, initial } = useSectionAnimation(state, "contact");
    return (
        <div data-anchor="contact" className="section fp-auto-height">
            <section className="relative mx-auto flex max-w-container cursor-default flex-col-reverse items-center p-8 lg:h-screen lg:flex-row">
                <motion.div
                    variants={globeVariants}
                    whileInView={animation}
                    initial={initial}
                    className="relative flex basis-3/5 justify-center"
                >
                    <GlobeComponent state={state} />
                </motion.div>
                <div className="z-10 flex basis-full flex-col gap-y-5 md:basis-[30%] ">
                    <p className="w-[90%] text-lg">
                        What would you do if you had a software expert available
                        at your fingertips?
                    </p>
                    <p className="text-lg">
                        Want to start new project? Or just say hey. <br />
                        You can also follow me on{" "}
                        <a
                            href="https://www.instagram.com/konevre"
                            className="text-lg text-amber-400 hover:underline hover:underline-offset-4"
                        >
                            Instagram
                        </a>{" "}
                        or{" "}
                        <a
                            href="https://t.me/konevre"
                            className="text-lg text-[#751E85] hover:underline hover:underline-offset-4"
                        >
                            Telegram
                        </a>{" "}
                    </p>
                    <a
                        href="mailto:konevre@mail.ru"
                        className="cursor-pointer text-3xl font-bold duration-300 hover:text-amber-300 hover:ease-in-out"
                    >
                        konevre@mail.ru
                    </a>
                </div>
                <motion.img
                    src={cube}
                    alt="cube"
                    variants={cubeVariants}
                    whileInView={animation}
                    initial={initial}
                    className="absolute bottom-24 right-12 hidden lg:block"
                />
            </section>
        </div>
    );
};

export default ContactComponent;
