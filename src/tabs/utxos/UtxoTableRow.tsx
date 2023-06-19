import React from "react";
import { UtxoDetails } from "../../types/TransactionTypes";

interface TableRowProps {
  utxo: UtxoDetails;
}
export const UtxoTableRow = ({ utxo }: TableRowProps) => {
  return (
    <div className="p-1 flex flex-row w-full">
      <div className="w-1/5">{utxo.date}</div>
      <div className="w-1/5"> {utxo.output}</div>
      <div className="w-1/5"> {utxo.address}</div>
      <div className="w-1/5"> {utxo.label}</div>
      <div className="w-1/5 text-right"> {utxo.value}</div>
    </div>
  );
};
