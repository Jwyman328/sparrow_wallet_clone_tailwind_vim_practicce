import React from "react";
import { TransactionDetails } from "../../types/TransactionTypes";

interface TransactionTableRowProps {
  transaction: TransactionDetails;
}
export const TransactionTableRow = ({
  transaction,
}: TransactionTableRowProps) => {
  return (
    <div className="p-1 flex flex-row w-full">
      <div className="w-3/12">{transaction.date}</div>
      <div className="w-3/12"> {transaction.label}</div>
      <div className="w-3/12 text-right"> {transaction.amount}</div>
      <div className="w-3/12 text-right"> {transaction.balance}</div>
    </div>
  );
};
