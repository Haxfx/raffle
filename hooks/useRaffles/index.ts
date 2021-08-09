import axios from 'axios';
import { useQuery } from 'react-query';
import { IWinners, IFetchedData } from '../../interfaces';
import { IRaffleDetails } from '../interfaces';

const fetchRaffles = async (limit = <number>10): Promise<IFetchedData[]> => {
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

const fetchWinnerRaffles = async (): Promise<IWinners[]> => {
  const res = await fetch('https://lottery.easystaking.online/winners');
  const result = res.json();
  return result;
};

const fetchUserRaffles = async (addr): Promise<any[]> => {
  const res = await fetch(`https://lottery.easystaking.online/raffles/${addr}?status=joined`);
  const result = res.json();
  return result;
};

const useRaffles = (limit?: number) => useQuery(['raffles', limit], () => fetchRaffles(limit));

const useRafflesStats = () => useQuery(['raffles_stats'], () => fetchRafflesStats());

const useWinnerRaffles = () => useQuery(['raffles_winners'], () => fetchWinnerRaffles());

const useUserRaffles = (addr?: string) =>
  useQuery(['raffles_user', addr], () => fetchUserRaffles(addr));

export {
  useRaffles,
  fetchRaffles,
  useRafflesStats,
  fetchRafflesStats,
  useWinnerRaffles,
  joinRaffles,
  useUserRaffles,
};
