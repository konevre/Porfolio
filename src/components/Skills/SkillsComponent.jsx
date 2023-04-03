import React from "react";
import { motion } from "framer-motion";

import { firstRow, secondRow } from "../../img/images";
import LinesComponent from "../UI/linesComponent";
import useSectionAnimation from "../../hooks/useSectionAnimation";
import {
    makeFirstVariants,
    makeSecondVariants,
    h3Variant,
} from "../../utils/variants/skillsVariants";

import WobbleTitleComponent from "../UI/WobbleTitleComponent";

const SkillsComponent = ({ state }) => {
    const { animation, initial } = useSectionAnimation(state, "skills");

    const skillsFirst = firstRow.map((img, i) => {
        const delay = i > 1 ? +`0.${(i / 2) * 10}` : i === 0 ? "0" : "0.05";
        return (
            <motion.div
                initial={initial}
                whileInView={animation}
                variants={makeFirstVariants(delay)}
                className="flex w-[33%] flex-col items-center gap-y-3 sm:w-[20%] md:w-auto"
            >
                <img
                    src={img.src}
                    alt="skill"
                    className="h-10 w-12 md:h-12 xl:h-[70px] xl:w-[70px]"
                />
                <div className="text-center text-base font-normal md:text-lg">
                    {img.title}
                </div>
            </motion.div>
        );
    });
    const skillsSecond = secondRow.map((img, i) => {
        const delay = +`0.${i}`;
        return (
            <motion.div
                initial={initial}
                whileInView={animation}
                variants={makeSecondVariants(delay)}
                className="flex w-[33%] flex-col items-center gap-y-3 sm:w-[20%] md:w-auto"
            >
                <img
                    src={img.src}
                    alt="skill"
                    className="h-10 w-12 md:h-12 xl:h-[70px] xl:w-[70px]"
                />
                <div className="text-center text-base font-normal md:text-lg">
                    {img.title}
                </div>
            </motion.div>
        );
    });
    return (
        <div data-anchor="skills" className="section fp-auto-height mt-24">
            <motion.section className="relative mx-auto flex max-w-container flex-col justify-center gap-y-3 overflow-hidden p-8 md:items-center lg:h-screen">
                <motion.h3
                    variants={h3Variant(0.6)}
                    initial={initial}
                    whileInView={animation}
                    className="cursor-default text-base font-light text-custom-grey md:text-lg xl:text-xl"
                >
                    A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.
                </motion.h3>
                <motion.div
                    variants={h3Variant(0.1)}
                    initial={initial}
                    whileInView={animation}
                >
                    <WobbleTitleComponent
                        text="Skills & Experience "
                        br={19}
                        isCenter={true}
                    />
                </motion.div>
                <motion.p
                    variants={h3Variant(0.15)}
                    initial={initial}
                    whileInView={animation}
                    className="mt-4 cursor-default text-base font-normal md:text-center md:text-lg xl:text-xl"
                >
                    The main area of expertise is front end development (client
                    side of the web).
                </motion.p>
                <motion.p
                    variants={h3Variant(0.2)}
                    initial={initial}
                    whileInView={animation}
                    className="cursor-default text-base md:text-center md:text-lg lg:w-1/2 xl:text-xl"
                >
                    HTML, CSS, JS, building small and medium web applications
                    with React, features, animations, and coding interactive
                    layouts. I have also full-stack developer experience with
                    one of the most popular backend frameworks on the web -
                    Django
                </motion.p>
                <motion.p
                    variants={h3Variant(0.25)}
                    initial={initial}
                    whileInView={animation}
                    className="cursor-default text-base md:text-center md:text-lg xl:text-xl"
                >
                    Visit my{" "}
                    <a
                        href="#"
                        className="text-base text-amber-400 hover:underline hover:underline-offset-4 md:text-lg xl:text-xl"
                    >
                        Linkedin
                    </a>{" "}
                    for more details
                </motion.p>
                <div className="justify-evently mt-5 flex cursor-default flex-wrap gap-y-3 md:max-w-[800px] md:justify-center md:gap-x-14 lg:gap-y-5 xl:max-w-[900px]">
                    {skillsFirst}
                    {skillsSecond}
                </div>
            </motion.section>
            <LinesComponent dir="left" />
        </div>
    );
};

export default SkillsComponent;
