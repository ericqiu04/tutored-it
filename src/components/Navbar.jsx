import Link from 'next/link';
import {
  Box,
  Flex,
  Button,
  HStack,
  useColorModeValue,
  Heading,
} from '@chakra-ui/react';
import favicon from '../assets/favicon.ico';

const NavLink = (props) => {
  return (
    <Box
      as="span" // Change 'as' prop to span
      px={2}
      py={2}
      fontSize={'sm'}
      fontWeight={500}
      rounded={'md'}
      color={useColorModeValue('gray.600', 'gray.200')}
      _hover={{
        textDecoration: 'none',
        color: useColorModeValue('gray.900', 'white'),
      }}
    >
      <Link href={props.href}>{props.name}</Link> {/* Wrap name in Link component */}
    </Box>
  );
};

export default function Navbar() {
  return (
    <>
      <Flex
        as="nav"
        w="100%"
        px="6"
        py="2"
        position="fixed"
        align="center"
        background="white"
        borderBottom="1px"
        borderBottomColor="gray.200"
        justify="space-between"
        backgroundColor="rgba(255, 255, 255, 0.7)"
        backdropFilter="saturate(180%) blur(5px)"
      >
        <HStack>
          <Box>
            <img width="40px" src={favicon} />
          </Box>
        </HStack>

        <HStack>
          <Box p="2">
            <NavLink name="Home" href="/"></NavLink>
          </Box>

          <Box p="2">
            <NavLink name="Staff" href="/staff"></NavLink>
          </Box>
        </HStack>

        <HStack>
          <Button size="sm" variant="outline" color={'blackAlpha.800'} colorScheme="blackAlpha">
            <a href="mailto:tutoredit2023@gmail.com">Contact Us</a>
          </Button>
        </HStack>
      </Flex>
    </>
  );
}
