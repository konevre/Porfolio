import React from "react";
import { motion } from "framer-motion";

import MoreComponent from "../../UI/MoreComponent";
import mac from "../../../resources/icons/projects/todo/macbook.png";
import useWobble from "../../../hooks/useWobble";

import darkCube from "../../../resources/icons/projects/todo/dark_cube1.png";
import darkRomb from "../../../resources/icons/projects/todo/dark_romb.png";
import whiteCube from "../../../resources/icons/projects/todo/white_cube2.png";
import { makeVariantX } from "../../../utils/utils";

const TodoProjectComponent = () => {
    const { wobbleText } = useWobble("Organic Mind ", 13);
    return (
        <section className="relative flex h-screen snap-center snap-always items-center  gap-y-5  p-8">
            <div className="flex basis-2/5 flex-col">
                <h3 className="text-lg font-light text-custom-grey">
                    TO-DO LIST APPLICATION
                </h3>
                <h2 className="mt-3 whitespace-nowrap text-3xl font-bold lg:text-6xl">
                    {wobbleText}
                </h2>
                <p className="mt-6 text-lg font-light">
                    The ultimate to do list to track your tasks
                </p>
                <p className="mt-5 text-lg font-light">
                    <span className="font-semibold">Built with:</span> React,
                    Redux Toolki, Redux Persist, RTK Query, Typescript, Tailwind
                </p>
                <MoreComponent title="View the code" styles="mt-5" />
            </div>
            <div className="pointer-events-none relative flex h-full basis-3/5 items-center justify-center">
                <img src={mac} alt="macbook" className="w-4/5" />
                <motion.img
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={makeVariantX(150, 2.5, 0, 1)}
                    src={darkRomb}
                    alt="cube"
                    className="absolute top-20 left-[44%] h-1/4"
                />
                <motion.img
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={makeVariantX(100, 2.2, 0, 1)}
                    src={whiteCube}
                    alt="cube"
                    className="absolute bottom-16 left-[16%] h-32"
                />
                <motion.img
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={makeVariantX(50, 1.7, 0, 1)}
                    src={darkCube}
                    alt="cube"
                    className="absolute bottom-1/3 right-[16%] h-[15%]"
                />
            </div>
        </section>
    );
};

export default TodoProjectComponent;
