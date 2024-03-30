import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from "@chakra-ui/accordion"
import { Image } from "@chakra-ui/image"
import { Box, HStack, Link, VStack } from "@chakra-ui/layout"

const CoursesLandingPage: React.FC = () => {
    return (
        <>
            <HStack mr={180} ml={180} p={55} backgroundColor="#f5f5f5" justifyContent="space-between" alignItems="start">
                <VStack>
                    <Accordion defaultIndex={[0]} allowMultiple w={480}>
                        <AccordionItem>
                            <h2>
                                <AccordionButton fontSize={20} fontWeight={600}>
                                    <Image src=".\src\assets\math.png" w={45} mr={2} borderRadius='full' />
                                    <Box as="span" flex='1' textAlign='left' >
                                        Math (NCERT)
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} ml={53}>
                                <HStack alignItems="start" spacing={150}>
                                    <VStack >
                                        <Link>Class 1</Link>
                                        <Link>Class 2</Link>
                                        <Link>Class 3</Link>
                                        <Link>Class 4</Link>
                                        <Link>Class 5</Link>
                                        <Link>Class 6</Link>
                                        <Link>Class 7</Link>
                                    </VStack>
                                    <VStack alignItems="start">
                                        <Link>Class 8</Link>
                                        <Link>Class 9</Link>
                                        <Link>Class 10</Link>
                                        <Link>Class 11</Link>
                                        <Link>Class 12</Link>
                                        <Link>Class Board prep</Link>
                                    </VStack>
                                </HStack>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                    <Accordion defaultIndex={[0]} allowMultiple w={480}>
                        <AccordionItem>
                            <h2>
                                <AccordionButton fontSize={20} fontWeight={600}>
                                    <Image src=".\src\assets\math.png" w={45} mr={2} borderRadius='full' />
                                    <Box as="span" flex='1' textAlign='left' >
                                        Math Foundations
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} ml={53}>
                                <HStack alignItems="start" spacing={150}>
                                    <VStack >
                                        <Link>Class 6</Link>
                                        <Link>Class 7</Link>
                                        <Link>Class 8</Link>
                                    </VStack>
                                    <VStack alignItems="start">
                                        <Link>Class 9</Link>
                                        <Link>Class 10</Link>
                                    </VStack>
                                </HStack>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                    <Accordion defaultIndex={[0]} allowMultiple w={480}>
                        <AccordionItem>
                            <h2>
                                <AccordionButton fontSize={20} fontWeight={600}>
                                    <Image src=".\src\assets\math.png" w={45} mr={2} borderRadius='full' />
                                    <Box as="span" flex='1' textAlign='left' >
                                        Math Maharashtra
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} ml={53}>
                                <HStack alignItems="start" spacing={150}>
                                    <VStack >
                                        <Link>Class 1</Link>
                                        <Link>Class 2</Link>
                                        <Link>Class 3</Link>
                                        <Link>Class 4</Link>
                                        <Link>Class 5</Link>
                                    </VStack>
                                    <VStack alignItems="start">
                                        <Link>Class 6</Link>
                                        <Link>Class 7</Link>
                                        <Link>Class 8</Link>
                                        <Link>Class 9</Link>
                                        <Link>Class 10</Link>
                                    </VStack>
                                </HStack>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                    <Accordion defaultIndex={[0]} allowMultiple w={480}>
                        <AccordionItem>
                            <h2>
                                <AccordionButton fontSize={20} fontWeight={600}>
                                    <Image src=".\src\assets\science_green.png" w={45} mr={2} borderRadius='full' />
                                    <Box as="span" flex='1' textAlign='left' >
                                        PACE (SOE Punjab)
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} ml={53}>
                                <HStack alignItems="start" spacing={150}>
                                    <VStack alignItems="start">
                                        <Link>Math</Link>
                                        <Link>Science</Link>
                                    </VStack>
                                    <VStack alignItems="start">
                                        <Link>English</Link>
                                    </VStack>
                                </HStack>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                </VStack>
                <VStack>
                    <Accordion defaultIndex={[0]} allowMultiple w={480}>
                        <AccordionItem>
                            <h2>
                                <AccordionButton fontSize={20} fontWeight={600}>
                                    <Image src=".\src\assets\science_green.png" w={45} mr={2} borderRadius='full' />
                                    <Box as="span" flex='1' textAlign='left' >
                                        Science (NCERT)
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} ml={53}>
                                <HStack spacing={90} alignItems="start">
                                    <VStack alignItems="start">
                                        <Link>Class 9 Phy</Link>
                                        <Link>Class 9 Chem</Link>
                                        <Link>Class 9 Bio</Link>
                                        <Link>Class 10 Phy</Link>
                                        <Link>Class 10 Chem</Link>
                                        <Link>Class 10 Bio</Link>
                                        <Link>Class 11 Phy</Link>
                                    </VStack>
                                    <VStack alignItems="start">
                                        <Link>Class 11 Chem</Link>
                                        <Link>Class 11 Bio</Link>
                                        <Link>Class 12 Phy</Link>
                                        <Link>Class 12 Chem</Link>
                                        <Link>Class 12 Bio</Link>
                                        <Link>Essentials (9-12)</Link>
                                    </VStack>
                                </HStack>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                    <Accordion defaultIndex={[0]} allowMultiple w={480}>
                        <AccordionItem>
                            <h2>
                                <AccordionButton fontSize={20} fontWeight={600}>
                                    <Image src=".\src\assets\math.png" w={45} mr={2} borderRadius='full' />
                                    <Box as="span" flex='1' textAlign='left' >
                                        All State boards
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} ml={53}>
                                <HStack spacing={100}>
                                    <VStack alignItems="start">
                                        <Link>Punjab</Link>
                                        <Link>Uttar Pradesh</Link>
                                        <Link>Maharashtra</Link>
                                    </VStack>
                                    <VStack alignItems="start">
                                        <Link>Assam</Link>
                                        <Link>Odisha</Link>
                                        <Link>NCERT (Hinglish)</Link>
                                    </VStack>
                                </HStack>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                    <Accordion defaultIndex={[0]} allowMultiple w={480}>
                        <AccordionItem>
                            <h2>
                                <AccordionButton fontSize={20} fontWeight={600}>
                                    <Image src=".\src\assets\life_skills.png" w={45} mr={2} borderRadius='full' />
                                    <Box as="span" flex='1' textAlign='left' >
                                        Explore more
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} ml={53}>
                                <HStack spacing={6} alignItems="start">
                                    <VStack alignItems="start">
                                        <Link>Digital</Link>
                                        <Link>Grammar</Link>
                                        <Link>Computer Programming</Link>
                                        <Link>Computer Science</Link>
                                        <Link>World History</Link>
                                        <Link>Macroeconomics</Link>
                                        <Link>Macroeconomics</Link>
                                    </VStack>
                                    <VStack alignItems="start">
                                        <Link>Finance</Link>
                                        <Link>Personal Finance</Link>
                                        <Link>Financial Literacy</Link>
                                        <Link>Social Media Literacy</Link>
                                        <Link>AI for Education</Link>
                                        <Link>Wireless Philosophy</Link>
                                        <Link>Learn to Learn</Link>
                                    </VStack>
                                </HStack>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </VStack>
            </HStack>
        </>
    )
}

export { CoursesLandingPage }
