import React from 'react';
import { StyleSheet, Text, View, Alert, Dimensions } from 'react-native';
import { Button, Card } from 'react-native-elements';


export default function ReportScreen({ navigation }){
    const windowWidth = Dimensions.get('window').width;
    return(
        <View style={styles.container}>
            <Card>
                <Text style={styles.text}>
                    Please select the estimated wait time for this polling location.
                </Text>

                <View style={styles.button}>
                  <Button 
                    style={styles.button}
                    title="15 Minutes"
                    onPress={() =>{Alert.alert("15 Minutes Pressed"), console.log("15 Minutes")}}
                />
                <View style={styles.space} />
                <Button 
                    style={styles.button}
                    title="30 Minutes"
                    onPress={() =>{Alert.alert("30 Minutes Pressed"), console.log("30 Minutes")}}
                />
                </View>

                <View style={styles.button}>
                  <Button 
                    style={styles.button}
                    title="45 Minutes"
                    onPress={() =>{Alert.alert("45 Minutes Pressed"), console.log("45 Minutes")}}
                />
                <View style={styles.space} />
                <Button 
                    style={styles.button}
                    title="1 Hour"
                    onPress={() =>{Alert.alert("1 Hour Pressed"), console.log("1 Hour")}}
                />
                </View>

                <View style={styles.button}>
                  <Button 
                    style={styles.button}
                    title="1.5 Hours"
                    onPress={() =>{Alert.alert("1.5 Hours Pressed"), console.log("1.5 Hours")}}
                />
                <View style={styles.space} />
                <Button 
                    style={styles.button}
                    title="2 Hours"
                    onPress={() =>{Alert.alert("2 Hours Pressed"), console.log("2 Hours")}}
                />
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
    button: {
        paddingTop: 30,
        paddingBottom: 30,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    space: {
        width: windowWidth / 3,
    }
});