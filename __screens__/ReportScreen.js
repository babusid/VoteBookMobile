import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Card, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import rootStore from "../__components__/__redux__/store.js";
import { useNavigation} from '@react-navigation/native';


export default function ReportScreen({ navigation }){
    const navigation = useNavigation();
    return(
        <ScrollView>
            <Card>
            <View style={styles.container}>
                <Text style={styles.container}>
                    Please select the estimated wait time for this polling location.
                </Text>
                <Button 
                    style={styles.buttonStyle}
                    title="15 Minutes"
                    onPress={() =>{Alert.alert("15 Minutes Pressed"), console.log("15 Minutes"), navigation.navigate("mapScreen")}}
                />
                <Button 
                    style={styles.buttonStyle}
                    title="30 Minutes"
                    onPress={() =>{Alert.alert("30 Minutes Pressed"), console.log("30 Minutes"), navigation.navigate("mapScreen")}}
                />
                <Button 
                    style={styles.buttonStyle}
                    title="45 Minutes"
                    onPress={() =>{Alert.alert("45 Minutes Pressed"), console.log("45 Minutes") navigation.navigate("mapScreen")}}
                />
                <Button 
                    style={styles.buttonStyle}
                    title="1 Hour"
                    onPress={() =>{Alert.alert("1 Hour Pressed"), console.log("1 Hour") navigation.navigate("mapScreen")}}
                />
                <Button 
                    style={styles.buttonStyle}
                    title="1.5 Hours"
                    onPress={() =>{Alert.alert("1.5 Hours Pressed"), console.log("1.5 Hours") navigation.navigate("mapScreen")}}
                />
                <Button 
                    style={styles.buttonStyle}
                    title="2 Hours"
                    onPress={() =>{Alert.alert("2 Hours Pressed"), console.log("2 Hours") navigation.navigate("mapScreen")}}
                />
            </View>
            </Card>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    button: {
        padding: 15,
    },
});