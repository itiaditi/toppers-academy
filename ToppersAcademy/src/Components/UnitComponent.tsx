import { useState } from 'react';
import { Avatar, Box, Button, Divider, Flex, Progress, Spacer, Text, WrapItem } from "@chakra-ui/react";
import ProficientComponent from './ProficientComponent';
import DeatilComponent from './DeatilComponent';
import ContentComponent from './ContentComponent';
import LeftContent from './LeftContent';

const UnitComponent:React.FC=()=> {
 

  return (
  

   <Box>

   <Flex color="black" bg="white">

<LeftContent/>
<Box width='60%'>
  
<DeatilComponent/>
<ContentComponent/>
</Box>
</Flex>
   </Box>
   
  );
}

export default UnitComponent;
