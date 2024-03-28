import React, { useState } from 'react';
import { Box, Button, Divider, Radio, RadioGroup, Stack, Text, useToast } from '@chakra-ui/react';

const McqComponent = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const toast = useToast();

  const handleOptionChange = (value:any|string) => {
    setSelectedOption(value);
    setIsButtonDisabled(false); // Enable the button once an option is selected
  };

  const handleButtonClick = () => {
    // Play sound when button is clicked
    const audio = new Audio('../audio/correct-6033.mp3'); // Check the path to your audio file
    audio.play();

    // Show toast
    toast({
      title: 'Submission Successful',
      description: 'Your submission has been received.',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });

    setSelectedOption(null);
    setIsButtonDisabled(true);
  };

  return (
    <Box>
      <Box textAlign={'left'} m={10}>
        <Text>What is 2 + 2?</Text>
        <Box>
          <Text>Choose 1 answer:</Text>
          <Divider />
        </Box>
        <Box>
          <RadioGroup value={selectedOption} onChange={(e) => handleOptionChange(e.target.value)}>
            <Stack spacing={5} direction='column'>
              <Radio colorScheme='green' value='1'>
                Radio
              </Radio>
              <Radio colorScheme='green' value='2'>
                Radio
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>
      </Box>
      <Box border="none" bg='white' textAlign={'right'}>
        <Button
          bg="blue"
          m={4}
          _hover={{ bg: 'blue.600' }}
          onClick={handleButtonClick}
          disabled={isButtonDisabled} 
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default McqComponent;
