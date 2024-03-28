import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const ContentComponent:React.FC = () => {
  return (
    <Box p={8} width="100%" bg="white" color="black">
      <Box borderRadius={5} p={5} width="100%" border="1px solid grey">
        <Heading as='h4' size='lg'>
          Counting small number
        </Heading>
        <Flex
          flexDirection={{ base: 'column', sm: 'row' }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box
            width={{ base: '100%', sm: '45%' }}
            mb={{ base: 4, sm: 0 }}
            mr={{ base: 0, sm: 4 }}
          >
            <Text color="grey">Learn</Text>
            <Flex alignItems="center">
              <Box><FontAwesomeIcon icon={faPlay} /></Box>
              <Box ml={2}><Text>Title of unit</Text></Box>
            </Flex>
          </Box>
          <Box width={{ base: '100%', sm: '45%' }}>
            <Text color="grey">Practice</Text>
            <Flex alignItems="center">
              <Box ml={2}><Text>Star quiz</Text></Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default ContentComponent;
