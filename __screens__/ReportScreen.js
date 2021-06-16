import React from 'react';
import { StyleSheet, Text, View, Alert, Dimensions } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { FirebasePush } from '../__components__/__JScomponents__/firebasePush';


export default function ReportScreen({ navigation }){
    const on_Press_function = (time) =>{
        Alert.alert(`${time} Minutes Pressed`);
        console.log(`${time} Minutes Pressed`);
        FirebasePush(time);
        navigation.navigate("root");
    }
    return(
        <View style={styles.container}>
            <Card>
                <Text style={styles.text}>
                    Please select the estimated wait time for this polling location.
                </Text>
                <Text style={styles.text}>
                    Please Swipe right to return without reporting.
                </Text>

                <View style={styles.button}>
                  <Button 
                    style={styles.button}
                    title="15 Minutes"
                    onPress={() =>{
                        on_Press_function(15);
                    }}
                />
                <View style={styles.space} />
                <Button 
                    style={styles.button}
                    title="30 Minutes"
                    onPress={() =>{
                        on_Press_function(30);
                    }}
                />
                </View>

                <View style={styles.button}>
                  <Button 
                    style={styles.button}
                    title="45 Minutes"
                    onPress={() =>{
                        on_Press_function(45);
                    }}
                />
                <View style={styles.space} />
                <Button 
                    style={styles.button}
                    title="1 Hour"
                    onPress={() =>{
                        on_Press_function(60)
                    }}
                />
                </View>

                <View style={styles.button}>
                  <Button 
                    style={styles.button}
                    title="1.5 Hours"
                    onPress={() =>{
                        on_Press_function(90);
                    }}
                />
                <View style={styles.space} />
                <Button 
                    style={styles.button}
                    title="2 Hours"
                    onPress={() =>{
                        on_Press_function(120);
                    }}
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
        width: Dimensions.get('window').width / 3,
    }
});