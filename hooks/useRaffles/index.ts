import { useQuery } from 'react-query';

const fetchRaffles = async (limit = 10) => {
  const res = await fetch('https://lottery.easystaking.online/raffles');
  const result = res.json();
  return result;
};

const useRaffles = (limit) => useQuery(['raffles', limit], () => fetchRaffles(limit));

const fetchRafflesStats = async (limit = 10) => {
  const res = await fetch('https://lottery.easystaking.online/raffles/stats');
  const result = res.json();
  return result;
};

const useRafflesStats = () => useQuery(['raffles_stats'], () => fetchRafflesStats());

export { useRaffles, fetchRaffles, useRafflesStats, fetchRafflesStats };
