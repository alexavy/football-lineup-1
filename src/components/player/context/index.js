import { createContext, useState } from 'react';

export const PlayerContext = createContext();

export const PlayerProvider = ({children}) => {
    const [selectedPlayer, setSelectedPlayer] = useState({});
    const existSelectedPlayer = Object.keys(selectedPlayer).length;

    return (
        <PlayerContext.Provider 
            value={{
                selectedPlayer, 
                setSelectedPlayer,
                existSelectedPlayer
            }}
        >
            {children}
        </PlayerContext.Provider>
    )
}