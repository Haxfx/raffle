import { ReactElement } from 'react';

type Props = {
  title: string;
  children?: JSX.Element;
  active?: boolean;
};
const TabItem = ({ title, children, active }: Props): ReactElement => (
  <div className="flex">
    <h1
      className={`py-5 ml-5 uppercase text-xs font-semibold pb-4
      ${active ? `text-blue-primary border-b-4 border-blue-primary z-2` : `text-purple-light`} 
      hover:text-blue-primary cursor-pointer`}
    >
      {title}
      {children}
    </h1>
  </div>
);

const Line = () => (
  <div className="absolute w-full h-0.5 bg-opacity-20 bg-purple-light mt-14 z-1 mr-4 " />
);

export function TabMenu(): ReactElement {
  const active = true;

  return (
    <div className="flex items-start w-full relative">
      <Line />
      <TabItem title="Transactions" />
      <TabItem active title="My Tickets">
        <span
          className={`text-white ml-2 px-2 self-center rounded-full ${
            active ? `bg-blue-primary` : `bg-purple-light`
          }
          hover:cursor-pointer`}
        >
          4
        </span>
      </TabItem>
      <TabItem title="Referral Program" />
      <TabItem title="Operator Panel" />
    </div>
  );
}
