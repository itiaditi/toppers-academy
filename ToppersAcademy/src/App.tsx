import React from 'react';



import { Navbar } from './components/Navbar';
import { AllRoutes } from './components/AllRotes';
import { Footer } from './components/Footer';



const App: React.FC = () => {
  return (
    <>

      <Navbar/> 
      <AllRoutes/>
      <Footer/>
</>


 
  );
};

export default App;
