import React, {useContext} from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './AppNavigation';
import { GlobalContext } from './AppContext';
import PokeLocale from './locale/PokeLocale';

const App = () => {
  const pokeLocale = PokeLocale()
  return (
    <GlobalContext.Provider value={{
      pokeLocale
    }}>
      <IconRegistry icons={EvaIconsPack}/>
      <ApplicationProvider {...eva} theme={eva.dark}>
        <AppNavigator/>
      </ApplicationProvider>
    </GlobalContext.Provider>
  )
};

export default App