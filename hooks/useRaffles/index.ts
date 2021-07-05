import axios from 'axios';
import { useQuery } from 'react-query';
import { IPayment } from '../interfaces';

const fetchRaffles = async (limit = <number>10): Promise<boolean | string> => {
  const res = await fetch('https://lottery.easystaking.online/raffles');
  const result = res.json();
  return result;
};

const joinRaffles = async (addr: IPayment): Promise<boolean | string> => {
  const { data: response } = await axios.post('https://lottery.easystaking.online/raffles', addr);
  return response.data;
};

const fetchRafflesStats = async (): Promise<boolean | string> => {
  const res = await fetch('https://lottery.easystaking.online/raffles/stats');
  const result = res.json();
  return result;
};

const fetchWinnerRaffles = async (): Promise<boolean | string> => {
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
