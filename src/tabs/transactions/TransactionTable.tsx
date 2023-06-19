import React from "react";
import { HeaderLabel, TableHeader } from "../../components/table/TableHeader";
import { TransactionDetails } from "../../types/TransactionTypes";
import { Table } from "../../components/table/Table";
import { TransactionTableRow } from "./TransactionRow";
interface TransactionTableProps {
  transactions: TransactionDetails[];
}
export const TransactionTable = ({ transactions }: TransactionTableProps) => {
  const createRows = () => {
    return transactions.map((transaction) => {
      return <TransactionTableRow transaction={transaction} />;
    });
  };

  return (
    <Table>
      <>
        <TableHeader>
          <>
            <HeaderLabel title={"Date"} />
            <HeaderLabel title={"Label"} />
            <HeaderLabel title={"Value"} />
            <HeaderLabel title={"Balance"} />
          </>
        </TableHeader>
        {createRows()}
      </>
    </Table>
  );
};
