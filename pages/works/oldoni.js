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
          A quick website where I wanted to replicate a design I saw in an ad from scratch without library.
          I did it before knowing anything about web animation, one month prior to the beginnning of my courses. So it&apos;s mainly a combination of CSS and JavacSript.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://alexandreottmann.github.io/old-oni/" target="_blank">
              https://alexandreottmann.github.io/old-oni/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linus</span>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML/CSS & Javascript</span>
          </ListItem>

          <ListItem>
            <Meta>Github Repository</Meta>
            <Link href='https://github.com/AlexandreOttmann/old-oni' target="_blank">Old Oni Repo<ExternalLinkIcon mx="2px" /></Link>
          </ListItem>
        </List>




        <WorkImage src="/images/works/oldoni.gif" alt="oniaudio" />



        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/works/oldoni_design.png" alt="oniaudio" />
          <Text className="tw-text-center tw-items-center tw-m-9 tw-p-3 tw-text ">The Design behind this little project</Text>
        </SimpleGrid>

      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'