
import {
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure

} from '@chakra-ui/react'

import { WorkImage } from './work'




const Modale = ({ content, source }) => {
  // const modal1 = useDisclosure();
  // const modal2 = useDisclosure();
  // const modal3 = useDisclosure();
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const title = useDisclosure();
  return (
    <>
      <Link onClick={title.onOpen}>
        <WorkImage src={`/images/works/${source}`} alt={content} />
      </Link>

      <Modal isCentered isOpen={title.isOpen} onClose={title.onClose} size={'4xl'}>
        <ModalOverlay />
        <ModalContent onClick={title.onClose}>

          <ModalHeader>{content}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <WorkImage onClick={title.onClose} src={`/images/works/${source}`} alt={content} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Modale
