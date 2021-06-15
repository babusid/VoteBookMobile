import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { rootStore } from './__components__/__redux__/store.js'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import BallotPlanner from './__screens__/BallotPlanner'
import MapScreen from './__screens__/Map'
import LoginScreen from './__screens__/Login.js'
import { locationListener, locationListenerCleanup } from './__components__/__reactComponents__/locationListener.js';
import { getStoredLocation, listenUserLocation } from './__components__/__redux__/Actions/REDUX_location.js';

const rootStack = createStackNavigator();
const rootTab = createBottomTabNavigator();

/**
 * @brief Main Application export. Should be used to render the root navigators and call screens as needed. 
 */
export default function App() {
  useEffect(()=>{
    const loc = locationListener(); //attach the location listener
    return async()=>{ //since the locationListener function is an async and returns a promise the cleanup function also has to be an async to be able to wait on it and then run the contained remover function
      let retVal = await loc;
      retVal.remove();
    }
  })
  return(
    <NavigationContainer>
      <rootStack.Navigator headerMode={false}>
        <rootStack.Screen name="LoginScreen" component={LoginScreen}/>
        <rootStack.Screen name="root" component={rootTabNav}/>
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
      <rootTab.Screen name="ballotPlanner" component={BallotPlanner} options={{title: "Ballot Planner"}}/>
      <rootTab.Screen name="mapScreen" component={MapScreen}/>
    </rootTab.Navigator>
  );
}

