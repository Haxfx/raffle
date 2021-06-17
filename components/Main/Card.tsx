import React, { ReactElement, FC } from "react";
import { FaMoneyBillAlt, FaEthereum } from "react-icons/fa";
import { IoTicketSharp } from "react-icons/io5";

interface ICard {
  title: string;
  value: string;
  currency: string;
}

export function Card({ title, value, currency }: ICard): ReactElement {
  const TagName = (props): ReactElement => {
    if (currency === "ada") return <span {...props}>A</span>;
    if (currency === "tickets") return <IoTicketSharp {...props} />;

    return <FaMoneyBillAlt {...props} />;
  };

  return (
    <div className="flex flex-col content-between bg-blue-backgroundLight p-4">
      <span className="uppercase text-xs text-purple-light font-semibold">
        {title}
      </span>
      <div className="flex justify-between items-center">
        <div className="text-2xl mt-2">
          <span className="text-orange-primary">{value}</span>
          <span
            className={`uppercase text-orange-primary text-opacity-40 ml-2 ${
              currency === `tickets` && `lowercase`
            }`}
          >
            {currency}
          </span>
        </div>
        <TagName className="w-6 h-6 text-purple-light items-center" />
      </div>
    </div>
  );
}
