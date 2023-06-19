import React from "react";
import { Table } from "../../components/table/Table";
import { HeaderLabel, TableHeader } from "../../components/table/TableHeader";
import { UtxoDetails } from "../../types/TransactionTypes";
import { UtxoTableRow } from "./UtxoTableRow";

interface UtxotableProps {
  utxoDetails: UtxoDetails[];
}

export const UtxoTable = ({ utxoDetails }: UtxotableProps) => {
  const createRows = () => {
    return utxoDetails.map((utxoDetail) => {
      return <UtxoTableRow utxo={utxoDetail} />;
    });
  };
  return (
    <Table>
      <>
        <TableHeader>
          <>
            <HeaderLabel title={"Date"} />
            <HeaderLabel title={"Output"} />
            <HeaderLabel title={"Address"} />
            <HeaderLabel title={"Label"} />
            <HeaderLabel title={"Value"} />
          </>
        </TableHeader>
        {createRows()}
      </>
    </Table>
  );
};
