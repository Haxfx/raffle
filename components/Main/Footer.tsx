import React from "react";
import { FaLink, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";

export function Footer() {
  return (
    <div className="w-full bg-purple-dark border-t border-opacity-80 border-purple-medium justify-center sticky bottom-0">
      <div className="grid grid-cols-footer w-5/6 p-3 py-5 m-auto border-b border-opacity-80 border-purple-medium">
        <span className="justify-self-start self-center uppercase font-semibold mt-1">
          EASY1 Raffles
        </span>
        <div className="flex w-full justify-self-center justify-between text-sm text-purple-light items-center">
          <a href="#">Home</a>
          <a href="#">Results</a>
          <a href="#">Transactions</a>
          <a href="#">About Us</a>
          <a href="#">Terms of use</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="flex justify-self-end justify-between">
          <a href="#">
            <VscGithubAlt className="h-8 w-8 bg-purple-medium text-purple-light p-1.5 rounded-full ml-2 hover:bg-purple-primary hover:text-white" />
          </a>
          <a href="https://t.me/EASY1StakePoolRaffles" target="_blank">
            <FaTelegramPlane className="h-8 w-8 bg-purple-medium text-purple-light p-2 rounded-full ml-2 hover:bg-purple-primary hover:text-white" />
          </a>
          <a href="https://twitter.com/CryptoJoe101" target="_blank">
            <FaTwitter className="h-8 w-8 bg-purple-medium text-purple-light p-2 rounded-full ml-2 hover:bg-purple-primary hover:text-white" />
          </a>
          <a
            href="https://pooltool.io/pool/20df8645abddf09403ba2656cda7da2cd163973a5e439c6e43dcbea9/epochs"
            target="_blank"
          >
            <FaLink className="h-8 w-8 bg-purple-medium text-purple-light p-2 rounded-full ml-2 hover:bg-purple-primary hover:text-white" />
          </a>
        </div>
      </div>
      <div className="grid grid-cols-3 justify-items-stretch justify-between w-5/6 p-3 m-auto text-xs text-purple-light">
        <span>© Easy1Raffle, 2021</span>
        <a
          href="https://pooltool.io/pool/20df8645abddf09403ba2656cda7da2cd163973a5e439c6e43dcbea9/epochs"
          target="_blank"
          className="justify-self-center font-bold"
        >
          EASY1 Stakepool
        </a>
        <span className="justify-self-end">Build by Gio & Seb</span>
      </div>
    </div>
  );
}
