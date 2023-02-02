import NextLink from 'next/link'
import { Button, Container, Box, Heading, Image, useColorModeValue, Link } from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
        Hello, I&apos;m a junior developer based in Paris!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Alexandre Ottmann
          </Heading>
          <p> (Artist / Developer / SoundDesigner )</p>
        </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
          <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/alex.jpg" alt="Profile Image" />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph> Alex est actuellement étudiant en développement Web, en formation à O'clock depuis décembre 2023. Formation qui le prépare aux technologies telles Js / React / Node.js / Express / Postgres
          {' '}

          <Link href="/works/oniaudio">OniAudio</Link>

          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">BIO</Heading>
        <BioSection>
          <BioYear>1995</BioYear>
          Born in Strasbourg, France.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Completed the Abbey Road Institue School in Paris
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Worked at Koober, a French Startup developping a mobile app displaying condensed books. As an Audio Manager.
        </BioSection>
        <BioSection>
          <BioYear>2020 to Present</BioYear>
          Worked as a Sound Designer Freelance on {' '}<Link href="https://www.malt.fr/profile/alexottmann">Malt website</Link>
        </BioSection>
        <BioSection>
          <BioYear> End of 2022 to Present</BioYear>
          Started O'clock School, retraining in Web Developpement for a new Career
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music, Photography, Coffee, Potery, Learning and Dogs
        </Paragraph>
      </Section>
    </Container>

  )
}
export default Page