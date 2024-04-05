import {
  Box,
  Card,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import AllRoutes from "./AllRoutes";

const Body = () => {
  return (
    <div>
      <SimpleGrid bg={'red'} spacing={2} columns={[1, null, 3]}>
        <Card paddingLeft={["0px", null, "200px"]} paddingTop={["20px", null, "40px"]}>
          <Box _hover={{ cursor: 'pointer', boxShadow: 'md', bg: 'gray.100', height: "40px" }} display="flex" alignItems="center">
            <Text fontSize={14}>MY STUFF</Text>
          </Box>
          <br />
          <NavLink to={"/card"}>
            <Box _hover={{ cursor: 'pointer', boxShadow: 'md', bg: 'gray.100', height: "40px" }} display="flex" alignItems="center">
              <Text fontSize={14}> COURSES </Text>
            </Box>
          </NavLink>
          <br />
          <Box _hover={{ cursor: 'pointer', boxShadow: 'md', bg: 'gray.100', height: "40px" }} display="flex" alignItems="center">
            <Text fontSize={14}>MY ACCOUNT</Text>
          </Box>
          <br />
          <NavLink to={"/progress"}>
            <Box _hover={{ cursor: 'pointer', boxShadow: 'md', bg: 'gray.100', height: "40px" }} display="flex" alignItems="center">
              <Text fontSize={14}> PROGRESS </Text>
            </Box>
          </NavLink>
          <br />
          <NavLink to={"/profile"}>
            <Box _hover={{ cursor: 'pointer', boxShadow: 'md', bg: 'gray.100', height: "40px" }} display="flex" alignItems="center">
              <Text fontSize={14}> PROFILE</Text>
            </Box>
          </NavLink>
          <br />
          <NavLink to={"/teachers"}>
            <Box _hover={{ cursor: 'pointer', boxShadow: 'md', bg: 'gray.100', height: "40px" }} display="flex" alignItems="center">
              <Text fontSize={14}> TEACHERS </Text>
            </Box>
          </NavLink>
        </Card>
        <Box gridColumn={["span 3", null, "span 1"]}>
          <AllRoutes />
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default Body;
