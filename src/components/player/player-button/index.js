import { useContext } from 'react';

import { VStack, HStack } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

import { PlayerContext } from '../context';

const PlayerButton = () => {
    const { selectedPlayer, setSelectedPlayer, existSelectedPlayer, getCapitalizeName, setIsDrawerOpen } = useContext(PlayerContext);

    return (
        <VStack position='relative'>
            <div className='player' role='button' onClick={() => setIsDrawerOpen(true)}>
                {existSelectedPlayer
                    ? <img src={selectedPlayer.ImageURL} />
                    : <AddIcon w={3} h={3} color='#5FB875' fontWeight={'300'} />
                }
            </div>

            {existSelectedPlayer 
                ? 
                    <HStack>
                        <div className='player-name-container'>
                            <p>{getCapitalizeName(selectedPlayer).split(' ')[0]}</p>
                        </div>

                        <div className='close-btn' role='button' onClick={() => setSelectedPlayer({})}>
                            <MinusIcon color='#fff' fontWeight='700' />
                        </div>
                    </HStack>
                : []
            }
        </VStack>
    )
}

export default PlayerButton;