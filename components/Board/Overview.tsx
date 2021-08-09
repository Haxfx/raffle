import { ReactElement, useEffect, useState } from 'react';

import { useRaffles, useRafflesStats, useWinnerRaffles } from '../../hooks/useRaffles';
import { Epoch, Tickets } from '.';
import { OpenRaffles } from '../Table/OpenRaffles';
import { WinnerRaffles } from '../Table/WinnerRaffles';
import { ClosedRaffles } from '../Table/ClosedRaffles';
import { useStore } from '../../hooks/useStore';

/* Used for Local testing with Fixtures */
// import winnerData from '../../fixtures/winners.json';

export const Overview = (): ReactElement => {
  const { data } = useRaffles();
  const { data: winnerData } = useWinnerRaffles();
  const { data: raffleData } = useRafflesStats();
  const [currentEpoch, setCurrentEpoch] = useState<number>(274);
  const { setEpoch } = useStore();

  const [jackpot, setJackpot] = useState<string>('');

  useEffect(() => {
    if (raffleData) setJackpot(raffleData.jackpot[0].amount);
  }, [raffleData]);

  useEffect(() => {
    if (data) {
      setCurrentEpoch(data[0].epoch);
      setEpoch(data[0].epoch);
    }
  }, [data]);

  return (
    <>
      <Epoch epoch={currentEpoch} />
      {winnerData && <Tickets fetchedData={winnerData} jackpot={jackpot} />}
      {data && <OpenRaffles fetchedData={data} />}
      {winnerData && <WinnerRaffles fetchedData={winnerData} />}
      {data && <ClosedRaffles fetchedData={data} />}
    </>
  );
};
