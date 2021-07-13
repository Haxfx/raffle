import { ReactElement } from 'react';
import { GiShare } from 'react-icons/gi';

import { TICKETS } from '../../constants/context';
import { truncate } from '../../util/Truncate';

interface ITicket {
  winner: string;
  nr: number;
  tx?: string;
}

const Ticket = ({ winner, nr, tx }: ITicket) => (
  <div className="flex relative flex-col w-full border-solid border-2 border-purple-light border-opacity-30 p-3 h-28 items-between justify-between">
    <div className="justify-self-center text-purple-light">
      <span className="lg:inline hidden">{TICKETS.NAME}</span> <span>#{nr}</span>
    </div>
    <div className="justify-self-center text-white flex flex-col">
      <span>{TICKETS.WINNER}</span>
      <a
        href={`https://cardanoscan.io/transaction/${tx}`}
        target="_blank"
        className="text-blue-primary"
        rel="noreferrer"
      >
        {truncate(winner, 13)}...
      </a>
    </div>
    <a
      type="button"
      target="_blank"
      href="http://twitter.com/share?text=I just won on EASY1 Raffles! Also want to participate? Delegate to Cardano Stakepool: EASY1.&url=https://raffles.easystaking.online/"
      className="absolute mr-2 right-0 text-white-primary hover:text-blue-primary"
      rel="noreferrer"
    >
      <GiShare className="h-6 w-6 cursor-pointer" />
    </a>
  </div>
);

export const Tickets = ({ fetchedData }): ReactElement => (
  <div className="w-full grid lg:grid-cols-4 grid-cols-2 gap-5 p-5">
    {fetchedData.slice(0, 4).map((t, k) => (
      <Ticket key={k} winner={t.stake_id} nr={t.epoch} tx={t.tx_id} />
    ))}
  </div>
);
