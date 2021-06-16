import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BallotPlanner from './__screens__/BallotPlanner';
import MapScreen from './__screens__/Map';
import LoginScreen from './__screens__/Login.js';
import ReportScreen from './__screens__/ReportScreen.js';

const rootStack = createStackNavigator();
const rootTab = createBottomTabNavigator();

/**
 * @brief Main Application export. Should be used to render the root navigators and call screens as needed. 
 */
export default function App() {
  return(
    <NavigationContainer>
      <rootStack.Navigator headerMode={false}>
        <rootStack.Screen name="LoginScreen" component={LoginScreen}/>
        <rootStack.Screen name="root" component={rootTabNav}/>
        <rootStack.Screen name="Report Wait Time" component={ReportScreen}/>
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

