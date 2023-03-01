import { Badge, Link, List, ListItem, Divider, SimpleGrid } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { TitleBlog, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Idea Behind">

      <TitleBlog>
        The idea behind this website <Badge>2023</Badge>
      </TitleBlog>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next/React | ChakraUI | MotionFramer</span>
        </ListItem>
        <ListItem>
          <Meta>Github Repository</Meta>
          <Link href='https://github.com/AlexandreOttmann/Dev-Portfolio' target="_blank">Alex Dev Portfolio Repo<ExternalLinkIcon mx="2px" /></Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/idea_01.jpg" alt="learning picture" />
      {/* {/* <WorkImage src="/images/works/oniaudio_01.png" alt="oniaudio" /> */}
      <span className='tw-flex tw-w-full tw-justify-end'><P className="tw-text-xs">15/02/2023 | Just an <strong className="tw-text-orange-500">idea</strong></P></span>
      <Divider my={6} borderColor="grey" />


      <P>
        So, we all saw those flashy and beautiful web developper portfolios. Let&apos;s be honest, I&apos;m nowhere near this level as a junior. I need to focus on what&apos;s the most usefull to learn, to become an ace for a futur recruiter.
        <br />
        The road will be long enough to take time building good foundation.
      </P>
      <SimpleGrid gap={4} minChildWidth='350px' className="tw-items-center tw-mt-4">

        <WorkImage src="/images/works/idea_02.JPG" alt="learning picture" />
        <P className=" ">
          They are not building shinny portfolio but <em className="tw-text-teal-500">stable architectures</em>. This is what this portfolio want to display.
          It is built with React and Next.Js, using ChakraUI for the styling and Tailwind over it for fine tuning. Deliberately simple and minimalistic. I want to show a fully functionnal, responsive and beautiful portfolio, emphasizing on the content, showing what I can do for now and showing who I am too. And particulary displaying my capacity to learn.</P>
      </SimpleGrid>


      <SimpleGrid gap={4} minChildWidth='350px' className="tw-items-center tw-mt-4">
        <P>3 months behind I wasn&apos;t able to do a single Algorithm, nor build a single HTML web page. And I&apos;m now digging React, creating my own portfolio. I discovered those last months a big desire to learn and spend most of my time for it. I think it&apos;s a really big part of what make me think that I made the right choice, learning web development.
        </P>
        <WorkImage src="/images/works/idea_03.JPG" alt="learning picture" />
      </SimpleGrid>
      <span className='tw-flex tw-w-full tw-justify-center tw-mb-10'><P className="tw-text-xl">Set <strong className="tw-text-orange-500">Sail !</strong></P></span>










    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'