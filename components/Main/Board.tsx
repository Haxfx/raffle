import { ReactElement } from 'react';

import { TabMenu } from '../Menu/TabMenu';
import { Epoch, Tickets } from '../Board';
import { OpenRaffles } from '../Board/OpenRaffles';

export function Board(): ReactElement {
  return (
    <div className="bg-blue-backgroundLight">
      <TabMenu />
      <Epoch />
      <Tickets />
      <OpenRaffles />
    </div>
  );
}
