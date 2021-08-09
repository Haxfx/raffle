import { ReactElement } from 'react';
import { SeperatorProps } from '../../interfaces';

export const Seperator = ({ size = '2' }: SeperatorProps): ReactElement => (
  <div className={`border-b-${size} border-blue-background`} />
);
