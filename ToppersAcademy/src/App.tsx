import React from 'react';



import { Navbar } from './components/Navbar';
import { AllRoutes } from './components/AllRotes';
import { Footer } from './components/Footer';
import { AuthProvider } from './components/AuthContext';
import { BasicUseage } from './component/components/BasicUseage';
import Body from './component/components/Body';
import Card1 from './pages/Card1';
import Progress from './pages/Progress';
import Profile from './pages/Profile';
import Teachers from './pages/Teachers';
import { RouteNavbar } from './component/RouteNavbar';



const App: React.FC = () => {
  return (
    <>


      <AuthProvider>
        <Navbar />
        <AllRoutes />
        <Footer />
      </AuthProvider>
      
     
      <Footer/>


    </>



  );
};

export default App;
