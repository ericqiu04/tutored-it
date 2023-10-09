import {Flex, Heading, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react'

export default function Intro() {
  return (
    <Stack 
    minH={'100vh'} 
    direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              fontSize={{base: 'md', lg: '1em' }}
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: '130%',
                height: useBreakpointValue({ base: '30%', md: '30%' }),
                position: 'absolute',
                bottom: 0.75,
                left: -2,
                bg: 'yellow.300',
                zIndex: -1,
              }}>
              Our Mission
            </Text>
            {' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: '1.25em' }} color={'gray.600'}>
          Here at Tutoredit, we offer tutoring programs designed to inspire curiosity, foster creativity, and cultivate confidence in students of all ages and grade levels. With a team of dedicated and experienced tutors, we provide comprehensive support in a wide range of subjects, ensuring that every student receives the attention and guidance they need to succeed.
          </Text>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://brocku.ca/brock-news/wp-content/uploads/2022/04/GettyImages-1179756370-1600x1067.jpg?x70330'
          }
        />
      </Flex>
    </Stack>
  )
}