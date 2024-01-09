import React from "react";
import Alert from "./Alert";

interface ButtonProps {
  children: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";

  onClick?: () => void;
}

function Button({ children, onClick, color = "primary" }: ButtonProps) {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
