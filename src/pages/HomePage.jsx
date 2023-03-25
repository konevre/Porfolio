import React, { useState } from "react";

import comp from "../resources/icons/comp.svg";
import dots from "../resources/icons/side-dots.png";
import romb from "../resources/icons/romb.png";
import chevron from "../resources/icons/chevron-right.svg";

const HomePage = () => {
    const [mouse, setMouse] = useState("rotate-0");
    const [jelly, setJelly] = useState(false);

    const handleMouseEnter = () => {
        setMouse("rotate-90");
    };
    const handleMouseLeave = () => {
        setMouse("rotate-0");
    };

    const handleMouseOver = (i) => {
        setJelly(i);
    };

    const frontendTitle = "Front-End Software Developer"
        .split("")
        .map((letter, i) => {
            const activeLetter =
                i === jelly
                    ? "hover:animate-gelatine hover:text-amber-400"
                    : "";

            return letter !== " " ? (
                <span
                    onMouseOver={() => handleMouseOver(i)}
                    key={i}
                    className={`${activeLetter} inline-block`}
                >
                    {letter}
                </span>
            ) : i === 18 ? (
                <br />
            ) : (
                " "
            );
        });

    return (
        <div className="m-auto mt-0 flex h-full max-w-container flex-col-reverse items-center p-8 md:flex-row">
            <div className="flex basis-2/5 flex-col">
                <div className="whitespace-nowrap text-3xl font-bold lg:text-6xl">
                    {frontendTitle}
                </div>
                <div className="mt-8 text-lg">
                    Resolving design problems, building smart user interfaces{" "}
                    and useful interactions, developing rich web applications{" "}
                    and seamless web experiences.
                </div>
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="mt-8 flex w-fit cursor-pointer items-center text-lg font-semibold text-custom-purple"
                >
                    <div>About me</div>
                    <img
                        src={chevron}
                        alt="chevron right"
                        className={`${mouse} ml-2 h-4 transition duration-500 ease-in-out`}
                    />
                </div>
            </div>
            <div className="pointer-events-none flex h-full basis-3/5 items-center justify-center">
                <img src={comp} alt="comp" className="w-2/3" />
                <img
                    src={dots}
                    alt="dots"
                    className="absolute left-[45%] -z-10 "
                />
            </div>
            <img
                src={romb}
                alt="romb"
                className="pointer-events-none absolute bottom-0 left-1/3 hidden md:block"
            />
        </div>
    );
};

export default HomePage;
