import { Box, SimpleGrid, Icon, Text, Stack, Flex, useColorModeValue} from '@chakra-ui/react'
import {FaChalkboardTeacher, FaClock, FaMoneyCheckAlt} from 'react-icons/fa'

const Card = forwardRef((props, ref) => {
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
});

export default function Features() {

  return (
      <Box 
        backgroundColor="gray.50" 
        px={'10em'} 
        py={'12%'}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={'5em'}>
            <Card
              icon={<Icon as={FaChalkboardTeacher} w={10} h={10} />}
              title={'Meet Your Tutor'}
              text={
                'Our courses offer a learning experience designed to cater to every individual. We have qualified and experienced tutors who specialize in various subjects and grade levels.'
              }
            />
            <Card
              icon={<Icon as={FaClock} w={10} h={10} />}
              title={'Andrew Su'}
              text={
                'Tutors have convenient scheduling options allowing students to book sessions at their preferred time. They will also offer assistance with homework, assignments, and projects across various subjects.'
              }
            />
            <Card
              icon={<Icon as={FaMoneyCheckAlt} w={10} h={10} />}
              title={'Austina will suck ur balli'}
              text={
                'Blah Blah Blah does not cost money or smth. Keep typing smth random for now.'
              }
            />
          </SimpleGrid>
      </Box>
  )
}