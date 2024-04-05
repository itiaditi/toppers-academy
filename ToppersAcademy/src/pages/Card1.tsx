// import React, { useEffect, useState } from 'react'
// import {
//     Box,
//     Button,
//     Card,
//     CardBody,
//     CardFooter,
//     CardHeader,
//     Center,
//     Flex,
//     Grid,
//     GridItem,
//     Heading,
//     Image,
//     Link,
    
//     SimpleGrid,
    
//     Text,
//     useColorModeValue,
//   } from "@chakra-ui/react";
  
// import axios from 'axios';
// import { BasicUseage } from '../component/components/BasicUseage';
// interface Course{
//   // courseId: 1, courseName: 'Maths', unitsCompleted: Array(0), progress: 0, classes: Array(2)
//   courseID:number,
//   courseName:string,
//   unitsCompleted:[],
//   progress:number,
//   classes:[]
// }
// interface User {
//   id:number,
//   userId:number,
//   userName:String,
//   courses:Course[]
// }
// interface CardData{
//   title:String;
// }
// const CardBodyData :React.FC<CardData>=({title})=>{
//   return(
//     <Flex justifyContent="space-between" columnGap={7}>
//     <Flex w={14} justifyContent={"center"}  >
//       <Image
//         height={10}
//         style={{ borderRadius: "50%" }}
//         src="https://cdn.kastatic.org/genfiles/topic-icons/icons/math.png-444b34-128c.png"
//       />
//     </Flex>
//     <Flex alignItems={"center"} w={"80%"}>
//     <Text>{title}</Text>
//     </Flex>
//   </Flex>
//   )
 
// }

// interface CardString{
//   CardString:string[];
//   Data:number;
// }
// interface CourseClass {
//   [x: string]: any;
//   grade: number;
//   titles: string[];
// }
// const CardComponent:React.FC<CardString> =({CardString,Data})=>{
  
//   const [isHovered, setIsHovered] = React.useState<boolean>(false);
//   const [DataofQuestion,setClassQuestion]=useState<CourseClass[]>([]);
//   return(
//     <Card width="350px" h={370}
//         boxShadow={isHovered ? "xl" : "md"}
//         transition="box-shadow 0.3s ease"
//         cursor="pointer">
//         <Flex  justifyContent={"space-evenly"}  borderBottom="2px solid #E5E7EB">
//           <Box w={"57%"} >
//           <Text fontSize="27px" fontWeight="bold" paddingTop="30px"  mb={5}>
//             Class {Data}
//           </Text>
//           </Box>
//           <Flex  alignItems={"center"} mt={4} fontSize={"1.1rem"}>
//             <Link color="blue">see all(2)</Link>
//           </Flex>
//           </Flex>
//           <Flex flexDirection={"column"} rowGap={4} pl={4} pt={7} h={"100%"}>
//             {
//               CardString.map((el,index)=>{
//                  return(
//                   <CardBodyData title={el} key={index}/>
//                  )
//               })
//             }
//          </Flex>
//         </Card>
//   )
// }

// const Card1 = () => {

//   const [total, setTotal] = useState<User[]>([]);

// async function fetchData() {
//   try {
//     const response = await axios.get('https://toppers-academy.onrender.com/learningProfiles/2');
//     console.log(response.data);
//     setTotal(response.data) // Do something with the response data
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }
// console.log(total);
// // Call the function to fetch data
// useEffect(()=>{
//   fetchData();
// },[])


//   return (
//     <div>
      
//       <SimpleGrid spacing={1} templateColumns="repeat(2, 1fr)" gap={20}>
     
//       <Card width="350px">
//           <Text fontSize="27px" paddingLeft={12} fontWeight="bold" paddingTop="30px">
//             MY COURSES
//           </Text>
//           <br />
          
//          <Box >
//           <Flex justifyContent="space-around" paddingLeft={3}>
//             <Text >Class {} </Text>
//             <Link color="blue">see all(4)</Link>
//             <hr />
//           </Flex>
//           </Box>
        
//           <br />
//           <Flex justifyContent="space-evenly" alignItems="center">
//             <Box>
//               <Image
//                 height={10}
//                 style={{ borderRadius: "50%" }}
//                 src="https://cdn.kastatic.org/genfiles/topic-icons/icons/math.png-444b34-128c.png"
//               />
//             </Box>
//             <Text>Numbers from 1 to 10</Text>
//             <Button color="white" bg="blue">
//               start
//             </Button>
//           </Flex>
//           <br />
//           <Flex justifyContent="space-even" alignItems="center">
//             <Box>
//               <Image
//                 height={10}
//                 style={{ borderRadius: "50%" }}
//                 marginLeft={5}
//                 src="https://cdn.kastatic.org/genfiles/topic-icons/icons/math.png-444b34-128c.png"
//               />
//             </Box>
//             <div>
//               <Text paddingLeft={8}>
//                 Addition and Substraction without regrouping
//               </Text>
//             </div>
//           </Flex>
//           <br />
//           <Flex justifyContent="space-around" alignItems="center">
//             <Box>
//               <Image
//                 height={10}
//                 style={{ borderRadius: "50%" }}
//                 marginLeft={5}
//                 src="https://cdn.kastatic.org/genfiles/topic-icons/icons/math.png-444b34-128c.png"
//               />
//             </Box>
//             <Text paddingLeft={8}>
//               Addition and Substraction with regrouping
//             </Text>
//           </Flex>
//           <br />
//           <Flex justifyContent="space-around" alignItems="center">
//             <Box>
//               <Image
//                 height={10}
//                 style={{ borderRadius: "50%" }}
//                 paddingLeft={1}
//                 src="https://cdn.kastatic.org/genfiles/topic-icons/icons/math.png-444b34-128c.png"
//               />
//             </Box>
//             <Text paddingRight={12}>Geometry and Measurement</Text>
//           </Flex>
//         </Card>

//         <Card>
//           <CardHeader>
           
            
//             <BasicUseage/>

//           </CardHeader>
//           <CardBody>
//             <Box bg={useColorModeValue("gray.100", "gray.900")} h={400} w={450} display="flex" alignItems="center" justifyContent="center">
//               <Flex flexDirection="column" alignItems="center">
//                 <Box
//                   style={{
//                     borderRadius: "50%",
//                     backgroundColor: "lightgray",
//                     width: "50px",
//                     height: "50px",
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                   }}
//                 >
//                   <Text fontSize={40}>+</Text>
                  
//                 </Box>
//                 <Text>Add Another Course</Text>
//               </Flex>
//             </Box>
//           </CardBody>
//         </Card>
//         </SimpleGrid>
//     </div>
//   )
// }

// export default Card1
