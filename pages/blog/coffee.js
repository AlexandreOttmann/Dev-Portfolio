import { Badge, Divider, SimpleGrid } from '@chakra-ui/react'

import { TitleBlog, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Modale from '../../components/modale'

const Work = () => {
  return (
    <Layout title="Coffee">
      <TitleBlog>
        Why I love Speciality Coffee <Badge>2023</Badge>
      </TitleBlog>

      <WorkImage src="/images/works/coffee_05.jpg" alt="coffee picture" />
      <span className='tw-flex tw-w-full tw-justify-end'><P className="tw-text-xs">19/02/2023 | My daily <strong className="tw-text-orange-500">Driver</strong></P></span>
      <Divider my={6} borderColor="grey" />

      <SimpleGrid gap={4} minChildWidth='350px' className="tw-items-center tw-mt-4">
        <WorkImage src="/images/works/coffee_04.jpg" alt="coffee picture" />
        <p className='tw-text-center tw-text-sm'>
          Some time ago, I went to a cupping session. Which is the same as a wine tasting session, but for coffee. I tasted speciality coffee with Lichy, Citrus, or even Candy aroma. Light as tea and absolutely no bitterness or even ashes taste.
        </p>
      </SimpleGrid>
      <Divider my={6} borderColor="grey" />

      <P>
        Speciality Coffee is everything the industrial coffee you find in supermarket is not. Every unpleasent thing you taste in those, remove it and add complexity, delicatness, sweetness, pleasent acidity. Just like a tea or a wine.
      </P>

      <P>And just like those two, you can describe the taste or aroma with a lot of words, from fruity to flowery. Sometime like bergamot or the contrary: chocolate, honey. When a coffee is well done, depending on its origin, you may taste sweetness with a delicate acidity. And as the temperature decrease, you may enjoy new flavors.</P>
      <Modale content='coffee picture' source='coffee_03.png' />


      <P>One of my favorite hobby is now to wander across Paris, trying to find new places, try new coffee shop, meeting people there... </P>
      <WorkImage src="/images/works/coffee_01.jpg" alt="coffee picture" />
      <WorkImage src="/images/works/coffee_02.jpg" alt="coffee picture" />
      <WorkImage src="/images/works/coffee_06.jpg" alt="coffee picture" />
      <WorkImage src="/images/works/coffee_07.jpg" alt="coffee picture" />





    </Layout >
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'