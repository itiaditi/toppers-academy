import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const InitialQuizComponent = () => {
  return (
 <Box>
       <Flex m={20}justifyContent={'center'} alignItems={'center'}>
    <Box p={10}>
        <Box><Heading>Ready to practice?</Heading>
        <Text fontSize={20}>Okay, show us what you can do!</Text>
        <Box><Text fontSize={18} fontWeight={700}>7 questions</Text></Box></Box>
    </Box>
    </Flex>
    <Box bg='white' textAlign={'right'} >
        <Button bg="blue" m={4}>Let's go</Button>
    </Box>
 </Box>
  )
}

export default InitialQuizComponent
