import { HStack } from '@chakra-ui/react';

const Defense = ({players}) => {
    return (
        <HStack w='80%' height='30px' position='absolute' bottom='35%' justifyContent='space-around'>
            {players}
        </HStack>
    )
}

export default Defense;