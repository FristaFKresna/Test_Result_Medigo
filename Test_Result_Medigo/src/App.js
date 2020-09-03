import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainAppRouter from './routers/MainAppRouter'


const App = () => {
  return (
    <NavigationContainer>
      <MainAppRouter/>
    </NavigationContainer>
  );
};

export default App;
