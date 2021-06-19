import React, { ReactElement } from "react";

import { TabMenu } from "../Menu/TabMenu";
import { Epoch, Tickets } from "../Board";

export function Board(): ReactElement {
  return (
    <div className="bg-blue-backgroundLight">
      <TabMenu />
      <Epoch />
      <Tickets />
      <div className="p-5">
        <span>Open Raffles</span>
        <div></div>
      </div>
    </div>
  );
}
