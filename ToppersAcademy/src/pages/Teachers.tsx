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

const Teachers = () => {
  return (
    <Box marginLeft={7} marginTop={7}>
    <Flex alignItems="center">
      <Text fontSize={28} fontWeight="bold">
      My teachers and tutors
      </Text>
     
    </Flex>
    <br />
    <Flex alignItems="center" gap={10}>
      <Text fontSize={12}>
      Teachers have access to all of your Toppers Academy data.
      </Text>
     <Text fontSize={12}>
     Your student id is kaid_303273529688601849604072
     </Text>
    </Flex>
  <Divider borderColor="black" borderWidth="1px" fontWeight="bold" />
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
      <Text fontSize={12} fontWeight="bold">
      You have no coaches! Why not try adding one?
     </Text>
    </Flex>
    <br />
    <Divider borderColor="black" borderWidth="1px" fontWeight="bold" />
    <br />
    <Text fontSize={20}>Add a Teacher</Text>
    <br />
    
    <Text>Enter your teachers's email address:</Text>
    <Flex>
    <Input placeholder='Email(yourteacherExample@gmail.com' />
    <Button>Add a teacher</Button>
    </Flex>
   
  </Box>
  
  
  )
}

export default Teachers
