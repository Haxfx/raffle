import { ReactElement } from 'react';
import { GrStackOverflow } from 'react-icons/gr';

import { DRAWS } from '../../constants/context';

interface EpochProps {
  epoch: number;
}

export function Epoch({ epoch }: EpochProps): ReactElement {
  const epochArray = epoch.toString().split('');

  return (
    <div className="flex justify-between px-5 pt-5 text-white">
      <span className="self-center">{DRAWS.TITLE}</span>
      <div className="flex items-center justify-center">
        <GrStackOverflow className="h-6 w-6" />
        <span className="mx-2">{DRAWS.ROUNDS}</span>
        <div className="flex">
          {epochArray.map((char, key) => (
            <div key={key} className="bg-orange-primary px-2 py-1 ml-2">
              {char}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
