import { HStack } from '@chakra-ui/react';

const MidField = ({players, firstLine, secondLine}) => {
    const getTop = () => {
        if (firstLine) return '42%';
        else if (secondLine) return '25%';
        
        return '35%';
    }

    return (
        <HStack w='80%' height='30px' position='absolute' top={getTop()} justifyContent='space-around'>
            {players}
        </HStack>
    )
}

export default MidField;