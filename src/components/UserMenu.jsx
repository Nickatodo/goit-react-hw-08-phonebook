import { Flex, Box, Spacer, Button, Heading } from '@chakra-ui/react';

export default function UserMenu() {
  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      gap="2"
      backgroundColor="teal"
      padding="15px"
    >
      <Box p="2">
        <Heading size="md">EMAIL: </Heading>
      </Box>
      <Spacer />
      <Button colorScheme="blue">Logout</Button>
    </Flex>
  );
}
