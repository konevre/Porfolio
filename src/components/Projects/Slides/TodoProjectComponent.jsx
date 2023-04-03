import React from "react";
import { motion } from "framer-motion";

import mac from "../../../resources/icons/projects/todo/macbook.png";
import darkCube from "../../../resources/icons/projects/todo/dark_cube1.png";
import darkRomb from "../../../resources/icons/projects/todo/dark_romb.png";
import whiteCube from "../../../resources/icons/projects/todo/white_cube2.png";
import useSectionAnimation from "../../../hooks/useSectionAnimation";
import {
    darkRombVariants,
    textVariants,
    compVariants,
} from "../../../utils/variants/todoSlideVariants";

import MoreComponent from "../../UI/MoreComponent";
import WobbleTitleComponent from "../../UI/WobbleTitleComponent";

const TodoProjectComponent = ({ state }) => {
    const { initial, animation } = useSectionAnimation(
        state,
        "projects",
        "todo"
    );
    return (
        <div className="slide fp-auto-height" data-anchor="todo">
            <section className="relative flex max-w-container flex-col-reverse items-center p-8 md:flex-row  md:gap-y-5  lg:h-screen">
                <motion.div
                    initial={initial}
                    variants={textVariants}
                    whileInView={animation}
                    className="flex basis-2/5 flex-col"
                >
                    <h3 className="my-3 cursor-default text-lg font-light text-custom-grey">
                        TO-DO LIST APPLICATION
                    </h3>
                    <WobbleTitleComponent text="Organic Mind " br={13} />
                    <p className="mt-3 cursor-default text-lg font-light md:mt-6">
                        The ultimate to do list to track your tasks
                    </p>
                    <p className="my-3 cursor-default text-lg font-light md:mt-5">
                        <span className="font-semibold">Built with:</span>{" "}
                        React, Redux Toolki, Redux Persist, RTK Query,
                        Typescript, Tailwind
                    </p>
                    <MoreComponent
                        title="View the code"
                        hash="https://github.com/konevre/To-Do-App"
                        isYellow={true}
                        isBlank={true}
                    />
                </motion.div>
                <div className="pointer-events-none relative flex h-full basis-3/5 items-center justify-center">
                    <motion.img
                        initial={initial}
                        whileInView={animation}
                        variants={compVariants}
                        src={mac}
                        alt="macbook"
                        className="w-4/5"
                    />
                    <motion.img
                        initial={initial}
                        whileInView={animation}
                        variants={darkRombVariants(150, 2.5, 0.15)}
                        src={darkRomb}
                        alt="cube"
                        className="absolute top-20 left-[44%] hidden h-1/4 xl:block"
                    />
                    <motion.img
                        initial={initial}
                        whileInView={animation}
                        variants={darkRombVariants(100, 2.2, 0.1)}
                        src={whiteCube}
                        alt="cube"
                        className="absolute bottom-16 left-[16%] hidden h-32 xl:block"
                    />
                    <motion.img
                        initial={initial}
                        whileInView={animation}
                        variants={darkRombVariants(50, 1.7, 0.5)}
                        src={darkCube}
                        alt="cube"
                        className="absolute bottom-1/3 right-[16%] hidden h-[15%] xl:block"
                    />
                </div>
            </section>
        </div>
    );
};

export default TodoProjectComponent;
