import React, { useContext } from 'react';

import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton
} from '@chakra-ui/react'

import PlayerResultsList from './player-results-list';

import { PlayerContext } from '../player/context';

const CustomDrawer = () => {
    const { isDrawerOpen, setIsDrawerOpen } = useContext(PlayerContext);

    return (
        <Drawer
            placement='right'
            isOpen={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Adicionar Jogador</DrawerHeader>
                <DrawerBody>
                    <PlayerResultsList />
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

export default CustomDrawer;