import React from 'react';
import { Box, Flex, Heading, Spacer, Text, Tooltip } from '@chakra-ui/react';
import { RiInformationLine } from 'react-icons/ri';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faSquare, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

const ProficientComponent: React.FC = () => {
  return (
    <>
    <Box>
      <Heading>Class 1</Heading>
    <Flex alignItems={'center'} p={2}> <Box><Text>4400 mastery points</Text></Box><Box ml={2}> <RiInformationLine/></Box></Flex>
    </Box>
    <Flex>
      
      <Box color={'black'}>
        <Tooltip hasArrow label="Top" placement="top">
         <Box> <FontAwesomeIcon icon={faCrown} style={{ color: '#FFD43B' }} />
          Mastered</Box>
        </Tooltip>
        
      </Box>
      <Box color={'black'}>
        <Tooltip hasArrow label="Top" placement="top">
         <Box>
        <FontAwesomeIcon icon={faStar} style={{ color: '#B197FC' }} />
        Proficient</Box></Tooltip>
      </Box>
      <Box>
      <Tooltip hasArrow label="Top" placement="top">
        <Box>
        <FontAwesomeIcon icon={faStarHalfStroke} style={{ color: '#f69337' }} />
        Familiar
        </Box></Tooltip>
      </Box>
      <Box>
      <Tooltip hasArrow label="Top" placement="top">
        <Box>
        <FontAwesomeIcon icon={faStar} style={{ color: 'red' }} />
        Attempted
        </Box></Tooltip>
      </Box>
      <Box>
      <Tooltip hasArrow label="Top" placement="top">
        <Box>
        <FontAwesomeIcon icon={faSquare} style={{ color: '#ada8bd' }} />
        Not Attempted</Box>
        </Tooltip>
      </Box>
    </Flex>
    </>
  );
};

export default ProficientComponent;
