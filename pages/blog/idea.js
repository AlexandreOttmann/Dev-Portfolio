import { Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { TitleBlog, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Idea Behind">

      <TitleBlog>
        The idea behind this website <Badge>2023</Badge>
      </TitleBlog>
      <P>
        A Portfolio Website for my previously and still Sound Design activity.
        It&apos;s my very first fully build website that I&apos;m kinda proud of. It&apos;s beginner level since it&apos;s only using  pure Javascript but fonctionnal and responsiv.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://oniaudio.com/">
            Https://oniaudio.com/ <ExternalLinkIcon mx="2px" />
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




      <WorkImage src="/images/works/oniaudio_01.png" alt="oniaudio" />
      <WorkImage src="/images/works/oniaudio_02.png" alt="oniaudio" />


    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'