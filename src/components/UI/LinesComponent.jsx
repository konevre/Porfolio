import React from "react";

import lines from "../../resources/icons/lines.svg";

const LinesComponent = ({ dir }) => {
    const position =
        dir === "right"
            ? "-bottom-[58%] -right-[600px] md:-bottom-[450px] rotate-180 hidden xl:block"
            : "-bottom-[58%] -left-[600px] md:-bottom-[450px]";

    return (
        <img
            src={lines}
            alt="lines"
            className={`${position} absolute -z-10 min-h-[887px] min-w-[900px] opacity-50 blur lg:opacity-100`}
        />
    );
};

export default LinesComponent;
