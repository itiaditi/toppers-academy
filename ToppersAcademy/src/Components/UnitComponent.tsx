import { useState } from 'react';
import { Avatar, Box, Button, Divider, Flex, Progress, Spacer, Text, WrapItem } from "@chakra-ui/react";

function UnitComponent() {
  const [scrollOverflow, setScrollOverflow] = useState("scroll");
  const [activeBox, setActiveBox] = useState(null); // State to keep track of active box

  const handleBoxClick = (index:any) => {
    setActiveBox(index);
  };

  return (
    <>
      <Flex>
        <Box width="40%" h="300px" overflowY={scrollOverflow}>
          <Box m={4}>
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
        <Box width={600}>
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
      </Flex>
    </>
  );
}

export default UnitComponent;
