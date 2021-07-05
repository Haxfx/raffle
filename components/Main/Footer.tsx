import { ReactElement } from 'react';
import { FaLink, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { VscGithubAlt } from 'react-icons/vsc';

import { FOOTER } from '../../constants/context';

export function Footer(): ReactElement {
  return (
    <div className="w-full bg-purple-dark border-t border-opacity-80 border-purple-medium justify-center lg:sticky static bottom-0">
      <div className="lg:grid lg:grid-cols-footer flex flex-col w-5/6 p-3 py-5 m-auto border-b border-opacity-80 border-purple-medium">
        <span className="justify-self-start self-center uppercase font-semibold mt-1 lg:block hidden">
          {FOOTER.TITLE}
        </span>
        <div className="lg:flex lg:flex-row hidden grid-cols-2 gap-2 w-full lg:justify-self-center justify-between text-sm text-purple-light lg:items-center items-start">
          {FOOTER.MENUITEMS.map((ITEM, key) => (
            <a key={key} href="/" className="hover:text-purple-primary my-1 justify-self-center">
              {ITEM}
            </a>
          ))}
        </div>
        <div className="flex lg:justify-self-end justify-between lg:m-0 mt-2 lg:w-auto w-5/6 self-center">
          <a href="/">
            <VscGithubAlt className="w-10 h-10 bg-purple-medium text-purple-light p-1.5 rounded-full ml-2 hover:bg-purple-primary hover:text-white" />
          </a>
          <a href="https://t.me/EASY1StakePoolRaffles" target="_blank" rel="noreferrer">
            <FaTelegramPlane className="w-10 h-10 bg-purple-medium text-purple-light p-2 rounded-full ml-2 hover:bg-purple-primary hover:text-white" />
          </a>
          <a href="https://twitter.com/CryptoJoe101" target="_blank" rel="noreferrer">
            <FaTwitter className="w-10 h-10 bg-purple-medium text-purple-light p-2 rounded-full ml-2 hover:bg-purple-primary hover:text-white" />
          </a>
          <a
            href="https://pooltool.io/pool/20df8645abddf09403ba2656cda7da2cd163973a5e439c6e43dcbea9/epochs"
            target="_blank"
            rel="noreferrer"
          >
            <FaLink className="w-10 h-10 bg-purple-medium text-purple-light p-2 rounded-full ml-2 hover:bg-purple-primary hover:text-white" />
          </a>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-2 justify-items-stretch justify-between w-5/6 p-3 m-auto text-xs text-purple-light">
        <span className="hover:text-blue-primary cursor-pointer">{FOOTER.COPYRIGHT}</span>
        <a
          href="https://pooltool.io/pool/20df8645abddf09403ba2656cda7da2cd163973a5e439c6e43dcbea9/epochs"
          target="_blank"
          className="justify-self-center font-bold hover:text-blue-primary cursor-pointer lg:block hidden"
          rel="noreferrer"
        >
          {FOOTER.LINK}
        </a>
        <span className="justify-self-end hover:text-blue-primary cursor-pointer">
          {FOOTER.CREDITS}
        </span>
      </div>
    </div>
  );
}
