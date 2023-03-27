import React from "react";
import useWobble from "../../hooks/useWobble";
import { motion } from "framer-motion";

import { firstRow, secondRow } from "../../img/images";
import LinesComponent from "../UI/linesComponent";
import { makeVariant } from "../../utils/utils";

const SkillsComponent = () => {
    const { wobbleText } = useWobble("Skills & Experience ", 19);

    const skillsFirst = firstRow.map((img, i) => {
        const delay = i > 1 ? +`0.${(i / 2) * 10}` : 0.05;
        console.log(delay);
        return (
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={makeVariant("2vh", 3, delay)}
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
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={makeVariant("5vh", 2, delay)}
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
        <motion.section
            className="relative flex h-screen snap-center snap-always flex-col items-center justify-center gap-y-3 p-8"
            id="skills"
        >
            <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={makeVariant("2vh", 1, 0.5)}
                className="text-xl font-light text-custom-grey"
            >
                A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.
            </motion.h3>
            <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={makeVariant("2vh", 1, 0.1)}
                className="whitespace-nowrap text-center text-3xl font-bold uppercase lg:text-6xl"
            >
                {wobbleText}
            </motion.h2>
            <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={makeVariant("2vh", 1, 0.15)}
                className="mt-4 text-center text-lg font-normal"
            >
                The main area of expertise is front end development (client side
                of the web).
            </motion.p>
            <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={makeVariant("2vh", 1, 0.2)}
                className="w-1/2 text-center text-lg"
            >
                HTML, CSS, JS, building small and medium web applications with
                React, features, animations, and coding interactive layouts. I
                have also full-stack developer experience with one of the most
                popular backend frameworks on the web - Django
            </motion.p>
            <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={makeVariant("2vh", 1, 0.25)}
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
            <LinesComponent dir="left" />
        </motion.section>
    );
};

export default SkillsComponent;
