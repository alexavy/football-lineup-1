import React from 'react';

import { HStack } from '@chakra-ui/react';

const Attack = ({players}) => {
    return (
        <HStack w='80%' height='30px' position='absolute' top='8%' justifyContent='space-around'>
            {players}
        </HStack>
    )
}

export default Attack;