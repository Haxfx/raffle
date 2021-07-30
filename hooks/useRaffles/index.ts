import axios from 'axios';
import { useQuery } from 'react-query';
import { IRaffleDetails } from '../interfaces';

const fetchRaffles = async (limit = <number>10): Promise<any> => {
  const res = await fetch('https://lottery.easystaking.online/raffles');
  const result = res.json();
  return result;
};

const joinRaffles = async (raffleDetails: IRaffleDetails): Promise<boolean | string> => {
  const { data: response } = await axios.post(
    'https://lottery.easystaking.online/raffles',
    raffleDetails
  );
  return response.data;
};

const fetchRafflesStats = async (): Promise<boolean | string | any> => {
  const res = await fetch('https://lottery.easystaking.online/raffles/stats');
  const result = res.json();
  return result;
};

const fetchWinnerRaffles = async (): Promise<any> => {
  const res = await fetch('https://lottery.easystaking.online/winners');
  const result = res.json();
  return result;
};

const useRaffles = (limit?: number) => useQuery(['raffles', limit], () => fetchRaffles(limit));

const useRafflesStats = () => useQuery(['raffles_stats'], () => fetchRafflesStats());

const useWinnerRaffles = () => useQuery(['raffles_winners'], () => fetchWinnerRaffles());

export {
  useRaffles,
  fetchRaffles,
  useRafflesStats,
  fetchRafflesStats,
  useWinnerRaffles,
  joinRaffles,
};
