import { useMediaQuery } from "react-responsive";

const useSectionAnimation = (state, section, slide = null) => {
    const isLessThan1024 = useMediaQuery({ query: "(max-width: 1024px)" });
    if (isLessThan1024) {
        return { initial: {}, animation: {} };
    }

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

    const isLeaveSlide = state.initialized && state.origin?.anchor === slide;

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
