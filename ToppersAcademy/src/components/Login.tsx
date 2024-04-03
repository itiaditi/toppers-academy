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
    useColorModeValue,
    Checkbox,
} from '@chakra-ui/react'
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { useToast } from '@chakra-ui/react';

export default function Login() {
    const { login } = useContext(AuthContext);
    const toast = useToast();
    interface Credentials {
        email: string;
        password: string;
    }
    

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const loginEmail: string = e.currentTarget.email.value;
        const loginPassword: string = e.currentTarget.password.value;
      
        try {
          // Call the login function with provided credentials
          await login({ email: loginEmail, password: loginPassword });
        } catch (error: any) {
          // Display an error toast if login fails
          toast({
            title: 'Login failed',
            description: error.message || 'Please try again later.',
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
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
                <Stack bg="rgb(44,83,60)" p={7}>
                    <Heading
                        lineHeight={1.1}
                        fontSize={{ base: '2xl', sm: '2xl', md: '3xl', lg: '4xl' }}
                        color="white"
                         >
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
                                        <Heading fontSize={'4xl'}>Log In</Heading>
                                    </Stack>
                                    <Box
                                        rounded={'lg'}
                                        bg={useColorModeValue('white', 'gray.700')}
                                        boxShadow={'lg'}
                                        p={8}>
                                        <Stack spacing={4}>
                                            <FormControl id="email">
                                                <FormLabel>Email</FormLabel>
                                                <Input type="email" />
                                            </FormControl>
                                            <FormControl id="password">
                                                <FormLabel>Password</FormLabel>
                                                <Input type="password" />
                                            </FormControl>
                                            <Stack spacing={10}>
                                                <Stack
                                                    direction={{ base: 'column', sm: 'row' }}
                                                    align={'start'}
                                                    justify={'space-between'}>
                                                    <Checkbox>Remember me</Checkbox>
                                                    <Text color={'blue.400'}>Forgot password?</Text>
                                                </Stack>
                                                <Button
                                                    bg={'blue.400'}
                                                    color={'white'}
                                                    _hover={{
                                                        bg: 'blue.500',
                                                    }}
                                                    type="submit">
                                                    Log in
                                                </Button>
                                            </Stack>
                                        </Stack>
                                    </Box>
                                </Stack>
                            </Flex>
                        </Stack>

                    </Box>

                </Stack>
            </Container>
        </Box>
    )
}