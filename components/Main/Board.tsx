import { ReactElement } from 'react';

import { TabMenu } from '../Menu/TabMenu';
import { Epoch, Tickets } from '../Board';
import { OpenRaffles } from '../Board/OpenRaffles';
import { ClosedRaffles } from '../Board/ClosedRaffles';

export function Board(): ReactElement {
  return (
    <div className="bg-blue-backgroundLight">
      <TabMenu />
      <Epoch />
      <Tickets />
      <OpenRaffles />
      <ClosedRaffles />
    </div>
  );
}
