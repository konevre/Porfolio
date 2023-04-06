import React from "react";

import LinesComponent from "../UI/linesComponent";

import HeroSlideComponent from "./Slides/HeroSlideComponent";
import TodoProjectComponent from "./Slides/TodoProjectComponent";
import WeatherProject from "./Slides/WeatherProject";

const ProjectsComponent = ({ state }) => {
    return (
        <div className="section fp-auto-height" data-anchor="projects">
            <section className="mx-auto flex max-w-container">
                <HeroSlideComponent state={state} />
                <TodoProjectComponent state={state} />
                <WeatherProject state={state} />
            </section>
            <LinesComponent dir="right" />
        </div>
    );
};

export default ProjectsComponent;
