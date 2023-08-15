// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { TailwindProvider } from 'tailwind-rn/dist';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './screens/HomeScreen';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        
      </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}

export default App;