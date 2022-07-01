import { createContext, useState } from 'react';

export const PlayerContext = createContext();

export const PlayerProvider = ({children}) => {
    const [selectedPlayer, setSelectedPlayer] = useState({});
    const existSelectedPlayer = Object.keys(selectedPlayer).length;

    const getCapitalizeName = (currentPlayer) => {
        if (Object.keys(currentPlayer).length) {
            let firstName = currentPlayer.Forename.toLowerCase();
            firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    
            let secondName = currentPlayer.Surname.toLowerCase();
            secondName = secondName.charAt(0).toUpperCase() + secondName.slice(1);
    
            return `${firstName} ${secondName}`;
        }

        return;
    }

    return (
        <PlayerContext.Provider 
            value={{
                selectedPlayer, 
                setSelectedPlayer,
                existSelectedPlayer,
                getCapitalizeName
            }}
        >
            {children}
        </PlayerContext.Provider>
    )
}