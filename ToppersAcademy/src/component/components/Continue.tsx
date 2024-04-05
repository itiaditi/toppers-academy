import {
  Box,
  Button,
  Checkbox,
  Divider,
  // Grid,
  // GridItem,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  // Radio,
  // RadioGroup,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
// import Body from "./Body";

interface ContinueProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Continue: React.FC<ContinueProps> = ({ isOpen, onClose }) =>{
 
  const {  onOpen } = useDisclosure();


  return (
    <>
      <Button onClick={onOpen} color="white" bg="blue">
        Edit Courses
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <Text textAlign="center" fontSize={25} fontWeight="bold" color="blue">
            Personslize Toppers Academy
          </Text>
          <br />
          <ModalHeader
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            backgroundImage="data:image/jpeg;base64,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"
            backgroundPosition="center"
            backgroundSize="cover"
          >
            <Text>What Courses can we help you learn ?</Text>
            <Text marginBottom={2}>
              Choose 4-5 and we'll gather the right lession for you.
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <Box overflowY="scroll" maxHeight="70vh">
            <ModalBody>
              <Box
                display="flex"
                justifyContent="space-between"
                marginBottom={2}
              >
                <Text  fontWeight="bold">Math</Text>
                <Link style={{ textDecoration: "underline" }}>See all(33)</Link>
              </Box>
              <Divider
                borderColor="black"
                borderWidth="1px"
                fontWeight="bold"
              />
              <Stack spacing={3} direction="column">
                <Stack
                  direction="row"
                  justifyContent="space-around"
                  alignItems="center"
                >
                  <Checkbox colorScheme="red">Early Math Review</Checkbox>
                  <Checkbox colorScheme="red" marginRight={10}>
                    Class 1
                  </Checkbox>
                  <Checkbox colorScheme="red" marginLeft={9}>
                    Class 2
                  </Checkbox>
                </Stack>
                <Stack
                  spacing={20}
                  direction="row"
                  justifyContent="space-around"
                  alignItems="center"
                >
                  <Checkbox colorScheme="red">Class 3</Checkbox>
                  <Checkbox colorScheme="red">Class 4</Checkbox>
                  <Checkbox colorScheme="red">Class 5</Checkbox>
                </Stack>
              </Stack>

              <br />
              <Box
                display="flex"
                justifyContent="space-between"
                marginBottom={2}
              >
                <Text  fontWeight="bold">Computing</Text>
                <Link style={{ textDecoration: "underline" }}>See all(3)</Link>
              </Box>
              <Divider
                borderColor="black"
                borderWidth="1px"
                fontWeight="bold"
              />
              <Stack spacing={3} direction="column">
                <Stack spacing={10} direction="row">
                  <Checkbox colorScheme="red">Checkbox 1</Checkbox>
                  <Checkbox colorScheme="red">Checkbox 2</Checkbox>
                </Stack>
              </Stack>
              <br />
              <Box
                display="flex"
                justifyContent="space-between"
                marginBottom={2}
              >
                <Text  fontWeight="bold">Reading & Language arts</Text>
                
              </Box>
              <Divider
                borderColor="black"
                borderWidth="1px"
                fontWeight="bold"
              />
                <Checkbox colorScheme="red">Checkbox 1</Checkbox>
                <br />
                <br />
                <Box
                display="flex"
                justifyContent="space-between"
                marginBottom={2}
              >
                <Text  fontWeight="bold">Science</Text>
                <Link style={{ textDecoration: "underline" }}>See all(3)</Link>
              </Box>
              <Divider
                borderColor="black"
                borderWidth="1px"
                fontWeight="bold"
              />
               <Text>No Courses Match Your Grade   <Link style={{ textDecoration: "underline" }}>See all(3)</Link></Text>
               <br />
               <Box
                display="flex"
                justifyContent="space-between"
                marginBottom={2}
              >
                <Text  fontWeight="bold">Economics</Text>
                <Link style={{ textDecoration: "underline" }}>See all(3)</Link>
              </Box>
              <Divider
                borderColor="black"
                borderWidth="1px"
                fontWeight="bold"
              />
               <Text>No Courses Match Your Grade   <Link style={{ textDecoration: "underline" }}>See all(3)</Link></Text>
               <br />
               <Box
                display="flex"
                justifyContent="space-between"
                marginBottom={2}
              >
                <Text  fontWeight="bold">Arts & humanities</Text>
                <Link style={{ textDecoration: "underline" }}>See all(3)</Link>
              </Box>
              <Divider
                borderColor="black"
                borderWidth="1px"
                fontWeight="bold"
              />
               <Text>No Courses Match Your Grade   <Link style={{ textDecoration: "underline" }}>See all(3)</Link></Text>
               <br />
               <Box
                display="flex"
                justifyContent="space-between"
                marginBottom={2}
              >
                <Text  fontWeight="bold">Test Prep</Text>
                <Link style={{ textDecoration: "underline" }}>See all(3)</Link>
              </Box>
              <Divider
                borderColor="black"
                borderWidth="1px"
                fontWeight="bold"
              />
               <Text>No Courses Match Your Grade   <Link style={{ textDecoration: "underline" }}>See all(3)</Link></Text>
               <br />
               <Box
                display="flex"
                justifyContent="space-between"
                marginBottom={2}
              >
                <Text  fontWeight="bold">Life Skills</Text>
                <Link style={{ textDecoration: "underline" }}>See all(3)</Link>
              </Box>
              <Divider
                borderColor="black"
                borderWidth="1px"
                fontWeight="bold"
              />
               <Text>No Courses Match Your Grade   <Link style={{ textDecoration: "underline" }}>See all(3)</Link></Text>
               <br />
               <Divider
                borderColor="black"
                borderWidth="1px"
                fontWeight="bold"
              />
            </ModalBody>

            <ModalFooter>
            <Button colorScheme='blue'>Continue with Course</Button>
            </ModalFooter>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}
