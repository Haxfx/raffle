import App from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';

import { ToasterProvider } from '../hooks/useToaster';
import '../styles/globals.css';
import '../styles/custom.css';

class Dashboard extends App {
  queryClient = new QueryClient();

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <AnimatePresence exitBeforeEnter>
        <ToasterProvider>
          <QueryClientProvider client={this.queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <div className="font-Poppins text-white">
                <Component {...pageProps} key={router.route} />
              </div>
            </Hydrate>
            <ReactQueryDevtools />
          </QueryClientProvider>
        </ToasterProvider>
      </AnimatePresence>
    );
  }
}

export default Dashboard;
