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
            <BlogGridItem id="learning" title="How I am currently learning" thumbnail={thumbOniaudio} >
              How I'm learning, what I want to learn and what I aim for
            </BlogGridItem>
          </Section>

          <Section delay={0.2}>
            <BlogGridItem id="coffee" title="Why I love Speciality Coffee" thumbnail={thumbOniaudio} >
              I'm a coffee lover, but not the one you may portray
            </BlogGridItem>
          </Section>
          <Section delay={0.2}>
            <BlogGridItem id="potery" title="An Ode to Potery" thumbnail={thumbOniaudio} >
              I recently started a new hobby...
            </BlogGridItem>
          </Section>
          <Section delay={0.4}>
            <BlogGridItem id="photo" title="My Little Gears" thumbnail={thumbOniaudio} >
              I never really liked photography until last year
            </BlogGridItem>
          </Section>

        </SimpleGrid>


      </Layout>
    </div>
  )
}

export default Blog
export { getServerSideProps } from '../components/chakra'