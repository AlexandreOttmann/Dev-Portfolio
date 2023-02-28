import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="CssChatApp">
      <Container mt={3}>
        <Title>
          OniAudio <Badge>2022</Badge>
        </Title>
        <P>
          Well... This is my very first integration from a front-end mentor challenge after a week at school. As you can see it&apos;s quite simple and very frankly it&apos;s a bit of a mess, like a lot of div elements inside each other.
          But it&apos;s honest work I guess !
        </P>
        <List ml={4} my={4}>




          <ListItem>
            <Meta>Stack</Meta>
            <span>Html/Css</span>
          </ListItem>

          <ListItem>
            <Meta>Github Repository</Meta>
            <Link href='https://github.com/AlexandreOttmann/Css-Chat-app-Illustration'>Chat-App Repo<ExternalLinkIcon mx="2px" /></Link>
          </ListItem>
        </List>



        <WorkImage src="/images/works/thumbCsschatapp.png" alt="chat app" />
        Be careful, it&apos;s absolutely not responsiv...
        <WorkImage src="/images/works/dogs1.png" alt="zoomed view chat app" />
        That&apos;s how I learned from this mistake...




      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'