import React from 'react';
import { Box, Button, ButtonGroup, Center, Text, VStack } from '@chakra-ui/react';

const backgroundImage: string = "url('./src/assets/last_chance_collage@2x.png')";

const JoinAcademy: React.FC = () => {
    return (
        <>
            <Center>
                <VStack mt={50} mb={90}>
                    <Text fontWeight="600" fontSize={45} mb={10}>Join Toppers Academy Today</Text>
                    <ButtonGroup>
                        <Box backgroundImage={backgroundImage}
                            backgroundRepeat="no-repeat"
                            backgroundSize="cover"
                            backgroundPosition="center"
                            pl={20}
                            borderRadius="md" >
                            <VStack mt={10} pb={180} pr={100} pl={85}>
                                <Button colorScheme="messenger" variant="solid" h={55} fontSize={20} p={5} w={340}>Learners</Button>
                                <Button colorScheme="messenger" variant="solid" h={55} fontSize={20} p={5} w={340}>Teachers</Button>
                                <Button colorScheme="messenger" variant="solid" h={55} fontSize={20} p={5} w={340}>Parents</Button>
                                <Button colorScheme="messenger" variant="solid" h={55} fontSize={20} p={5} w={340}>Give today</Button>
                            </VStack>
                            </Box>
                    </ButtonGroup>
                </VStack>
            </Center>
        </>
    );
};

export { JoinAcademy };
