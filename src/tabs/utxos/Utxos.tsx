import React from "react";
import { UtxoTable } from "./UtxoTable";
import { Button } from "../../components/buttons/Button";

const mockUtxoData = [
  {
    date: "10/34/52",
    output: "50943859430fsjklfs..:0",
    address: "asdbfbfsldjfsk3u324..",
    label: "the corn I got here",
    value: "1.345395837",
  },
  {
    date: "10/34/52",
    output: "50943859430fsjklfs..:0",
    address: "asdbfbfsldjfsk3u324..",
    label: "the corn I got here",
    value: "1.345395837",
  },
  {
    date: "10/34/52",
    output: "50943859430fsjklfs..:0",
    address: "asdbfbfsldjfsk3u324..",
    label: "the corn I got here",
    value: "1.345395837",
  },
  {
    date: "10/34/52",
    output: "50943859430fsjklfs..:0",
    address: "asdbfbfsldjfsk3u324..",
    label: "the corn I got here",
    value: "1.345395837",
  },
];
export const Utxos = () => {
  return (
    <div className="pl-10 pt-6 bg-gray-200 w-full h-full flex flex-col pr-10 pb-10">
      <div className="mb-6 flex flex-row full-w">
        <div className="flex flex-col w-6/12 mr-8">
          <p>Unspent Transaction Outputs</p>
          <div className="flex flex-row mt-4">
            <p className="w-[100px]">Balance</p>
            <p>5.434539857</p>
            <p className="ml-auto">$600,685</p>
          </div>
          <div className="flex flex-row mt-4">
            <p className="w-[100px]">Mempool</p>
            <p>0 BTC</p>
          </div>
          <div className="flex flex-row mt-4 items-center">
            <p className="w-[100px]">UTXOs</p>
            <p>145</p>
            <button
              onClick={() => {
                console.log("download utxos button clicked");
              }}
              className="ml-2 h-[15px] w-[15px] rounded-lg bg-gray-600"
            ></button>
          </div>
        </div>
        <div className="ml-auto h-[140px] w-6/12 border-2 border-gray-500">
          some graph of my UTXOs
        </div>
      </div>
      <UtxoTable utxoDetails={mockUtxoData} />
      <UtxoFooter />
    </div>
  );
};

const UtxoFooter = () => {
  return (
    <div className="ml-auto mt-auto flex flex-row">
      <Button onClick={() => console.log("clear button clicked")}>clear</Button>
      <Button
        className="ml-4"
        onClick={() => console.log("send button clicked")}
      >
        send selected(1.45454354 BTC)
      </Button>
    </div>
  );
};
