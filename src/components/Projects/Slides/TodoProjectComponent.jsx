import React from "react";
import MoreComponent from "../../UI/MoreComponent";
import mac from "../../../resources/icons/projects/todo/macbook.png";

const TodoProjectComponent = () => {
    return (
        <section className="relative flex h-screen snap-center snap-always items-center  gap-y-5  p-8">
            <div className="flex basis-2/5 flex-col">
                <h3>TO-DO LIST APPLICATION</h3>
                <h2>Organic Mind</h2>
                <p>The ultimate to do list to track your tasks</p>
                <p>
                    <span>Built with</span> React, Redux Toolki, Redux Persist,
                    RTK Query, Typescript, Tailwind
                </p>
                <MoreComponent title="View the code" />
            </div>
            <div className="pointer-events-none relative flex h-full basis-3/5 items-center justify-center">
                <img src={mac} alt="macbook" />
            </div>
        </section>
    );
};

export default TodoProjectComponent;
