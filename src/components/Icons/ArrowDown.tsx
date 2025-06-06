import React from "react";

type ArrowDownProps = {
    w?: number | string;
    h?: number | string;
    color?: string;
};

export const ArrowDown: React.FC<ArrowDownProps> = ({
    w = 32,
    h = 32,
    color = "currentColor",
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} viewBox="0 0 32 32" fill="none">
            <path d="M16 22.4C15.0667 22.4 14.1334 22.04 13.4267 21.3333L4.73336 12.64C4.34669 12.2533 4.34669 11.6133 4.73336 11.2266C5.12003 10.84 5.76003 10.84 6.14669 11.2266L14.84 19.92C15.48 20.56 16.52 20.56 17.16 19.92L25.8534 11.2266C26.24 10.84 26.88 10.84 27.2667 11.2266C27.6534 11.6133 27.6534 12.2533 27.2667 12.64L18.5734 21.3333C17.8667 22.04 16.9334 22.4 16 22.4Z" fill={color} />
        </svg>
    );
};
