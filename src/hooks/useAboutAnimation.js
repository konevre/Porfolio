const useAboutAnimation = (state, section) => {
    const leaveAbout =
        state.initialized &&
        state.lastEvent === "onLeave" &&
        state.origin?.anchor === section;

    const isMovingDown = state?.direction === "down";
    const animation = leaveAbout
        ? isMovingDown
            ? "onLeaveDown"
            : "onLeaveUp"
        : "moveTo";

    const initial = isMovingDown ? "moveInitUp" : "moveInitDown";

    return {
        initial,

        animation,
    };
};

export default useAboutAnimation;
