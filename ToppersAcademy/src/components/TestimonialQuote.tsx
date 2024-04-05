import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react"

const TestimonialQuote: React.FC = () => {
    return (
        <VStack pr={250} pl={250} h={600} justifyContent="center" backgroundColor="#f5f5f5">
            <Text fontSize={33}>
                “When I was a child, I used to fear mathematics. But now, I am in love with mathematics because of Toppers Academy.”
            </Text>
            <Flex w="100%" justifyContent="flex-end" alignItems="center">
                <Box>
                    <Text as="b" letterSpacing={2}>ANJALI</Text> <br />
                    <Text as="i">GURUGRAM, HARYANA</Text>
                </Box>
                <Image src="https://cdn.kastatic.org/images/lohp/anjali-3.png" w={130} ml={10} />
            </Flex>
        </VStack>

    )
}

export { TestimonialQuote }
