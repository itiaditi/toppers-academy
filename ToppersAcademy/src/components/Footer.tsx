import { Image } from "@chakra-ui/image"
import { Box, Flex, HStack, Link, Text, VStack } from "@chakra-ui/layout"

const Footer: React.FC = () => {
    return (
        <>
            <VStack backgroundColor="#0b2149" pr={"150px"} pl={"150px"} color="white" gap="20px" pt="50px" pb="30px">
                <HStack alignItems="start" gap="30px">
                    <Box color="#7185AA" fontSize="21px" width="38%">
                        <Text mb="25px">Our mission is to provide a free, world-class education to anyone, anywhere.
                        </Text>

                        <Text>
                            Khan Academy is a 501(c)(3) nonprofit organization.{" "}
                            <Text as="span" color="white">Donate <i className="fa-solid fa-arrow-up-right-from-square fa-xs"></i></Text>{" "}
                            or{" "}
                            <Text as="span" color="white">volunteer</Text>{" "}
                            today!
                        </Text>
                    </Box>
                    <VStack flexDirection={"column"} alignItems="start" fontSize="12px" fontWeight="500" gap="12px">
                        <Link>About</Link>
                        <Link>News</Link>
                        <Link>Impact</Link>
                        <Link>Our Team</Link>
                        <Link>Our Interns</Link>
                        <Link>Our content specialists</Link>
                        <Link>Our leadership</Link>
                        <Link>Our supporters</Link>
                        <Link>Our contributors</Link>
                        <Link>Our Finances</Link>
                        <Link>careers</Link>
                        <Link>Internships</Link>
                        <Link>Cookie preferences</Link>
                    </VStack>
                    <VStack flexDirection="column" alignItems="start" fontSize="13px" fontWeight="500" gap="12px">
                        <Text color="#7185AA">Contact</Text>
                        <Link>Help center</Link>
                        <Link>Support community</Link>
                        <Link>Share your story</Link>
                        <Link>Press</Link>
                        <Link></Link>
                        <Link></Link>
                        <Link>Download your apps</Link>
                        <Image h={"2rem"}src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?releaseDate=1331424000" w="145px" ml="-15px"></Image>
                        <Image src="https://cdn.kastatic.org/images/store-badges/google-play/en.png" w="100px" mt="-5px" />
                    </VStack>
                    <VStack flexDirection="column" alignItems="start" fontSize="12px" fontWeight="500" gap="12px">
                        <Text color="#7185AA">Courses</Text>
                        <Link>Math (NCERT)</Link>
                        <Link>Math foundations</Link>
                        <Link>Math (Maharashtra)</Link>
                        <Link>PACE (SOE Punjab)</Link>
                        <Link>Science (NCERT)</Link>
                        <Link>All State boards</Link>
                        <Link>Explore more</Link>
                    </VStack>
                </HStack >
                <Flex fontSize="12px" w="100%" alignItems="end" justifyContent="space-between">
                    <VStack alignItems="start">
                        <HStack>
                            <Text as="span" color="#7185AA">Language</Text><Text>English</Text>
                        </HStack>
                        <HStack>
                            <Text as="span" color="#7185AA">country</Text>
                            <Image src="https://cdn.kastatic.org/images/country-flag-icons/us-flag.png" w="15px" /><Text>U.S.</Text>
                            <Image src="https://cdn.kastatic.org/images/country-flag-icons/india-flag.png" w="15px" /><Text>India</Text>
                            <Image src="https://cdn.kastatic.org/images/country-flag-icons/mexico-flag.png" w="15px" /><Text>Mexico</Text>
                            <Image src="https://cdn.kastatic.org/images/country-flag-icons/brazil-flag.png" w="15px" /><Text>Brazil</Text>
                        </HStack>
                        <HStack mt="30px">
                            <Text color="#7185AA">© 2024 Toppers Academy</Text>
                            <Link>Terms of use</Link>
                            <Link>Privacy Policy</Link>
                            <Link>Cookie Notice</Link>
                        </HStack>
                    </VStack>
                    <HStack gap="15px">
                        <i className="fa-brands fa-facebook fa-2xl"></i>
                        <i className="fa-brands fa-twitter fa-2xl"></i>
                        <i className="fa-brands fa-instagram fa-2xl"></i>
                    </HStack>
                </Flex>
            </VStack>
        </>
    )
}

export { Footer }