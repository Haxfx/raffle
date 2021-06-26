import { ChevronLeftIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

import { HamburgerMenu as Hamburger } from "../components/Menu/Hamburger";
import { Account } from "../components/Main/Account";
import { Card, Board, Faq } from "./../components/Main";
import { useMotion } from "../util/useMotion";
import { Footer } from "./../components/Main/Footer";

const Index = () => {
  const { fadeInUp } = useMotion();

  return (
    <div className="grid items-center w-full items-center">
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <div className="grid grid-cols-1 gap-5 justify-around p-4">
          <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
            {/*<Menu />*/}
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
                Bread
              </span>
            </motion.div>
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
              <h1 className="text-2xl">Dashboard</h1>
            </motion.div>
            <motion.div variants={fadeInUp} className="grid grid-cols-4 gap-6">
              <Card title="Bets" value="0,02" currency="ada" />
              <Card title="Tickets in Game" value="4" currency="tickets" />
              <Card title="Participants" value="8" />
              <Card title="Total Won" value="450" currency="$" />
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

export default Index;
