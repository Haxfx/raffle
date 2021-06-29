import App from 'next/app';
import { AnimatePresence } from 'framer-motion';

import '../styles/globals.css';
import '../styles/custom.css';

class Dashboard extends App {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <div className="font-Poppins text-white">
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </div>
    );
  }
}

export default Dashboard;
