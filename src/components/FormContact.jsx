import {
  Flex,
  Stack,
  FormControl,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Heading,
} from '@chakra-ui/react';

export default function FormContact() {
  return (
    <Flex
      backgroundColor="gray.200"
      flexDirection="colum"
      width="100%"
      height="100%"
    >
      <Stack padding="15px">
        <Heading color="black.300">Phonebook</Heading>
        <form>
          <Stack
            spacing={4}
            p="1rem"
            backgroundColor="whiteAlpha.900"
            boxShadow="md"
          >
            <FormControl>
              <InputGroup>
                <InputLeftElement pointerEvents="none" />
                <Input type="name" placeholder="Name" />
              </InputGroup>
            </FormControl>
            <FormControl>
              <InputGroup>
                <InputLeftElement pointerEvents="none" color="gray.300" />
                <Input type="number" placeholder="Number" />
              </InputGroup>
            </FormControl>
            <Button
              borderRadius={0}
              type="submit"
              variant="solid"
              colorScheme="teal"
              width="full"
            >
              Add Contact
            </Button>
          </Stack>
        </form>
      </Stack>
    </Flex>
  );
}
