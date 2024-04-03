import React from 'react'
import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Center,
    Flex,
    Grid,
    GridItem,
    Heading,
    Image,
    Link,
    
    SimpleGrid,
    
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
import { BasicUseage } from '../component/components/BasicUseage';
  
const Card1 = () => {
  return (
    <div>
      <SimpleGrid spacing={1} templateColumns="repeat(2, 1fr)" gap={20}>
   
      <Card width="350px">
          <Text fontSize="27px" paddingLeft={12} fontWeight="bold" paddingTop="30px">
            MY COURSES
          </Text>
          <br />
          <Flex justifyContent="space-around" paddingLeft={3}>
            <Text>class 2</Text>
            <Link color="blue">seeall(4)</Link>
            <hr />
          </Flex>
          <br />
          <Flex justifyContent="space-evenly" alignItems="center">
            <Box>
              <Image
                height={10}
                style={{ borderRadius: "50%" }}
                src="https://cdn.kastatic.org/genfiles/topic-icons/icons/math.png-444b34-128c.png"
              />
            </Box>
            <Text>Numbers from 1 to 10</Text>
            <Button color="white" bg="blue">
              start
            </Button>
          </Flex>
          <br />
          <Flex justifyContent="space-even" alignItems="center">
            <Box>
              <Image
                height={10}
                style={{ borderRadius: "50%" }}
                marginLeft={5}
                src="https://cdn.kastatic.org/genfiles/topic-icons/icons/math.png-444b34-128c.png"
              />
            </Box>
            <div>
              <Text paddingLeft={8}>
                Addition and Substraction without regrouping
              </Text>
            </div>
          </Flex>
          <br />
          <Flex justifyContent="space-around" alignItems="center">
            <Box>
              <Image
                height={10}
                style={{ borderRadius: "50%" }}
                marginLeft={5}
                src="https://cdn.kastatic.org/genfiles/topic-icons/icons/math.png-444b34-128c.png"
              />
            </Box>
            <Text paddingLeft={8}>
              Addition and Substraction with regrouping
            </Text>
          </Flex>
          <br />
          <Flex justifyContent="space-around" alignItems="center">
            <Box>
              <Image
                height={10}
                style={{ borderRadius: "50%" }}
                paddingLeft={1}
                src="https://cdn.kastatic.org/genfiles/topic-icons/icons/math.png-444b34-128c.png"
              />
            </Box>
            <Text paddingRight={12}>Geometry and Measurement</Text>
          </Flex>
        </Card>

        <Card>
          <CardHeader>
           
            
            <BasicUseage/>

          </CardHeader>
          <CardBody>
            <Box bg={useColorModeValue("gray.100", "gray.900")} h={400} w={450} display="flex" alignItems="center" justifyContent="center">
              <Flex flexDirection="column" alignItems="center">
                <Box
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "lightgray",
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text fontSize={40}>+</Text>
                  
                </Box>
                <Text>Add Another Course</Text>
              </Flex>
            </Box>
          </CardBody>
        </Card>
        </SimpleGrid>
    </div>
  )
}

export default Card1
