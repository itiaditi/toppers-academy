import {
  Box,
  Button,
  Card,

  Flex,
  Grid,
  
  Image,
  Link,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import React, { useContext } from "react";

import { AuthContext } from "../components/AuthContext";
import { BasicUseage } from "./BasicUseage";

import { RouteNavbar } from "./RouteNavbar";




interface CardData{
  title:String;
}
const CardBodyData :React.FC<CardData>=({title})=>{
  return(
    <Flex justifyContent="space-between" columnGap={7}>
    <Flex w={14} justifyContent={"center"}  >
      <Image
        height={10}
        style={{ borderRadius: "50%" }}
        src="https://cdn.kastatic.org/genfiles/topic-icons/icons/math.png-444b34-128c.png"
      />
    </Flex>
    <Flex alignItems={"center"} w={"80%"}>
    <Text>{title}</Text>
    </Flex>
  </Flex>
  )
 
}

interface CardString{
  CardString:string[];
  Data:number;
}
// interface CourseClass {
//   [x: string]: any;
//   grade: number;
//   titles: string[];
// }
const CardComponent:React.FC<CardString> =({CardString,Data})=>{
  
  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  setIsHovered(false);
  return(
    <Card  width="325px" h={370}
        boxShadow={isHovered ? "xl" : "md"}
        transition="box-shadow 0.3s ease"
        cursor="pointer">
        <Flex justifyContent={"space-evenly"}  borderBottom="2px solid #E5E7EB">
          <Box w={"57%"} >
          <Text fontSize="27px" fontWeight="bold" paddingTop="30px"  mb={5}>
            Class {Data}
          </Text>
          </Box>
          <Flex  alignItems={"center"} mt={4} fontSize={"1.1rem"}>
            <Link color="blue">see all(2)</Link>
          </Flex>
          </Flex>
          <Flex flexDirection={"column"} rowGap={4} pl={4} pt={7} h={"100%"}>
            {
              CardString.map((el,index)=>{
                 return(
                  <CardBodyData title={el} key={index}/>
                 )
              })
            }
         </Flex>
        <Flex p={2} justifyContent={'center'}> <Button
         width={'6rem'}
         h={'2rem'}
         p={3}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              cursor={"pointer"}
              color={"white"}
              bg={"#1858DB"}
              _hover={{
                bg: "blue.700",
              }}
            >
              Start 
            </Button></Flex>
        </Card>
  )
}



const Card1 :React.FC= () => {
    const{ClassData} =useContext(AuthContext);
   console.log(ClassData)
   const bgColor = useColorModeValue("gray.50", "gray.800");
   const borderColor = useColorModeValue("gray.200", "gray.600");
 
  return (
    <Box mt={"4rem"}>
   <RouteNavbar/>
      <SimpleGrid  w={'100%'}  spacing={2}   >
    
       <Box bg={'#d9d9d9'}>
        <Flex  justifyContent={"space-evenly"} bg={"#edf3fe"}>
          <Box w={"80%"}>
          <Text fontSize="27px" paddingLeft={12} fontWeight="bold" paddingTop="30px" textAlign={"center"} mb={5}>
            MY COURSES
          </Text>
          </Box>
          <Flex  alignItems={"center"}>
          <BasicUseage/>
          </Flex>
          </Flex>
          {ClassData.length<=0?   
      <Flex
      
        padding={60}
        borderWidth="1px"
        borderRadius="md"
        borderColor={borderColor}
        backgroundColor={bgColor}
        boxShadow="md"
        alignItems="center"
        justifyContent={"center"}
      >
        <Text fontSize={30} fontWeight={700} color="grey.600">No data available. Please add some data.</Text>
      </Flex>
  
:<Grid p={3} mb={10} templateColumns={"repeat(4,1fr)"} columnGap={"0.5rem"}  w={"67rem"} rowGap={"1rem"} mt={4}>
          {
            ClassData.map((el)=>{
             return   <CardComponent  CardString={el.titles} Data={el.grade} key={el.grade}  />
            })
          }
        
       
        </Grid>}
         
        
        </Box>
       
      </SimpleGrid>
     
    </Box>
  );
};

export default Card1;

const CardString:string[]=["Numbers from 1 to 10","Addition and Substraction without regrouping","Addition and Substraction with regrouping","Geometry and Measurement"]