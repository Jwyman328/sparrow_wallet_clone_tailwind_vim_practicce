import React from "react";
import { DropDown } from "../../components/selects/DropDown";
import { Button } from "../../components/buttons/Button";
import { Input } from "../../components/inputs/Input";

export const Settings = () => {
  return (
    <div className="pl-10 pt-6 bg-gray-200 w-full h-full flex flex-col pr-10 pb-10">
      <div>
        <p>Settings</p>
        <div className="flex flex-row">
          <p className="w-[100px] mr-8">Policy Type:</p>
          <DropDown
            name="policyType"
            options={[
              { name: "Single Signature", value: "single" },
              { name: "Multi Signature", value: "multi" },
            ]}
          />
        </div>
        <div className="flex flex-row mt-4 ">
          <p className="w-[100px] mr-8">Script Type:</p>
          <DropDown
            name="scriptType"
            options={[
              { name: "Legacy (P2PKH)", value: "P2PKH" },
              { name: "Nested Segwit (P2SH-P2WPKH)", value: "P2SH-P2WPKH" },
              { name: "Native Segwit(P2WPKH)", value: "P2WPKH" },
              { name: "Taproot", value: "P2TR" },
            ]}
          />
        </div>
      </div>
      <div>
        <p className="mt-4 mb-2">Script Policy</p>
        <div className="flex flex-row">
          <p className="w-[100px] mr-8">Descriptor</p>
          <div className="mr-1 h-[50px] bg-white border-gray-400 border-2 flex flex-row">
            <p>wpkh(SomeDeviceName)</p>
          </div>

          <Button
            onClick={() => {
              console.log("qr open clicked");
            }}
          >
            qr
          </Button>

          <Button
            onClick={() => {
              console.log("edit clicked");
            }}
            className="ml-1"
          >
            edit
          </Button>
        </div>
        <div>
          <p className="mt-8 mb-4">Keystores</p>
          <div className="border-2 border-gray-500 p-4">
            <p>Title of Device</p>
            <div className="flex flex-row mt-6">
              <p className="mr-8 w-[100px]">Type: </p>
              <p>Connected hardware wallet (Device name)</p>
              <Button
                className="ml-1 ml-auto"
                onClick={() => console.log("replace button hit")}
              >
                Replace...
              </Button>
            </div>
            <div className="flex flex-row mt-6">
              <p className="mr-8 w-[100px]">Label:</p>
              <Input />
            </div>

            <div className="flex flex-row mt-6">
              <p className="mr-8 w-[100px]">Master fingerprint</p>
              <Input />
            </div>

            <div className="flex flex-row mt-6">
              <p className="mr-8 w-[100px]">Derivation</p>
              <Input />
            </div>

            <div className="flex flex-row mt-6">
              <p className="mr-8 w-[100px]">xpub / zpub</p>
              <Input />
              <div className="flex flex-col ml-1">
                <Button onClick={() => console.log("qr opened")}>qr</Button>

                <Button onClick={() => console.log("zpub  opened")}>
                  zpub
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SettingsFooter />
    </div>
  );
};

const SettingsFooter = () => {
  return (
    <div className="mt-auto flex flex-row w-full justify-between">
      <div className="flex flex-row">
        <Button
          className="mr-4"
          onClick={() => {
            console.log("export clicked");
          }}
        >
          Export
        </Button>
        <Button
          onClick={() => {
            console.log("export clicked");
          }}
        >
          Add account
        </Button>
      </div>
      <div>
        <Button
          className="mr-4"
          onClick={() => {
            console.log("advanced clicked");
          }}
        >
          Advanced
        </Button>
        <Button
          className="mr-4 opacity-20"
          onClick={() => {
            console.log("revert clicked");
          }}
        >
          Revert
        </Button>
        <Button
          className="bg-blue-300 opacity-20"
          onClick={() => {
            console.log("Apply clicked");
          }}
        >
          Apply
        </Button>
      </div>
    </div>
  );
};
