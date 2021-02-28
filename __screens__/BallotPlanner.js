import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import rootStore from "../__components__/__redux__/store.js"


/**
 * @brief - This function is the overall export of the entirety of the ballot planner. 
 * It takes the zip code stored in the redux store object, pings a database of national candidates sorted by zipcode and 
 * displays a drop-down for each position where the user can select a candidate. These selected candidates will be stored
 * to persistent storage, in the same way that the zip code will be from the login screen. This way, when the user opens the app 
 * repeatedly, their selections are persisted.
 */

export default function BallotPlanner(){
    return (
        <View>
            <Text>This is where the BallotPlanner Screen should be exported from</Text>
        </View>
    );
}