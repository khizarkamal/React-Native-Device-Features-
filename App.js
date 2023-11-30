import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AllPlaces from './screens/AllPlaces';
import AddPlace from "./screens/AddPlace";
import { Colors } from './constants/colors';

const Stack = createNativeStackNavigator();


export default function App() {
  console.log("Looking at Debugging-----------");
  return (
    <NavigationContainer>
      <StatusBar></StatusBar>
      <Stack.Navigator initialRouteName='AddPlace' screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary500
        },
        headerTintColor: Colors.primary700,
        contentStyle: {
          backgroundColor: Colors.gray700
        }
      }}>
        <Stack.Screen name='AllPlaces' component={AllPlaces}></Stack.Screen>
        <Stack.Screen name='AddPlace' component={AddPlace} options={{
          title: 'Add a new place'
        }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

