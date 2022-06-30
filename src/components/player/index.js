import React from 'react';

import { useDisclosure } from '@chakra-ui/react';

import CustomDrawer from '../drawer';
import PlayerContainer from './player-container';

import { PlayerProvider } from './context';

import './styles.css';

const Player = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <PlayerProvider>
            <PlayerContainer onOpen={onOpen} />
            <CustomDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </PlayerProvider>
    )
}

export default Player;