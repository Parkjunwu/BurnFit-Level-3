import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNav from './navigators/MainNav';
import { DefaultTheme, ThemeProvider } from 'styled-components/native';
import useColorsChangedByDarkMode from './hooks/useColorsChangedByDarkMode';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {

  const colorsChangedByDarkMode = useColorsChangedByDarkMode();

  const theme: DefaultTheme = { ...colorsChangedByDarkMode };

  return (
    <GestureHandlerRootView
      style={{flex:1}}
    >
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <MainNav/>
        </ThemeProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;