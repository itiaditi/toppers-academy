import { Button, Divider, Flex, Input, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea, useDisclosure } from "@chakra-ui/react"

export  function EditProfile() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen} colorScheme="blue" variant='outline' size="sm"> Edit Profile</Button>
        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset='slideInBottom'
          size="xl"
        >
          <ModalOverlay />
          <ModalContent >
            <ModalHeader>Edit basic info</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Divider borderColor="black" borderWidth="1px" />
            <br/>
            <Flex alignItems="center" gap={2}>
            <Text>NICKNAME</Text>
             <Input  size='sm' />
            </Flex>
            <br/>
            <Text fontSize={12} marginLeft={20}>This is how your name will appear around Toppers Academy, and how your friends and coaches will recognize you.</Text>
          <br />
          <Flex alignItems="center" gap={2}>
            <Text>USERNAME</Text>
             <Input  size='sm' />
            </Flex>
            <br />
            <Text fontSize={12} marginLeft={20}>Your username will appear in your Toppers Academy address.<Link>http://www.Topperacademy.org/profile/</Link> </Text>
             <br />
             <Flex alignItems="center" gap={2}>
            <Text>BIO</Text>
             <Textarea marginLeft={16} size='sm' placeholder="Tell the Toppers Academy community about yourself in 160 characters or less. Who are you? How are you using Khan Academy?" />
            </Flex>
            <br />
            <Text fontSize={10} marginLeft={4}>Anyone can see your username, avatar, and bio.</Text>
            <br />
            <Divider borderColor="black" borderWidth="1px" />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button variant='ghost'>Save</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }