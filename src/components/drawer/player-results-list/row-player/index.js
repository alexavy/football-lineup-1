import React, { useContext } from 'react';

import { CheckCircleIcon } from '@chakra-ui/icons';

import './styles.css';

import { PlayerContext } from '../../../player/context';

const RowPlayer = ({currentPlayer}) => {
    const { selectedPlayer, setSelectedPlayer, getCapitalizeName } = useContext(PlayerContext);

    const handleOnClick = () => {
        if (Object.keys(selectedPlayer) && selectedPlayer.ID === currentPlayer.ID) setSelectedPlayer({});
        else setSelectedPlayer(currentPlayer);
    }

    return (
        <div className='row-player' key={`player-result-${currentPlayer.ID}`} onClick={handleOnClick}>
            <div style={{display: 'flex'}}>
                <img src={currentPlayer.ImageURL} className='image-player'/>
                <h6 className='name-player'>{getCapitalizeName(currentPlayer)}</h6>
            </div>

            {currentPlayer.ID === selectedPlayer.ID ? <CheckCircleIcon color='green' /> : []}
        </div>
    )
}

export default RowPlayer;