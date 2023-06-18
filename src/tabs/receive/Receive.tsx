import React from "react";
import { Input } from "../../components/inputs/Input";
import { Button } from "../../components/buttons/Button";

export const Receive = () => {
  return (
    <div className="pl-10 pt-6 bg-gray-200 w-full h-full flex flex-col ">
      <div>
        <p className="mb-6">Receive</p>
        <div className="flex flex-row">
          <div>
            <div className="flex flex-row">
              <p className="w-[100px] mr-10">Address:</p>
              <Input className="w-[400px]" />
            </div>

            <div className="flex flex-row mt-6">
              <p className="mr-10 w-[100px]">Label:</p>
              <Input className="w-[400px]" />
            </div>
            <div className="flex flex-row mt-6">
              <p className="mr-10 w-[100px]">Destination</p>
              <p>m/52/0'/0'/0/46</p>
            </div>
            <div className="flex flex-row mt-6">
              <p className="mr-10 w-[100px]">Last used</p>
              <div className="flex flex-row items-center justify">
                <div className="w-3 h-3 bg-gray-600 rounded-lg mr-2"></div>
                <p>unknown</p>
              </div>
            </div>
          </div>

          <div className="ml-6 bottom-[50px] relative h-[150px] w-[150px] bg-white border-gray-500 border-2">
            image of qr code
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-300 mt-10 mb-10"></div>
      <ScriptDetails />
      <RecieveFooter />
    </div>
  );
};

const ScriptDetails = () => {
  return (
    <div className="w-8/12">
      <div className="flex flex-col">
        <p className="mb-6">Required ScriptPubKey</p>
        <div className="flex flex-row">
          <p className="w-[100px] mr-10">Script:</p>
          <div className="h-10 w-full border-2 border-gray-500">
            <p>OP_0 {"<wpkh>"}</p>
          </div>
        </div>
      </div>
      <div>
        <p className="mt-10 mb-6">Output Descriptor</p>
        <div className="flex flex-row">
          <p className="w-[100px] mr-10">Descriptor:</p>
          <div className="h-14 w-full border-2 border-gray-500">
            <p>wpkh(8901832904123flkfsdjfjlkdsfjds32983492)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const RecieveFooter = () => {
  return (
    <div className="mb-6 mt-auto flex flex-row">
      <Button
        onClick={() => {
          console.log("click display address button");
        }}
        className="ml-auto"
      >
        Display Address
      </Button>

      <Button
        onClick={() => {
          console.log("click display address button");
        }}
        className="!bg-blue-200 ml-4 mr-10"
      >
        Get Next Address
      </Button>
    </div>
  );
};
