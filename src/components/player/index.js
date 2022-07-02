import React from 'react';

import { useDisclosure } from '@chakra-ui/react';

import CustomDrawer from '../drawer';
import PlayerButton from './player-button';

import { PlayerProvider } from './context';

import './styles.css';

const Player = () => {
    return (
        <PlayerProvider>
            <PlayerButton />
            <CustomDrawer />
        </PlayerProvider>
    )
}

export default Player;