import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GotchaScreen from './screens/GotchaScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="GotchaScreen1" component={GotchaScreen} />
        <Stack.Screen name="GotchaScreen2" component={GotchaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
