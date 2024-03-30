
import React from 'react';
import {Navbar} from './components/Navbar';
import { Footer } from './components/Footer'
import { LandingPage } from './pages/LandingPage';

const App: React.FC = () => {
  return (
    <>
      <Navbar/> 
      <LandingPage/>
      <Footer/>
    </>
  );
};

export default App;
