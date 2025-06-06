import clsx from "clsx";
import { Icon } from "../Icon";
import styles from "./_button.module.scss";
import { ButtonProps } from "./types";

export const Button = ({
  children,
  variant = "primary",
  style = "contained",
  size = "medium",
  disabled = false,
  leftIcon,
  rightIcon,
  className,
  ...rest
}: ButtonProps) => {
  const classes = clsx(
    styles.button,
    styles[variant],
    styles[style],
    styles[size],
    { [styles.withIcon]: leftIcon || rightIcon },
    className
  );

  return (
    <button className={classes} disabled={disabled} {...rest}>
      {leftIcon && (
        <Icon
          name={leftIcon}
          color="currentColor"
          w={24}
          h={24}
        />
      )}
      {children}
      {rightIcon && (
        <Icon
          name={rightIcon}
          color="currentColor"
          w={24}
          h={24}
        />
      )}
    </button>
  );
};
