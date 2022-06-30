import React, { useContext } from 'react';

import { VStack, Text } from '@chakra-ui/react';

import ColorPicker from '../../color-picker';

import { PitchContext } from '../../../context';

const NumberColorPicker = () => {
    const { numberColor, setNumberColor } = useContext(PitchContext);

    return (
        <VStack w='100%' alignItems='start'>
            <Text fontSize='sm'>Cor do Número da Camisa:</Text>
            <ColorPicker 
                name={'bgColor'}
                defaultValue={numberColor}
                onChange={(e) => setNumberColor(e)}
                options={['#29B457', '#2d3436', '#e55039', '#fa983a', '#60a3bc']} 
            />
        </VStack>
    )
}

export default NumberColorPicker;