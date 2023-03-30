import React from "react";
import { motion } from "framer-motion";

import useWobble from "../../hooks/useWobble";

import romb from "../../resources/icons/romb2.png";
import cube from "../../resources/icons/cube.png";
import me from "../../resources/icons/me.png";
import LinesComponent from "../UI/linesComponent";
import useAboutAnimation from "../../hooks/useAboutAnimation";

import {
    cubeVariants,
    textOneVariants,
    textTwoVariants,
    rombVariants,
} from "../../utils/variants/aboutVariants";

const AboutComponent = ({ state }) => {
    const { wobbleText } = useWobble("Hi, I'm Roman Web Developer", 13);
    const { initial, animation } = useAboutAnimation(state, "about");

    return (
        <div className="section" data-anchor="about">
            <section className="relative flex h-screen snap-center snap-always items-center justify-center p-8">
                <img
                    src={me}
                    alt="me"
                    className="absolute top-44 left-[31%] -z-10 h-1/2 brightness-[30%] drop-shadow-2xl grayscale  sepia-[30%]"
                />
                <motion.img
                    whileInView={animation}
                    initial={initial}
                    variants={rombVariants}
                    src={romb}
                    alt="romb"
                    className="absolute top-20 left-[55%]"
                />
                <motion.img
                    whileInView={animation}
                    initial={initial}
                    variants={cubeVariants}
                    src={cube}
                    alt="cube"
                    className="absolute left-32 bottom-16"
                />
                <div className="flex">
                    <motion.div
                        whileInView={animation}
                        initial={initial}
                        variants={textOneVariants}
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
                        whileInView={animation}
                        initial={initial}
                        variants={textTwoVariants}
                        className="flex basis-[46%] flex-col justify-center gap-y-3 text-lg font-normal"
                    >
                        <p className="text-lg">
                            Professionally connected with the web development
                            industry.
                        </p>
                        <p className="text-lg">
                            Problem solver, well-organised person, loyal
                            employee with high attention to detail. Fan of
                            Boxing, outdoor activities, video games, and coding
                            of course.
                        </p>
                        <p className="text-lg">
                            Interested in the entire frontend spectrum and
                            working on ambitious projects with interesting
                            people.
                        </p>
                    </motion.div>
                </div>
            </section>
            <LinesComponent dir="right" />
        </div>
    );
};

export default AboutComponent;
