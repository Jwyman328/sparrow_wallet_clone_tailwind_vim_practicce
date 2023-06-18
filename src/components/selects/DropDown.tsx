import React from "react";

interface Option {
  name: string;
  value: string;
}
interface DropDownProps {
  options: Option[];
  name: string;
  className?: string;
}
export const DropDown = ({ options, name, className }: DropDownProps) => {
  const createOptions = () => {
    return options.map((option) => {
      return <option value={option.value}>{option.name}</option>;
    });
  };
  return (
    <select
      className={`mr-2 bg-gray-300 border-2 border-gray-400 p-1 ${className}`}
      name={name}
    >
      {createOptions()}
    </select>
  );
};
