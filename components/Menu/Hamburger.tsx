import React from "react";

import { MenuAlt4Icon } from "@heroicons/react/solid";

export function HamburgerMenu() {
  return (
    <div className="flex items-center">
      <MenuAlt4Icon className="w-8 h-8" />
      <span className="uppercase ml-2 font-semibold">
        EASY1 Stake Pool Raffles
      </span>
    </div>
  );
}
