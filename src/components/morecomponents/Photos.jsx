'use client'

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  useColorModeValue,
  SimpleGrid, 
  VStack, 
  useBreakpointValue 
} from '@chakra-ui/react'

import { useRef, useEffect } from 'react'

import { annotate } from 'rough-notation'

import Image from 'next/image'; // Import next/image component

import terry from '../../../public/assets/terry.jpg';
import eric from '../../../public/assets/eric.jpg';
import celine from '../../../public/assets/celine.jpg'; // Corrected import path
import william from '../../../public/assets/william.jpg';
import ida from '../../../public/assets/ida.jpg';
import tianze from '../../../public/assets/tianze.jpg';

const Profile = (props) => {
  return (
    <Flex
      pt={20}
      pb={10} 
      backgroundColor={'gray.400'} 
      align={'center'} 
      mt={8} 
      direction={'column'}
      justify={'center'}
      borderWidth="1px"
      borderRadius="lg"
      bg={'white'}
      mb={1}
    >
      <Box
        borderRadius={'full'}
        overflow={'hidden'}
        boxSize={{ base: '10rem', md: '15rem', lg: '20rem' }}
        mb={2}
      >
        <Image
          src={props.photo}
          alt={props.name}
          width={300}
          height={300}
          layout="responsive" 
          objectFit="cover"
        />
      </Box>
      <Stack spacing={-1} align={'center'}>
        <Text fontSize={{ base: '1xl', md: '2xl', lg: '3xl' }} fontWeight={600}>{props.name}</Text>
        <Text fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }} color={useColorModeValue('gray.600', 'gray.400')}>
          {props.title}
        </Text>
      </Stack>
    </Flex>
  )
}

export default function Photos() {

  const annotationRef = useRef();

  useEffect(() => {
    const annotation = annotate(annotationRef.current, { type: 'underline', color: 'yellow', padding: 50 });
    annotation.show();

    return () => {
      annotation.remove();
    };
  }, []);

  return (
    <>
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(https://www.oberlo.com/media/1605012362-image14.jpg)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
      >
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-t, blackAlpha.900, blackAlpha.300)'}
        >
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '4xl', md: '5xl', lg: '6xl'})}
              ref={annotationRef}
            >
              {new Date().getFullYear()} Tutoredit Staff 
            </Text>
          </Stack>
        </VStack>
      </Flex>
      <Container borderBottom={'1px'} bg={'gray.100'} maxW={'100%'} py={'10%'} as={Stack} spacing={12}>
        <SimpleGrid px={'5%'} columns={{ base: 1, md: 2 }} spacingY={{ base: '2rem', md: '3rem', lg: '4rem' }} spacingX={{ base: '2rem', md: '3rem', lg: '4rem' }}>
          <Profile
            photo={terry}
            name={'Terry Xiao'}
            title={'Founder'}
          />
          <Profile
            photo={eric}
            name={'Eric Qiu'}
            title={'Founder'}
          />
          <Profile
            photo={celine}
            name={'Celine Lai'}
            title={'Director'}
          />
          <Profile
            photo={william}
            name={'William Zeng'}
            title={'Instructor'}
          />
          <Profile
            photo={ida}
            name={'Ida Luo'}
            title={'Instructor'}
          />
          <Profile
            photo={tianze}
            name={'Tianze Wan'}
            title={'Instructor'}
          />
          <Profile
            name={'Evan Guo'}
            title={'Instructor'}
          />
          <Profile
            name={'Michael Song'}
            title={'Instructor'}
          />
          <Profile
            name={'George Ma'}
            title={'Instructor'}
          />
          <Profile
            name={'Jett Lai'}
            title={'Instructor'}
          />
          <Profile
            name={'Jerry Chai'}
            title={'Instructor'}
          />
        </SimpleGrid>
      </Container>
    </>
  )
}
