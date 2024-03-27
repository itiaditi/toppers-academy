import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: "light", // Set initial color mode to light
    useSystemColorMode: false, // Disable system color mode
  }})


ReactDOM.createRoot(document.getElementById('root')!).render(
   <ChakraProvider theme={theme}>
  <App/>
  </ChakraProvider>

)
