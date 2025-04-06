import React, { ReactNode } from "react";

interface buttonInterface {
  bgColor?: string;
  bgOpacity?: number;
  borderColor?: string;
  textColor: string;
  padding: string;
  children: ReactNode;
  style?:object;
}

const Button = ({
  bgColor = "transparent",
  bgOpacity = 1,
  borderColor,
  textColor,
  padding,
  children,
  style
}: buttonInterface) => {
  const getRGBA = (color: string, opacity: number) => {
    if (color.startsWith("#")) {
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
    return color;
  };

  return (
    <button
      className="btn"
      style={{
        backgroundColor: getRGBA(bgColor, bgOpacity),
        border: borderColor ? `${borderColor} 1px solid` : "unset",
        color: textColor,
        padding: padding,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "background-color 0.3s ease",
        ...style
      }}
      onMouseEnter={(e) => {
        (e.target as HTMLButtonElement).style.backgroundColor = getRGBA(bgColor, bgOpacity + 0.2);
      }}
      onMouseLeave={(e) => {
        (e.target as HTMLButtonElement).style.backgroundColor = getRGBA(bgColor, bgOpacity);
      }}
    >
      {children}
    </button>
  );
};

export default Button;