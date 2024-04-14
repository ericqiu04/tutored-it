import Link from 'next/link';
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaDiscord } from 'react-icons/fa';
import { BsWechat } from 'react-icons/bs';

const ContactIcons = (props) => {
  return (
    <Link href={props.href}>
      <chakra.a
        bg={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.2s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.300', 'whiteAlpha.300'),
        }}>
        <VisuallyHidden>{props.label}</VisuallyHidden>
        {props.icon}
      </chakra.a>
    </Link>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      color={useColorModeValue('gray.900', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>© {new Date().getFullYear()} Tutoredit.</Text>
        <Stack direction={'row'} spacing={6}>
          <ContactIcons icon={<BsWechat />} label={'Wechat'} href={'#'}></ContactIcons>
          <ContactIcons icon={<FaDiscord />} label={'Discord'} href={'#'}></ContactIcons>
          {/* You can add more icons with Next.js routing here */}
          {/* <Link href="#">
              <ContactIcons icon={<FaInstagram />} label={'Instagram'}></ContactIcons>
          </Link> */}
        </Stack>
      </Container>
    </Box>
  );
}
