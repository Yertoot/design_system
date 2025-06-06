import React from "react";

type CategoryProps = {
  w?: number | string;
  h?: number | string;
  color?: string;
};

export const Category: React.FC<CategoryProps> = ({
  w = 80,
  h = 80,
  color = "currentColor",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      viewBox="0 0 80 80"
      fill="none"
    >
      <path
        d="M24.1333 6.6665H17.8C10.5 6.6665 6.66663 10.4998 6.66663 17.7665V24.0998C6.66663 31.3665 10.5 35.1998 17.7666 35.1998H24.1C31.3666 35.1998 35.2 31.3665 35.2 24.0998V17.7665C35.2333 10.4998 31.4 6.6665 24.1333 6.6665Z"
        fill={color}
      />
      <path
        opacity="0.4"
        d="M62.2334 6.6665H55.9001C48.6334 6.6665 44.8 10.4998 44.8 17.7665V24.0998C44.8 31.3665 48.6334 35.1998 55.9001 35.1998H62.2334C69.5001 35.1998 73.3334 31.3665 73.3334 24.0998V17.7665C73.3334 10.4998 69.5001 6.6665 62.2334 6.6665Z"
        fill={color}
      />
      <path
        d="M62.2334 44.7666H55.9001C48.6334 44.7666 44.8 48.5999 44.8 55.8666V62.1999C44.8 69.4666 48.6334 73.2999 55.9001 73.2999H62.2334C69.5001 73.2999 73.3334 69.4666 73.3334 62.1999V55.8666C73.3334 48.5999 69.5001 44.7666 62.2334 44.7666Z"
        fill={color}
      />
      <path
        opacity="0.4"
        d="M24.1333 44.7666H17.8C10.5 44.7666 6.66663 48.5999 6.66663 55.8666V62.1999C6.66663 69.4999 10.5 73.3333 17.7666 73.3333H24.1C31.3666 73.3333 35.2 69.4999 35.2 62.2333V55.8999C35.2333 48.5999 31.4 44.7666 24.1333 44.7666Z"
        fill={color}
      />
    </svg>
  );
};
