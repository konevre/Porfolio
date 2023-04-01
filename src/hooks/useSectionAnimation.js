const useSectionAnimation = (state, section, slide = null) => {
    const directions = {
        up: { initial: "initialDown", animation: "onLeaveUp" },
        right: { initial: "initialLeft", animation: "onLeaveRight" },
        down: { initial: "initialUp", animation: "onLeaveDown" },
        left: { initial: "initialRight", animation: "onLeaveLeft" },
    };

    const directionAnimation =
        directions[state?.direction]?.animation ||
        directions[state?.destination]?.animation;

    const isLeaveSection =
        state.initialized && state.origin?.anchor === section;

    const isLeaveSlide =
        state.initialized &&
        state.direction === "horizontalNav" &&
        state.origin?.anchor === slide;

    console.log(isLeaveSlide);

    const animation = isLeaveSection
        ? directionAnimation
        : isLeaveSlide
        ? directionAnimation
        : "moveTo";

    const initial =
        directions[state?.direction]?.initial ||
        directions[state?.destination]?.initial ||
        "initialDown";

    return {
        initial,
        animation,
    };
};

export default useSectionAnimation;

// const useSectionAnimation = (state, section) => {
//     const leaveAbout = state.initialized && state.origin?.anchor === section;

//     const isMovingDown = state?.direction === "down";
//     const animation = leaveAbout
//         ? isMovingDown
//             ? "onLeaveDown"
//             : "onLeaveUp"
//         : "moveTo";

//     const initial = isMovingDown ? "initialUp" : "initialDown";

//     console.log(initial, animation);

//     return {
//         initial,
//         animation,
//     };
// };

// export default useSectionAnimation;
