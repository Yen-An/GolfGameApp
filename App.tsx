/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ColorMode, NativeBaseProvider} from 'native-base';
import type {StorageManager} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

import React from 'react';
import HomePage from './src/container/HomePage/HomePage';
import SettingGame from './src/container/SettingGame/SettingGame';

const Stack = createNativeStackNavigator();

function App({theme}: any): JSX.Element {
  const colorModeManager: StorageManager = {
    get: async () => {
      try {
        let val = await AsyncStorage.getItem('@my-app-color-mode');
        return val === 'dark' ? 'dark' : 'light';
      } catch (e) {
        console.log(e);
        return 'light';
      }
    },
    set: async (value: ColorMode) => {
      try {
        if (!value) {
          // 如果没有有效值，使用默认值
          AsyncStorage.setItem('@my-app-color-mode', 'dark');
          return;
        }
        await AsyncStorage.setItem('@my-app-color-mode', value);
      } catch (e) {
        console.log(e);
      }
    },
  };
  return (
    <NativeBaseProvider theme={theme} colorModeManager={colorModeManager}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{title: '茶壺燒'}}
          />
          <Stack.Screen
            name="Details"
            component={SettingGame}
            options={{title: '準備今日茶壺燒'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
