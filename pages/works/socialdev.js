import { Container, Badge, Link, List, ListItem, Divider } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="SocialDev">
      <Container mt={3}>
        <Title>
          SocialDev <Badge>2023</Badge>
        </Title>
        <P>
          SocialDev is currently a Work in Progress which I&apos;m building with my friend <Link href="https://github.com/frontcodelover" target="_blank">Nicolas de RAEMY</Link>.
          It&apos;s as social network for devs where you can post articles and interact with others through commenting and messaging.
          We&apos;re using React for the front and designing with Tailwind. The back will be made with MongoDB through Express.
        </P>

        <List ml={4} my={4}>
          <Divider />
          <br />
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linus</span>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span><Badge bg="blue.400">Front</Badge>  React & React Router | Vite TS | Tailwind <br></br>
              &emsp;&emsp; &emsp;  <Badge bg="red.400">Front</Badge>  Express JS | MongoDB </span>
          </ListItem>

          <ListItem>
            <Meta>Github Repository</Meta>
            <Link href='https://github.com/frontcodelover/socialdev'>SocialDev Repo<ExternalLinkIcon mx="2px" /></Link>
          </ListItem>
        </List>




        <WorkImage src="/images/works/thumbSocialdev.png" alt="oniaudio" />





      </Container>
    </Layout >
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'