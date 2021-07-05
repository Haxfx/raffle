import { ReactElement, useEffect, useState } from 'react';

import { useRaffles, useWinnerRaffles } from '../../hooks/useRaffles';
import { TabMenu } from '../Menu/TabMenu';
import { Epoch, Tickets } from '../Board';
import { OpenRaffles } from '../Board/OpenRaffles';
import { WinnerRaffles } from '../Board/WinnerRaffles';
import { ClosedRaffles } from '../Board/ClosedRaffles';

export function Board(): ReactElement {
  const { data } = useRaffles();
  const { data: winnerData } = useWinnerRaffles();
  const [currentEpoch, setCurrentEpoch] = useState<number>(274);

  useEffect(() => {
    if (data) setCurrentEpoch(data[0].epoch);
  }, [data]);

  return (
    <div className="bg-blue-backgroundLight">
      <TabMenu />
      <Epoch epoch={currentEpoch} />
      {winnerData && <Tickets fetchedData={winnerData} />}
      {data && <OpenRaffles fetchedData={data} />}
      {winnerData && <WinnerRaffles fetchedData={winnerData} />}
      {data && <ClosedRaffles fetchedData={data} />}
    </div>
  );
}
