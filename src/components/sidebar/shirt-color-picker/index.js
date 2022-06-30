import React, { useContext } from 'react';

import { VStack, Text } from '@chakra-ui/react';

import ColorPicker from '../../color-picker';

import { PitchContext } from '../../../context';

const ShirtColorPicker = () => {
    const { shirtColor, setShirtColor } = useContext(PitchContext);

    return (
        <VStack w='100%' alignItems='start'>
            <Text fontSize='sm'>Cor da Camisa:</Text>
            <ColorPicker 
                name={'bgColor'}
                defaultValue={shirtColor}
                onChange={(e) => setShirtColor(e)}
                options={['#29B457', '#2d3436', '#e55039', '#fa983a', '#60a3bc']} 
            />
        </VStack>
    )
}

export default ShirtColorPicker;