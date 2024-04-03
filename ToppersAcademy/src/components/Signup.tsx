'use client'

import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  FormControl,
  FormLabel,
  InputGroup,
  HStack,
  InputRightElement,
  Link,
  useColorModeValue,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useToast,
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from 'react'
import { useContext } from 'react';
import { AuthContext } from './AuthContext';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();

  const { signup } = useContext(AuthContext);
  const [selectedRole, setSelectedRole] = useState('learner');
  function ToastExample() {
    // const toast = useToast()
    return (
      <Button
        onClick={() =>
          toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
        }
      >
        Show Toast
      </Button>
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData = {
      dateOfBirth: e.currentTarget.password.value,
      email: e.currentTarget.email.value,
      firstName: e.currentTarget.firstName.value,
      lastName: e.currentTarget.lastName.value,
      password: e.currentTarget.password.value,
      role: selectedRole,
      userName: e.currentTarget.firstName.value + e.currentTarget.lastName.value + Number(String(Date.now()).slice(0, 3)),
    };
    await signup(userData);
    try {
      await signup(userData);
      // If signup is successful, show success toast
      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      // If there's an error during signup, show error toast
      toast({
        title: 'An error occurred.',
        description: 'Please try again later.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      console.error('Error during signup:', error);
    }

  };
  return (
    <Box position={'relative'} p={0}>
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 1, lg: 1 }}
        py={{ base: 1, sm: 2, lg: 1 }}>
        <Stack bg="rgb(44,83,60)" p={7} >
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '2xl', sm: '2xl', md: '3xl', lg: '4xl' }}
            color="white">
            Welcome To Toppers Academy{' '}
          </Heading>
          <Box>
            <img src="https://cdn.kastatic.org/images/signup/signup-banner-2x.png" alt="Description of the image" />
          </Box>
          <Heading
            lineHeight={1}
            fontSize={{ base: 'xl', sm: 'xl', md: '2xl', lg: '3xl' }}
            color="white">
            Log in to Toppers Academy to get started{' '}
          </Heading>
        </Stack>
        <Stack
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 1, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}>
          <Box as={'form'} mt={10} onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                  <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                      Sign up
                    </Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                      to join Toppers Academy
                    </Text>
                  </Stack>
                  <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Tabs variant='unstyled' onChange={(index) => setSelectedRole(index === 0 ? 'learner' : index === 1 ? 'teacher' : 'parent')}>
                      <TabList>
                        <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Learner</Tab>
                        <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Teacher</Tab>
                        <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Parent</Tab>
                      </TabList>
                      <TabPanels>
                        <TabPanel>
                          <Stack spacing={4}>
                            <HStack>
                              <Box>
                                <FormControl id="firstName" isRequired>
                                  <FormLabel>First Name</FormLabel>
                                  <Input type="text" />
                                </FormControl>
                              </Box>
                              <Box>
                                <FormControl id="lastName" isRequired>
                                  <FormLabel>Last Name</FormLabel>
                                  <Input type="text" />
                                </FormControl>
                              </Box>
                            </HStack>
                            <FormControl id="email" isRequired>
                              <FormLabel>Email address</FormLabel>
                              <Input type="email" />
                            </FormControl>
                            <FormControl id="password" isRequired>
                              <FormLabel>Password</FormLabel>
                              <InputGroup>
                                <Input type={showPassword ? 'text' : 'password'} />
                                <InputRightElement h={'full'}>
                                  <Button
                                    variant={'ghost'}
                                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                  </Button>
                                </InputRightElement>
                              </InputGroup>
                            </FormControl>
                            <Stack spacing={10} pt={2}>
                              <Button
                                loadingText="Submitting"
                                size="lg"
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                  bg: 'blue.500',
                                }}
                                type="submit">
                                Sign up
                              </Button>
                            </Stack>
                            <Stack pt={6}>
                              <Text align={'center'}>
                                Already a user? <Link color={'blue.400'}>Login</Link>
                              </Text>
                            </Stack>
                          </Stack>
                        </TabPanel>
                        <TabPanel>
                          <Button
                            loadingText="Submitting"
                            size="lg"

                            color={'black'}
                            _hover={{
                              bg: 'blue.500',
                            }}
                            type="submit">
                            Sign in with Google
                          </Button>
                          <Button
                            loadingText="Submitting"
                            size="lg"

                            color={'black'}
                            _hover={{
                              bg: 'blue.500',
                            }}
                            type="submit">
                            Sign in with Facebook
                          </Button>
                          <Button
                            loadingText="Submitting"
                            size="lg"

                            color={'black'}
                            _hover={{
                              bg: 'blue.500',
                            }}
                            type="submit">
                            Sign in with GitHub
                          </Button>
                        </TabPanel>
                        <TabPanel>
                          <Button
                            loadingText="Submitting"
                            size="lg"

                            color={'black'}
                            _hover={{
                              bg: 'blue.500',
                            }}
                            type="submit">
                            Sign in with Google
                          </Button>
                          <Button
                            loadingText="Submitting"
                            size="lg"

                            color={'black'}
                            _hover={{
                              bg: 'blue.500',
                            }}
                            type="submit">
                            Sign in with Facebook
                          </Button>
                          <Button
                            loadingText="Submitting"
                            size="lg"

                            color={'black'}
                            _hover={{
                              bg: 'blue.500',
                            }}
                            type="submit">
                            Sign in with GitHub
                          </Button>
                        </TabPanel>
                      </TabPanels>
                    </Tabs>

                  </Box>
                </Stack>
              </Flex>
            </Stack>

          </Box>
          form
        </Stack>
      </Container>
    </Box>
  )
}