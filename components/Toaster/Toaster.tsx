import { FC, useEffect, useState } from 'react';

import { Alert } from '../Alerts/Alert';
import ExitIcon from '../Icons/Exit';
import IconButton from '../Buttons/IconButton';

interface IToaster {
  id: number;
  type: string;
  text: string;
  onClose: () => void;
  autoClose: boolean;
  hasCloseButton: boolean;
  closeTimeout: number;
}

export const Toaster: FC<IToaster> = ({
  id,
  type,
  text,
  onClose,
  autoClose,
  hasCloseButton = true,
  closeTimeout = 50000,
}) => {
  const [selfClose, setSelfClose] = useState(
    typeof autoClose === 'boolean' ? autoClose : type !== 'error'
  );

  useEffect(() => {
    setTimeout(onClose, closeTimeout);
  }, [selfClose]);

  return (
    <div className="relative mh-12 mr-6 mt-2">
      <Alert type={type}>
        {hasCloseButton && (
          // eslint-disable-next-line jsx-a11y/control-has-associated-label
          <IconButton className="absolute right-4 top-4 cursor-pointer" onClick={() => onClose()}>
            <ExitIcon />
          </IconButton>
        )}
        <p className="w-full pr-4 py-2">{text}</p>
      </Alert>
    </div>
  );
};
