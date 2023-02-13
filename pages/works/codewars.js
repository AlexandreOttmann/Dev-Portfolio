import {
  Container, Badge, Link, List, ListItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Divider
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import React from 'react'

const Work = () => {
  const modal1 = useDisclosure();
  const modal2 = useDisclosure();
  const modal3 = useDisclosure();
  // const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Layout title="codeWars">
      <Container mt={3}>
        <Title>
          CodeWars <Badge bg="purple.300">2022</Badge>
        </Title>
        <WorkImage src="/images/codewars_badge.svg" />
        <P>
          Well, this is definitely not a website I built or anything but just some algorithms achievement I made on the website
          <Link href="https://www.codewars.com/" target="_blank"> Codewars</Link>.
          I started learning algorithms with javascript late december 2022 and took a liking to it. Discovering new methods trough katas and puzzles solving.
        </P>

        <List ml={4} my={4} >
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.codewars.com/users/PetitOni/" target="_blank">
              https://www.codewars.com/users/PetitOni <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          {/* &apos; */}
          <ListItem>
            <Meta>Language used</Meta>
            <span>Javascript / Typescript</span>
          </ListItem>

        </List>



        <P className='tw-pb-5'> This portfolio website is a little bit of a show off so here are 2 of the hardest katas I did...  Well, it was obviously hard at my level!</P>
        <br />

        <div className='tw-text-center'>Kata One - Working with array : Pyramid Slide Down</div>
        <WorkImage src="/images/works/codewars_example.png" alt="first example" />
        <Link onClick={modal1.onOpen}>
          <WorkImage src="/images/works/codewars_example_code.png" alt="first example code" />
        </Link>
        {/* FIRST MODAL */}
        <Modal isCentered isOpen={modal1.isOpen} onClose={modal1.onClose} size={'4xl'}>
          <ModalOverlay />
          <ModalContent onClick={modal1.onClose}>

            <ModalHeader>Code of this kata</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <WorkImage onClick={modal1.onClose} src="/images/works/codewars_example_code.png" alt="first example code" />
            </ModalBody>
          </ModalContent>
        </Modal>

        <Divider my={6} borderColor="grey" />

        {/* SECOND MODAL */}
        <div className='tw-text-center'>Kata Two - Range Extraction</div>
        <WorkImage src="/images/works/codewars_example2.png" alt="first example" />
        <Link onClick={modal2.onOpen}>
          <WorkImage src="/images/works/codewars_example2_code.png" alt="first example code" />
        </Link>

        <Modal isCentered isOpen={modal2.isOpen} onClick={modal2.onClose} onClose={modal2.onClose} size={'xl'}>
          <ModalOverlay />
          <ModalContent onClick={modal2.onClose}>
            <ModalHeader>Code of this kata</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <WorkImage onClick={modal2.onClose} src="/images/works/codewars_example2_code.png" alt="first example code" />
            </ModalBody>
          </ModalContent>
        </Modal>

        <Divider my={6} borderColor="grey" />
        {/* Third MODAL */}
        <div className='tw-text-center'>Kata Three - Doors in the school</div>

        <WorkImage src="/images/works/codewars_example3.png" alt="first example" />
        <P>Quite challenging one where, where my first solution Timed Out when the input was too big. Caused by the use of nested loops.
          After some digging in Maths problem, I came up with a way more efficiant solution.
          We need to find the number of open doors at the end of the day. In 2 words :  Which is... The &apos;previous&apos; square roots superior to our students number(n).
          <br />    For example : &apos;for n=5&apos; and we have an incremental starting at 1.
          <br />
          1*1 = 1 &lt; n
          <br />
          2*2 = 4 &lt; n
          <br />
          <strong className='tw-text-red-400  '>3*3 = 9 &gt; n</strong><br />
          Our solution will be our previous iteration, which is : 2 doors open.
          <br /> <span className="tw-text-xs tw-text-green-300">TLDR: There&apos;s always a smartest way to do something. It's up to us to find it...</span>
        </P>
        <Link onClick={modal3.onOpen}>
          <WorkImage src="/images/works/codewars_example3_code.png" alt="first example code" />
        </Link>



        <Modal isCentered isOpen={modal3.isOpen} onClick={modal3.onClose} onClose={modal3.onClose} size={'3xl'}>
          <ModalOverlay />
          <ModalContent onClick={modal3.onClose}>
            <ModalHeader>Code of this kata</ModalHeader>
            <ModalCloseButton />
            <ModalBody>

              <WorkImage onClick={modal3.onClose} src="/images/works/codewars_example3_code.png" alt="first example code" />
            </ModalBody>
          </ModalContent>
        </Modal>

      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'