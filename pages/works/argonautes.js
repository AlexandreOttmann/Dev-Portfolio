import { Container, Badge, Link, List, ListItem, Divider, Box } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import React from 'react'
import Modale from '../../components/modale'

const Work = () => {

  return (
    <Layout title="Argonautes">
      <Container mt={3}>
        <Title>
          Les Argonautes <Badge bg="red.300">2023</Badge>
        </Title>

        <WorkImage src="/images/works/thumbArgonautes.png" alt="argonautes website image" />
        <P>
          This project is part of a Wild School Challenge to integrate their cooperative training course. They asked to build a functionnal and simple MERN app. Which is 'just' a form and a list.
          I had one day to do it knowing that I&apos;m currently learning front and back connexions and interactions. This was definitively a fun way to put my fresh knowledge at work, and knowing how something simple can in reality quite tricky behind the scene.
        </P>
        <P>I used React and Axios to send the form data to Express. Connected to MongoDB and fetched back in React via some routes. Well, I had issue with the list refreshing and causing memory leak while using useEffect(). I&apos;m still curious about a solution not using Redux to move my states between components...</P>

        <List ml={4} my={4} >
          <ListItem>
            <Meta>Repository</Meta>
            <Link href="https://github.com/AlexandreOttmann/MERN-little-App" target="_blank">
              https://github.com/AlexandreOttmann/MERN-little-App <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>


          <ListItem>
            <Meta>Stack</Meta>
            <span><Badge bg="blue.400">Front</Badge>  React & React Router | Vite JS | Tailwind <br></br>
              &emsp;&emsp; &emsp;<Badge bg="red.400">Front</Badge>  NodeJs/Express JS | MongoDB </span>
          </ListItem>

        </List>


        <Box as='video'
          src="/videos/argonaute_example.mp4"
          autoPlay

          className="tw-inset-0 -tw-inset-y-[15em] tw-min-w-full tw-min-h-full tw-object-cover  tw-opacity-90  "
          loop
          muted
        >
        </Box>
        <Divider my={6} borderColor="grey" />


        <Modale content='MongoDB working example' source='argonautes_mongodb.png' />




      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
