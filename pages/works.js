import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-items'


import thumbOniaudio from '../public/images/works/thumbOniaudio.png'

const Works = () => {
  return (
    <Layout title="Works">
      <Container mt={3}>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="oniaudio" title="OniAudio" thumbnail={thumbOniaudio} >
              A Portfolio Website for my Sound Design works
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="socialdev" title="SocialDev" thumbnail={thumbOniaudio} >
              A Social Media for French Devs (WIP)
            </WorkGridItem>
          </Section>

          <Section delay={0.2}>
            <WorkGridItem id="oldoni" title="OldOni" thumbnail={thumbOniaudio} >
              A Portfolio Website for my Sound Design works
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem id="csschatapp" title="Css-Chat-App" thumbnail={thumbOniaudio} >
              A Portfolio Website for my Sound Design works
            </WorkGridItem>
          </Section>

        </SimpleGrid>


        <Section delay={0.5}>
          <Divider my={6} borderColor="grey" />

          <Heading as="h3" fontSize={20} mb={4}>
            Other works
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={1}>
            <WorkGridItem id="oniaudio" title="OniAudio" thumbnail={thumbOniaudio}>
              A Portfolio Website for my Sound Design works
            </WorkGridItem>
          </Section>
          <Section delay={1}>
            <WorkGridItem id="socialdev" title="SocialDev" thumbnail={thumbOniaudio}>
              A Portfolio Website for my Sound Design works
            </WorkGridItem>

          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
export { getServerSideProps } from '../components/chakra'