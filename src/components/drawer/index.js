import React, { useContext } from 'react';

import {
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton
} from '@chakra-ui/react'

import PlayerResultsList from './player-results-list';

import { PlayerContext } from '../player/context';

const CustomDrawer = ({isOpen, onClose}) => {
    const { existSelectedPlayer } = useContext(PlayerContext);

    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Adicionar Jogador</DrawerHeader>
                <DrawerBody>
                    <PlayerResultsList />
                </DrawerBody>
                <DrawerFooter justifyContent='space-between'>
                    <Button size='sm' variant='outline' mr={3} onClick={onClose}>
                        Cancelar
                    </Button>
                    <Button disabled={!existSelectedPlayer} size='sm' onClick={onClose}>Confirmar</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default CustomDrawer;