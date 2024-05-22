import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';

import theme from '#/theme';

import store from '#/store/config';

import MainNavigator from '#/navigator';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Provider store={store}>
          <StatusBar
            barStyle={'light-content'}
            translucent
            backgroundColor={theme.colorTransparent}
          />
          <MainNavigator />
        </Provider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
