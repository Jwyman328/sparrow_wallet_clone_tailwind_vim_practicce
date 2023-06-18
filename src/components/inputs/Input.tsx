import React from "react";

interface InputProps {
  className?: string;
}

export const Input = ({ className }: InputProps) => {
  return (
    <input className={`bg-white border-2 border-gray-200  ${className}`} />
  );
};
