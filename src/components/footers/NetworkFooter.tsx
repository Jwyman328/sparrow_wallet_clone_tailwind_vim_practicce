import React from "react";
import { Switch } from "../buttons/Switch";

export const NetworkFooter = () => {
  return (
    <div className="h-[40px] w-full bottom-0 fixed  bg-gray-100 flex flex-row items-center">
      <p className="ml-auto">Sparrow 1.7.5</p>
      <Switch
        onClick={() => {
          console.log("onSwitch clicked");
        }}
        className="ml-4"
      />
    </div>
  );
};
