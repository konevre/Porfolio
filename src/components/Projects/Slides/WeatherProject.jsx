import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper";
import "swiper/css";

import useWobble from "../../../hooks/useWobble";

import phone from "../../../resources/icons/projects/weather/phone.png";
import MoreComponent from "../../UI/MoreComponent";
import { makeVariantX } from "../../../utils/utils";
import dots from "../../../resources/icons//projects/weather/side-dots.png";

const WeatherProject = () => {
    const { wobbleText } = useWobble("Kreeze ", 5);
    return (
        <section className="relative flex h-screen snap-center snap-always items-center  gap-y-5  p-8">
            <div className="pointer-events-none relative  flex h-full basis-3/5 items-center justify-center">
                <img
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={makeVariantX(200, 2.5, 0, 1)}
                    src={phone}
                    alt="phone"
                    className="w-4/5"
                />
                <img
                    src={dots}
                    alt="dots"
                    className="absolute -top-12 -z-10 h-full"
                />
            </div>
            {/* TODO - the same as in todo proj, hero sections */}
            <div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={makeVariantX(100, 2.5, 0, 1)}
                className="flex w-1/2 basis-1/3 flex-col"
            >
                <h3 className="text-lg font-light text-custom-grey">
                    WEATHER APPLICATION
                </h3>
                <h2 className="mt-3 whitespace-nowrap text-3xl font-bold lg:text-6xl">
                    {wobbleText}
                </h2>
                <p className="mt-6 text-lg font-light">
                    Access current weather for any location on Earth
                </p>
                <p className="mt-5 text-lg font-light">
                    <span className="font-semibold">Built with:</span> React,
                    Redux Toolki, RTK Query, OpenWeatherMap API, SASS
                </p>
                <MoreComponent title="View the code" styles="mt-5" />
            </div>
        </section>
    );
};

export default WeatherProject;
