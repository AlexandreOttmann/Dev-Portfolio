import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-items'

import thumbOniaudio from '../public/images/works/thumbOniaudio.png'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="oniaudio" title="OniAudio" thumbnail={thumbOniaudio}>
            A Portfolio Website for my Sound Design works
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works