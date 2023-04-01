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
        x: "30vw",
        opacity: 0.5,
        transition: {
            duration: 2,
            type: "spring",
            ease: "easeOut",
            delay: 0.2,
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
        y: "0",
        opacity: 1,
    },
    initialUp: {
        y: "0",
        opacity: 1,
    },
    initialLeft: {
        x: "-20vw",
        opacity: 1,
    },
    initialRight: {
        x: "0",
        opacity: 1,
    },
};

export const compVariants = {
    onLeaveDown: {
        y: "-15vh",
        opacity: 0.4,
        transition: {
            duration: 2,
            type: "spring",
            ease: "easeOut",
            delay: 0.3,
        },
    },
    onLeaveUp: {
        y: "15vh",
        opacity: 0.4,
        transition: {
            duration: 2,
            type: "spring",
            ease: "easeOut",
            delay: 0.3,
        },
    },
    onLeaveRight: {
        x: "0",
        opacity: 0.5,
        transition: {
            duration: 2,
            type: "spring",
            ease: "easeOut",
            delay: 0,
        },
    },
    onLeaveLeft: {
        x: "50vw",
        opacity: 0.5,
        transition: {
            duration: 2,
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
        y: "5vh",
        opacity: 1,
    },
    initialUp: {
        y: "-5vh",
        opacity: 1,
    },
    initialLeft: {
        x: "-10vw",
        opacity: 1,
    },
    initialRight: {
        x: "10vw",
        opacity: 1,
    },
};

export const darkRombVariants = (x, duration, delay = 0) => {
    return {
        onLeaveDown: {
            y: "0",
            opacity: 1,
            transition: {
                duration: 1,
                type: "spring",
                ease: "easeOut",
                delay: 0,
            },
        },
        onLeaveUp: {
            y: "0",
            opacity: 1,
            transition: {
                duration: 1,
                type: "spring",
                ease: "easeOut",
                delay: 0,
            },
        },
        onLeaveRight: {
            x: "-50vw",
            opacity: 1,
            transition: {
                duration: 1.7,
                type: "spring",
                ease: "easeOut",
                delay,
            },
        },
        onLeaveLeft: {
            x: "10vw",
            opacity: 1,
            transition: {
                duration: 2,
                type: "spring",
                ease: "easeOut",
                delay: 0.3,
            },
        },
        moveTo: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                duration,
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
            y: "10vh",
            opacity: 1,
        },
        initialLeft: {
            x: -x,
            opacity: 1,
        },
        initialRight: {
            x: x,
            opacity: 1,
        },
    };
};
