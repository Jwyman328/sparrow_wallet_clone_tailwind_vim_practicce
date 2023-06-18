import React from "react";

import { Table } from "../../components/table/Table";
import { TransactionLoader } from "./TransactionLoader";
const mockTransactionDetails = [
  {
    date: "2019-05-32",
    label: "This is a label for the transaction",
    amount: ".1234567898",
    balance: "54.564323234",
  },
  {
    date: "2019-05-32",
    label: "This is a label for the transaction",
    amount: ".1234567898",
    balance: "54.564323234",
  },
  {
    date: "2019-05-32",
    label: "This is a label for the transaction",
    amount: ".1234567898",
    balance: "54.564323234",
  },
];

const ProgressionGraph = () => {
  return (
    <div className="w-5/12 ml-8 border-4 border-black">
      <p>Some graph of total btc amount</p>
    </div>
  );
};

export const Transactions = () => {
  return (
    <div className="pt-6 bg-gray-200 pl-8 w-10/12">
      <div className="bg-gray-200">
        <h3 className="mb-4"> Transactions</h3>
        <div className="flex flex-row w-8/12">
          <div className="flex flex-col w-7/12 ">
            <div>
              <div className="mb-4 flex flex-row">
                <p className="mr-10">balance</p>
                <p>24.234543343 BTC</p>
                <p className="ml-auto">$150,567</p>
              </div>
              <div className="flex mb-4 flex-row">
                <p className="mr-10">Mempool:</p>
                <p>0 BTC</p>
              </div>
              <div className="mb-4 flex flex-row">
                <p className="mr-10">Transactions:</p>
                <p>509</p>
              </div>
            </div>
          </div>
          <ProgressionGraph />
        </div>
      </div>
      <div>Transaction table</div>
      <Table transactions={mockTransactionDetails} />
      <TransactionLoader />
    </div>
  );
};
