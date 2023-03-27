import React from "react";
import { motion } from "framer-motion";

import useWobble from "../../hooks/useWobble";

import romb from "../../resources/icons/romb2.png";
import cube from "../../resources/icons/cube.png";
import me from "../../resources/icons/me.png";
import LinesComponent from "../UI/linesComponent";

const AboutComponent = () => {
    const { wobbleText } = useWobble("Hi, I'm Roman Web Developer", 13);

    const textAnimation1 = {
        hidden: { y: "10vh", opacity: 0 },
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
    const textAnimation2 = {
        hidden: { y: "20vh", opacity: 0 },
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
    const cubeAnimation = {
        hidden: { y: "10vh", opacity: 0 },
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
    const rombAnimation = {
        hidden: { y: "-20vh", opacity: 1 },
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

    return (
        <section
            className="relative flex h-screen snap-center snap-always items-center justify-center p-8"
            id="about"
        >
            <img
                src={me}
                alt="me"
                className="absolute top-44 left-[31%] -z-10 h-1/2 brightness-[30%] drop-shadow-2xl grayscale  sepia-[30%]"
            />
            <motion.img
                initial="hidden"
                whileInView="visible"
                variants={rombAnimation}
                viewport={{ once: false }}
                src={romb}
                alt="romb"
                className="absolute top-20 left-[55%]"
            />
            <motion.img
                initial="hidden"
                whileInView="visible"
                variants={cubeAnimation}
                src={cube}
                alt="cube"
                className="absolute left-32 bottom-16"
            />
            <div className="flex">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={textAnimation1}
                    viewport={{ once: false }}
                    className="basis-[47%]"
                >
                    <h2 className="whitespace-nowrap text-3xl font-bold lg:text-6xl">
                        {wobbleText}
                    </h2>
                    <h3 className="mt-4 text-2xl font-light text-custom-grey">
                        Front End Developer / JavaScript Fan / React Admirer
                    </h3>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={textAnimation2}
                    viewport={{ once: false }}
                    className="flex basis-[46%] flex-col justify-center gap-y-3 text-lg font-normal"
                >
                    <p className="text-lg">
                        Professionally connected with the web development
                        industry.
                    </p>
                    <p className="text-lg">
                        Problem solver, well-organised person, loyal employee
                        with high attention to detail. Fan of Boxing, outdoor
                        activities, video games, and coding of course.
                    </p>
                    <p className="text-lg">
                        Interested in the entire frontend spectrum and working
                        on ambitious projects with interesting people.
                    </p>
                </motion.div>
            </div>
            <LinesComponent dir="right" />
        </section>
    );
};

export default AboutComponent;
