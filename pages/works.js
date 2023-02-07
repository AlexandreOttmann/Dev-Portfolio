import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-items'
import { motion } from "framer-motion";

import thumbOniaudio from '../public/images/works/thumbOniaudio.png'
import thumbCodewars from '../public/images/works/thumbCodewars.png'
import thumbSocialdev from '../public/images/works/thumbSocialdev.png'
import thumbCsschatapp from '../public/images/works/thumbCsschatapp.png'
import thumbOldoni from '../public/images/works/thumbOldoni.png'

const Works = () => {
  return (
    <Layout title="Works">
      <Container mt={3}>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <motion.article
            className="box"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "Inertia", stiffness: 500, damping: 10 }}
          >
            <Section>
              <WorkGridItem id="oniaudio" title="OniAudio" thumbnail={thumbOniaudio} >
                A Portfolio Website for my Sound Design works
              </WorkGridItem>
            </Section>
          </motion.article>


          <motion.article
            className="box"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "Inertia", stiffness: 500, damping: 10 }}
          >
            <Section>
              <WorkGridItem id="socialdev" title="SocialDev" thumbnail={thumbSocialdev} >
                A Social Media for French Devs (WIP)
              </WorkGridItem>
            </Section>
          </motion.article>

          <motion.article
            className="box"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "Inertia", stiffness: 500, damping: 10 }}
          >
            <Section delay={0.2}>
              <WorkGridItem id="codewars" title="Codewars" thumbnail={thumbCodewars} >
                An overview of some of my algorithm works
              </WorkGridItem>
            </Section>
          </motion.article>

          <motion.article
            className="box"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "Inertia", stiffness: 500, damping: 10 }}
          >
            <Section delay={0.2}>
              <WorkGridItem id="csschatapp" title="Css-Chat-App" thumbnail={thumbCsschatapp} >
                A challenge from FrontEnd Mentor
              </WorkGridItem>
            </Section>
          </motion.article>

          <motion.article
            className="box"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "Inertia", stiffness: 500, damping: 10 }}
          >
            <Section delay={0.2}>
              <WorkGridItem id="oldoni" title="Old Oni Windows" thumbnail={thumbOldoni} >
                A challenge from FrontEnd Mentor
              </WorkGridItem>
            </Section>
          </motion.article>

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