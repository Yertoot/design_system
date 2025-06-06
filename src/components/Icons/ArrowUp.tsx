import React from "react";

type ArrowUpProps = {
    w?: number | string;
    h?: number | string;
    color?: string;
};

export const ArrowUp: React.FC<ArrowUpProps> = ({
    w = 32,
    h = 32,
    color = "currentColor",
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} viewBox="0 0 32 32" fill="none">
            <path d="M26.56 21.0667C26.3067 21.0667 26.0534 20.9734 25.8534 20.7734L17.16 12.08C16.52 11.44 15.48 11.44 14.84 12.08L6.14669 20.7734C5.76003 21.16 5.12003 21.16 4.73336 20.7734C4.34669 20.3867 4.34669 19.7467 4.73336 19.36L13.4267 10.6667C14.84 9.25336 17.1467 9.25336 18.5734 10.6667L27.2667 19.36C27.6534 19.7467 27.6534 20.3867 27.2667 20.7734C27.0667 20.96 26.8134 21.0667 26.56 21.0667Z" fill={color} />
        </svg>
    );
};
