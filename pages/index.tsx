import { ChevronLeftIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import { ReactElement } from 'react';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';

import { HamburgerMenu as Hamburger } from '../components/Menu/Hamburger';
import { Account } from '../components/Main/Account';
import { Card, Board, Faq, ScrollTop } from '../components/Main';
import { useMotion } from '../util/useMotion';
import { Footer } from '../components/Main/Footer';
import { PAGE, CARDS } from '../constants/context';
import { fetchRaffles, useRafflesStats } from '../hooks';

const Index = (): ReactElement => {
  const { fadeInUp } = useMotion();
  const { data } = useRafflesStats();

  console.log('data', data);

  return (
    <div className="grid items-center w-full items-center relative">
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="lg:w-5/6 lg:max-w-screen-lg lg:static sticky justify-around m-auto top-0 lg:bg-transparent lg:border-none bg-blue-background border-b border-gray-base"
        >
          {/* <Menu /> */}
          <div className="flex justify-between py-4">
            <Hamburger />
            <Account />
          </div>
        </motion.div>
        <div className="grid grid-cols-1 gap-5 justify-around p-4">
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 gap-5 justify-around lg:w-5/6 lg:max-w-screen-lg w-full m-auto"
          >
            {/* Hidden breadcrum cause unused */}
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} className="hidden">
              <span className="flex text-xs text-purple-light uppercase">
                <ChevronLeftIcon className="w-4 h-4" />
                {PAGE.BREADCRUM}
              </span>
            </motion.div>
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
              <h1 className="text-2xl">{PAGE.TITLE}</h1>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="grid lg:grid-cols-4 lg:gap-6 grid-cols-2 gap-4"
            >
              {/* Temporary solution till api is finished */}
              {data &&
                CARDS.CARDS.map((CARD, key) => {
                  let cardValue = data[CARD.KEY];
                  let cardCurrency = CARD.CURRENCY;
                  let cardSymbol = CARD.SYMBOL;
                  if (CARD.KEY === 'jackpot' || CARD.KEY === 'raffles_jackpot_total') {
                    cardValue = data[CARD.KEY][0].amount;
                    cardCurrency = data[CARD.KEY][0].currency.type;
                    cardSymbol = data[CARD.KEY][0].currency.symbol;
                    console.log(cardSymbol);
                  }
                  return (
                    <Card
                      key={key}
                      title={CARD.NAME}
                      value={cardValue}
                      currency={cardCurrency}
                      symbol={cardSymbol}
                    />
                  );
                })}
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
      <ScrollTop className="lg:hidden" />
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
