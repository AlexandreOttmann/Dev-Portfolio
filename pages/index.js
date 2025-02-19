import NextLink from 'next/link'
import { Button, Text, Container, Box, Heading, Image, useColorModeValue, Link, List, ListItem, SimpleGrid, GridItem } from "@chakra-ui/react"
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5'
import { SiAdobeaftereffects, SiAdobepremierepro, SiProtools, SiApplemusic, SiTailwindcss, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiPostgresql, SiMysql, SiTypescript, SiMongodb, SiNextdotjs, SiChakraui, SiNuxtdotjs, SiVuedotjs, SiVuetify, SiSupabase, SiMaterialui, SiStripe, SiD3Dotjs, SiDocker, SiGraphql } from "react-icons/si";
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
          Hello, I&apos;m a Developer based in Paris!
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
          <Paragraph> My name is Alexandre, I&apos;m currently working in Web Development since December 2022. Mainly in Nuxt but I love to explore new frameworks and tools.<br></br> You can see some of my works here and a Blog section to know more about me. I&apos;m looking for an<span className="tw-text-orange-500"> new full-time opportunity</span> starting as soon as possible. Feel free to send me a message! 👹     {' '}
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
                My work
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            The Techs I use at work
          </Heading>

          <Box align="center" my={4} pt={4}>
            <SimpleGrid columns={[4, null, 6]} gap={4} >

              <GridItem className='tw-break-normal' ><SiJavascript /> Javascript</GridItem>
              <GridItem className='tw-break-normal' ><SiTypescript /> Typescript</GridItem>
              <GridItem className='tw-break-normal' ><SiNuxtdotjs /> NuxtJs</GridItem>
              <GridItem className='tw-break-normal' ><SiVuedotjs /> VueJs</GridItem>
              <GridItem className='tw-break-normal' ><SiVuetify /> Vuetify</GridItem>
              <GridItem className='tw-break-normal' ><SiSupabase /> Supabase</GridItem>
              <GridItem className='tw-break-normal'><SiNodedotjs /> NodeJs</GridItem>
              <GridItem className='tw-break-normal'><SiPostgresql />PostgreSQL</GridItem>
              <GridItem className='tw-break-normal' ><SiMysql /> MySQL</GridItem>
              <GridItem className='tw-break-normal' ><SiStripe /> Stripe</GridItem>
              <GridItem className='tw-break-normal' ><SiD3Dotjs /> D3</GridItem>
             
             
            </SimpleGrid>

          </Box>

          <Heading as="h3" variant="section-title">
            The Techs I learned for study
          </Heading>
          <Box align="center" my={4} pt={4}>
            <SimpleGrid columns={[4, null, 6]} gap={4} >
              <GridItem className='tw-break-normal' ><SiReact /> ReactJs</GridItem>
              <GridItem className='tw-break-normal'><SiExpress />Express</GridItem>
              <GridItem className='tw-break-normal' ><SiMongodb /> MongoDB</GridItem>
              <GridItem className='tw-break-normal'><SiNextdotjs /> NextJs</GridItem>
              <GridItem className='tw-break-normal'><SiTailwindcss /> Tailwind</GridItem>
              <GridItem className='tw-break-normal'><SiChakraui /> ChakraUI</GridItem>
              <GridItem className='tw-break-normal'><SiMaterialui /> MaterialUI</GridItem>
              <GridItem className='tw-break-normal'><SiGraphql /> GraphQL</GridItem>
              <GridItem className='tw-break-normal'><SiDocker /> Docker</GridItem>

            </SimpleGrid>
          </Box>
        </Section>

        <Section delay={0.5}>
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
            Worked at Koober, a French Startup developping a mobile app displaying condensed books. As an Audio Manager for 3 years
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Worked as a Sound Designer Freelance on {' '}<Link href="https://www.malt.fr/profile/alexottmann" target="_blank">Malt website</Link> for 3 years
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            6 months cursus at O&apos;clock School to learn Web Development
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            1 year apprenticeship at Wild Code School with Quanted Square
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            Full-Time Job at Quanted Square working on 3 differents projects until summer 2025 and got a dog
          </BioSection>
          <BioSection>
            <BioYear> Present :</BioYear>
            <Text bgGradient='linear(to-r, #90CDF4, #FF0080)'
              bgClip='text'>
             <span className='tw-px-20'> Looking for new opportunities to pursue my career.</span> 
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
          <Box align="center" my={4}>
            <a href="/CV-AlexandreOttmann.pdf" target='_blank'>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
                Download my CV
              </Button>
            </a>
          </Box>
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
                  @ottmann.alex@gmail.com
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