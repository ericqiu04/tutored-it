import { Container, Grid, GridItem, Flex, Box, Text, Heading } from '@chakra-ui/react'

export default function Stats() {
  return (
    <Container py={'12%'} maxW={'80vw'}>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        gap={6}>
        <GridItem w="100%" colSpan={{ base: 1, sm: 2, md: 2 }}>
          <Heading as={'h2'}>In 2023, Tutoredit has</Heading>
        </GridItem>
        <GridItem w="100%">
          <Flex flexDirection={'column'}>
            <Text fontSize={'4xl'} fontWeight={'bold'}>
              500+
            </Text>
            <Box fontSize={'sm'}>
              students attending in over 20 programs
            </Box>
          </Flex>
        </GridItem>
        <GridItem w="100%">
          <Flex flexDirection={'column'}>
            <Text fontSize={'4xl'} fontWeight={'bold'}>
              BAller
            </Text>
            <Box fontSize={'sm'}>
              idc i guess bro u austin baller
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  )
}