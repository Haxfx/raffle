import { ReactElement, useState } from 'react';
import { MyRaffles } from '../Table/MyRaffles';
import { useUserRaffles } from '../../hooks';
import { useStore } from '../../hooks/useStore';
import { ResetAddress } from './ResetAddress';
import { ReminderJoin } from './ReminderJoin';
import { Seperator } from '../Random/Seperator';
import { NoValidAddress } from './NoValidAddress';

export const MyTickets = (): ReactElement => {
  const [addr, setAddr] = useState(useStore((state) => state.store.userAddress));
  const { data: myRafflesData } = useUserRaffles(addr);
  const { setPaymentAddr, resetUser, store } = useStore();

  const resetUserConfirmation = () => {
    resetUser();
    setAddr('');
  };

  if (!addr || !myRafflesData)
    return (
      <div className="grid grid-cols-1">
        <NoValidAddress addr={addr} setAddr={setAddr} setPaymentAddr={setPaymentAddr} />
        <Seperator size="20" />
        <ReminderJoin epoch={store.currentEpoch} />
      </div>
    );

  return (
    <div className="bg-blue-backgroundLight">
      {myRafflesData && (
        <>
          <MyRaffles fetchedData={myRafflesData} />
          <ResetAddress resetUserConfirmation={resetUserConfirmation} />
          <Seperator />
          <ReminderJoin epoch={store.currentEpoch} />
        </>
      )}
    </div>
  );
};
