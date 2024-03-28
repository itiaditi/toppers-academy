import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import InitialQuizComponent from './InitialQuizComponent'
import McqComponent from './McqComponent'

const AttemptQuiz = () => {
  return (
    <Box textAlign={'center'}>
        <Box pb={10} bg="white" color="black"><Heading as="h4" size='md'>Number from 1 to 9</Heading></Box>
{/* <InitialQuizComponent/> */}
<McqComponent/>
    </Box>
  )
}

export default AttemptQuiz
