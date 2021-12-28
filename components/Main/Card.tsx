import { ReactElement } from "react";
import { FaMoneyBillAlt, FaUsers } from "react-icons/fa";
import { IoTicketSharp } from "react-icons/io5";
import { MdCasino } from "react-icons/md";

interface ICard {
  title: string;
  value: string;
  currency?: string;
  symbol?: string;
}

export function Card({ title, value, currency, symbol }: ICard): ReactElement {
  const TagName = (props): ReactElement => {
    if (currency === "ada") return <span {...props}>{symbol}</span>;
    if (symbol === "users") return <FaUsers {...props} />;
    if (symbol === "raffles") return <MdCasino {...props} />;
    if (currency === "tickets") return <IoTicketSharp {...props} />;

    return <FaMoneyBillAlt {...props} />;
  };

  return (
    <div className="flex flex-col content-between bg-blue-backgroundLight p-4">
      <span className="uppercase text-xs text-purple-light font-semibold">
        {title}
      </span>
      <div className="flex justify-between items-center mt-2">
        <div className="text-2xl">
          <span className="text-orange-primary">{value}</span>
          <span
            className={`uppercase text-orange-primary text-opacity-40 ml-2 ${
              currency === `tickets` && `lowercase`
            }`}
          >
            {currency}
          </span>
        </div>
        <TagName className="w-6 h-6 text-purple-light items-center lg:block hidden" />
      </div>
    </div>
  );
}
