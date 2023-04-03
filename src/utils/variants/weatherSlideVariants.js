export const textVariants = {
    onLeaveDown: {
        y: "-30vh",
        opacity: 0.4,
        transition: {
            duration: 2,
            type: "spring",
            ease: "easeOut",
            delay: 0,
        },
    },
    onLeaveUp: {
        y: "30vh",
        opacity: 0.4,
        transition: {
            duration: 2,
            type: "spring",
            ease: "easeOut",
            delay: 0,
        },
    },
    onLeaveRight: {
        x: "-60vw",
        opacity: 0.4,
        transition: {
            duration: 1.4,
            type: "spring",
            ease: "easeOut",
            delay: 0,
        },
    },
    onLeaveLeft: {
        x: "60vw",
        opacity: 0.5,
        transition: {
            duration: 1.9,
            type: "spring",
            ease: "easeOut",
            delay: 0,
        },
    },
    moveTo: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
            duration: 2,
            type: "spring",
            ease: "easeInOut",
            delay: 0,
        },
    },
    initialDown: {
        y: "10vh",
        opacity: 1,
    },
    initialUp: {
        y: "-10vh",
        opacity: 1,
    },
    initialLeft: {
        x: "-20vw",
        opacity: 1,
    },
    initialRight: {
        x: "20vw",
        opacity: 1,
    },
};

export const phoneVariants = {
    onLeaveDown: {
        y: "-15vh",
        opacity: 0.4,
        transition: {
            duration: 2,
            type: "spring",
            ease: "easeOut",
            delay: 0,
        },
    },
    onLeaveUp: {
        y: "15vh",
        opacity: 0.4,
        transition: {
            duration: 2,
            type: "spring",
            ease: "easeOut",
            delay: 0,
        },
    },
    onLeaveRight: {
        x: "0",
        opacity: 1,
        transition: {
            duration: 1.4,
            type: "spring",
            ease: "easeOut",
            delay: 0,
        },
    },
    onLeaveLeft: {
        x: "60vw",
        opacity: 0.5,
        transition: {
            duration: 1.9,
            type: "spring",
            ease: "easeOut",
            delay: 0.25,
        },
    },
    moveTo: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
            duration: 2,
            type: "spring",
            ease: "easeInOut",
            delay: 0,
        },
    },
    initialDown: {
        y: "10vh",
        opacity: 1,
    },
    initialUp: {
        y: "-10vh",
        opacity: 1,
    },
    initialLeft: {
        x: "0",
        opacity: 1,
    },
    initialRight: {
        x: "10vw",
        opacity: 1,
    },
};
export const linesVariants = {
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
        opacity: 1,
        transition: {
            duration: 2,
            type: "spring",
            ease: "easeOut",
            delay: 0,
        },
    },
    onLeaveRight: {
        x: "0",
        opacity: 1,
        transition: {
            duration: 1,
            type: "spring",
            ease: "easeOut",
            delay: 0,
        },
    },
    onLeaveLeft: {
        x: "-10vw",
        opacity: 0.5,
        transition: {
            duration: 1.9,
            type: "spring",
            ease: "easeOut",
            delay: 0.25,
        },
    },
    moveTo: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
            duration: 2,
            type: "spring",
            ease: "linear",
            delay: 0,
        },
    },
    initialDown: {
        y: "0",
        opacity: 1,
    },
    initialUp: {
        y: "0",
        opacity: 1,
    },
    initialLeft: {
        x: "0",
        opacity: 1,
    },
    initialRight: {
        x: "-20vw",
        opacity: 1,
    },
};
