export const makeVariant = (y, duration, delay = 0, opacityHidden = 0) => {
    return {
        hidden: { y: y, opacity: opacityHidden },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: duration,
                type: "spring",
                ease: "easeInOut",
                delay: delay,
            },
        },
    };
};
export const makeVariantX = (x, duration, delay = 0, opacityHidden = 0) => {
    return {
        hidden: { x: x, opacity: opacityHidden },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: duration,
                type: "spring",
                ease: "easeInOut",
                delay: delay,
            },
        },
    };
};
