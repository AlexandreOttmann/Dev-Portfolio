import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-items'
import Layout from '../components/layouts/article'


import thumbOniaudio from '../public/images/works/thumbOniaudio.png'

const Works = () => {
  return (
    <Layout>
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
              A Portfolio Website for my Sound Design works
            </WorkGridItem>
          </Section>

          <Section delay={0.2}>
            <WorkGridItem id="oniaudio" title="OniAudio" thumbnail={thumbOniaudio} >
              A Portfolio Website for my Sound Design works
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem id="socialdev" title="SocialDev" thumbnail={thumbOniaudio} >
              A Portfolio Website for my Sound Design works
            </WorkGridItem>
          </Section>

        </SimpleGrid>

        {/* Deuxième Section :  */}
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