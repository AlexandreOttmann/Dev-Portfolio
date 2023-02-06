import React from 'react'
import { Container, Box, Heading, SimpleGrid, Image } from '@chakra-ui/react'

import Paragraph from '../components/paragraph'


import Section from '../components/section'
import { BlogGridItem, GridItem } from '../components/grid-items'
import Layout from '../components/layouts/article'


import thumbOniaudio from '../public/images/works/thumbOniaudio.png'

const Blog = () => {
  return (
    <div>

      <Layout title="Blog">

        <Paragraph>
          So, here is a part of the website where you can get to know me a little bit more than just my dev' skills. This is kind of a blog where I'll post articles about stuff that I love and do. Potery, Photo, Video, Coffee and stuff. I didn't want to have a flashy website, but just something that fit who I am, in simplicity.
        </Paragraph>


        <SimpleGrid columns={[1, 1, 2]} gap={6} mt={10}>
          <Section>
            <BlogGridItem id="oniaudio" title="OniAudio" thumbnail={thumbOniaudio} >
              A Portfolio Website for my Sound Design Blogs
            </BlogGridItem>
          </Section>
          <Section>
            <BlogGridItem id="socialdev" title="SocialDev" thumbnail={thumbOniaudio} >
              A Social Media for French Devs (WIP)
            </BlogGridItem>
          </Section>

          <Section delay={0.2}>
            <BlogGridItem id="oniaudio" title="OldOni" thumbnail={thumbOniaudio} >
              A Portfolio Website for my Sound Design Blogs
            </BlogGridItem>
          </Section>
          <Section delay={0.2}>
            <BlogGridItem id="socialdev" title="SocialDev" thumbnail={thumbOniaudio} >
              A Portfolio Website for my Sound Design Blogs
            </BlogGridItem>
          </Section>

        </SimpleGrid>


      </Layout>
    </div>
  )
}

export default Blog
export { getServerSideProps } from '../components/chakra'