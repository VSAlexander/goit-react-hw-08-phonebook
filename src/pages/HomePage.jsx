import { Box, Flex, Heading, Text } from '@chakra-ui/react';

export default function HomePage() {
  return (
    <Box textAlign="center">
      <Flex justifyContent="center" alignItems="center" h="100vh">
        <Box>
          <Heading as="h1" size="3xl" fontWeight="bold" color="gray.700" mb={8}>
            Welcome to My Contacts App
          </Heading>
          <Text fontSize="xl" mb={6} color="gray.600">
            A simple app to save, search, and delete contacts
          </Text>
          <Box mb={6}>
            <Heading size="md" mb={3} borderBottom="2px solid #a0a4ab" p={3}>
              About
            </Heading>
            <Text color="gray.600">
              This app was created as a project to learn React and Redux. It
              uses Chakra UI for styling and React Router for routing.
            </Text>
          </Box>
          <Box>
            <Heading size="md" mb={3} borderBottom="2px solid #a0a4ab" p={3}>
              Features
            </Heading>
            <Text color="gray.600">
              - Add new contacts with a name and phone number
              <br />
              - Search for contacts by name or phone number
              <br />- Delete contacts from your list (editing soon)
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
