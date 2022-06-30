import { Grid } from '@chakra-ui/react';

import Pitch from './components/pitch';
import Header from './components/header';
import SideBar from './components/sidebar';

import { PitchProvider } from './context';

function App() {
  return (
    <Grid
      h='100vh'
      color='blackAlpha.700'
      gridTemplateRows={'70px 1fr 30px'}
      gridTemplateColumns={'250px 1fr'}
      templateAreas={`"header header" "sidebar main" "sidebar main"`}
    >
      <PitchProvider>
        <Header />
        <SideBar />
        <Pitch />
      </PitchProvider>
    </Grid>
  );
}

export default App;
