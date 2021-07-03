import Button from '../Buttons/Button';
import Dialog from './Dialog';

interface Props {
  title: string;
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}
export default function Confirm(props: Props) {
  const { open, onClose, title, children, onConfirm } = props;
  if (!open) {
    return <></>;
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <h2 className="text-xl text-purple-primary">{title}</h2>
      <div className="py-5">{children}</div>
      <div className="flex justify-between">
        <div className="py-1">
          <Button onClick={() => onClose()} className="bg-gray-base hover:bg-secondary-light">
            Cancel
          </Button>
        </div>
        <div className="py-1">
          <Button
            className="bg-purple-primary hover:bg-secondary-light"
            onClick={() => {
              onConfirm();
            }}
          >
            Join
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
