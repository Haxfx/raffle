import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { BOARD } from '../../constants/context';
import { Line } from '../Random/Line';

type Props = {
  title: string;
  children?: JSX.Element;
  href?: string;
  active: boolean;
};
const TabItem = ({ title, children, href, active }: Props): ReactElement => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`py-5 px-5 uppercase text-xs font-semibold pb-4
    ${active ? `text-blue-primary border-b-4 border-blue-primary z-2` : `text-purple-light`} 
    hover:text-blue-primary cursor-pointer`}
    >
      {title}
    </a>
  );
};

export function TabMenu(): ReactElement {
  const router = useRouter();
  const active = true;

  return (
    <div className="lg:flex items-start w-full relative hidden">
      <Line />
      {BOARD.TABS.map((TAB, key) => (
        <TabItem
          key={key}
          href={TAB.KEY}
          active={TAB.KEY === router.route ? active : false}
          title={TAB.NAME}
        />
      ))}
    </div>
  );
}
