import { Container, Badge, Link, List, ListItem, SimpleGrid, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="OniAudio">
      <Container mt={3}>
        <Title>
          OniAudio <Badge>2023</Badge>
        </Title>
        <P>
          A Portfolio Website for my previously and still Sound Design activity.
          It&apos;s my very first fully build website that I&apos;m kinda proud of. It&apos;s beginner level since it&apos;s only using  pure Javascript but fonctionnal and responsiv.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://oniaudio.com/">
              https://oniaudio.com/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linus</span>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>Html/Css & Javascript with GSAP for cards animations</span>
          </ListItem>

          <ListItem>
            <Meta>Github Repository</Meta>
            <Link href='https://github.com/AlexandreOttmann/Oni-Audio'>Oni-Audio Repo<ExternalLinkIcon mx="2px" /></Link>
          </ListItem>
        </List>




        <WorkImage src="/images/works/oniaudioGif.gif" alt="oniaudio" />



        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/works/oniaudio_02.png" alt="oniaudio" />
          <Text className="tw-text-center tw-items-center tw-m-9 tw-p-3 tw-text tw-border">Mobile view, card aligned vertically </Text>
        </SimpleGrid>

      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'