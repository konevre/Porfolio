import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper";
import "swiper/css";

import HeroSlideComponent from "./Slides/HeroSlideComponent";
import LinesComponent from "../UI/linesComponent";
import TodoProjectComponent from "./Slides/TodoProjectComponent";
import WeatherProject from "./Slides/WeatherProject";

const ProjectsComponent = ({ state }) => {
    return (
        <div className="section" data-anchor="projects">
            {/* <section className="max-w-container"> */}
            <HeroSlideComponent state={state} />

            <TodoProjectComponent state={state} />

            <WeatherProject state={state} />

            {/* </section> */}
            <LinesComponent dir="right" />
        </div>
    );
};

export default ProjectsComponent;
