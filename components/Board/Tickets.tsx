import React from "react";

export function Tickets() {
  return (
    <div className="w-full grid grid-cols-4 gap-5 p-5">
      <div className="flex flex-col w-full border-solid border-2 border-purple-light border-opacity-30 p-3 h-28 items-between justify-between">
        <div className="justify-self-center p-2 text-purple-light">
          Ticket #1
        </div>
        <div className="justify-self-center p-2 text-white">
          Winner ada12345678910
        </div>
      </div>
      <div className="flex flex-col w-full border-solid border-2 border-purple-light border-opacity-30 p-3 h-28 items-between justify-between">
        <div className="justify-self-center p-2 text-purple-light">
          Ticket #2
        </div>
        <div className="justify-self-center p-2 text-white">
          Winner ada12345678910
        </div>
      </div>
      <div className="flex flex-col w-full border-solid border-2 border-purple-light border-opacity-30 p-3 h-28 items-between justify-between">
        <div className="justify-self-center p-2 text-purple-light">
          Ticket #3
        </div>
        <div className="justify-self-center p-2 text-white">
          Winner ada12345678910
        </div>
      </div>
      <div className="flex flex-col w-full border-solid border-2 border-purple-light border-opacity-30 p-3 h-28 items-between justify-between">
        <div className="justify-self-center p-2 text-purple-light">
          Ticket #4
        </div>
        <div className="justify-self-center p-2 text-white">
          Winner ada12345678910
        </div>
      </div>
    </div>
  );
}
