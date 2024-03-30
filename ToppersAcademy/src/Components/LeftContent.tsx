import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const LeftContent:React.FC = () => {
    const [activeBox, setActiveBox] = useState(0); 
  
    const handleBoxClick = (index: number) => {
      setActiveBox(index);
    };
  
    return (
      <Box bg="white" width="40%" h="300px" overflowY='scroll' css={{
          '&::-webkit-scrollbar': {
            background:"lightgrey",
            width: '14px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(0,0,0,0.1)',
            borderRadius: '0px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: 'rgba(0,0,0,0.2)',
          },
        }}>
        <Box m={4}>
          {[0].map((index) => (
            <Box
              key={index}
              borderBottom="1px solid grey"
              bg={activeBox === index ? 'skyblue' : 'white'} 
              borderLeft={activeBox === index ? '4px solid blue' : 'none'} 
              w='100%'
              p={2}
              color='black'
              cursor="pointer"
              onClick={() => handleBoxClick(index)} 
            >
              <Flex>
                <Image
                  borderRadius='full'
                  boxSize='50px'
                  src='https://bit.ly/dan-abramov'
                  alt='Dan Abramov'
                />
                <Box ml={2}>
                  <Text fontWeight="700" color="black" fontSize="20px">Class {index + 1}</Text>
                  <Text fontSize="14px" color="grey">Units 4</Text>
                </Box>
              </Flex>
            </Box>
          ))}
          {[1, 2, 3, 4, 5].map((index) => (
            <Box
              key={index}
              borderBottom="1px solid grey"
              bg={activeBox === index ? 'skyblue' : 'white'} 
              borderLeft={activeBox === index ? '4px solid blue' : 'none'} 
              w='100%'
              p={2}
              color='black'
              cursor="pointer"
              onClick={() => handleBoxClick(index)} 
            >
              <Text fontWeight="500" color="grey" fontSize="14px">Unit {index}</Text>
              <Text>This is the Box</Text>
            </Box>
          ))}
        </Box>
      </Box>
    );
  }

export default LeftContent
