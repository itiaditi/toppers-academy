import { Avatar, Box, Button, Divider, Flex, Progress, Spacer, Text, WrapItem } from '@chakra-ui/react'
import React from 'react'
import ProficientComponent from './ProficientComponent'

const DeatilComponent:React.FC = () => {
  return (
    <Box m={4}>
    <Box><ProficientComponent/></Box>
  <Flex mr={5}>
    <Flex ml={5} alignItems="center" justifyContent="space-between">
      <WrapItem>
        <Avatar size='sm' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
      </WrapItem>
      <Box ml={2}>
        <Text fontSize="13px" color="skyblue">Up next for you</Text>
        <Text fontSize="15px">Unit 1: Numbers from 1 to 9</Text>
      </Box>
    </Flex>
    <Spacer />
    <Box>
      <Text textAlign="right">Mastery points</Text>
      <Progress width={250} borderRadius="full" colorScheme='orange' size='sm' value={20} />
    </Box>
  </Flex>
  <Divider />
  <Flex mr={5} ml={5}>
    <Box>
      <Text fontSize="13px">Up next for you</Text>
    </Box>
    <Spacer />
    <Box>
      <Text fontSize="13px">Up next for you</Text>
    </Box>
  </Flex>
  <Button ml={5} width={200} bg="blue">Get Started</Button>
  </Box>
  )
}

export default DeatilComponent
