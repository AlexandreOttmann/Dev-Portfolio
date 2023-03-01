import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import { motion } from "framer-motion";

import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { BlogGridItem } from '../components/grid-items'
import Layout from '../components/layouts/article'



import thumbPoterie from '../public/images/works/thumbPoterie.jpg'
import thumbCoffee from '../public/images/works/thumbCoffee.jpg'
import thumbLearning from '../public/images/works/thumbLearning.jpg'
import thumbIdeaBehind from '../public/images/works/thumbIdeaBehind.jpg'
import thumbGears from '../public/images/works/thumbGears.jpg'


const Blog = () => {
  return (
    <div>

      <Layout title="Blog">

        <Paragraph >
          So, here is a part of the website where you can get to know me a little bit more than just my dev&apos; skills. This is kind of a blog where I&apos;ll post articles about stuff that I love and do. Potery, Photo, Video, Coffee. <br />I didn&apos;t want to have a flashy website, but just something that show who I am, in <span className="tw-text-orange-500">simplicity.</span>
        </Paragraph>


        <SimpleGrid columns={[1, 1, 2]} gap={6} mt={10} >

          <motion.article
            className="box"
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.02
            }}
            transition={{ type: "Inertia", stiffness: 500, damping: 10 }}
          >
            <Section>
              <BlogGridItem id="idea" title="The idea behind this Website" className="tw-text " thumbnail={thumbIdeaBehind} >
                How I made this Website
              </BlogGridItem>
            </Section>
          </motion.article>

          <motion.article
            className="box"
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.02
            }}
            transition={{ type: "Inertia", stiffness: 500, damping: 10 }}

          >
            <Section>
              <BlogGridItem id="learning" title="How I am currently learning" thumbnail={thumbLearning} >
                How I&apos;m learning, what I want to learn and what I aim for
              </BlogGridItem>
            </Section>
          </motion.article>

          <motion.article
            className="box"
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.02

            }}
            transition={{ type: "Inertia", stiffness: 500, damping: 10 }}
          >
            <Section delay={0.2}>
              <BlogGridItem id="coffee" title="Why I love Speciality Coffee" thumbnail={thumbCoffee} >
                I&apos;m a coffee lover, but not the one you may portray
              </BlogGridItem>
            </Section>
          </motion.article>

          <motion.article
            className="box"
            whileTap={{ scale: 0.9 }}

            whileHover={{
              scale: 1.02

            }}
            transition={{ type: "Inertia", stiffness: 500, damping: 10 }}
          >
            <Section delay={0.2}>
              <BlogGridItem id="potery" title="An Ode to Potery" thumbnail={thumbPoterie} >
                I recently started a new hobby...
              </BlogGridItem>
            </Section>
          </motion.article>

          <motion.article
            className="box"
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.02


            }}
            transition={{ type: "Inertia", stiffness: 500, damping: 10 }}
          >
            <Section delay={0.4}>
              <BlogGridItem id="photo" title="Some of my pictures" thumbnail={thumbGears} >
                I never really liked photography until last year
              </BlogGridItem>
            </Section>
          </motion.article>

        </SimpleGrid>


      </Layout>
    </div>
  )
}

export default Blog
export { getServerSideProps } from '../components/chakra'