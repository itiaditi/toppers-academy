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
    Checkbox,
} from '@chakra-ui/react'

import { useState } from 'react'

export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <Box position={'relative'} >
            <Container
                as={SimpleGrid}
                maxW={'7xl'}
                columns={{ base: 1, md: 2 }}
                spacing={{ base: 1, lg: 1 }}
                py={{ base: 1, sm: 2, lg: 1 }}>
                <Stack bg="rgb(44,83,60)">
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
                    <Box as={'form'} mt={10}>
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
                                                <FormLabel>Email or Username</FormLabel>
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
                                                    }}>
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