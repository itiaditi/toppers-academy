import React from 'react';



import { Navbar } from './components/Navbar';
import { AllRoutes } from './components/AllRotes';
import { Footer } from './components/Footer';
import { AuthProvider } from './components/AuthContext';



const App: React.FC = () => {
  return (
    <>

      <AuthProvider>
        <Navbar />
        <AllRoutes />
        <Footer />
      </AuthProvider>
    </>



  );
};

export default App;
