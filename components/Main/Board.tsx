import React, { ReactElement } from "react";
import { TabMenu } from "../Menu/TabMenu";

export function Board(): ReactElement {
  return (
    <div className="bg-blue-backgroundLight">
      <TabMenu />
      <div className="flex justify-between p-5 text-white">
        <span>Upcoming draw</span>
        <div>
          <span>Icon</span>
          <span>Blocks</span>
          <span>Blocks left to play</span>
        </div>
      </div>
    </div>
  );
}
