import { Box, Divider, Flex, Link, Select, SimpleGrid, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

 

const Progress = () => {
  return (
    
    <Box marginLeft={7} marginTop={7}>
      <Flex alignItems="center">
        <Text fontSize={28} fontWeight="bold">
          My Progress
        </Text>
        <Link style={{ color: "blue" }} marginTop={1}>
          Learn more.
        </Link>
      </Flex>
      <br />
      <Text color="rgba(0, 0, 7, 0.4)">
        Latest activity may take 10 mins to show below.
      </Text>

      <br />
      <Flex gap={3} alignItems="center">
        <Select placeholder="Last 7 days" size="lg" width="250px">
          <option value="volvo">Today</option>
          <option value="saab">Last 7 days</option>
          <option value="fiat">Last 30 days</option>
          <option value="audi">Custom range</option>
        </Select>
        <Select placeholder="Last 7 days" size="lg" width="250px">
          <option value="volvo">Today</option>
          <option value="saab">Last 7 days</option>
          <option value="fiat">Last 30 days</option>
          <option value="audi">Custom range</option>
        </Select>
        <Select placeholder="Last 7 days" size="lg" width="250px">
          <option value="volvo">Today</option>
          <option value="saab">Last 7 days</option>
          <option value="fiat">Last 30 days</option>
          <option value="audi">Custom range</option>
        </Select>
        <Flex alignItems="center">
          <Text fontSize={40} fontWeight="bold">
            0
          </Text>
          <Text>exerciseMin</Text>
          <Text fontSize={30}>|</Text>
          <Text fontSize={40} fontWeight="bold">
            0
          </Text>
          <Text>total learning</Text>
        </Flex>
      </Flex>
      <br />

      <SimpleGrid spacing={2} gap={1} templateColumns="repeat(6, 1fr)">
        <Text>ACTIVELY</Text>
        <Text>DATE</Text>
        <Text>LEVEL</Text>
        <Text>CHANGE</Text>
        <Text>CORRECT/TABLE PROBLEMS</Text>
        <Text>TIME (MIN)</Text>
      </SimpleGrid>
      <Divider borderColor="black" borderWidth="1px" fontWeight="bold" />
      <br />
      <SimpleGrid spacing={4}  templateColumns="repeat(6, 1fr)">
        <Text>count with small numbers class1</Text>
        <Text>Mar 27, 2024 at 10:01 PM</Text>
        <Text>-</Text>
        <Text>-</Text>
        <Text>-</Text>
        <Text>0</Text>
      </SimpleGrid>
      <br />
      <Divider borderColor="black" borderWidth="1px" fontWeight="bold" />
      <br />
      <br />
    </Box>
  );
};

export default Progress;
