import React, { useContext } from 'react';

import { PitchContext } from '../../../context';

import { Select, VStack, Text } from '@chakra-ui/react';

const FormationSelect = () => {
    const { formations, setCurrentFormation } = useContext(PitchContext);

    return (
        <VStack w='100%' alignItems='start'>
            <Text fontSize='sm'>Formação:</Text>
            <Select 
                onChange={(event) => {
                    if (event.target.value && event.target.value !== 'Customizado') {
                        setCurrentFormation(event.target.value.split('-'));
                    } else {
                        setCurrentFormation([4, 4, 2]);
                    } 
                }}
            >
                {formations.map((f) => (
                    <option value={f} key={f}>{f}</option>
                ))}
            </Select>
        </VStack>
    )
}

export default FormationSelect;