import React from "react";

import git from "../../resources/icons/git1.svg";

const GitLinkComponent = () => {
    return (
        <div className="left-14 bottom-14 z-10 hidden lg:fixed lg:block">
            <a target="_blank" href="https://github.com/konevre">
                <img src={git} alt="git link" className="h-8" />
            </a>
        </div>
    );
};

export default GitLinkComponent;
