import { ReactElement, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { RiUserLine } from 'react-icons/ri';

import ConfirmDialog from '../Dialog/ConfirmDialog';
import { joinRaffles } from '../../hooks';

export function Account(): ReactElement {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const queryClient = useQueryClient();
  const [paymentAddress, setPaymentAddress] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { mutate, isError } = useMutation(joinRaffles, {
    onSuccess: () => {
      // Very good success could add a notification
      setConfirmOpen(false);
    },
    // need to be typed
    onError: (error: any) => {
      // An error happened!
      setErrorMessage(error.response.data);
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
      {
        // get variables from constant
      }
      <div className="mr-10">
        <RiUserLine className="h-6 w-6 hover:text-blue-primary cursor-pointer" />
      </div>
      <div>
        <button
          type="button"
          aria-label="join_raffle"
          className="uppercase p-2 px-4 bg-gradient-to-r from-blue-primary to-purple-primary rounded-2xl font-semibold cursor-pointer"
          onClick={() => setConfirmOpen(true)}
        >
          {
            // get variables from constant
          }
          Join Raffle
        </button>
        <ConfirmDialog
          title="Join Raffle"
          open={confirmOpen}
          onClose={() => setConfirmOpen(false)}
          onConfirm={joinRaffle}
        >
          {isError && <p className="p-4 my-4 bg-red-400 rounded-l rounded-r">{errorMessage}</p>}
          {
            // get variables from constant
          }
          <h2 className="pb-4 text-gray-base">Post your payment address below</h2>
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
