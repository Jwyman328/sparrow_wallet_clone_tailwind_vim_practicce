import React from "react";
import { Table } from "../../components/table/Table";

const ProgressionGraph = () => {
  return (
    <div className="w-5/12 ml-8 border-4 border-black">
      <p>Some graph of total btc amount</p>
    </div>
  );
};

export const Transactions = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <h3 className="mb-4"> Transactions</h3>
        <div className="flex flex-row w-screen">
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
      {/* <div>Transaction table</div>
      <Table /> */}
    </div>
  );
};
