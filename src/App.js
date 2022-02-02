import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Chess from './problem';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Chess />
    </ChakraProvider>
  );
}

export default App;
