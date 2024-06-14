import { Box, Container, Flex, Heading, VStack, Text, Link, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="header" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">Financial Times</Heading>
        <Flex>
          <Link href="#" color="white" mx={2}>Home</Link>
          <Link href="#" color="white" mx={2}>World</Link>
          <Link href="#" color="white" mx={2}>Business</Link>
          <Link href="#" color="white" mx={2}>Tech</Link>
          <Link href="#" color="white" mx={2}>Markets</Link>
          <Link href="#" color="white" mx={2}>Opinion</Link>
        </Flex>
      </Flex>

      <Flex as="main" mt={4}>
        <Box flex="3" pr={4}>
          <VStack spacing={4} align="stretch">
            <Box bg="gray.100" p={4}>
              <Heading as="h2" size="md">Top Stories</Heading>
              <VStack spacing={2} mt={2} align="stretch">
                <Box>
                  <Heading as="h3" size="sm">Story 1</Heading>
                  <Text>Summary of the top story...</Text>
                </Box>
                <Box>
                  <Heading as="h3" size="sm">Story 2</Heading>
                  <Text>Summary of the second top story...</Text>
                </Box>
              </VStack>
            </Box>

            <Box bg="gray.100" p={4}>
              <Heading as="h2" size="md">Latest News</Heading>
              <VStack spacing={2} mt={2} align="stretch">
                <Box>
                  <Heading as="h3" size="sm">News 1</Heading>
                  <Text>Summary of the latest news...</Text>
                </Box>
                <Box>
                  <Heading as="h3" size="sm">News 2</Heading>
                  <Text>Summary of the second latest news...</Text>
                </Box>
              </VStack>
            </Box>
          </VStack>
        </Box>

        <Box flex="1" pl={4}>
          <VStack spacing={4} align="stretch">
            <Box bg="gray.100" p={4}>
              <Heading as="h2" size="md">Sidebar</Heading>
              <VStack spacing={2} mt={2} align="stretch">
                <Link href="#">Link 1</Link>
                <Link href="#">Link 2</Link>
                <Link href="#">Link 3</Link>
              </VStack>
            </Box>

            <Box bg="gray.100" p={4}>
              <Heading as="h2" size="md">Advertisement</Heading>
              <Image src="https://via.placeholder.com/300x250" alt="Ad" />
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;