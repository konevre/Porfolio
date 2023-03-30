import React from "react";
import useWobble from "../../hooks/useWobble";
import { motion } from "framer-motion";

import { firstRow, secondRow } from "../../img/images";
import LinesComponent from "../UI/linesComponent";
import { makeVariant } from "../../utils/utils";
import useAboutAnimation from "../../hooks/useAboutAnimation";

import {
    makeFirstVariants,
    makeSecondVariants,
    h3Variant,
} from "../../utils/variants/skillsVariants";

const SkillsComponent = ({ state }) => {
    const { wobbleText } = useWobble("Skills & Experience ", 19);
    const { animation, initial } = useAboutAnimation(state, "skills");

    const skillsFirst = firstRow.map((img, i) => {
        const delay = i > 1 ? +`0.${(i / 2) * 10}` : i === 0 ? "0" : "0.05";
        return (
            <motion.div
                initial={initial}
                whileInView={animation}
                variants={makeFirstVariants(delay)}
                className="flex flex-col gap-y-2"
            >
                <img
                    src={img.src}
                    alt="skill"
                    className="h-[4.5rem] w-[4.5rem]"
                />
                <div className="text-center text-lg font-normal">
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
                className="flex flex-col gap-y-2"
            >
                <img src={img.src} alt="skill" className="h-20 w-20 " />
                <div className="text-center text-lg font-normal">
                    {img.title}
                </div>
            </motion.div>
        );
    });
    return (
        <div data-anchor="skills" className="section">
            <motion.section className="relative flex h-screen flex-col items-center justify-center gap-y-3 p-8">
                <motion.h3
                    variants={h3Variant(0.6)}
                    initial={initial}
                    whileInView={animation}
                    className="text-xl font-light text-custom-grey"
                >
                    A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.
                </motion.h3>
                <motion.h2
                    // initial="hidden"
                    // whileInView="visible"
                    // viewport={{ once: false }}
                    // variants={makeVariant("2vh", 1, 0.1)}
                    variants={h3Variant(0.1)}
                    initial={initial}
                    whileInView={animation}
                    className="whitespace-nowrap text-center text-3xl font-bold uppercase lg:text-6xl"
                >
                    {wobbleText}
                </motion.h2>
                <motion.p
                    // initial="hidden"
                    // whileInView="visible"
                    // viewport={{ once: false }}
                    // variants={makeVariant("2vh", 1, 0.15)}
                    variants={h3Variant(0.15)}
                    initial={initial}
                    whileInView={animation}
                    className="mt-4 text-center text-lg font-normal"
                >
                    The main area of expertise is front end development (client
                    side of the web).
                </motion.p>
                <motion.p
                    // initial="hidden"
                    // whileInView="visible"
                    // viewport={{ once: false }}
                    // variants={makeVariant("2vh", 1, 0.2)}
                    variants={h3Variant(0.2)}
                    initial={initial}
                    whileInView={animation}
                    className="w-1/2 text-center text-lg"
                >
                    HTML, CSS, JS, building small and medium web applications
                    with React, features, animations, and coding interactive
                    layouts. I have also full-stack developer experience with
                    one of the most popular backend frameworks on the web -
                    Django
                </motion.p>
                <motion.p
                    // initial="hidden"
                    // whileInView="visible"
                    // viewport={{ once: false }}
                    // variants={makeVariant("2vh", 1, 0.25)}
                    variants={h3Variant(0.25)}
                    initial={initial}
                    whileInView={animation}
                    className="text-center text-lg"
                >
                    Visit my{" "}
                    <a
                        href="#"
                        className="text-lg text-amber-400 hover:underline hover:underline-offset-4"
                    >
                        Linkedin
                    </a>{" "}
                    for more details
                </motion.p>
                <div className="mt-5 flex justify-center gap-x-14">
                    {skillsFirst}
                </div>
                <div className="mt-5 flex justify-center gap-x-16">
                    {skillsSecond}
                </div>
            </motion.section>
            <LinesComponent dir="left" />
        </div>
    );
};

export default SkillsComponent;
