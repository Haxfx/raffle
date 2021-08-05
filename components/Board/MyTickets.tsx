import { ReactElement } from 'react';
// import { useWinnerRaffles } from '../../hooks';
import { MyRaffles } from './MyRaffles';
import myRafflesData from '../../fixtures/myraffles.json';

export function MyTickets(): ReactElement {
  // const { data: myRafflesData } = useWinnerRaffles();

  return (
    <div className="bg-blue-backgroundLight">
      {/* Currently showing winners data */}
      {myRafflesData && <MyRaffles fetchedData={myRafflesData} />}
    </div>
  );
}
