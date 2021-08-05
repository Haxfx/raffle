import { ReactElement } from 'react';
import { useWinnerRaffles } from '../../hooks';
import { MyRaffles } from './MyRaffles';

export function MyTickets(): ReactElement {
  const { data: winnerData } = useWinnerRaffles();

  return (
    <div className="bg-blue-backgroundLight">
      {/* Currently showing winners data */}
      {winnerData && <MyRaffles fetchedData={winnerData} />}
    </div>
  );
}
