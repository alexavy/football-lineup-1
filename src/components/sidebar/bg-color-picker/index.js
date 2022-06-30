import React, { useContext } from 'react';

import { Text, VStack } from '@chakra-ui/react';

import ColorPicker from '../../color-picker';

import { PitchContext } from '../../../context';

const BgColorPicker = () => {
    const { bgColor, setBgColor } = useContext(PitchContext);

    return (
        <VStack w='100%' alignItems='start'>
            <Text fontSize='sm'>Cor de Fundo:</Text>
            <ColorPicker 
                name={'bgColor'}
                defaultValue={bgColor}
                onChange={(e) => setBgColor(e)}
                options={['#29B457', '#2f3640', '#718093', '#dcdde1', '#fff']} 
            />
        </VStack>
    )
}

export default BgColorPicker;