import React from "react";
import { LoadedTransactions } from "./LoadedTransaction";

const mockTransactions = [
  { date: "11/24/2011", status: "Transaction loading for [../2/97]" },
  { date: "11/24/2010", status: "Transaction loading for [../2/91]" },
];

export const TransactionLoader = () => {
  return (
    <div className="p-1 bg-white border-gray-600 border-4">
      <p className="text-gray-500">Wallet loading history for wallet wallet1</p>
      <LoadedTransactions transactions={mockTransactions} />
    </div>
  );
};
