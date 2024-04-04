import { Box, Divider, Flex, Link, Select, SimpleGrid, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { RouteNavbar } from "../component/RouteNavbar";

 

const Progress = () => {
  return (
    <Box mt={'4rem'}>
      <RouteNavbar/>
   
    <Box h={700} p={5} marginTop={7}>
      <Flex columnGap={5}>
        <Text fontSize={40} fontWeight="bold">
          My Progress
        </Text>

        <Link style={{ color: "blue" }} pt={2} marginTop={18}>
          Learn more.
        </Link>
      </Flex>
      <br />
      <Text color="rgba(0, 0, 7, 0.4)">
        Latest activity may take 10 mins to show below.
      </Text>

      <br />
      <Flex gap={3} justifyContent={'space-evenly'} alignItems="center">
        <Select placeholder="Last 7 days" size="lg" width="250px">
          <option value="volvo">Today</option>
          <option value="saab">Last 7 days</option>
          <option value="fiat">Last 30 days</option>
          <option value="audi">Custom range</option>
        </Select>
        <Select placeholder="All content" size="lg" width="250px">
          <option value="volvo">Today</option>
          <option value="saab">Last 7 days</option>
          <option value="fiat">Last 30 days</option>
          <option value="audi">Custom range</option>
        </Select>
        <Select placeholder="All activites" size="lg" width="250px">
          <option value="volvo">Today</option>
          <option value="saab">Last 7 days</option>
          <option value="fiat">Last 30 days</option>
          <option value="audi">Custom range</option>
        </Select>
        <Flex columnGap={3} alignItems="center">
          <Text fontSize={40} fontWeight="bold">
            0
          </Text>
          <Text>exercise Min</Text>
          <Text fontSize={30}>|</Text>
          <Text fontSize={40} fontWeight="bold">
            0
          </Text>
          <Text>total learning</Text>
        </Flex>
      </Flex>
 

      <SimpleGrid mb={3} mt={10}spacing={2} gap={1} templateColumns="repeat(6, 1fr)">
        <Text>ACTIVELY</Text>
        <Text>DATE</Text>
        <Text>LEVEL</Text>
        <Text>CHANGE</Text>
        <Text>CORRECT/TABLE PROBLEMS</Text>
        <Text>TIME (MIN)</Text>
      </SimpleGrid>
      <Divider borderColor="black" borderWidth="1px" fontWeight="bold" />
      <br />
      <SimpleGrid spacing={6}  templateColumns="repeat(6, 1fr)">
        <Text>Count with small numbers Class 1</Text>
        <Text>Mar 27, 2024 at 10:01 PM</Text>
        <Text>-</Text>
        <Text>-</Text>
        <Text>-</Text>
        <Text>0</Text>
      </SimpleGrid>
      <br />
      <Divider borderColor="black" borderWidth="1px" fontWeight="bold" />
      <br />
      <SimpleGrid spacing={6}  templateColumns="repeat(6, 1fr)">
        <Text>Comparing prime numbers  Class 2</Text>
        <Text>April 2, 2024 at 10:01 PM</Text>
        <Text>1</Text>
        <Text>5</Text>
        <Text>5</Text>
        <Text>5</Text>
      </SimpleGrid>
      <br />
      <Divider borderColor="black" borderWidth="1px" fontWeight="bold" />
      <br />
      <SimpleGrid spacing={6}  templateColumns="repeat(6, 1fr)">
        <Text>Find factorials of n number  Class 2</Text>
        <Text>April 3, 2024 at 11:01 PM</Text>
        <Text>1</Text>
        <Text>5</Text>
        <Text>5</Text>
        <Text>5</Text>
      </SimpleGrid>
      <br />
      <Divider borderColor="black" borderWidth="1px" fontWeight="bold" />
      <br />
      <SimpleGrid spacing={6}  templateColumns="repeat(6, 1fr)">
        <Text>Comparing even numbers  Class 2</Text>
        <Text>April 4, 2024 at 09:01 PM</Text>
        <Text>1</Text>
        <Text>5</Text>
        <Text>5</Text>
        <Text>5</Text>
      </SimpleGrid>
      <br />
      <Divider borderColor="black" borderWidth="1px" fontWeight="bold" />
      <br />
    </Box>
    </Box>
  );
};

export default Progress;
