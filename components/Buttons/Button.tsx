interface Props {
  children: React.ReactNode;
  type?: 'submit' | 'button' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
}
export default function Button(props: Props): JSX.Element {
  const { type = 'button', children, onClick, className = '' } = props;
  return (
    <button
      className={`bg-primary hover:bg-primary-light text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${className}`}
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
