import '../style/Modal.css'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverFooter,
  PopoverArrow,
  Button,
  IconButton,
} from '@chakra-ui/react'
import { ChatIcon } from '@chakra-ui/icons'
import { useState } from 'react';
import axios from 'axios';

function ModalBasic() {
  
  const [showResponse, setShowResponse] = useState(false);
  const [message1, setMessage1] = useState('');
  // const [message2, setMessage2] = useState('');
  // const [message3, setMessage3] = useState('');

  const getMessage1 = () => {
    axios.get('https://apibench.lauralima6.repl.co/')
    .then(response => {
      setMessage1(response.data);
      setShowResponse(true);
    })
    .catch(error => {
      console.error(error);
    });
  }

  const getMessage2 = () => {
    axios.get('https://apibench.lauralima6.repl.co/basedefas')
    .then(response => {
      setMessage1(response.data);
      setShowResponse(true);
    })
    .catch(error => {
      console.error(error);
    });
  }

  const getMessage3 = () => {
    axios.get('https://apibench.lauralima6.repl.co/variacao')
    .then(response => {
      setMessage1(response.data);
      setShowResponse(true);
    })
    .catch(error => {
      console.error(error);
    });
  }


  function response(value) {
    return (
      <PopoverHeader 
        m='8'
        border='none'
        textAlign='center'
        maxWidth='800px'
        >
          {message1}
        </PopoverHeader>
    );
  }

  function selectButton() {
    return (
      <>
        <PopoverHeader 
          textAlign='center'
          border='none'
          mt='5'
          ml='2'
          mr='2'
          fontWeight='600'
        >
          Sobre o que mais você gostaria de saber?
        </PopoverHeader>

        <PopoverFooter
          border='none' 
          display='flex'
          flexDirection='column'
          justifyContent='center'
          margin='5'
        >
          <Button onClick={getMessage1} color='#202C44' mb='5' fontWeight='200' fontSize='14'>Seção “Base de fãs”</Button>
          <Button onClick={getMessage2} color='#202C44' mb='5' fontWeight='200' fontSize='14'>Gráfico - Total da base de fãs</Button>
          <Button onClick={getMessage3} color='#202C44' mb='5' fontWeight='200' fontSize='14'>Gráfico - Variação da base de fãs</Button>
        </PopoverFooter>
      </>
    );
  }

  return (
    <Popover>

      <PopoverTrigger>
        <IconButton 
          onClick={()=> {setShowResponse(false)}}
          aria-label='Search database'
          icon={<ChatIcon />}
          backgroundColor='transparent'
          
        />
      </PopoverTrigger>

      <PopoverContent  
        backgroundColor='#202C44'    
        color='white'   
        borderRadius='30'
        width='100%'
      >
        <PopoverArrow
          backgroundColor='#202C44'    
        />
        {showResponse ? (response()) : (selectButton())}
      </PopoverContent>

    </Popover>
  );
}

export default ModalBasic;
