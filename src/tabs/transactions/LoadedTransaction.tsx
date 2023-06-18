import React from "react";

interface Transaction {
  date: string;
  status: string;
}

interface LoadedTransactionProps {
  transactions: Transaction[];
}
export const LoadedTransactions = ({
  transactions,
}: LoadedTransactionProps) => {
  const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
    return (
      <div className="flex flex-row text-gray-500">
        <p>{transaction.date}</p>
        <p className="ml-4">{transaction.status}</p>
      </div>
    );
  };
  const createTransactions = () => {
    return transactions.map((transaction) => {
      return <TransactionItem transaction={transaction} />;
    });
  };
  return <div className="flex flex-col">{createTransactions()}</div>;
};
