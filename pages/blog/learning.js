import { Badge, Divider, SimpleGrid } from '@chakra-ui/react'
import { TitleBlog, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Learning">

      <TitleBlog>
        How I am currently learning <Badge>2023</Badge>
      </TitleBlog>

      <WorkImage src="/images/works/learning_01.jpg" alt="learning picture" />

      <span className='tw-flex tw-w-full tw-justify-end'><P className="tw-text-xs">20/02/2023 | An empty <strong className="tw-text-orange-500">canvas</strong></P></span>
      <Divider my={6} borderColor="grey" />
      <p className='tw-text-center tw-text-sm '>So, starting a new carreer is not easy, we all know that. It&apos;s like opening a new empty room which need to be filled.
        And little did I know how vast and complex is development compare to my previous job. It&apos;s been a while since I&apos;ve been this much mentally challenged (and I love it.)
      </p>
      <Divider my={6} borderColor="grey" />

      <P>As I&apos;m writting this, it&apos;s been 3 months since I started my retraining at O&apos;Clock school. I&apos;s a remote school where we have live sessions with teachers for each notions and practicals exercices every day. I choosed this school for the stacks learned, they provid a precise range of languages and tech&apos; which are particullary used in the industry. Compare to some other schools where the technologies learned are somewhat depreciated. </P>
      <br /><p>So, here we&apos;re learning Javascript as the main Language, started with HTML/CSS, then JS. For the back we get to learn a lot more fun stuff. Here&apos;s a none exhaustiv list...</p>
      <br />
      <table className='tw-w-full'>
        <tbody>
          <tr >
            <td>Node.js</td>
            <td>Express</td>
            <td>MySQL</td>
          </tr>
          <tr>
            <td>PostGres</td>
            <td>Sequelize</td>
            <td>Axios</td>
            <td>CMS</td>
          </tr>
        </tbody>
      </table>
      <br />

      <p className='tw-text-center'> Only after all that we have to choose a &apos;<strong className="tw-text-orange-500">Speciality</strong>&apos;<br />
        <strong className="tw-text-teal-500">Back</strong> or <strong className="tw-text-blue-500">Front</strong></p>
      <P>Either React and Redux the front-end or Data learning with GraphQL, IA, MongoDB, Redis for the back-end...</P>
      <Divider my={6} borderColor="grey" />

      <WorkImage src="/images/works/learning_03.JPG" alt="learning picture" />
      <p className='tw-text-center'> What am I adding over school ? </p><br />
      <P>Long story short, i&apos;m choosing <strong className="tw-text-teal-500">Back</strong> Speciality because it&apos;s where I&apos;m lacking the most. I&apos;m <em className="tw-text-orange-500">currently learning React</em> and this is where the fun begin.
        Because I can&apos;t stick to just what the school is teaching me if I want to be competitive.</P><br />


      <SimpleGrid minChildWidth='350px' gap={2}>
        <p>I&apos;ll have to learn so much more and I can&apos;t afford to waste time.
          So, aside from school I use evenings and nights to learn  <em className="tw-text-rose-400  ">React</em>  for now, then <em className="tw-text-teal-500">Next</em> and of course <em className="tw-text-rose-400">Typescript</em> since it&apos;s becoming the new standard. I already put a step toward <em className="tw-text-teal-500">Tailwind, Chakra UI and Material UI</em> too as you can see on this website. <em className="tw-text-rose-400">Redux</em> is coming right after it.
          Furthemore, algorithm studies are a little part of each week too.
          Only after becoming way more efficient, I&apos;ll try to dig something that I know I&apos;ll love, <em className="tw-text-teal-500">Three.js</em>
        </p>
        <WorkImage src="/images/works/learning_02.jpg" alt="learning picture 2" />
      </SimpleGrid>
      <br />

      <p>To conclude, for now I see myself as a blank canvas, I&apos;m learning a lot of new things and it&apos;s exciting. I eager to find a new job where I&apos;ll focus on their technology and become my future self developer. </p>
      <br />
    </Layout >
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'