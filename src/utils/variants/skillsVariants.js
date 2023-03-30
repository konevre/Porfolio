export const makeSecondVariants = (delay) => {
    return {
        onLeaveDown: {
            y: "0",
            opacity: 1,
            transition: {
                duration: 2,
                type: "spring",
                ease: "easeOut",
                delay: 0,
            },
        },
        onLeaveUp: {
            y: "0",
            opacity: 0,
            transition: {
                duration: 2,
                type: "spring",
                ease: "easeOut",
                delay: 0,
            },
        },
        moveTo: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 2,
                type: "spring",
                ease: "easeInOut",
                delay,
            },
        },
        moveInitDown: {
            y: "10vh",
            opacity: 0,
        },
        moveInitUp: {
            y: "0",
            opacity: 0,
        },
    };
};
export const makeFirstVariants = (delay) => {
    return {
        onLeaveDown: {
            y: "-70vh",
            opacity: 1,
            transition: {
                duration: 3,
                type: "spring",
                ease: "easeOut",
                delay,
            },
        },
        onLeaveUp: {
            y: "0",
            opacity: 0,
            transition: {
                duration: 2,
                type: "spring",
                ease: "easeOut",
                delay: 0,
            },
        },
        moveTo: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 2,
                type: "spring",
                ease: "easeInOut",
                delay: 0,
            },
        },
        moveInitDown: {
            y: "10vh",
            opacity: 0,
        },
        moveInitUp: {
            y: "0",
            opacity: 1,
        },
    };
};

export const h3Variant = (delay) => {
    return {
        onLeaveDown: {
            y: "-60vh",
            opacity: 1,
            transition: {
                duration: 2,
                type: "spring",
                ease: "easeOut",
                delay: 0.2,
            },
        },
        onLeaveUp: {
            y: "0",
            opacity: 0,
            transition: {
                duration: 2,
                type: "spring",
                ease: "easeOut",
                delay: 0,
            },
        },
        moveTo: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                type: "spring",
                ease: "easeInOut",
                delay,
            },
        },
        moveInitDown: {
            y: "2vh",
            opacity: 0,
        },
        moveInitUp: {
            y: "0",
            opacity: 1,
        },
    };
};
