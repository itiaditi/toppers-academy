
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import {Navbar} from './components/Navbar';
import { CoursesLandingPage } from './components/CoursesLandingPage'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Navbar/> 
      <Header/>
      <CoursesLandingPage/>
      <Footer/>
    </ChakraProvider>
  );
};

export default App;
