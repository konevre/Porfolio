import React, { useState } from "react";

const WobbleTitleComponent = ({ text, isCenter }) => {
    const [jelly, setJelly] = useState(false);
    const handleMouseOver = (i) => {
        setJelly(i);
    };

    const wobbleText = text.split(" ").map((item) => {
        return (
            <div className="">
                {item.split("").map((letter, i) => {
                    const activeLetter =
                        i === jelly
                            ? "hover:animate-gelatine hover:text-amber-400"
                            : "";
                    return (
                        <span
                            onMouseOver={() => handleMouseOver(i)}
                            key={`${letter}${i}`}
                            className={`${activeLetter} inline-block cursor-default`}
                        >
                            {letter}
                        </span>
                    );
                })}
            </div>
        );
    });

    const textPosition = isCenter ? "text-center" : "";

    return (
        <h2
            className={`${textPosition} flex flex-wrap gap-x-3 text-4xl font-bold lg:text-5xl`}
        >
            {wobbleText}
        </h2>
    );
};

export default WobbleTitleComponent;
