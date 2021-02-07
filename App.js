import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { rootStore } from './__components__/__redux__/store.js'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import BallotPlanner from './__screens__/BallotPlanner'
import MapScreen from './__screens__/Map'
import LoginScreen from './__screens__/Login.js'

const rootStack = createStackNavigator();
const rootTab = createBottomTabNavigator();

/**
 * @brief Main Application export. Should be used to render the root navigators and call screens as needed. 
 */
export default function App() {
  return (
    <NavigationContainer>
      <rootStack.Navigator>
        <rootStack.Screen component={LoginScreen} name="LoginScreen" options={{title: "Login to Votebook!"}} />
      </rootStack.Navigator>
    </NavigationContainer>
  );
}

/**
 * Subfunction of the main export to render any screens that need the main bottom-tab-navigator
 */

function rootTabNav(){
  return(
    <rootTab.Navigator>
      <rootTab.Screen component={BallotPlanner()}/>
      <rootTab.Screen component={MapScreen()}/>
    </rootTab.Navigator>
  )
}

