import { Box, SimpleGrid, Icon, Text, Stack, Flex} from '@chakra-ui/react'
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc'

const Feature = (props) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {props.icon}
      </Flex>
      <Text fontWeight={600}>{props.title}</Text>
      <Text color={'gray.600'}>{props.text}</Text>
    </Stack>
  )
}

export default function Features() {
  return (
    <Box backgroundColor="gray.50" p={'12%'}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={20}>
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={'Meet Your Tutor'}
          text={
            'Our courses offer a learning experience designed to cater to every individual. We offer flexible hours and our tutors are always here to support you when you need it the most.'
          }
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'Unlimited Donations'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'Instant Delivery'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
      </SimpleGrid>
    </Box>
  )
}