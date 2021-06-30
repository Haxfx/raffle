import { ReactElement } from 'react';
import { GrStackOverflow } from 'react-icons/gr';

import { DRAWS } from '../../constants/context';

export function Epoch(): ReactElement {
  const epochArray = DRAWS.TOTAL_ROUNDS.toString().split('');

  return (
    <div className="flex justify-between px-5 pt-5 text-white">
      <span>{DRAWS.TITLE}</span>
      <div className="flex items-center justify-center">
        <GrStackOverflow className="h-6 w-6" />
        <span className="mx-2">{DRAWS.ROUNDS}</span>
        <div className="flex">
          {epochArray.map((char, key) => (
            <div key={key} className="bg-blue-primary px-2 py-1 ml-2">
              {char}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
