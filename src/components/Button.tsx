import React from "react";

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
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
