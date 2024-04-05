import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, HStack, Heading, Text } from "@chakra-ui/layout";

const TeachersSection: React.FC = () => {
    return (
        <HStack pr={"150px"} pl={"150px"} pt={50} pb={50} alignItems="start">
            <Box w="60%">
                <Image src="https://cdn.kastatic.org/images/lohp/faces_collage_2@2x.png" p="50px" mt={-10} ml={-50}/>
            </Box>
            <Box w="40%" ml={-50}>
                <Text fontSize={14} letterSpacing={1} mb={5} ml={4} color="#989a9d" fontWeight={450}>TEACHERS</Text>
                <Heading fontFamily="Source Serif 4, serif" fontWeight="600" fontSize={45}>
                “I’m finally able to truly <Text as="span" borderBottom="3px solid #bfe6dd">differentiate</Text> my classroom. This has been priceless for my students’ engagement.”
                </Heading>
                <Text fontSize={12} mt={5} color="#989a9d">UDAYA LAKSHMI PALAPALA / Middle school Coordinator / Hyderabad, Telangana</Text>
                <Text mt={5} mb={5} fontSize={19}>We empower teachers to support their entire classroom. 90% of US teachers who have used Khan Academy have found us effective.</Text>
                    <Button colorScheme="messenger" variant="solid" h={55} fontSize={20} p={5} mt={6}>Teachers, start here</Button>
            </Box>
        </HStack>
    );
};

export { TeachersSection };
