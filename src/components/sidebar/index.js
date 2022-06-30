import React from 'react';

import { VStack, GridItem } from '@chakra-ui/react';
import BgColorPicker from './bg-color-picker';
import PitchColorPicker from './pitch-color-picker';
import FormationSelect from './formation-select';

const SideBar = () => {
    return (
        <GridItem p='15px' bg='#fff' area={'sidebar'} borderRight='1px solid #e1e1e1'>
            <VStack spacing={5}>
                <BgColorPicker />
                <PitchColorPicker />
                <FormationSelect />
            </VStack>
        </GridItem>
    )
}

export default SideBar;