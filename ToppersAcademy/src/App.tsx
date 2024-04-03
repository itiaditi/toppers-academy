
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { CoursesLandingPage } from './components/CoursesLandingPage'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import Body from './component/components/Body';
import Navbar from './component/components/Navbar';

const App: React.FC = () => {
  return (
    <>
      {/* <Navbar/> 
      <Header/>
      <CoursesLandingPage/>
      <Footer/> */}
         <Navbar/>
    
    <Body />
    </>
  );
};

export default App;
