import React, { useState } from 'react';

import {
    Input, 
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton
} from '@chakra-ui/react'

import ResultsList from './results-list';

const CustomDrawer = ({isOpen, onClose}) => {
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
                    <ResultsList />
                </DrawerBody>
                <DrawerFooter justifyContent='space-between'>
                    <Button size='sm' variant='outline' mr={3} onClick={onClose}>
                        Cancelar
                    </Button>
                    <Button size='sm'>Confirmar</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default CustomDrawer;