import React from "react";

interface ButtonProps {
  children: string;
  onClick: () => void;
  className?: string;
}
export const Button = ({ className, children, onClick }: ButtonProps) => {
  return (
    <button
      className={`bg-gray-300 border-2 border-gray-400 p-1 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
