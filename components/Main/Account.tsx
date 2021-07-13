import { ReactElement, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { RiUserLine } from 'react-icons/ri';
import { GiShare } from 'react-icons/gi';

import { ConfirmDialog } from '../Dialog/ConfirmDialog';
import { joinRaffles } from '../../hooks';
import { DIALOG, ACCOUNT } from '../../constants/context';
import { useToaster } from '../../hooks/useToaster';

export function Account(): ReactElement {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const queryClient = useQueryClient();
  const [paymentAddress, setPaymentAddress] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { addToaster } = useToaster();
  const { mutate, isError } = useMutation(joinRaffles, {
    onSuccess: () => {
      setConfirmOpen(false);
      addToaster({
        type: 'success',
        text: 'Goodluck, you have joined the raffle',
      });
    },
    // need to be typed
    onError: (error: any) => {
      // An error happened!
      setErrorMessage(error.response.data);
      addToaster({ type: 'error', text: error.response.data });
    },
    onSettled: () => {
      queryClient.invalidateQueries('create');
    },
  });

  function joinRaffle() {
    const paymentAddr = {
      payment_address: paymentAddress,
    };
    mutate(paymentAddr);
  }

  return (
    <div className="flex jusitfy-between text-xs items-center">
      <div className="lg:mr-10 lg:static hidden">
        <RiUserLine className="h-6 w-6 hover:text-blue-primary cursor-pointer" />
      </div>
      <div className="flex">
        <a
          type="button"
          target="_blank"
          href="http://twitter.com/share?text=I participated in the @EASY1Raffles available for delegators, are you joining too? %0a%0aDelegate to the Cardano Stake Pool EASY1 and join open raffles here: https://raffles.easystaking.online/ %0a%0aJoin https://t.me/EASY1StakePoolRaffles to stay always updated."
          className="flex uppercase p-2 px-4 bg-gradient-to-r mr-4 from-blue-primary to-purple-primary rounded-2xl font-semibold justify-center items-center cursor-pointer"
          rel="noreferrer"
        >
          {ACCOUNT.SHARE}
          <GiShare className="h-6 w-6 ml-2 cursor-pointer" />
        </a>
        <button
          type="button"
          aria-label="join_raffle"
          className="uppercase p-2 px-4 bg-gradient-to-r from-purple-primary to-blue-primary rounded-2xl font-semibold cursor-pointer"
          onClick={() => setConfirmOpen(true)}
        >
          {DIALOG.TITLE}
        </button>
        <ConfirmDialog
          title="Join Raffle"
          open={confirmOpen}
          onClose={() => setConfirmOpen(false)}
          onConfirm={joinRaffle}
        >
          {isError && <p className="p-4 my-4 bg-red-400 rounded-l rounded-r">{errorMessage}</p>}
          <h2 className="pb-4 text-gray-base">{DIALOG.POST_MESSAGE}</h2>
          <input
            value={paymentAddress}
            onChange={({ target: { value } }) => setPaymentAddress(value)}
            type="text"
            className="p-3 w-full rounded-l rounded-r text-gray-base focus:outline-none focus:ring-2 focus:ring-purple-primary focus:border-transparent"
          />
        </ConfirmDialog>
      </div>
    </div>
  );
}
