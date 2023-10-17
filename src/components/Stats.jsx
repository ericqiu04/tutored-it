import { Container, Grid, GridItem, Flex, Box, Text, Heading } from '@chakra-ui/react'
import { useEffect, useRef } from 'react';
import { annotate } from 'rough-notation';


export default function Stats() {
  
  const annotationRef = useRef();

  useEffect(() => {

    const annotation = annotate(annotationRef.current, { type: 'bracket', color: 'yellow', brackets: ['left', 'right'], padding: 25 });
    annotation.show();


    return () => {
      annotation.remove();
    };
  }, []);
  
  return (
    <Container py={'12%'} maxW={'80vw'}>
      <Grid
        ref={annotationRef}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        gap={6}>
        <GridItem w="100%" colSpan={{ base: 1, sm: 2, md: 2 }}>
          <Heading px={'10%'} as={'h2'}> In 2023, Tutoredit has</Heading>
        </GridItem>
        <GridItem w="100%">
          <Flex flexDirection={'column'}>
            <Text fontSize={'4xl'} fontWeight={'bold'}>
              300+
            </Text>
            <Box fontSize={'sm'}>
              students attending various classes 
            </Box>
          </Flex>
        </GridItem>
        <GridItem w="100%">
          <Flex flexDirection={'column'}>
            <Text fontSize={'4xl'} fontWeight={'bold'}>
              80+            
            </Text>
            <Box fontSize={'sm'}>
              completed programs/courses 
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  )
}