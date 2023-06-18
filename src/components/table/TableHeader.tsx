import React from "react";
interface HeaderLabelProps {
  title: string;
}
const HeaderLabel = ({ title }: HeaderLabelProps) => {
  return (
    <div className="border-gray-300 border-2 w-3/12 text-center">{title}</div>
  );
};

export const TableHeader = () => {
  return (
    <div className="flex flex-row w-screen">
      <HeaderLabel title={"Date"} />
      <HeaderLabel title={"Label"} />
      <HeaderLabel title={"Value"} />
      <HeaderLabel title={"Balance"} />
    </div>
  );
};
