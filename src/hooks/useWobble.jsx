import React, { useState } from "react";

const useWobble = (text, br) => {
    const [jelly, setJelly] = useState(false);
    const handleMouseOver = (i) => {
        setJelly(i);
    };

    const wobbleText = text.split("").map((letter, i) => {
        const activeLetter =
            i === jelly ? "hover:animate-gelatine hover:text-amber-400" : "";

        return letter !== " " ? (
            <span
                onMouseOver={() => handleMouseOver(i)}
                key={`${letter}${i}`}
                className={`${activeLetter} inline-block cursor-default`}
            >
                {letter}
            </span>
        ) : i === br ? (
            <br key={`${letter}${i}`} />
        ) : (
            <span className="cursor-default"> </span>
        );
    });

    return { wobbleText };
};

export default useWobble;
