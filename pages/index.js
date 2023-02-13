import NextLink from 'next/link'
import { Button, Text, Container, Box, Heading, Image, useColorModeValue, Link, List, ListItem } from "@chakra-ui/react"
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5'
import { SiAdobeaftereffects, SiAdobepremierepro, SiProtools, SiApplemusic } from "react-icons/si";
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Layout>
      <Container mt={3}>
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
            About me
          </Heading>
          <Paragraph> My name is Alexandre, I&apos;m currently learning Web Development at O&apos;clock School since December 2023. Studies that train me on Javascript / React / Node.js / Express and PostgreSQL/MySQL. Aside from those, I&apos;m learning Typescript, Tailwind, MongoDB, NextJs and slowly falling in love with Algorithms.          {' '}


          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
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
            Worked as a Sound Designer Freelance on {' '}<Link href="https://www.malt.fr/profile/alexottmann" target="_blank">Malt website</Link>
          </BioSection>
          <BioSection>
            <BioYear> End of 2022 to Present :</BioYear>
            <Text bgGradient='linear(to-l, #90CDF4, #FF0080)'
              bgClip='text'>
              Started O&apos;clock School, retraining in Web Development for a new Career
            </Text>
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

        <Section delay={0.5}>

          <Heading as="h3" variant="section-title">
            Additionnal software that I use
          </Heading>
          <Button fontSize='sm' leftIcon={<SiAdobeaftereffects />} variant="ghost">After Effect</Button>|<Button fontSize='sm' leftIcon={<SiAdobepremierepro />} variant="ghost">Premiere Pro</Button>|<Button fontSize='sm' leftIcon={<SiProtools />} variant="ghost">Protools</Button>|<Button fontSize='sm' leftIcon={<SiApplemusic />} variant="ghost">Logic Pro</Button>
        </Section>


        <Section delay={0.8}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="mailto:ottmann.alex@gmail.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoMail />}
                >
                  @ottmann.alex
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://www.linkedin.com/in/alexandre-ottmann/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  @Alexandre-Ottmann
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://github.com/AlexandreOttmann" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @AlexandreOttmann
                </Button>
              </Link>
            </ListItem>


            <ListItem>
              <Link href="https://instagram.com/alex.ottmann" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @alex.ottmann
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>


      </Container>
    </Layout >

  )
}
export default Page
export { getServerSideProps } from '../components/chakra'