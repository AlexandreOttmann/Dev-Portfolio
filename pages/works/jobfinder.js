import { Container, Badge, Link, List, ListItem, Divider, Box } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import React from 'react'


const Work = () => {

  return (
    <Layout title="JobFinder">
      <Container mt={3} >
        <Title>
          JobFinder &nbsp;<Badge bg="red.300">2023</Badge>
        </Title>

        <WorkImage src="/images/works/thumbJobfinder.png" alt="Website image" />
        <P>
          I came accross a job offer for an apprenticeship in a company I really want to work with.
          One of the issue of my candidacy is that, as I&apos;m still in scholarship, I&apos;m lacking some of the technical skills for the stack they&apos;re asking. The closest one is React Native. As I was always curious about it, on how it works and the differences compare to React developing, I choose to build a first app, following tutorials online and using api to display jobs offer...
          I&apos; using this project to learn something really new that my school is not teaching and I&apos;m really excited about it!
        </P>

        <span className='tw-text-blue-400 '>03/04/23 : For now only the Home Page is functionnal and displaying the fetchs from the RapideAPI website using JSearch API. </span>


        <List ml={4} my={4} >

          <ListItem>
            <Meta>Repository</Meta>
            <Link href="https://github.com/AlexandreOttmann/React-Native-JobFinder" target="_blank">
              https://github.com/AlexandreOttmann/React-Native-JobFinder<ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>


          <ListItem>
            <Meta>Stack</Meta>
            <span><Badge bg="blue.400">Front</Badge>  React Native | Axios | Expo | RestAPI<br />
            </span>
          </ListItem>

        </List>


        <Divider my={6} borderColor="grey" />
        <div className='tw-flex tw-flex-col     '>
          <Box as='video'
            src="/videos/jobfinder_example.mp4"
            autoPlay
            className="  tw-opacity-100  tw-max-h-96   "
            loop
            muted
          >
          </Box>
        </div>

      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
