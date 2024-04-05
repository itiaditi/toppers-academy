import React from 'react';
import { Center, Grid, GridItem, Image, Text, VStack } from '@chakra-ui/react';

const KeySupporters: React.FC = () => {
    return (
        <>
            <Center>
                <VStack pr={250} pl={250} justifyContent="center" backgroundColor="#f5f5f5" w="100%" mt={90}>
                    <Text fontWeight="600" fontSize={35} mt={70} mb={70}>Key Supporters</Text>

                    <Grid templateColumns='repeat(4, 1fr)' gap={12} mb={100} alignItems="center" justifyContent="center">

                        <GridItem>
                            <Image src="https://cdn.kastatic.org/images/supporters-logos/bank-of-america-dark-gray@2x.png" />
                        </GridItem>
                        <GridItem w={180}>
                            <Image src="https://cdn.kastatic.org/images/supporters-logos/college-board-dark-gray@2x.png" />
                        </GridItem>
                        <GridItem>
                            <Image src="https://cdn.kastatic.org/images/supporters-logos/ann-and-john-doerr-dark-gray@2x.png"/>
                        </GridItem>
                        <GridItem>
                            <Image src="https://cdn.kastatic.org/images/supporters-logos/gates-foundation-dark-gray@2x.png" />
                        </GridItem>
                        <GridItem w={150}>
                            <Image src="https://cdn.kastatic.org/images/supporters-logos/lemann-foundation-dark-gray@2x.png" />
                        </GridItem>
                        <GridItem>
                            <Image src="https://cdn.kastatic.org/images/supporters-logos/carlos-rodriguez-pastor-dark-gray@2x.png" />
                        </GridItem>
                        <GridItem w={180}>
                            <Image src="https://cdn.kastatic.org/images/supporters-logos/tata-trusts-dark-gray@2x.png" />
                        </GridItem>
                        <GridItem w={150}>
                            <Image src="https://cdn.kastatic.org/images/supporters-logos/valhalla-dark-gray@2x.png" />
                        </GridItem>
                    </Grid>
                </VStack>
            </Center>
        </>
    );
};

export { KeySupporters };
