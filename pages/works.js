import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-items'
import { motion } from "framer-motion";

import thumbArgonautes from '../public/images/works/thumbArgonautes.png'
import thumbInvoice from '../public/images/works/thumbInvoice.png'
import thumbOniaudio from '../public/images/works/thumbOniaudio.png'
import thumbCodewars from '../public/images/works/thumbCodewars.png'
import thumbSocialdev from '../public/images/works/thumbSocialdev.png'
import thumbCsschatapp from '../public/images/works/thumbCsschatapp.png'
import thumbOldoni from '../public/images/works/thumbOldoni.png'
import thumbPlayground from '../public/images/works/thumbPlayground.jpg'
import thumbCodetracker from '../public/images/works/thumbCodetracker.png'

import Page_Under_Construction from '../public/images/UnderConstruction.png'



const Works = () => {
  return (
    <Layout title="Works">
      <Container mt={3}>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>

          {/* //! CODETRACKER */}
          <motion.article
            className="box"
            whileTap={{
              scale: 0.9,
              boxShadow: "2px 2px 0  rgba(0, 0, 0, 0.1)",
            }}
            whileHover={{
              y: -10,
              x: -10,
              scale: 1.05,
              boxShadow: "10px 10px 0  rgba(0, 0, 0, 0.2)",
            }}
            transition={{ type: "Inertia", stiffness: 500, damping: 10 }}>
            <Section>
              <WorkGridItem id="codetracker" title="CodeTracker" thumbnail={thumbCodetracker} >
                A project I&apos;m <span className='tw-text-orange-400'>currently working on</span>. Identification with Github, Tracking your projects/commits and displaying your stats.
              </WorkGridItem>
            </Section>
          </motion.article>

          {/* //! INVOICE */}
          <motion.article
            className="box"
            whileTap={{
              scale: 0.9,
              boxShadow: "2px 2px 0  rgba(0, 0, 0, 0.1)",
            }}
            whileHover={{
              y: -10,
              x: -10,
              scale: 1.05,
              boxShadow: "10px 10px 0  rgba(0, 0, 0, 0.2)",
            }}
            transition={{ type: "Inertia", stiffness: 500, damping: 10 }}>
            <Section>
              <WorkGridItem id="invoice" title="Invoice Generator" thumbnail={thumbInvoice} >
                An Invoice generator in PDF using only React
              </WorkGridItem>
            </Section>
          </motion.article>


          {/* //! ARGONAUTES */}
          <motion.article
            className="box"
            whileTap={{
              scale: 0.9,
              boxShadow: "2px 2px 0  rgba(0, 0, 0, 0.1)",
            }}
            whileHover={{
              y: -10,
              x: -10,
              scale: 1.05,
              boxShadow: "10px 10px 0  rgba(0, 0, 0, 0.2)",
            }}
            transition={{ type: "Inertia", stiffness: 500, damping: 10 }}>
            <Section>
              <WorkGridItem id="argonautes" title="Argonautes" thumbnail={thumbArgonautes} >
                A MERN app with Front & Back to MongodDB
              </WorkGridItem>
            </Section>
          </motion.article>

          {/* //! PORTFOLIO AUDIO */}
          <motion.article
            className="box"
            whileTap={{
              scale: 0.9,
              boxShadow: "0px 2px 0  rgba(0, 0, 0, 0.1)",
            }}
            whileHover={{
              y: -10,
              x: -10,
              scale: 1.05,
              boxShadow: "10px 10px 0  rgba(0, 0, 0, 0.2)",
            }}
            transition={{ type: "Inertia", stiffness: 500, damping: 10 }}>
            <Section>
              <WorkGridItem id="oniaudio" title="OniAudio" thumbnail={thumbOniaudio} >
                A Portfolio Website for my Sound Design works
              </WorkGridItem>
            </Section>
          </motion.article>

          {/* //! SOCIALDEV */}
          <motion.article
            className="box"
            whileTap={{
              scale: 0.9,
              boxShadow: "2px 2px 0  rgba(0, 0, 0, 0.1)",
            }}
            whileHover={{
              y: -10,
              x: -10,
              scale: 1.05,
              boxShadow: "10px 10px 0  rgba(0, 0, 0, 0.2)",
            }}
            transition={{ type: "Inertia", stiffness: 500, damping: 10 }}>
            <Section>
              <WorkGridItem id="socialdev" title="SocialDev" thumbnail={thumbSocialdev} >
                A Social Media for French Devs (WIP)
              </WorkGridItem>
            </Section>
          </motion.article>


          {/* //! ALGORITHM */}
          <motion.article
            className="box"
            whileTap={{
              scale: 0.9,
              boxShadow: "2px 2px 0  rgba(0, 0, 0, 0.1)",
            }}
            whileHover={{
              y: -10,
              x: -10,
              scale: 1.05,
              boxShadow: "10px 10px 0  rgba(0, 0, 0, 0.2)",
            }}
            transition={{ type: "Inertia", stiffness: 500, damping: 10 }}>
            <Section delay={0.2}>
              <WorkGridItem id="codewars" title="Codewars" thumbnail={thumbCodewars} >
                An overview of some of my algorithm works
              </WorkGridItem>
            </Section>
          </motion.article>

          {/* //! Old ONI */}
          <motion.article
            className="box"
            whileTap={{
              scale: 0.9,
              boxShadow: "2px 2px 0  rgba(0, 0, 0, 0.1)",
            }}
            whileHover={{
              y: -10,
              x: -10,
              scale: 1.05,
              boxShadow: "10px 10px 0  rgba(0, 0, 0, 0.2)",
            }}
            transition={{ type: "Inertia", stiffness: 500, damping: 10 }}>
            <Section delay={0.2}>
              <WorkGridItem id="oldoni" title="Old Oni Windows" thumbnail={thumbOldoni} >
                A challenge from FrontEnd Mentor
              </WorkGridItem>
            </Section>
          </motion.article>
          {/* //! CSSCHAT */}
          <motion.article
            className="box"
            whileTap={{
              scale: 0.9,
              boxShadow: "2px 2px 0  rgba(0, 0, 0, 0.1)",
            }}
            whileHover={{
              y: -10,
              x: -10,
              scale: 1.05,
              boxShadow: "10px 10px 0  rgba(0, 0, 0, 0.2)",
            }}
            transition={{ type: "Inertia", stiffness: 500, damping: 10 }}>
            <Section delay={0.2}>
              <WorkGridItem id="csschatapp" title="Css-Chat-App" thumbnail={thumbCsschatapp} >
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
          <motion.article
            className="box"
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.05,
            }}
            transition={{ type: "Inertia", stiffness: 500, damping: 10 }}>
            <Section delay={1}>

              <WorkGridItem id="UnderConstruction" title="" thumbnail={Page_Under_Construction}>
                👹 Started coding in Decembre, All my work is above... But you can check my 404 👹
              </WorkGridItem>
            </Section>
          </motion.article>


          <motion.article
            className="box"
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.05,
            }}
            transition={{ type: "Inertia", stiffness: 500, damping: 10 }}>
            <Section delay={1}>
              <WorkGridItem id="playground" title="Playground" thumbnail={thumbPlayground} >
                👹 Be curious at your own risk 👹
              </WorkGridItem>
            </Section>
          </motion.article>

        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
export { getServerSideProps } from '../components/chakra'