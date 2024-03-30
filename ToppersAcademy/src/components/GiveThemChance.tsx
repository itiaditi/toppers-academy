import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, HStack, Heading, Text } from "@chakra-ui/layout";

const GiveThemChance: React.FC = () => {
    return (
        <HStack pr={"150px"} pl={"180px"} pt={70} pb={50} alignItems="start">
            <Box w="55%">
                <Image src=".\src\assets\math-unicorn-donate-collage.png" p="50px" mt={-10} ml={-50}/>
            </Box>
            <Box w="40%">
                <Text fontSize={14} letterSpacing={1} mb={5} color="#989a9d">TOGETHER WE CAN MAKE A DIFFERENCE</Text>
                <Heading fontFamily="Source Serif 4, serif" fontWeight="600" fontSize={45}>
                <Text as="span" borderBottom="3px solid #bfe6dd">Every </Text>child deserves the chance to learn.
                </Heading>
                <Text mt={5} mb={5} fontSize={19}>Across the globe, 617 million children are missing basic math and reading skills. We’re a nonprofit delivering the education they need, and we need your help. You can change the course of a child’s life.</Text>
                    <Button colorScheme="messenger" variant="solid" h={55} fontSize={20} p={5} mt={6}>Give them the chance</Button>
            </Box>
        </HStack>
    );
};

export { GiveThemChance };
