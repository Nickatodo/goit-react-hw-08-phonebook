import {
  Flex,
  Stack,
  Heading,
  UnorderedList,
  ListItem,
  Button,
} from '@chakra-ui/react';

export default function ListContact() {
  return (
    <Flex
      backgroundColor="gray.200"
      flexDirection="colum"
      width="100%"
      height="100%"
    >
      <Stack padding="15px">
        <Heading color="black.300">Contacts</Heading>
        <UnorderedList>
          <ListItem>
            Lorem ipsum dolor sit amet{' '}
            <Button colorScheme="red" size="xs">
              Delete
            </Button>
          </ListItem>
          <ListItem>
            Consectetur adipiscing elit{' '}
            <Button colorScheme="red" size="xs">
              Delete
            </Button>
          </ListItem>
          <ListItem>
            Integer molestie lorem at massa{' '}
            <Button colorScheme="red" size="xs">
              Delete
            </Button>
          </ListItem>
          <ListItem>
            Facilisis in pretium nisl aliquet{' '}
            <Button colorScheme="red" size="xs">
              Delete
            </Button>
          </ListItem>
        </UnorderedList>
      </Stack>
    </Flex>
  );
}
