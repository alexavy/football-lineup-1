import React, { useContext } from "react";

import { GridItem } from '@chakra-ui/react';

import PitchSvg from './svg';

import Attack from './attack';
import MidField from './midfield';
import Defense from './defense';
import GoalKeeper from './goalkeeper';
import PitchContainer from './pitch-container';

import { PitchContext } from '../../context';

const Pitch = () => {
  const { bgColor, currentFormation } = useContext(PitchContext);

  const isFormationWithFourNumbers = currentFormation.length === 4;

  return (
      <GridItem pl='2' bg={bgColor} area={'main'} display='flex' alignItems='center' justifyContent='center'>
        <PitchContainer>
          {(getPlayers) => (
            <>  
              <Attack players={getPlayers(isFormationWithFourNumbers ? currentFormation[3] : currentFormation[2])} />
              
              {isFormationWithFourNumbers ? 
                <>
                  <MidField players={getPlayers(currentFormation[2])} secondLine />
                  <MidField players={getPlayers(currentFormation[1])} firstLine />
                </>
                : <MidField players={getPlayers(currentFormation[1])} />
              }

              <Defense players={getPlayers(currentFormation[0])} />

              <GoalKeeper players={getPlayers(1)} />

              <PitchSvg />
            </>
          )}
        </PitchContainer>
      </GridItem>
  )
}

export default Pitch;