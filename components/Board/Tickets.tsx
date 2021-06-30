import { ReactElement } from 'react';

import { TICKETS } from '../../constants/context';

const tickets = [
  {
    nr: 1,
    winner: 'Leo',
    hash: '62534kjh567okjhgb2ohjb2143i7rhq3pobp9ear8ygh',
    amount: 100,
  },
  {
    nr: 2,
    winner: 'Adahodler',
    hash: 'as0d9f80as9d8fasuv09428u=02H4VV02J4H41-J14J0N',
    amount: 100,
  },
  {
    nr: 3,
    winner: 'Easy1staker',
    hash: '9WZ659698;ZS46N9P87XD5P067VNEX5PD;687VNLX95D76',
    amount: 100,
  },
  {
    nr: 4,
    winner: 'Yes',
    hash: '6r8ocy7dg56r8o76r8o765mp0g745m0g74m0g7407gm047',
    amount: 100,
  },
];

interface ITicket {
  winner: string;
  nr: number;
}

const Ticket = ({ winner, nr }: ITicket) => (
  <div className="flex flex-col w-full border-solid border-2 border-purple-light border-opacity-30 p-3 h-28 items-between justify-between">
    <div className="justify-self-center text-purple-light">
      {TICKETS.NAME} #{nr}
    </div>
    <div className="justify-self-center text-white">
      {TICKETS.WINNER} <span className="text-orange-primary">{winner}</span>
    </div>
  </div>
);

export const Tickets = (): ReactElement => (
  <div className="w-full grid grid-cols-4 gap-5 p-5">
    {tickets.map((t) => (
      <Ticket key={t.nr} winner={t.winner} nr={t.nr} />
    ))}
  </div>
);
