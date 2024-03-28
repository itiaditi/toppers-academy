import { useState } from 'react';
import { Avatar, Box, Button, Divider, Flex, Progress, Spacer, Text, WrapItem } from "@chakra-ui/react";
import ProficientComponent from './ProficientComponent';
import DeatilComponent from './DeatilComponent';
import ContentComponent from './ContentComponent';

const UnitComponent:React.FC=()=> {
  const [scrollOverflow, setScrollOverflow] = useState("scroll");
  const [activeBox, setActiveBox] = useState(null); // State to keep track of active box

  const handleBoxClick = (index:any) => {
    setActiveBox(index);
  };

  return (
  

   <Box>

   <Flex color="black" bg="white">

<Box bg="white"width="40%" h="300px" overflowY={scrollOverflow} css={{
          '&::-webkit-scrollbar': {
            width: '12px',
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
<Box width='60%'>
  
{/* <DeatilComponent/> */}
<ContentComponent/>
</Box>
</Flex>
   </Box>
   
  );
}

export default UnitComponent;
