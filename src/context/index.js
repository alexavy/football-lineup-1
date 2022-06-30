import { createContext, useState } from 'react';

export const PitchContext = createContext();

export const PitchProvider = ({children}) => {
    const [bgColor, setBgColor] = useState('#dcdde1');
    const [pitchColor, setPitchColor] = useState('#29B457');
    const [formations, setFormations] = useState([
        '4-4-2',
        '4-4-1-1',
        '4-1-4-1',
        '4-3-3',
        '4-2-3-1',
        '4-5-1',
        '3-5-2',
        '3-4-3',
        '3-5-1-1',
        '2-3-1-4',
        'Customizado'
    ]);

    const [currentFormation, setCurrentFormation] = useState([4, 4, 2]);
    
    return (
        <PitchContext.Provider 
            value={{
                bgColor, 
                setBgColor,
                pitchColor,
                setPitchColor,
                formations, 
                setFormations,
                currentFormation, 
                setCurrentFormation
            }}
        >
            {children}
        </PitchContext.Provider>
    )
}