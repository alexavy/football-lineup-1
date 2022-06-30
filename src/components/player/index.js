import React from 'react';

import { AddIcon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/react';

import CustomDrawer from './drawer';

import './styles.css';

const Player = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <div className='player' role='button' onClick={onOpen}>
                <AddIcon w={3} h={3} color='#5FB875' fontWeight={'300'} />
            </div>
            <CustomDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </>
    )
}

export default Player;