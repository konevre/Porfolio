import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper";
import "swiper/css";

import HeroSlideComponent from "./Slides/HeroSlideComponent";
import LinesComponent from "../UI/linesComponent";
import TodoProjectComponent from "./Slides/TodoProjectComponent";
import WeatherProject from "./Slides/WeatherProject";

const ProjectsComponent = () => {
    return (
        <section id="projects" className="relative h-screen w-screen">
            <Swiper
                speed={2000}
                slidesPerView={1}
                modules={[Mousewheel]}
                direction="horizontal"
                mousewheel={true}
            >
                <SwiperSlide>
                    <HeroSlideComponent />
                </SwiperSlide>
                <SwiperSlide>
                    <TodoProjectComponent />
                </SwiperSlide>
                <SwiperSlide>
                    <WeatherProject />
                </SwiperSlide>
            </Swiper>
            <LinesComponent dir="right" />
        </section>
    );
};

export default ProjectsComponent;
