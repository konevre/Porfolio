import React from "react";
import { motion } from "framer-motion";

import WobbleTitleComponent from "../UI/WobbleTitleComponent";

import romb from "../../resources/icons/romb2.png";
import cube from "../../resources/icons/cube.png";
import me from "../../resources/icons/me.png";
import LinesComponent from "../UI/linesComponent";
import useSectionAnimation from "../../hooks/useSectionAnimation";

import {
    cubeVariants,
    textOneVariants,
    textTwoVariants,
    rombVariants,
} from "../../utils/variants/aboutVariants";

const AboutComponent = ({ state }) => {
    const { initial, animation } = useSectionAnimation(state, "about");

    return (
        <div className="section fp-auto-height" data-anchor="about">
            <section className="relative mx-auto flex max-w-container items-center justify-center overflow-x-hidden p-8 md:h-screen">
                <img
                    src={me}
                    alt="me"
                    className="absolute top-0 bottom-0 left-0 right-0 -z-10 m-auto ml-[30%] w-[400px] brightness-[30%] drop-shadow-2xl grayscale sepia-[30%]"
                />
                <motion.img
                    whileInView={animation}
                    initial={initial}
                    variants={rombVariants}
                    src={romb}
                    alt="romb"
                    className="pointer-events-none absolute top-20 left-[55%] hidden lg:block"
                />
                <div className="flex flex-col justify-between gap-y-3 md:flex-row lg:justify-start">
                    <motion.div
                        whileInView={animation}
                        initial={initial}
                        variants={textOneVariants}
                        className="basis-[47%]"
                    >
                        <div className="w-[300px] lg:w-[400px]">
                            <WobbleTitleComponent text="Hi, I'm Roman Web Developer" />
                        </div>

                        <h3 className="mt-4 mb-3 cursor-default text-base font-light text-custom-grey xl:text-2xl">
                            Front End Developer / JavaScript Fan / React Admirer
                        </h3>
                    </motion.div>
                    <motion.div
                        whileInView={animation}
                        initial={initial}
                        variants={textTwoVariants}
                        className="flex basis-[46%] flex-col justify-center gap-y-3 text-lg font-normal"
                    >
                        <p className="cursor-default text-base xl:text-lg">
                            Professionally connected with the web development
                            industry.
                        </p>
                        <p className="cursor-default text-base xl:text-lg">
                            Problem solver, well-organised person, loyal
                            employee with high attention to detail. Fan of
                            Boxing, outdoor activities, video games, and coding
                            of course.
                        </p>
                        <p className="cursor-default text-base xl:text-lg">
                            Interested in the entire frontend spectrum and
                            working on ambitious projects with interesting
                            people.
                        </p>
                    </motion.div>
                </div>
            </section>
            <motion.img
                whileInView={animation}
                initial={initial}
                variants={cubeVariants}
                src={cube}
                alt="cube"
                className="pointer-events-none absolute left-52 bottom-20  hidden lg:block"
            />
            <LinesComponent dir="right" />
        </div>
    );
};

export default AboutComponent;
