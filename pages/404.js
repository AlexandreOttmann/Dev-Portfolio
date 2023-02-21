import NextLink from 'next/link'
import { Box, Heading, Text, Container, Divider, Button, Image } from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container align="center">
      <Heading as="h1" >Not Found</Heading>
      <Text>The page you&apos;re looking for was not found or is currently baking.</Text>
      <Divider my={6} />
      <Image borderRadius="lg" w="full" src="/images/404.gif" alt="gif of a shiba" />
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Return to home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound