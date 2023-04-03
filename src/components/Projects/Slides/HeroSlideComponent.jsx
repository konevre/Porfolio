import React from "react";
import { motion } from "framer-motion";

import MoreComponent from "../../UI/MoreComponent";
import sphereSm from "../../../resources/icons/projects/sphere_sm.png";
import sphereMd from "../../../resources/icons/projects/sphere_md.png";
import sphereLg from "../../../resources/icons/projects/sphere_lg.png";
import useSectionAnimation from "../../../hooks/useSectionAnimation";
import WobbleTitleComponent from "../../UI/WobbleTitleComponent";
import {
    textVariants,
    sphereVariants,
} from "../../../utils/variants/heroSlideVariants";

const HeroSlideComponent = ({ state }) => {
    const { initial, animation } = useSectionAnimation(
        state,
        "projects",
        "hero"
    );

    return (
        <div className="slide fp-auto-height" data-anchor="hero">
            <motion.section
                initial={initial}
                variants={textVariants}
                whileInView={animation}
                className="relative flex max-w-container flex-col items-center justify-center gap-y-5 overflow-x-hidden p-8 lg:h-screen"
            >
                <div className="flex w-full justify-start md:justify-center">
                    <WobbleTitleComponent
                        text="Portfolio & Previous Projects"
                        br={20}
                        isCenter={true}
                    />
                </div>
                <p className="cursor-default text-lg font-normal md:max-w-[600px] md:text-center">
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
                <div className="flex w-full justify-start md:justify-center">
                    <MoreComponent
                        title="See projects"
                        hash="#projects/todo"
                        effect="translate"
                    />
                </div>
            </motion.section>
            <motion.img
                initial={initial}
                variants={sphereVariants}
                whileInView={animation}
                src={sphereSm}
                alt="sphere"
                className="absolute left-[8%] top-40 -z-10 hidden xl:block"
            />
            <motion.img
                initial={initial}
                variants={sphereVariants}
                whileInView={animation}
                src={sphereMd}
                alt="sphere"
                className="absolute bottom-14 left-4 -z-10 hidden xl:block"
            />
            <motion.img
                initial={initial}
                variants={sphereVariants}
                whileInView={animation}
                src={sphereLg}
                alt="sphere"
                className="absolute top-[35%] right-[70%] -z-10 hidden xl:block"
            />
        </div>
    );
};

export default HeroSlideComponent;
