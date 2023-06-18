import React from "react";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";
import { TransactionDetails } from "../../types/TransactionTypes";

export const Table = ({
  transactions,
}: {
  transactions: TransactionDetails[];
}) => {
  const createRows = () => {
    return transactions.map((transaction) => {
      return <TableRow transaction={transaction} />;
    });
  };
  return (
    <div className="bg-white border-4 border-gray-600 flex flex-col w-full">
      <TableHeader />
      {createRows()}
    </div>
  );
};
