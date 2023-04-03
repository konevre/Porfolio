import React from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

import {
    compVariants,
    textVariants,
    rombVariants,
} from "../../utils/variants/homeVariants";
import comp from "../../resources/icons/comp.svg";
import dots from "../../resources/icons/side-dots.png";
import romb from "../../resources/icons/romb.png";

import WobbleTitleComponent from "../UI/WobbleTitleComponent";
import LinesComponent from "../UI/linesComponent";
import MoreComponent from "../UI/MoreComponent";

const HomeComponent = ({ state }) => {
    const isLessThan1024 = useMediaQuery({ query: "(max-width: 1024px)" });
    const firstInit = !state.origin;
    const leaveHome =
        state.initialized &&
        state.lastEvent === "onLeave" &&
        state.origin?.anchor === "home";
    const animation = isLessThan1024 ? {} : leaveHome ? "onLeave" : "moveTo";
    const initial = isLessThan1024 ? {} : firstInit ? "firstInit" : "moveInit";

    return (
        <div
            data-anchor="home"
            className="section fp-auto-height md:mt-0"
            style={{ display: "block" }}
        >
            <section className="relative m-auto flex max-w-container  flex-col-reverse items-center overflow-x-hidden p-8 pt-24 md:h-screen md:flex-row lg:mt-0">
                <motion.div
                    initial={initial}
                    variants={textVariants}
                    whileInView={animation}
                    className="flex  w-full flex-col gap-y-8 md:basis-1/2 xl:basis-2/5"
                >
                    <WobbleTitleComponent text="Front-End Software Developer" />
                    <div className="cursor-default text-lg">
                        Resolving design problems, building smart user
                        interfaces and useful interactions, developing rich web
                        applications and seamless web experiences.
                    </div>
                    <MoreComponent
                        title="About me"
                        hash="#about"
                        effect="rotate"
                    />
                </motion.div>
                <div className="pointer-events-none relative flex h-full items-center justify-center md:basis-1/2 xl:basis-3/5">
                    <motion.img
                        initial={initial}
                        variants={compVariants}
                        whileInView={animation}
                        src={comp}
                        alt="comp"
                        className="mb-10 h-full w-full lg:w-2/3"
                    />
                    <img
                        src={dots}
                        alt="dots"
                        className="absolute bottom-12 -z-10 w-full scale-[6] md:top-1/2 md:scale-[3] lg:-right-[40%] lg:scale-[2]"
                    />
                </div>

                <motion.img
                    initial={initial}
                    variants={rombVariants}
                    whileInView={animation}
                    src={romb}
                    alt="romb"
                    className="pointer-events-none absolute right-0 -bottom-[38px] block h-[100px] sm:h-[150px] lg:bottom-5 lg:left-1/3 lg:h-[200px]"
                />
            </section>
            <LinesComponent dir="left" />
        </div>
    );
};

export default HomeComponent;
