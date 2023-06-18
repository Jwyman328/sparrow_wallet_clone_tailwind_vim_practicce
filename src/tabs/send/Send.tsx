import React from "react";
import { Button } from "../../components/buttons/Button";
import { DropDown } from "../../components/selects/DropDown";
import { Input } from "../../components/inputs/Input";

const btcSatsOptions = [
  { name: "btc", value: "btc" },
  { name: "sats", value: "sats" },
];
export const Send = () => {
  const setAmountMax = () => {
    console.log("hit max button");
  };
  const openCamera = () => {
    console.log("hit open camera");
  };
  const handleAdd = () => {
    console.log("hit add not really sure what this button does though");
  };
  return (
    <div className="pl-10 pt-6 bg-gray-200 w-full flex flex-col">
      <div className="w-10/12">
        <p className={"mb-5"}>Send</p>
        <div className="flex flex-row">
          <p className="mr-6">Pay to:</p>
          <Input className="w-2/6" />
          <Button className="ml-2 mr-2" onClick={openCamera}>
            camera
          </Button>
          <Button onClick={handleAdd}>Add</Button>
        </div>

        <div className="flex flex-row mt-4">
          <p className="mr-6">Label:</p>
          <Input className="w-2/6" />
        </div>
        <div className="flex flex-row mt-4">
          <p className="mr-6">Amount</p>
          <Input className="w-1/6" />
          <DropDown
            className="ml-1"
            options={btcSatsOptions}
            name="amount type"
          />
          <Button className="ml-28" onClick={setAmountMax}>
            Max
          </Button>
        </div>
        <FeeManager />
      </div>
      <SendFooter />
    </div>
  );
};

const FeeManagerHeader = () => {
  return (
    <div className="mt-6 flex flex-row justify-between items-center">
      <p className="text-center mb-3">Fee</p>
      <div>
        <Button
          onClick={() => {
            console.log("target block clicked");
          }}
          className=""
        >
          Target blocks
        </Button>
        <Button
          onClick={() => {
            console.log("mempool size button clicked");
          }}
          className=""
        >
          Mempool size
        </Button>
      </div>
    </div>
  );
};
const FeeManager = () => {
  return (
    <div>
      <FeeManagerHeader />
      <div className="flex flex-row">
        <div className="w-6/12">
          <div className="flex flex-row ">
            <p className="mr-6">Blocks</p>
            <div className="w-full h-4 bg-red-200">slider</div>
          </div>
          <div className="flex mt-3 flex-row">
            <p className="mr-6">Rate</p>
            <div className="flex flex-row justify-between w-full">
              <p>28.78 sats/vB</p>
              <div className="flex flex-row items-">
                <p>Medium priority</p>
                <div className="ml-2 bg-yellow-400 h-4 w-4 rounded-xl"></div>
              </div>
            </div>
          </div>
          <div className="mt-3 flex flex-row items-center">
            <p className="mr-6">Fee</p>
            <Input className="w-30" />
            <DropDown
              className="ml-1"
              options={btcSatsOptions}
              name="amount type"
            />
          </div>
        </div>
        <div className="ml-12 w-6/12 bg-red-100 h-[300px]">this is chart</div>
      </div>
    </div>
  );
};

const SendFooter = () => {
  return (
    <div className="mb-10 mt-auto flex flex-row w-full items-center">
      <p className="mr-8">Optimze:</p>
      <div className="flex flex-row justify-center items-center">
        <Button
          onClick={() => console.log("efficiency button clicked")}
          className=""
        >
          Efficiency
        </Button>

        <Button
          onClick={() => console.log("privacy button clicked")}
          className=""
        >
          Privacy
        </Button>
        <div className="ml-2 h-4 w-4 rounded-lg bg-gray-600"></div>
      </div>
      <div className="ml-auto mr-10">
        <Button onClick={() => console.log("clear button clicked")}>
          clear
        </Button>
        <Button
          className={"!bg-blue-200 ml-4"}
          onClick={() => console.log("create transaction button clicked")}
        >
          Create Transaction
        </Button>
      </div>
    </div>
  );
};
