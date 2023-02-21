import { Badge, Divider } from '@chakra-ui/react'

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

      <WorkImage src="/images/works/coffee_02.jpg" alt="coffee picture" />
      <span className='tw-flex tw-w-full tw-justify-end'><P className="tw-text-xs">19/02/2023 | My daily <strong className="tw-text-orange-500">Driver</strong></P></span>
      <Divider my={6} borderColor="grey" />
      <p className='tw-text-center tw-text-sm'>
        Two years ago, I went to a cupping session. Which is the same as a wine tasting session, but for coffee obviously. I tasted speciality coffee with Lichy, Citrus, or even Candy aroma. Light as tea and absolutely no bitterness or even ashes taste. I knew that I felt in love with a new passion.
      </p>
      <Divider my={6} borderColor="grey" />
      <strong className="tw-text-red-500">(work in progress)</strong><br />
      <P>
        Speciality Coffee is everything the industrial coffee you find in supermarket is not. Every unpleasent thing you taste in those, remove it and add complexity, delicatness, sweetness. Just like a tea or a wine.
      </P>


      <WorkImage src="/images/works/coffee_01.jpg" alt="coffee picture" />


      <P>And just like wine, you can describe the taste or aroma with a lot of words, from fruity to flowery. Sometime like bergamot or the contrary: chocolate, honey. When a coffee is well done, depending on its origin, you may taste sweetness with a delicate acidity. And as the temperature decrease, you may enjoy new flavors.</P>
      <Modale content='coffee picture' source='coffee_03.png' />


    </Layout >
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'