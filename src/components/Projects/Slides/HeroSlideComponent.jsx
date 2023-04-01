import React from "react";
import { motion } from "framer-motion";

import useWobble from "../../../hooks/useWobble";
import MoreComponent from "../../UI/MoreComponent";

import sphereSm from "../../../resources/icons/projects/sphere_sm.png";
import sphereMd from "../../../resources/icons/projects/sphere_md.png";
import sphereLg from "../../../resources/icons/projects/sphere_lg.png";
import useSectionAnimation from "../../../hooks/useSectionAnimation";

import {
    textVariants,
    sphereVariants,
} from "../../../utils/variants/heroSlideVariants";

const HeroSlideComponent = ({ state }) => {
    const { wobbleText } = useWobble("Portfolio & Previous Projects", 20);
    const { initial, animation } = useSectionAnimation(
        state,
        "projects",
        "hero"
    );

    console.log(state);
    return (
        <div className="slide" data-anchor="hero">
            <motion.section
                initial={initial}
                variants={textVariants}
                whileInView={animation}
                className="relative flex h-screen flex-col items-center justify-center gap-y-5 p-8"
            >
                <h2 className="whitespace-nowrap text-center text-3xl font-bold lg:text-6xl">
                    {wobbleText}
                </h2>
                <p className="w-[40%] cursor-default text-center text-lg font-normal">
                    I have built various different projects to fit different
                    aspects of the client's business. If you want to see more
                    examples of my work than the ones showcased in this site,
                    please{" "}
                    <a
                        href="#"
                        className="text-lg text-amber-400 hover:underline hover:underline-offset-4"
                    >
                        contact me!
                    </a>
                </p>

                <MoreComponent
                    title="See projects"
                    hash="#projects/todo"
                    effect="translate"
                />
            </motion.section>
            <motion.img
                initial={initial}
                variants={sphereVariants}
                whileInView={animation}
                src={sphereSm}
                alt="sphere"
                className="absolute left-[8%] top-40"
            />
            <motion.img
                initial={initial}
                variants={sphereVariants}
                whileInView={animation}
                src={sphereMd}
                alt="sphere"
                className="absolute bottom-14 left-4 -z-10"
            />
            <motion.img
                initial={initial}
                variants={sphereVariants}
                whileInView={animation}
                src={sphereLg}
                alt="sphere"
                className="absolute top-[35%] right-[70%]"
            />
        </div>
    );
};

export default HeroSlideComponent;
