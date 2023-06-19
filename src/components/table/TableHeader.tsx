import React, { ReactElement } from "react";
interface HeaderLabelProps {
  title: string;
  className?: string;
}
export const HeaderLabel = ({ title, className }: HeaderLabelProps) => {
  return (
    <div className={`border-gray-300 border-2 w-3/12 text-center ${className}`}>
      {title}
    </div>
  );
};

interface TableHeaderProps {
  children: ReactElement;
}
export const TableHeader = ({ children }: TableHeaderProps) => {
  return <div className="flex flex-row w-full">{children}</div>;
};
