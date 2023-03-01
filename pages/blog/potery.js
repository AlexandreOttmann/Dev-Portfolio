import { Badge, Divider, SimpleGrid, Box } from '@chakra-ui/react'
import { TitleBlog, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Potery">

      <TitleBlog>
        An Ode to potery<Badge>2023</Badge>
      </TitleBlog>

      <WorkImage src="/images/works/thumbPoterie.jpg" alt="potery picture" />
      <span className='tw-flex tw-w-full tw-justify-end'><P className="tw-text-xs">29/02/2023 | My own <strong className="tw-text-orange-500">meditation</strong></P></span>

      <Divider my={6} borderColor="orange" />

      <SimpleGrid gap={4} minChildWidth='350px' className="tw-items-start tw-mt-4      ">
        <Box><p className='tw-text-end tw-text-sm '>I never liked meditation. Or, to be more precise, I&apos;m not able to meditate in it&apos;s standard form. Introspection, motionless, static. It was never my thing.
        </p>
          <Divider my={6} borderColor="orange" opacity={0} />
          <p className='tw-text-end tw-text-sm'>
            Then 1 year ago, I did a potery initiation. 2 hours and a half in a nice light place filled with students production.
            Jazz music in the back, sun on our hands. After teaching us the first movements, the teacher just let us feel the motion of the tour. Trying to concentrate on the feeling of the rotating lump of earth. And yup, it was  quite unique.
          </p>
        </Box>

        <Box as='video'
          src="/videos/potery_example.mp4"
          autoPlay
          className="tw-rounded-xl tw-inset-0 -tw-inset-y-[15em] tw-min-w-full tw-min-h-full tw-object-cover  tw-opacity-90  "
          loop
          muted
        >
        </Box>

      </SimpleGrid>
      <Divider my={6} borderColor="orange" />

      <P className='tw-mb-3'>

        I have a mind that is working non-stop. It&apos;s very uncommon for me to find a peace state. But with this new activity,
        it&apos;s finally a moment where I can think of nothing else but one thing. And in the focus of this action, it feels for me like a meditation because there&apos;s just no other noises, parasitc ideas. No other thought than thinking about control and the movement of the tour. What I want to achieve, and what I need to do to close the distance with where I&apos;m at.
      </P>

      <WorkImage src="/images/works/potery_03.jpg" alt="potery picture" />
      <WorkImage src="/images/works/potery_04.jpg" alt="potery picture" />
      <Divider my={6} borderColor="orange" />
      <P>
        And more than that. The achievement! A final product made by your own hand, always beautiful and full of your own craftmanship. Just like a little art piece. I&apos;m now making batch of new pieces, and giving it away with joy (can&apos;t really keep everything...)
      </P>
      <Divider my={6} borderColor="orange" />
      <WorkImage src="/images/works/potery_02.jpg" alt="potery picture" />
    </Layout >
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'