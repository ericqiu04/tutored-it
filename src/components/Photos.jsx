import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Image,
  useColorModeValue,
  SimpleGrid
} from '@chakra-ui/react'

import terry from '../assets/terry.jpg'
import eric from '../assets/eric.jpg'
import celine from '../assets/celine.jpg'
import william from'../assets/william.jpg'
import ida from '../assets/ida.jpg'

const TestimonialAvatar = (props) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Image objectFit='cover' borderRadius={'full'} boxSize={{ base: '10rem', md: '15rem', lg: '20rem' }} src={props.photo} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} fontWeight={600}>{props.name}</Text>
        <Text fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }} color={useColorModeValue('gray.600', 'gray.400')}>
          {props.title}
        </Text>
      </Stack>
    </Flex>
  )
}

export default function Photos() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'100%'} py={16} as={Stack} spacing={12}>
        <Stack py={'10%'} spacing={0} align={'center'}>
          <Heading fontSize={{ base: '5xl', md: '6xl', lg: '7xl' }} >Our Staff</Heading>
          <Text fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} p={'0.5em'}>{new Date().getFullYear()} Tutoredit</Text>
        </Stack>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacingY={{base: '3rem', md: '5rem', lg: '15rem' }} spacingX={{base: '2rem', md: '3rem', lg: '4rem' }}>
            <TestimonialAvatar
              photo={terry}
              name={'Terry Xiao'}
              title={'Founder'}
            />
            <TestimonialAvatar
              photo={celine}
              name={'Celine Lai'}
              title={'Co-Founder'}
            />
            <TestimonialAvatar
              photo={eric}
              name={'Eric Qiu'}
              title={'Director'}
            />
            <TestimonialAvatar
              photo={william}
              name={'William Zeng'}
              title={'Instrutor'}
            />
            <TestimonialAvatar
              photo={ida}
              name={'Ida Luo'}
              title={'Instrutor'}
            />
          </SimpleGrid>
      </Container>
    </Box>
  )
}