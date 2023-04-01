import React from "react";
import { motion } from "framer-motion";

import "swiper/css";

import useWobble from "../../../hooks/useWobble";

import phone from "../../../resources/icons/projects/weather/phone.png";
import MoreComponent from "../../UI/MoreComponent";
import {
    textVariants,
    phoneVariants,
} from "../../../utils/variants/weatherSlideVariants";
import dots from "../../../resources/icons//projects/weather/side-dots.png";
import useSectionAnimation from "../../../hooks/useSectionAnimation";

const WeatherProject = ({ state }) => {
    const { wobbleText } = useWobble("Kreeze ", 5);
    const { initial, animation } = useSectionAnimation(
        state,
        "projects",
        "weather"
    );
    return (
        <div className="slide" data-anchor="weather">
            <section className="relative flex h-screen snap-center snap-always items-center  gap-y-5  overflow-hidden p-8">
                <div className="pointer-events-none relative  flex h-full basis-3/5 items-center justify-center">
                    <motion.img
                        initial={initial}
                        variants={phoneVariants}
                        whileInView={animation}
                        src={phone}
                        alt="phone"
                        className="w-4/5"
                    />
                    <img
                        src={dots}
                        alt="dots"
                        className="absolute top-0 -z-10 h-[150%]"
                    />
                </div>
                {/* TODO - the same as in todo proj, hero sections */}
                <motion.div
                    initial={initial}
                    variants={textVariants}
                    whileInView={animation}
                    className="flex w-1/2 basis-1/3 cursor-default flex-col"
                >
                    <h3 className="text-lg font-light text-custom-grey">
                        WEATHER APPLICATION
                    </h3>
                    <h2 className="mt-3 whitespace-nowrap text-3xl font-bold lg:text-6xl">
                        {wobbleText}
                    </h2>
                    <p className="mt-6  text-lg font-light">
                        Access current weather for any location on Earth
                    </p>
                    <p className="mt-5  text-lg font-light">
                        <span className="font-semibold">Built with:</span>{" "}
                        React, Redux Toolki, RTK Query, OpenWeatherMap API, SASS
                    </p>
                    <MoreComponent title="View the code" styles="mt-5" />
                </motion.div>
            </section>
        </div>
    );
};

export default WeatherProject;
