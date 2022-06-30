import React from 'react';

import { Box, useRadio } from '@chakra-ui/react';

import { CheckIcon } from '@chakra-ui/icons';

const Color = (props) => {
    const { bgColor } = props;

    const { getInputProps, getCheckboxProps } = useRadio(props);
  
    const input = getInputProps();
    const checkbox = getCheckboxProps();
  
    return (
        <Box as='label'>
            <input {...input} />
            <Box
                {...checkbox}
                width={8}
                height={8}
                display='flex'
                rounded='200px'
                cursor='pointer'
                boxShadow='md'
                borderWidth='1px'
                bgColor={bgColor}
                alignItems='center'
                justifyContent='center'
                _focus={{ boxShadow: 'outline' }}
            >
                {input.checked ? <CheckIcon w={3} h={3} color='#fff' /> : []}
            </Box>
        </Box>
    )
}

export default Color;