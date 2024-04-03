import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Login from './pages/Login';
import Signup from './components/Signup';
import { AllRoutes } from './components/AllRotes';

const App: React.FC = () => {
  return (
    <>
      <Navbar/> 
      <AllRoutes />
      <Footer/>
    </>
  );
};

export default App;
