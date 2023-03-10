import Head from 'next/head'
import Navbar from '../navbar.js'
import VideoHeader from '../videoHeader.js'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import { Suspense } from 'react'
import Loading from './loading.js'


const Main = ({ children, router }) => {

  const param = router.asPath

  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Alex's homepage" />
        <meta name="author" content="Alexandre Ottmann" />

        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        <title>Alexandre Ottmann - Page d&apos;accueil</title>
      </Head>

      <Navbar path={router.asPath} className="tw-z-20" />
      <Suspense fallback={<Loading />}>
        {param == '/blog' &&
          <VideoHeader />
        }

        <Container

          maxW="container.md"
          pt={14}>

          {children}

          <Footer />
        </Container>
      </Suspense>
    </Box >
  )
}

export default Main