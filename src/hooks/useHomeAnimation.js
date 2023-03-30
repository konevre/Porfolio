const useHomeAnimation = (state) => {
    const firstInit = !state.origin;
    const leaveHome =
        state.initialized &&
        state.lastEvent === "onLeave" &&
        state.origin?.anchor === "home";

    const animation = leaveHome ? "onLeave" : "moveTo";

    const initial = firstInit ? "firstInit" : "moveInit";

    return {
        animation,
        initial,
    };
};

export default useHomeAnimation;
