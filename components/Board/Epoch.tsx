import React from "react";
import { GrStackOverflow } from "react-icons/gr";

export function Epoch() {
  const currentEpoch: number = 272;

  const epochArray = currentEpoch.toString().split("");

  return (
    <div className="flex justify-between px-5 pt-5 text-white">
      <span>Last draws</span>
      <div className="flex items-center justify-center">
        <GrStackOverflow className="h-6 w-6" />
        <span className="mx-2">Epoch</span>
        <div className="flex">
          {epochArray.map((char) => (
            <div className="bg-purple-primary px-2 py-1 ml-2">{char}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
