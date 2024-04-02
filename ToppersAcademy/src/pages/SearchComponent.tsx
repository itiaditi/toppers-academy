import { Box, Button, Checkbox, HStack, Input, InputGroup, InputLeftElement, Text, VStack } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"

interface SearchComponentProps {
    searchTerm: string;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ searchTerm }) => {
    return (
        <>
            <Box mr={200} ml={200} mt={120} mb={100}>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<SearchIcon color="gray.800" />}
                    />
                    <Input type="text" value={searchTerm} onChange={() => { }} variant="filled" color="black" />
                    <Button colorScheme="messenger" variant="solid" fontSize={16} p={5} w={180} ml={1}>Search</Button>
                </InputGroup>

                <HStack mt={50}>
                    <VStack alignItems="start" borderRight="1px solid gray" pr={5}>
                        <Text fontSize={20} fontWeight={500}>Refine your search</Text>

                        <VStack alignItems="start" mt={5}>
                            <Text fontSize={12} fontWeight={500} color="#989a9d">CONTENT TYPE</Text>
                            <Checkbox>Article</Checkbox>
                            <Checkbox>Exercise</Checkbox>
                            <Checkbox>Video</Checkbox>
                            <Checkbox>Courses, Units and Lessons</Checkbox>
                        </VStack>

                        <VStack alignItems="start" mt={5}>
                            <Text fontSize={12} fontWeight={500} color="#989a9d">DOMAIN</Text>
                            <Checkbox>Math</Checkbox>
                            <Checkbox>Science</Checkbox>
                            <Checkbox>Arts and humanities</Checkbox>
                            <Checkbox>Computing</Checkbox>
                            <Checkbox>Test prep</Checkbox>
                            <Checkbox>Partner content</Checkbox>
                            <Checkbox>Life skills</Checkbox>
                        </VStack>

                    </VStack>
                </HStack>
            </Box>
        </>
    )
}
export { SearchComponent }