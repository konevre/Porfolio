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
                key={i}
                className={`${activeLetter} inline-block`}
            >
                {letter}
            </span>
        ) : i === br ? (
            <br />
        ) : (
            " "
        );
    });

    return { wobbleText };
};

export default useWobble;
