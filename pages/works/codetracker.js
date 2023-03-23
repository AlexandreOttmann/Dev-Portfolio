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

        <WorkImage src="/images/works/thumbCodetracker.png" alt="Website image" />
        <P>

        </P>
        <P>With <Link href="https://github.com/frontcodelover" target='_blank'>
          Nicolas de Raemy
        </Link>, we started on March 15th to build a full website with front/back, authentification with a provider (github), data persistance. Fetching from the user his current public stats. Languages used, number of projects, commits, comments etc... We wanted to make a project using a full range of needed knowledge for our futur job.</P>
        <P>We&apos;re still working on it and planned to launch the first version at the end of March knowing that we&apos;re still working on other projects and studying at our current school.</P>

        <List ml={4} my={4} >
          {/* <ListItem>
            <Meta>Website</Meta>
            <Link href="https://github.com/frontcodelover/codetrackerV2" target='_blank'>
              https://github.com/frontcodelover/codetrackerV2 (currently offline) <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem> */}
          <ListItem>
            <Meta>Repository</Meta>
            <Link href="https://github.com/frontcodelover/codetrackerV2" target="_blank">
              https://github.com/frontcodelover/codetrackerV2 (currently private until MVP build)<ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>


          <ListItem>
            <Meta>Stack</Meta>
            <span><Badge bg="blue.400">Front</Badge>  React & React Router | Vite JS | Tailwind<br />
              &emsp;&emsp; &emsp;<Badge bg="red.400">Back</Badge> Firebase</span>
          </ListItem>

        </List>


        <Divider my={6} borderColor="grey" />

        <Box as='video'
          src="/videos/codetracker_example.mp4"
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
