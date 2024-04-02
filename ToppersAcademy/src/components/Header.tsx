import { Button, ButtonGroup } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, HStack, Heading, Text } from "@chakra-ui/layout";

const Header: React.FC = () => {
    return (
        <HStack pr={"150px"} pl={"150px"} mt={50}>
            <Box>
                <Image src="./src/assets/hero_student_collage_IN_1x.png" p="50px" w={700} />
            </Box>
            <Box>
                <Heading fontFamily="Source Serif 4, serif" fontWeight="600">
                    For every student, <br />
                    every classroom. <br />
                    <Text as="span" borderBottom="3px solid #bfe6dd">Real results.</Text>
                </Heading>
                <Text mt={5} mb={5}>We’re a nonprofit with the mission to provide a free, world-class education <br /> for anyone, anywhere.</Text>
                <ButtonGroup spacing={2}>
                    <Button colorScheme="messenger" variant="solid" width={200}>Learners</Button>
                    <Button colorScheme="messenger" variant="solid" width={200}>Teachers</Button>
                    <Button colorScheme="messenger" variant="solid" width={200}>Parents</Button>
                </ButtonGroup>
            </Box>
        </HStack>
    );
};

export { Header };
