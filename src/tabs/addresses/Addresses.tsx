import React from "react";
import { DownloadButton } from "../../components/buttons/DownloadButton";
import { AddressesTable } from "./AddressesTable";

const mockReacieveAddressesData = [
  {
    addressOutputs: "bc1lfkajsdfkleoirufkdjls",
    label: "my first transaction",
    value: "1.234564385",
  },
  {
    addressOutputs: "bc1lfkajsdfkleoirufkdjls",
    label: "my second transaction",
    value: "1.234564385",
  },
  {
    addressOutputs: "bc1lfkajsdfkleoirufkdjls",
    label: "my third transaction",
    value: "1.234564385",
  },
];

const mockChangeAddressesData = [
  {
    addressOutputs: "bc1lfkajsdfkleoirufkdjls",
    label: "my first transaction change address",
    value: "1.234564385",
  },
  {
    addressOutputs: "bc1lfkajsdfkleoirufkdjls change address",
    label: "my second transaction",
    value: "1.234564385",
  },
  {
    addressOutputs: "bc1lfkajsdfkleoirufkdjls change address",
    label: "my third transaction",
    value: "1.234564385",
  },
];
export const Addresses = () => {
  return (
    <div className="pl-10 pt-6 bg-gray-200 w-full h-full flex flex-col ">
      <AddressTitleType type="Recieve address" />
      <AddressesTable addresses={mockReacieveAddressesData} />
      <AddressTitleType type="Change address" className="mt-4" />
      <AddressesTable addresses={mockChangeAddressesData} />
    </div>
  );
};
interface AddressTitleTypeProps {
  type: string;
  className?: string;
}
const AddressTitleType = ({ type, className }: AddressTitleTypeProps) => {
  return (
    <div className={`flex flex-row items-center mb-4 ${className}`}>
      <p className="mr-2">{type}</p>
      <DownloadButton />
    </div>
  );
};
