/* eslint-disable react/destructuring-assignment */
import { FC } from 'react';
import ExitIcon from '../Icons/Exit';
import IconButton from '../Buttons/IconButton';

interface Props {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}
export const Dialog: FC<Props> = (props) => {
  const { open, onClose } = props;
  if (!open) {
    return <></>;
  }
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex">
      <div className="relative p-8 bg-white w-5/6 max-w-md m-auto flex-col flex rounded-lg">
        <div>{props.children}</div>
        <span className="absolute top-0 right-0 p-4">
          <IconButton onClick={() => onClose()}>
            <ExitIcon />
          </IconButton>
        </span>
      </div>
    </div>
  );
};
