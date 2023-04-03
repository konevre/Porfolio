import React from "react";
import { motion } from "framer-motion";

import phone from "../../../resources/icons/projects/weather/phone.png";
import {
    textVariants,
    phoneVariants,
    linesVariants,
} from "../../../utils/variants/weatherSlideVariants";
import dots from "../../../resources/icons//projects/weather/side-dots.png";
import useSectionAnimation from "../../../hooks/useSectionAnimation";

import WobbleTitleComponent from "../../UI/WobbleTitleComponent";
import MoreComponent from "../../UI/MoreComponent";

const WeatherProject = ({ state }) => {
    const { initial, animation } = useSectionAnimation(
        state,
        "projects",
        "weather"
    );
    return (
        <div className="slide fp-auto-height" data-anchor="weather">
            <section className="relative flex max-w-container flex-col items-center gap-y-5 overflow-hidden  p-8  md:flex-row lg:h-screen">
                <div className="pointer-events-none relative  flex h-full basis-3/5 items-center justify-center">
                    <motion.img
                        initial={initial}
                        variants={phoneVariants}
                        whileInView={animation}
                        src={phone}
                        alt="phone"
                        className="w-4/5"
                    />
                    <motion.img
                        initial={initial}
                        variants={linesVariants}
                        whileInView={animation}
                        src={dots}
                        alt="dots"
                        className="absolute top-0 -z-10 h-[150%] scale-[5] md:scale-[2] lg:scale-100"
                    />
                </div>
                <motion.div
                    initial={initial}
                    variants={textVariants}
                    whileInView={animation}
                    className="flex basis-1/3 cursor-default flex-col md:w-1/2"
                >
                    <h3 className="my-3 text-lg font-light text-custom-grey">
                        WEATHER APPLICATION
                    </h3>
                    <WobbleTitleComponent text="Kreeze " br={5} />
                    <p className="mt-3 text-lg  font-light lg:mt-6">
                        Access current weather for any location on Earth
                    </p>
                    <p className="my-3 text-lg font-light">
                        <span className="font-semibold">Built with:</span>{" "}
                        React, Redux Toolki, RTK Query, OpenWeatherMap API, SASS
                    </p>
                    <MoreComponent
                        title="View the code"
                        hash="https://github.com/konevre/Weather-App"
                        isYellow={true}
                        isBlank={true}
                    />
                </motion.div>
            </section>
        </div>
    );
};

export default WeatherProject;
