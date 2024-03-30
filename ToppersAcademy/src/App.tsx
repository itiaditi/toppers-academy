import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import UnitComponent from './Components/UnitComponent';





const App: React.FC = () => {
  return (
    <ChakraProvider>
<UnitComponent/>

    </ChakraProvider>
  );
};

export default App;