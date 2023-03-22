import { Container, Badge, Link, List, ListItem, Divider, Box } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import React from 'react'


const Work = () => {

  return (
    <Layout title="CodeTracker">
      <Container mt={3}>
        <Title>
          CodeTracker &nbsp;<Badge bg="red.300">2023</Badge>
        </Title>

        <WorkImage src="/images/works/thumbInvoice.png" alt="Website image" />
        <P>

        </P>
        <P>With <Link href="https://github.com/frontcodelover" target='_blank'>
          Nicolas de Raemy
        </Link>, a friend of mine, we tried to build an Invoice Generator in 2 days using only React. No Back-End. Displaying dynamically the pdf result as you&apos;re filling the form. We used jspdf to export to pdf and a whole bundle of Contexts/States to manage form&apos;s data.</P>

        <List ml={4} my={4} >
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://invoice-generator-sigma.vercel.app/" target='_blank'>
              https://invoice-generator.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Repository</Meta>
            <Link href="https://github.com/AlexandreOttmann/Invoice-Generator" target="_blank">
              Invoice Generator Repo <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>


          <ListItem>
            <Meta>Stack</Meta>
            <span><Badge bg="blue.400">Front</Badge>  React & React Router | Vite JS | Tailwind<br />
              &emsp;&emsp; &emsp;&emsp;&emsp; &emsp;Styled Component | jspdf</span>
          </ListItem>

        </List>


        <Divider my={6} borderColor="grey" />

        <Box as='video'
          src="/videos/invoice.mp4"
          autoPlay
          className=" tw-min-w-full tw-min-h-full  tw-opacity-100  "
          loop
          muted
        >
        </Box>


      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
