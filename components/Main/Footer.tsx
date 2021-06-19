import React from "react";
import { FaLink, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";

export function Footer() {
  return (
    <div className="w-full bg-purple-dark border-t border-opacity-80 border-purple-medium justify-center absolute bottom-0">
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
          <a href="#">
            <FaTelegramPlane className="h-8 w-8 bg-purple-medium text-purple-light p-2 rounded-full ml-2 hover:bg-purple-primary hover:text-white" />
          </a>
          <a href="#">
            <FaTwitter className="h-8 w-8 bg-purple-medium text-purple-light p-2 rounded-full ml-2 hover:bg-purple-primary hover:text-white" />
          </a>
          <a href="#">
            <FaLink className="h-8 w-8 bg-purple-medium text-purple-light p-2 rounded-full ml-2 hover:bg-purple-primary hover:text-white" />
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-items-stretch w-5/6 p-3 m-auto text-xs text-purple-light">
        <span>© Easy1Raffle, 2021</span>
        <span className="justify-self-end">Build by Gio & Seb</span>
      </div>
    </div>
  );
}
