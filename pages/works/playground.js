import { Title } from '../../components/work'

import { Container, Badge } from '@chakra-ui/react'

const Work = (title) => {
  return (
    <Container className="tw-absolute  tw-left-0  tw-min-w-[100vw]  tw-min-h-[100vh] ">
      <Title>
        Playground <Badge>2023</Badge>
      </Title>

    </Container>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'