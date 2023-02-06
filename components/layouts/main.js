import Head from 'next/head'
import Navbar from '../navbar.js'
import VideoHeader from '../videoHeader.js'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {

  const param = router.asPath

  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Alexandre Ottmann - Page d&apos;accueil</title>
      </Head>

      <Navbar path={router.asPath} className="tw-z-20" />
      {param == '/blog' &&
        <VideoHeader />
      }

      <Container
        maxW="container.md"
        pt={14}>

        {children}

        <Footer />
      </Container>
    </Box >
  )
}

export default Main