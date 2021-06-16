import { ChevronLeftIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

import { HamburgerMenu as Hamburger } from "../components/Menu/Hamburger";
import { Card, Board } from "./../components/Main";

// Our custom easing
let easing = [0.6, -0.05, 0.01, 0.99];

// animate: defines animation
// initial: defines initial state of animation or stating point.
// exit: defines animation when component exits

// Custom variant
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Index = (props) => (
  <div className="grid items-center w-full items-center p-4">
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <div className="grid grid-cols-1 gap-5 justify-around">
        <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
          {/*<Menu />*/}
          <Hamburger />
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
            <h1 className="text-2xl">Profile</h1>
          </motion.div>
          <motion.div variants={fadeInUp} className="grid grid-cols-4 gap-6">
            <Card title="Bets" value="0,02" currency="ada" />
            <Card title="Ethereum" value="23.45" currency="ada" />
            <Card title="Dollars" value="9 649.70" currency="$" />
            <Card title="Tickets in Game" value="4" currency="tickets" />
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 gap-4 max-w-6xl"
          >
            <Board />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  </div>
);

export default Index;
