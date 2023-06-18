import React, { useState } from "react";
import { NavBar } from "./components/nav/NavBar";
import { Send } from "./tabs/send/Send";
import { Transactions } from "./tabs/transactions/Transactions";
import { NetworkFooter } from "./components/footers/NetworkFooter";
import { Receive } from "./tabs/receive/Receive";
import { Settings } from "./tabs/settings/Settings";

enum Tabs {
  TRANSACTIONS,
  SEND,
  RECIEVE,
  ADDRESSES,
  UTXOS,
  SETTINGS,
}

export default function App() {
  const [currentTab, setCurrentTab] = useState<Tabs>(Tabs.SETTINGS);
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
      title: "Receive",
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
    } else if (currentTab === Tabs.RECIEVE) {
      return <Receive />;
    } else if (currentTab === Tabs.SETTINGS) {
      return <Settings />;
    }
  };
  return (
    <div className="h-screen w-screen pb-[40px]">
      <div className="flex flex-row h-full w-screen text-[16px]">
        <NavBar navBlocks={navBlocks} />
        {renderTab()}
      </div>
      <NetworkFooter />
    </div>
  );
}
