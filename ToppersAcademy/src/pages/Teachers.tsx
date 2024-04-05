import {
    Box,
    Button,
    Divider,
    Flex,
    Grid,
    Input,
    Link,
    Select,
    SimpleGrid,
    Stack,
    Text,
  } from "@chakra-ui/react";
import React from 'react'
import { RouteNavbar } from "../component/RouteNavbar";

const Teachers = () => {
  return (
    <Box mt={'4rem'}>
    <RouteNavbar/>
    <Box p={10}>
    <Flex alignItems="center">
      <Text fontSize={28} fontWeight="bold">
      My teachers and tutors
      </Text>
     
    </Flex>
    <br />
    <Flex mb={6}justifyContent={'space-between'}>
      <Text fontSize={16}>
      Teachers have access to all of your Toppers Academy data.
      </Text>
     <Text fontSize={16}>
     Your student id is kaid_303273529688601849604072
     </Text>
    </Flex>
  <Divider  borderBottom='1px solid lightgrey'  />
    <br />

<Flex alignItems="center" gap={40}>
      <Text fontSize={20} fontWeight="bold">
      Join A Class
      </Text>
      <Text fontSize={20} fontWeight="bold">
     Your Teachers
     </Text>
    </Flex>
    <br />
    <Flex alignItems="center" gap={20}>
     <Button color="white" bg="blue">Enter Class Code</Button>
      <Text p={4} borderBottom="1px solid lightgrey" borderTop="1px solid lightgrey"fontSize={12} fontWeight="bold">
      You have no coaches! Why not try adding one?
     </Text>
    </Flex>

    <br />
    
    
    
   
   
  </Box>
  </Box>
  
  
  )
}

export default Teachers
