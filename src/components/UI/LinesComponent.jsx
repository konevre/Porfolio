import React from "react";

import lines from "../../resources/icons/lines.svg";

const LinesComponent = ({ dir }) => {
    const position =
        dir === "right"
            ? "-bottom-[60%] -right-[40%] rotate-180"
            : "-bottom-[58%] -left-[38%]";

    return (
        <img
            src={lines}
            alt="lines"
            className={`${position} absolute -z-10 blur`}
        />
    );
};

export default LinesComponent;
