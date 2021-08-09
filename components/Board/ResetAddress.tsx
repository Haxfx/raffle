import { ReactElement } from 'react';
import Button from '../Buttons/Button';
import { ResetAddressProps } from '../../interfaces';
import { MYTICKETS } from '../../constants/context';

export const ResetAddress = ({ resetUserConfirmation }: ResetAddressProps): ReactElement => (
  <div className="m-5 text-center">
    <Button
      className="bg-purple-primary hover:bg-purple-400 mt-3 px-5 py-3"
      onClick={() => {
        resetUserConfirmation();
      }}
    >
      {MYTICKETS.NOT_YOURS}
    </Button>
  </div>
);
