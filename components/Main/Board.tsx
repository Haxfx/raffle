import { ReactElement, useEffect, useState } from 'react';

import { useRaffles, useRafflesStats, useWinnerRaffles } from '../../hooks/useRaffles';
import { TabMenu } from '../Menu/TabMenu';
import { Epoch, Tickets } from '../Board';
import { OpenRaffles } from '../Board/OpenRaffles';
import { WinnerRaffles } from '../Board/WinnerRaffles';
import { ClosedRaffles } from '../Board/ClosedRaffles';

export function Board(): ReactElement {
  const { data } = useRaffles();
  const { data: winnerData } = useWinnerRaffles();
  const { data: raffleData } = useRafflesStats();
  const [currentEpoch, setCurrentEpoch] = useState<number>(274);
  const [jackpot, setJackpot] = useState<string>('');

  useEffect(() => {
    if (raffleData) setJackpot(raffleData.jackpot[0].amount);
  }, [raffleData]);

  useEffect(() => {
    if (data) setCurrentEpoch(data[0].epoch);
  }, [data]);

  return (
    <div className="bg-blue-backgroundLight">
      <TabMenu />
      <Epoch epoch={currentEpoch} />
      {winnerData && <Tickets fetchedData={winnerData} jackpot={jackpot} />}
      {data && <OpenRaffles fetchedData={data} />}
      {winnerData && <WinnerRaffles fetchedData={winnerData} />}
      {data && <ClosedRaffles fetchedData={data} />}
    </div>
  );
}
