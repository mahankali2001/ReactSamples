import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: string;
  // color?: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  color = "primary",
  onClick,
}) => {
  return (
    // <button className={"btn btn-" + color} onClick={onClick}>
    <button
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
