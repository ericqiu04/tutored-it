import {Box, Flex, Button,  HStack, useColorModeValue, Heading} from '@chakra-ui/react'

const NavLink = (props) => {
  return (
    <Box
      as="a"
      px={2}
      py={2}
      fontSize={'sm'}
      fontWeight={500}
      rounded={'md'}
      color = {useColorModeValue('gray.600', 'gray.200')}
      _hover={{
        textDecoration: 'none',
        color: useColorModeValue('gray.900', 'white'),
      }}
      href = {props.href}
      >
      {props.name}
    </Box>
  )
}

export default function Navbar() {
  return (
    <>
      <Flex
        as="nav"
        w="100%"
        px="6"
        py="2"
        position = "fixed"
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
            <Heading fontSize="10px" fontWeight="bold">
              Tutored It
            </Heading>
          </Box>
        </HStack>

        <HStack>
          <Box p = "2">
            <NavLink name = "Home"></NavLink>
          </Box>

          <Box p="2">
            <NavLink name = "Staff"></NavLink>
          </Box>

          <Box p="2">
          <NavLink name = "Class Photos"></NavLink>
          </Box>
        </HStack>

        <HStack>
          <Button
          size = "sm"
          variant = "outline"
          colorScheme='yellow'
          >
          Contact Us
          </Button>
        </HStack>
        
      </Flex>
    </>
  )
}