import React from "react";
import { TransactionDetails } from "../../types/TransactionTypes";

interface TableRowProps {
  transaction: TransactionDetails;
}
export const TableRow = ({ transaction }: TableRowProps) => {
  return (
    <div className="p-1 flex flex-row w-full">
      <div className="w-3/12">{transaction.date}</div>
      <div className="w-3/12"> {transaction.label}</div>
      <div className="w-3/12 text-right"> {transaction.amount}</div>
      <div className="w-3/12 text-right"> {transaction.balance}</div>
    </div>
  );
};
