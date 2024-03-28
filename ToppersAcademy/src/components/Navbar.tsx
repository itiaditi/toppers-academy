import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { Button, Center, Flex, Grid, HStack, Image, Input, InputGroup, InputRightElement, Link, Menu, MenuButton, MenuList} from "@chakra-ui/react";

const Navbar: React.FC = () => {
    return (
        <>
            <Flex border="1px solid gray" pr="150px" pl="150px" gap={"100px"} color={"#1865f2"} pt={"10px"} pb={"10px"}>
                <HStack gap={"30px"} flex="1">
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            Courses
                        </MenuButton>
                        <MenuList w={"100vw"} pr={"200px"} pl={"200px"} pt={"30px"} ml={"-100px"} fontSize={"15px"}>
                            <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                                <Link color={"black"} fontSize={"13px"}>MATH (NCERT)</Link>
                                <Link color={"black"} fontSize={"13px"}>MATH (MAHARASHTRA)</Link>
                                <Link color={"black"} fontSize={"13px"}>SCIENCE (NCERT)</Link>
                                <Link color={"black"} fontSize={"13px"}>ALL STATE BOARDS</Link>
                                <Link color={"black"} fontSize={"13px"}>EXPLORE MORE</Link>
                                <Link>Class 1</Link>
                                <Link>Class 1</Link>
                                <Link>Class 9 Phy</Link>
                                <Link>Punjab</Link>
                                <Link>Digital SAT</Link>
                                <Link>Class 2</Link>
                                <Link>Class 2</Link>
                                <Link>Class 9 Chem</Link>
                                <Link>Uttar Pradesh</Link>
                                <Link>Grammar</Link>
                                <Link>Class 3</Link>
                                <Link>Class 3</Link>
                                <Link>Class 9 Bio</Link>
                                <Link>Maharashtra</Link>
                                <Link>Computer Programming</Link>
                                <Link>Class 4</Link>
                                <Link>Class 4</Link>
                                <Link>Class 10 Phy</Link>
                                <Link>Assam</Link>
                                <Link>Computer Science</Link>
                                <Link>Class 5</Link>
                                <Link>Class 5</Link>
                                <Link>Class 10 Chem</Link>
                                <Link>Odisha</Link>
                                <Link>World History</Link>
                                <Link>Class 6</Link>
                                <Link>Class 6</Link>
                                <Link>Class 10 Bio</Link>
                                <Link>NCERT (Hinglish)</Link>
                                <Link>Macroeconomics</Link>
                                <Link>Class 7</Link>
                                <Link>Class 7</Link>
                                <Link>Class 11 Phy</Link>
                                <Link></Link>
                                <Link>Macroeconomics</Link>
                                <Link>Class 8</Link>
                                <Link>Class 8</Link>
                                <Link>Class 11 Chem</Link>
                                <Link></Link>
                                <Link>Finance</Link>
                                <Link>Class 9</Link>
                                <Link>Class 9</Link>
                                <Link>Class 11 Bio</Link>
                                <Link></Link>
                                <Link>Personal Finance</Link>
                                <Link>Class 10</Link>
                                <Link>Class 10</Link>
                                <Link>Class 12 Phy</Link>
                                <Link></Link>
                                <Link>Financial Literacy</Link>
                                <Link>Class 11</Link>
                                <Link></Link>
                                <Link>Class 12 Chem</Link>
                                <Link></Link>
                                <Link>Social Media Literacy</Link>
                                <Link>Class 12</Link>
                                <Link color={"black"} fontSize={"13px"}>PACE (SOE PUNJAB)</Link>
                                <Link>Class 12 Bio</Link>
                                <Link></Link>
                                <Link>AI for Education</Link>
                                <Link>Board Prep</Link>
                                <Link>Math</Link>
                                <Link>Essentials (9-12)</Link>
                                <Link></Link>
                                <Link>Wireless Philosophy</Link>
                                <Link></Link>
                                <Link>Science</Link>
                                <Link></Link>
                                <Link></Link>
                                <Link>Learn to Learn</Link>
                                <Link></Link>
                                <Link>English</Link>
                                <Link></Link>
                                <Link></Link>
                                <Link></Link>
                            </Grid>
                        </MenuList>
                    </Menu>

                    <InputGroup w={"220px"}>
                        <Input type="text" placeholder="Search..." variant="filled" />
                        <InputRightElement
                            pointerEvents="none"
                            children={<SearchIcon color="gray.300" />}
                        />
                    </InputGroup>
                </HStack>

                <Center>
                    <Image src='.\src\assets\toppers-academy.png' alt='logo'  />
                </Center>

                <HStack gap={"30px"} pl={"160px"}>
                    <Link href="#" w={"75px"}>Donate <i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
                    <Link href="#">LogIn</Link>
                    <Link href="#">SignUp</Link>
                </HStack>
            </Flex>
        </>
    );
};

export { Navbar };
