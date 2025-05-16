'use client';

import React, { useState } from "react";

export default function GridLayout({
                                       className,
                                       children,
                                   }: {
    className?: string;
    children?: React.ReactNode;
}) {
    return (
        <div
            className={`grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-5 gap-6 max-w-7xl mx-auto ${
                className || ""
            }`}
        >
            {children}
        </div>
    );
}

type HeaderComponentProps = {
    isGroupHovered: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    [key: string]: boolean | string | React.CSSProperties | React.ReactNode | undefined;
};

const GridItem = React.memo(function GridItem({
                                                  className,
                                                  title,
                                                  description,
                                                  header,
                                                  icon,
                                              }: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactElement<HeaderComponentProps>;
    icon?: React.ReactNode;
}) {
    const [isGroupHovered, setIsGroupHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsGroupHovered(true)}
            onMouseLeave={() => setIsGroupHovered(false)}
            className={`row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-bg-secondary-dark dark:border-border-dark border border-transparent justify-between flex flex-col space-y-4 ${
                className || ""
            }`}
        >
            <div className="group-hover/bento:translate-x-2 transition duration-200 mb-2">
                {icon}
                <div className="font-firaSans font-bold text-text-secondary-dark tracking-wide mb-2 mt-2">
                    {title}
                </div>
                <div className="font-firaSans font-normal text-text-tertiary-dark text-xs">
                    {description}
                </div>
            </div>

            {header &&
                React.cloneElement<HeaderComponentProps>(header, {
                    ...header.props,
                    isGroupHovered
                })}
        </div>
    );
});

GridItem.displayName = "GridItem";

export { GridItem };
