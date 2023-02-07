import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'

import Paragraph from '../components/paragraph'


import Section from '../components/section'
import { BlogGridItem } from '../components/grid-items'
import Layout from '../components/layouts/article'


import thumbOniaudio from '../public/images/works/thumbOniaudio.png'

const Blog = () => {
  return (
    <div>

      <Layout title="Blog">

        <Paragraph>
          So, here is a part of the website where you can get to know me a little bit more than just my dev&apos; skills. This is kind of a blog where I&apos;ll post articles about stuff that I love and do. Potery, Photo, Video, Coffee. I didn&apos;t want to have a flashy website, but just something that show who I am, in simplicity.
        </Paragraph>


        <SimpleGrid columns={[1, 1, 2]} gap={6} mt={10}>
          <Section>
            <BlogGridItem id="idea" title="The idea behind this Website" thumbnail={thumbOniaudio} >
              How I made this Website
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