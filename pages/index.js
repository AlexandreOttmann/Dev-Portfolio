import NextLink from 'next/link'
import { Button, Text, Container, Box, Heading, Image, useColorModeValue, Link, List, ListItem, SimpleGrid, GridItem } from "@chakra-ui/react"
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5'
import { SiAdobeaftereffects, SiAdobepremierepro, SiProtools, SiApplemusic, SiTailwindcss, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiPostgresql, SiMysql, SiTypescript, SiMongodb, SiNextdotjs, SiChakraui } from "react-icons/si";
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
          <Paragraph> My name is Alexandre, I&apos;m currently learning Web Development at O&apos;clock School since December 2022, ending in May 2023. You can see some of my works here and a Blog section to know more about me. I&apos;m looking for an<span className="tw-text-orange-500"> apprenticeship</span> starting this summer. Feel free to send me a message! 👹     {' '}
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
            The Techs I use
          </Heading>

          <Box align="center" my={4} pt={4}>
            <SimpleGrid columns={[4, null, 6]} gap={4} >

              <GridItem className='tw-break-normal' ><SiJavascript /> Javascript</GridItem>
              <GridItem className='tw-break-normal' ><SiTypescript /> Typescript</GridItem>
              <GridItem className='tw-break-normal' ><SiReact /> ReactJs</GridItem>
              <GridItem className='tw-break-normal'><SiNodedotjs /> NodeJs</GridItem>
              <GridItem className='tw-break-normal'><SiExpress />Express</GridItem>
              <GridItem className='tw-break-normal'><SiPostgresql />PostgreSQL</GridItem>
              <GridItem className='tw-break-normal' ><SiMysql /> MySQL</GridItem>
              <GridItem className='tw-break-normal' ><SiMongodb /> MongoDB</GridItem>
              <GridItem className='tw-break-normal'><SiNextdotjs /> NextJs</GridItem>
              <GridItem className='tw-break-normal'><SiTailwindcss /> Tailwind</GridItem>
              <GridItem className='tw-break-normal'><SiChakraui /> ChakraUI</GridItem>
              <GridItem className='tw-break-normal'>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M20.229 15.793a.666.666 0 0 0 .244-.243.666.666 0 0 0 .09-.333l.012-3.858a.666.666 0 0 1 .09-.333.666.666 0 0 1 .245-.243L23 9.58a.667.667 0 0 1 .333-.088.667.667 0 0 1 .333.09.667.667 0 0 1 .244.243.666.666 0 0 1 .089.333v7.014a.667.667 0 0 1-.335.578l-7.893 4.534a.666.666 0 0 1-.662 0l-6.194-3.542a.667.667 0 0 1-.246-.244.667.667 0 0 1-.09-.335v-3.537c0-.004.004-.006.008-.004s.008 0 .008-.005v-.004c0-.003.002-.005.004-.007l5.102-2.93c.004-.003.002-.01-.003-.01a.005.005 0 0 1-.004-.002.005.005 0 0 1-.001-.004l.01-3.467a.667.667 0 0 0-.333-.58.667.667 0 0 0-.667 0L8.912 9.799a.667.667 0 0 1-.665 0l-3.804-2.19a.667.667 0 0 0-.999.577v6.267a.667.667 0 0 1-.332.577.666.666 0 0 1-.332.09.667.667 0 0 1-.333-.088L.336 13.825a.667.667 0 0 1-.246-.244.667.667 0 0 1-.09-.336L.019 2.292a.667.667 0 0 1 .998-.577l7.23 4.153a.667.667 0 0 0 .665 0l7.228-4.153a.666.666 0 0 1 .333-.088.666.666 0 0 1 .333.09.667.667 0 0 1 .244.244.667.667 0 0 1 .088.333V13.25c0 .117-.03.232-.089.334a.667.667 0 0 1-.245.244l-3.785 2.18a.667.667 0 0 0-.245.245.666.666 0 0 0-.089.334.667.667 0 0 0 .09.334.666.666 0 0 0 .247.244l2.088 1.189a.67.67 0 0 0 .33.087.667.667 0 0 0 .332-.089l4.457-2.56Zm.438-9.828a.666.666 0 0 0 .09.335.666.666 0 0 0 .248.244.667.667 0 0 0 .67-.008l2.001-1.2a.666.666 0 0 0 .237-.243.667.667 0 0 0 .087-.329V2.32a.667.667 0 0 0-.091-.335.667.667 0 0 0-.584-.33.667.667 0 0 0-.334.094l-2 1.2a.666.666 0 0 0-.238.243.668.668 0 0 0-.086.329v2.445Z"></path></svg>MaterialUI</GridItem>
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