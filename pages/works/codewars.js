import { Container, Badge, Link, List, ListItem, SimpleGrid } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="codeWars">
      <Container mt={3}>
        <Title>
          CodeWars <Badge bg="orange.300">2022</Badge>
        </Title>
        <P>
          A Portfolio Website for my previously and still Sound Design activity.
          It&apos;s my very first fully build website that I&apos;m kinda proud of. It&apos;s beginner level since it&apos;s only using  pure Javascript but fonctionnal and responsiv.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.codewars.com/users/PetitOni/">
              https://www.codewars.com/users/PetitOni <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>


          <ListItem>
            <Meta>Language used</Meta>
            <span>Javascript / Typescript</span>
          </ListItem>

        </List>




        <WorkImage src="/images/works/oniaudio_01.png" alt="oniaudio" />
        <WorkImage src="/images/works/oniaudio_02.png" alt="oniaudio" />


        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/works/oniaudio_02.png" alt="oniaudio" />
          <P> PLACEHOLDER TEST</P>
        </SimpleGrid>

      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'