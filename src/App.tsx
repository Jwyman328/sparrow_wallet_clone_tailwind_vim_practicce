import React, { useState } from "react";
import { NavBar } from "./components/nav/NavBar";
import { Send } from "./tabs/send/Send";
import { Transactions } from "./tabs/transactions/Transactions";

enum Tabs {
  TRANSACTIONS,
  SEND,
  RECIEVE,
  ADDRESSES,
  UTXOS,
  SETTINGS,
}

export default function App() {
  const [currentTab, setCurrentTab] = useState<Tabs>(Tabs.SEND);
  const navBlocks = [
    {
      title: "Transactions",
      onClick: () => {
        setCurrentTab(Tabs.TRANSACTIONS);
      },
    },
    {
      title: "Send",
      onClick: () => {
        setCurrentTab(Tabs.SEND);
      },
    },
    {
      title: "Recieve",
      onClick: () => {
        setCurrentTab(Tabs.RECIEVE);
      },
    },

    {
      title: "Addesses",
      onClick: () => {
        setCurrentTab(Tabs.ADDRESSES);
      },
    },
    {
      title: "UTXOs",
      onClick: () => {
        setCurrentTab(Tabs.UTXOS);
      },
    },
    {
      title: "Settings",
      onClick: () => {
        setCurrentTab(Tabs.SETTINGS);
      },
    },
  ];

  const renderTab = () => {
    if (currentTab === Tabs.TRANSACTIONS) {
      return <Transactions />;
    } else if (currentTab === Tabs.SEND) {
      return <Send />;
    }
  };
  return (
    <div className="flex flex-row h-screen w-screen text-[16px]">
      <NavBar navBlocks={navBlocks} />
      {renderTab()}
    </div>
  );
}
