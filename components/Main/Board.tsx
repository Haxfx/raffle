import React, { ReactElement } from "react";
import { TabMenu } from "../Menu/TabMenu";

export function Board(): ReactElement {
  return (
    <>
      <TabMenu />
      <div className="flex justify-between">
        <span>Upcoming draw</span>
        <div>
          <span>Icon</span>
          <span>Blocks</span>
          <span>Blocks left to play</span>
        </div>
      </div>
    </>
  );
}
