import { useQuery } from 'react-query';

const fetchFaqs = async () => {
  const res = await fetch('https://lottery.easystaking.online/faqs');
  const result = res.json();
  return result;
};

const useFaqs = () => useQuery(['faqs'], () => fetchFaqs());

export { useFaqs, fetchFaqs };
