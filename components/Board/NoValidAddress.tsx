import { ReactElement } from 'react';
import { MYTICKETS } from '../../constants/context';

export const NoValidAddress = ({ addr, setAddr, setPaymentAddr }): ReactElement => (
  <div className="m-8 text-center">
    <span>{MYTICKETS.NO_SET_ADDRESS}</span>
    <h2 className="mt-5 pb-4 text-gray-base">{MYTICKETS.POST_MESSAGE}</h2>
    <input
      value={addr}
      onChange={({ target: { value } }) => {
        setAddr(value);
        setPaymentAddr(value);
      }}
      type="text"
      placeholder="addr"
      className="p-3 w-1/2 rounded-l rounded-r text-gray-base focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-transparent"
    />
  </div>
);
