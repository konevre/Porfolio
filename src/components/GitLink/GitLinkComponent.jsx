import React from "react";

import git from "../../resources/icons/git1.svg";

const GitLinkComponent = () => {
    return (
        <div className="fixed left-14 bottom-14 z-10 hidden md:block">
            <a href="#">
                <img src={git} alt="git link" className="h-8" />
            </a>
        </div>
    );
};

export default GitLinkComponent;
