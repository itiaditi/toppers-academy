import React, { useState } from 'react';
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
  InputRightElement,
  Link,
  useColorModeValue,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useToast,
  Select,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { AuthContext } from './AuthContext';
import {useContext  } from "react";
export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState('learner');
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const toast = useToast();
  const { signup } = useContext(AuthContext);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData = {
      dateOfBirth,
      ...formData,
      role: selectedRole,
      userName: formData.firstName + formData.lastName + Number(String(Date.now()).slice(0, 3)),
    };

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

  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const years = Array.from({ length: 100 }, (_, i) => 2023 - i);

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
                            <Stack>
                              <Box>
                                <FormControl id="firstName" isRequired>
                                  <FormLabel>First Name</FormLabel>
                                  <Input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
                                </FormControl>
                              </Box>
                              <Box>
                                <FormControl id="lastName" isRequired>
                                  <FormLabel>Last Name</FormLabel>
                                  <Input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
                                </FormControl>
                              </Box>
                            </Stack>
                            <FormControl id="email1" isRequired>
                              <FormLabel>Email address</FormLabel>
                              <Input type="email" name="email" value={formData.email} onChange={handleInputChange} autoComplete="email" />
                            </FormControl>
                            <Box>
                              <FormLabel>Date Of Birth</FormLabel>
                              <Flex>
                                <Select
                                  placeholder="Month"
                                  mr={4}
                                  onChange={(e) => setDateOfBirth((prev) => {
                                    const date = prev ?? new Date();
                                    date.setMonth(parseInt(e.target.value, 10) - 1);
                                    return date;
                                  })}
                                >
                                  {months.map((month) => (
                                    <option key={month} value={month}>
                                      {month}
                                    </option>
                                  ))}
                                </Select>
                                <Select
                                  placeholder="Day"
                                  mr={4}
                                  onChange={(e) => setDateOfBirth((prev) => {
                                    const date = prev ?? new Date();
                                    date.setDate(parseInt(e.target.value, 10));
                                    return date;
                                  })}
                                >
                                  {days.map((day) => (
                                    <option key={day} value={day}>
                                      {day}
                                    </option>
                                  ))}
                                </Select>
                                <Select
                                  placeholder="Year"
                                  onChange={(e) => setDateOfBirth((prev) => {
                                    const date = prev ?? new Date();
                                    date.setFullYear(parseInt(e.target.value, 10));
                                    return date;
                                  })}
                                >
                                  {years.map((year) => (
                                    <option key={year} value={year}>
                                      {year}
                                    </option>
                                  ))}
                                </Select>
                              </Flex>
                            </Box>
                            <FormControl id="password1" isRequired>
                              <FormLabel>Password</FormLabel>
                              <InputGroup>
                                <Input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleInputChange} autoComplete="current-password" />
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
