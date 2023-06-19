import React from "react";
import { AddressDetails } from "../../types/TransactionTypes";

interface AddressTableRowProps {
  address: AddressDetails;
}

export const AdressesTableRow = ({ address }: AddressTableRowProps) => {
  return (
    <div className="p-1 flex flex-row w-full">
      <div className="w-1/2">{address.addressOutputs}</div>
      <div className="w-1/4">{address.label}</div>
      <div className="w-1/4 text-end">{address.value}</div>
    </div>
  );
};
