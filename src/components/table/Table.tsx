import React, { ReactElement } from "react";

interface TableProps {
  children: ReactElement;
}

export const Table = ({ children }: TableProps) => {
  return (
    <div className="bg-white border-4 border-gray-600 flex flex-col w-full">
      {children}
    </div>
  );
};
