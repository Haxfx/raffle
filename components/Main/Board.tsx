import { ReactElement } from 'react';

import { useRouter } from 'next/router';
import { TabMenu } from '../Menu/TabMenu';
import { Overview } from '../Board/Overview';
import { MyTickets } from '../Board/MyTickets';

/* Used for Local testing with Fixtures */
// import winnerData from '../../fixtures/winners.json';

const BoardTab = (): ReactElement => {
  const router = useRouter();

  if (router.route === '/') {
    return <Overview />;
  }

  if (router.route === '/mytickets') {
    return <MyTickets />;
  }

  return (
    <div className="flex justify-between p-5">
      <h1>Page not found</h1>
    </div>
  );
};

export function Board(): ReactElement {
  return (
    <div className="bg-blue-backgroundLight">
      <TabMenu />
      <BoardTab />
    </div>
  );
}
