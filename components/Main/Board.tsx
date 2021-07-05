import { ReactElement } from 'react';

import { useRaffles, useWinnerRaffles } from '../../hooks/useRaffles';
import { TabMenu } from '../Menu/TabMenu';
import { Epoch, Tickets } from '../Board';
import { OpenRaffles } from '../Board/OpenRaffles';
import { WinnerRaffles } from '../Board/WinnerRaffles';
import { ClosedRaffles } from '../Board/ClosedRaffles';

export function Board(): ReactElement {
  const { data } = useRaffles();
  console.log(typeof data);
  console.log('data', data);
  const { data: winnerData } = useWinnerRaffles();

  return (
    <div className="bg-blue-backgroundLight">
      <TabMenu />
      <Epoch />
      <Tickets />
      {data && <OpenRaffles fetchedData={data} />}
      {winnerData && <WinnerRaffles fetchedData={winnerData} />}
      {data && <ClosedRaffles fetchedData={data} />}
    </div>
  );
}
