'use client'

import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react'
import {FaChalkboardTeacher, FaClock, FaMoneyCheckAlt} from 'react-icons/fa'

const Card = (props) => {
  return (
    <Stack
      p = {10}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      bg = {'white'}
      overflow="hidden">
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {props.icon}
      </Flex>
      <Text fontWeight={600}>{props.title}</Text>
      <Text color={'gray.600'}>{props.text}</Text>
    </Stack>
  )
};

export default function Features() {
  return (
      <Box 
        px={{base: '5%', md: '2%', lg: '8%'}}
        py={'10%'}
        backgroundColor='gray.50'
        borderBottom='1px' 
        borderBottomColor={'gray.300'}
        spacing={6} w={'full'} >
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{base: '2rem', md: '1rem', lg: '2rem' }}>
            <Card
              icon={<Icon as={FaChalkboardTeacher} w={10} h={10} />}
              title={'Meet Your Tutor'}
              text={
                'Our courses offer a learning experience designed to cater to every individual. We have qualified and experienced tutors who specialize in various subjects and grade levels.'
              }
            />
            <Card
              icon={<Icon as={FaClock} w={10} h={10} />}
              title={'Tailored For You'}
              text={
                'Tutors have convenient scheduling options allowing students to book sessions at their preferred time. They will also offer assistance with homework, assignments, and projects across various subjects.'
              }
            />
            <Card
              icon={<Icon as={FaMoneyCheckAlt} w={10} h={10} />}
              title={'Free Courses'}
              text={
                'Courses are completely free of charge, ensuring learning opportunities are accessible to everyone. Whether you\'re looking to excel in academics, explore new skills, or to enhance creativity, Tutoredit has the right courses for you.'
              }
            />
          </SimpleGrid>
      </Box>
  )
}