import '../styles/global.css'
import Chakra from '../components/chakra';
import { useEffect, useState } from 'react';
import Loading from '../components/layouts/loading';
import Layout from '../components/layouts/main'
import Fonts from "../components/fonts";
import PortfolioRedirectDialog from '../components/portfolio-redirect-dialog';
import PortfolioSnackbar from '../components/portfolio-snackbar';


import { AnimatePresence } from "framer-motion";

const Website = ({ Component, pageProps, router }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user has already seen the loading screen this session
    const hasSeenLoading = sessionStorage.getItem('hasSeenLoading');

    if (!hasSeenLoading) {
      // Skip loading screen if already seen
      setIsLoading(false);
    } else {
      // Show loading screen for first visit
      setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('hasSeenLoading', 'true');
      }, 3000);
    }
  }, []);

  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <PortfolioRedirectDialog />
      <PortfolioSnackbar />
      <>{isLoading ? <Loading /> :
        <Layout router={router}>
          <AnimatePresence exitBeforeEnter initial={true}
            onExitComplete={() => {
              if (typeof window !== 'undefined') {
                window.scrollTo({ top: 0 })
              }
            }}
          >
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      }
      </>
    </Chakra>

  )
}

export default Website