import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

import { RiInformationLine } from "react-icons/ri";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faSquare, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

const ProficientComponent = () => {
  return (
   <Flex>
    <RiInformationLine />
    <Box><FontAwesomeIcon icon={faCrown} style={{color: "#FFD43B",}} /></Box><Text>mastered</Text>
    <Box><FontAwesomeIcon icon= {faStar} style={{color: "#B197FC",}} /></Box><Text>Proficient</Text>
    <Box><FontAwesomeIcon icon={faStarHalfStroke} style={{color: "#f69337",}} /></Box><Text>Familiar</Text>
    <Box><FontAwesomeIcon icon={faStar} style={{color:"red"}}/></Box><Text>Attempted</Text>
    <Box><FontAwesomeIcon icon={faSquare} style={{color: "#ada8bd",}} /></Box><Text>Not Attempted</Text>
   </Flex>
  )
}

export default ProficientComponent
