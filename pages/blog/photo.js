import { Badge, Divider } from '@chakra-ui/react'
import { TitleBlog, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Photo">

      <TitleBlog>
        Why I love photography now <Badge>2023</Badge>
      </TitleBlog>
      <WorkImage src="/images/works/photo_08.JPG" alt="photo picture" />
      <span className='tw-flex tw-w-full tw-justify-end'><P className="tw-text-xs">01/03/2023 | New <strong className="tw-text-orange-500">perspective</strong></P></span>
      <Divider my={6} borderColor="grey" />
      <P className='tw-mb-4'>It&apos;s just until recently, about 1 year ago that I started liking photography... It&apos;s a mix between my love for cinema and science fiction (hello BladeRunner and Dune...) with all those poetic scenery that, slowly, I began to like it and wanted to give it a try. Flooded with inspiration on YouTube, Instagram, I bought my very first camera and its lens, at the begining of january 2023. An XT-3 from Fujifilm with a 35mm 1.4f lens. <br />Nothing else. I want to start with something raw, no editing.   </P>
      <WorkImage src="/images/works/photo_01.jpg" alt="photo picture" />
      <WorkImage src="/images/works/photo_02.jpg" alt="photo picture" />
      <WorkImage src="/images/works/photo_03.jpg" alt="photo picture" />
      <WorkImage src="/images/works/photo_04.jpg" alt="photo picture" />
      <WorkImage src="/images/works/photo_05.jpg" alt="photo picture" />
      <WorkImage src="/images/works/photo_06.JPG" alt="photo picture" />
      <WorkImage src="/images/works/photo_07.JPG" alt="photo picture" />
      <WorkImage src="/images/works/photo_09.JPG" alt="photo picture" />
      <WorkImage src="/images/works/photo_10.JPG" alt="photo picture" />


    </Layout >
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'