/* eslint-disable @typescript-eslint/no-empty-function */
interface Props {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}
export default function IconButton(props: Props): JSX.Element {
  const {
    children,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onClick = (event: React.MouseEvent<HTMLButtonElement>) => {},
    className = '',
  } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-gray-base hover:text-black-light focus:outline-none focus:border-none inline-flex items-center ${className}`}
    >
      {children}
    </button>
  );
}
