import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Card, Alert } from 'react-native';
import rootStore from "../__components__/__redux__/store.js";
import { useNavigation} from '@react-navigation/native';


export default function MapScreen(){
    const navigation = useNavigation();
    return(
        <ScrollView>
            <Card>
            <View style={styles.container}>
                <Button 
                    style={styles.buttonStyle}
                    title="15 Minutes"
                    onPress={() => Alert.alert('15 Minutes Pressed')}
                />
                <Button 
                    style={styles.buttonStyle}
                    title="30 Minutes"
                    onPress={() => Alert.alert('30 Minutes Pressed')}
                />
                <Button 
                    style={styles.buttonStyle}
                    title="45 Minutes"
                    onPress={() => Alert.alert('45 Minutes Pressed')}
                />
                <Button 
                    style={styles.buttonStyle}
                    title="1 Hour"
                    onPress={() => Alert.alert('1 Hour Pressed')}
                />
                <Button 
                    style={styles.buttonStyle}
                    title="1.5 Hours"
                    onPress={() => Alert.alert('1.5 Hours Pressed')}
                />
                <Button 
                    style={styles.buttonStyle}
                    title="2 Hours"
                    onPress={() => Alert.alert('2 Hours Pressed')}
                />
                <Button 
                    style={styles.buttonStyle}
                    title="2.5 Hours"
                    onPress={() => Alert.alert('2.5 Hours Pressed')}
                />
                <Button 
                    style={styles.buttonStyle}
                    title="3 Hours"
                    onPress={() => Alert.alert('3 Hours Pressed')}
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
    button: {
        padding: 15,
    },
});