import { ReactElement } from 'react';
import { GiShare } from 'react-icons/gi';

import { TICKETS } from '../../constants/context';
import { IWinners } from '../../interfaces/Board';
import { truncate } from '../../util/Truncate';

interface ITicket {
  winner: string;
  nr: number;
  tx?: string;
  prize: number;
  jackpot: string;
}

interface ITickets {
  fetchedData: IWinners[];
  jackpot: string;
}

const makeTwitterLink = (prize: number, jackpot: string) =>
  `http://twitter.com/share?text=I just won ${prize} $ada by participating in @EASY1Raffles %0a%0aDo you want to participate too? Delegate to the Cardano Stake Pool EASY1 and join open raffles here: https://raffles.easystaking.online/ %0a%0aThe current jackpot is ${jackpot} $ada %0a%0aJoin https://t.me/EASY1StakePoolRaffles to stay always updated.`;

const Ticket = ({ winner, nr, tx, prize, jackpot }: ITicket) => (
  <div className="flex relative flex-col w-full border-solid border-2 border-purple-light border-opacity-30 p-3 h-28 items-between justify-between">
    <div className="justify-self-center text-purple-light">
      <span className="lg:inline hidden">{TICKETS.NAME}</span> <span>#{nr}</span>
    </div>
    <div className="justify-self-center text-white flex flex-col">
      <span>
        {prize} {TICKETS.WINNER}
      </span>
      <a
        href={`https://cardanoscan.io/transaction/${tx}`}
        target="_blank"
        className="text-blue-primary"
        rel="noreferrer"
      >
        {winner.length > 13 ? `${truncate(winner, 13)}...` : winner}
      </a>
    </div>
    <a
      target="_blank"
      href={makeTwitterLink(prize, jackpot)}
      className="absolute mr-2 right-0 text-white-primary hover:text-blue-primary"
      rel="noreferrer"
    >
      <GiShare className="h-6 w-6 cursor-pointer" />
    </a>
  </div>
);

export const Tickets = ({ fetchedData, jackpot }: ITickets): ReactElement => (
  <div className="w-full grid lg:grid-cols-4 grid-cols-2 gap-5 p-5">
    {fetchedData.slice(0, 4).map((t, k) => (
      <Ticket
        key={k}
        winner={t.user_friendly_name ? t.user_friendly_name : t.stake_id}
        nr={t.epoch}
        prize={t.winning_amount}
        tx={t.tx_id}
        jackpot={jackpot}
      />
    ))}
  </div>
);
