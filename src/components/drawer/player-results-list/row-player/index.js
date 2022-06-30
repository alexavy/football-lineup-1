import React, { useContext } from 'react';

import { CheckCircleIcon } from '@chakra-ui/icons';

import './styles.css';

import { PlayerContext } from '../../../player/context';

const RowPlayer = ({currentPlayer}) => {
    const { selectedPlayer, setSelectedPlayer } = useContext(PlayerContext);

    const getPlayerName = () => {
        let firstName = currentPlayer.Forename.toLowerCase();
        firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);

        let secondName = currentPlayer.Surname.toLowerCase();
        secondName = secondName.charAt(0).toUpperCase() + secondName.slice(1);

        return `${firstName} ${secondName}`;
    }

    const handleOnClick = () => {
        if (Object.keys(selectedPlayer) && selectedPlayer.ID === currentPlayer.ID) setSelectedPlayer({});
        else setSelectedPlayer(currentPlayer);
    }


    return (
        <div className='row-player' key={`player-result-${currentPlayer.ID}`} onClick={handleOnClick}>
            <div style={{display: 'flex'}}>
                <img src={currentPlayer.ImageURL} className='image-player'/>
                <h6 className='name-player'>{getPlayerName()}</h6>
            </div>

            {currentPlayer.ID === selectedPlayer.ID ? <CheckCircleIcon color='green' /> : []}
        </div>
    )
}

export default RowPlayer;