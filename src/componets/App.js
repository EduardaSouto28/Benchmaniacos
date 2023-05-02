import '../style/App.css'
import { ChakraProvider } from '@chakra-ui/react'
import ModalBasic from './Modal';

function App() {
  return (
    <div className='App'>
      <ChakraProvider>
        <ModalBasic/>
      </ChakraProvider>
    </div>
  );
}

export default App;
