import React from "react";
import { motion } from "framer-motion";

import LinesComponent from "../../UI/linesComponent";
import useWobble from "../../../hooks/useWobble";
import MoreComponent from "../../UI/MoreComponent";
import { makeVariant } from "../../../utils/utils";

import sphereSm from "../../../resources/icons/projects/sphere_sm.png";
import sphereMd from "../../../resources/icons/projects/sphere_md.png";
import sphereLg from "../../../resources/icons/projects/sphere_lg.png";

const HeroSlideComponent = () => {
    const { wobbleText } = useWobble("Portfolio & Previous Projects", 20);
    return (
        <section className="relative flex h-screen snap-center snap-always flex-col items-center justify-center gap-y-5  p-8">
            <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={makeVariant("5vh", 3, 0.2, 1)}
                className="whitespace-nowrap text-center text-3xl font-bold lg:text-6xl"
            >
                {wobbleText}
            </motion.h2>
            <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={makeVariant("5vh", 3, 0.2, 1)}
                className="w-[40%] text-center text-lg font-normal"
            >
                I have built various different projects to fit different aspects
                of the client's business. If you want to see more examples of my
                work than the ones showcased in this site, please{" "}
                <a
                    href="#"
                    className="text-lg text-amber-400 hover:underline hover:underline-offset-4"
                >
                    contact me!
                </a>
            </motion.p>
            <MoreComponent title="See projects" styles="p-3" />
            <img
                src={sphereSm}
                alt="sphere"
                className="absolute left-[23%] top-[22%]"
            />
            <img
                src={sphereMd}
                alt="sphere"
                className="absolute bottom-14 left-4 -z-10"
            />
            <img
                src={sphereLg}
                alt="sphere"
                className="absolute top-[34%] right-[10%]"
            />
        </section>
    );
};

export default HeroSlideComponent;
