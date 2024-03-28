import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from "@chakra-ui/accordion"
import { Image } from "@chakra-ui/image"
import { Box, HStack, Link, VStack } from "@chakra-ui/layout"

const CoursesLandingPage: React.FC = () => {
    return (
        <>
            <HStack mr={150} ml={150} p={50} backgroundColor="f5f5f5">
                <VStack>
                <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Image src=".\src\assets\math.png" w={10} borderRadius='full'/>
                            <Box as="span" flex='1' textAlign='left'>
                                Math (NCERT)
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Link>Class 1</Link>
                        <Link>Class 2</Link>
                        <Link>Class 3</Link>
                        <Link>Class 4</Link>
                        <Link>Class 5</Link>
                        <Link>Class 6</Link>
                        <Link>Class 7</Link>
                        
                        <Link>Class 8</Link>
                        <Link>Class 9</Link>
                        <Link>Class 10</Link>
                        <Link>Class 11</Link>
                        <Link>Class 12</Link>
                        <Link>Class Board prep</Link>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
                </VStack>
                <VStack>

                </VStack>
            </HStack>
        </>
    )
}

export { CoursesLandingPage }
