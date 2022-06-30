import { useContext } from 'react';

import { AddIcon } from '@chakra-ui/icons';

import { PlayerContext } from '../context';

const PlayerContainer = ({onOpen}) => {
    const { selectedPlayer, existSelectedPlayer } = useContext(PlayerContext);

    return (
        <div className='player' role='button' onClick={onOpen}>
            {existSelectedPlayer
                ? <img src={selectedPlayer.ImageURL} />
                : <AddIcon w={3} h={3} color='#5FB875' fontWeight={'300'} />
            }
        </div>
    )
}

export default PlayerContainer;