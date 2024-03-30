import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, HStack, Heading, Text } from "@chakra-ui/layout";

const LearnersSection: React.FC = () => {
    return (
        <HStack pr={"120px"} pl={"180px"} pt={200} pb={50} alignItems="start" justifyContent="space-between">
            <Box w="35%">
                <Text fontSize={14} letterSpacing={1} mb={5} color="#989a9d" fontWeight={450}>LEARNERS AND STUDENTS</Text>
                <Heading fontFamily="Source Serif 4, serif" fontWeight="600" fontSize={45}>
                    <Text as="span" backgroundColor="#bfe6dd">
                        You
                    </Text>{" "} can learn anything.
                </Heading>
                <Text mt={5} mb={5} fontSize={19}>Build a deep, solid understanding in math, science, grammar, history, SAT®, and more.</Text>
                <Button colorScheme="messenger" variant="solid" h={55} fontSize={20} p={5} mt={6}>Learners, start here</Button>
            </Box>

            <Box w="55%">
                <Image src="./src/assets/laptop_collage.png" p="50px" mt={-40} />
            </Box>
        </HStack>
    );
};

export { LearnersSection };
