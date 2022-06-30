import { HStack } from '@chakra-ui/react';

const GoalKeeper = ({players}) => {
    return (
        <HStack w='80%' height='30px' position='absolute' bottom='15%' justifyContent='center'>
            {players}
        </HStack>
    )
}

export default GoalKeeper;