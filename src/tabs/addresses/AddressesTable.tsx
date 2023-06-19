import React from "react";
import { Table } from "../../components/table/Table";
import { HeaderLabel, TableHeader } from "../../components/table/TableHeader";
import { AddressDetails } from "../../types/TransactionTypes";
import { AdressesTableRow } from "./AddressesTableRow";

interface AddressesTableProps {
  addresses: AddressDetails[];
}

export const AddressesTable = ({ addresses }: AddressesTableProps) => {
  const createRows = () => {
    return addresses.map((addressDetail) => {
      return <AdressesTableRow address={addressDetail} />;
    });
  };
  return (
    <Table>
      <>
        <TableHeader>
          <>
            <HeaderLabel className="!w-1/2" title={"Address/Outputs"} />
            <HeaderLabel className="!w-1/4" title={"Label"} />
            <HeaderLabel className="!w-1/4" title={"Value"} />
          </>
        </TableHeader>
        {createRows()}
      </>
    </Table>
  );
};
