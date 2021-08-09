import { ReactElement } from 'react';

export const ReminderJoin = ({ epoch }): ReactElement => (
  <div className="p-8 text-center text-orange-primary">
    Don't forget to join epoch #{epoch} raffle
  </div>
);
