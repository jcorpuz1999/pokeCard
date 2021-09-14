import React from 'react';
import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home/HomeScreen';
import DetailsScreen from './screens/Details/DetailsScreen';
import SetsScreen from './screens/Sets/SetsScreen';

const {Navigator, Screen} = createStackNavigator();

const HomeNavigator = () => (
  <Navigator>
    <Screen name='Home' options={{ title: 'Cards'}} component={HomeScreen}/>
    <Screen name='Details' component={DetailsScreen}/>
    <Screen name="Sets" options={{ title: 'Sets'}} component={SetsScreen} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator/>
  </NavigationContainer>
);