/* eslint-disable camelcase */
export interface IFetchedData {
  epoch: number;
  estimated_raffle_deadline: string;
  id: number;
  is_closed: boolean;
  min_stake: number;
  num_participants: number;
  prize: number;
}

export interface IWinners {
  epoch: number;
  stake_id: string;
  user_friendly_name?: string;
  winning_amount: number;
  tx_id: string;
}

export interface RaffleProps {
  fetchedData: IFetchedData[];
}
