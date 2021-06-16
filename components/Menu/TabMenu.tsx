import React, { ReactElement } from "react";

export function TabMenu(): ReactElement {
  return (
    <div className="flex">
      <span>Transactions</span>
      <span>My Tickets</span>
      <span>Referral Program</span>
      <span>Operator Panel</span>
    </div>
  );
}
