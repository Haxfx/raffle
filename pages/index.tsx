import { ChevronLeftIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import { ReactElement } from 'react';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';

import { HamburgerMenu as Hamburger } from '../components/Menu/Hamburger';
import { Account } from '../components/Main/Account';
import { Card, Board, Faq } from '../components/Main';
import { useMotion } from '../util/useMotion';
import { Footer } from '../components/Main/Footer';
import { PAGE, CARDS } from '../constants/context';
import { fetchRaffles, useRafflesStats } from '../hooks';

const Index = (): ReactElement => {
  const { fadeInUp } = useMotion();
  const { data } = useRafflesStats();

  return (
    <div className="grid items-center w-full items-center">
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <div className="grid grid-cols-1 gap-5 justify-around p-4">
          <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
            {/* <Menu /> */}
            <div className="flex justify-between">
              <Hamburger />
              <Account />
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 gap-5 justify-around w-5/6 m-auto"
          >
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
              <span className="flex text-xs text-purple-light uppercase">
                <ChevronLeftIcon className="w-4 h-4" />
                {PAGE.BREADCRUM}
              </span>
            </motion.div>
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
              <h1 className="text-2xl">{PAGE.TITLE}</h1>
            </motion.div>
            <motion.div variants={fadeInUp} className="grid grid-cols-4 gap-6">
              {data &&
                CARDS.CARDS.map((CARD, key) => (
                  <Card
                    key={key}
                    title={CARD.NAME}
                    value={data[CARD.KEY]}
                    currency={CARD.CURRENCY}
                  />
                ))}
            </motion.div>
            <motion.div variants={fadeInUp} className="grid grid-cols-1 gap-4">
              <Board />
            </motion.div>
            <motion.div variants={fadeInUp} className="grid grid-cols-1 gap-4">
              <Faq />
            </motion.div>
          </motion.div>
        </div>
        <Footer />
      </motion.div>
    </div>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['raffles', 10], () => fetchRaffles(10));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Index;
