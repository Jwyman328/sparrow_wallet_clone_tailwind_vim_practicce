import React from "react";

interface SwitchProps {
  className?: string;
  onClick: () => void;
}
export const Switch = ({ className, onClick }: SwitchProps) => {
  return (
    <div
      onClick={onClick}
      className={`w-8 rounded-xl h-5 border-[1px] border-gray-500 bg-gray-400 ${className}`}
    >
      <div className="w-4 h-5 rounded-xl border-[1px] border-gray-500 bg-gray-200"></div>
    </div>
  );
};
