import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, Keyboard, KeyboardAvoidingView } from 'react-native';
import { Card, Input } from 'react-native-elements';
import rootStore from "../__components__/__redux__/store.js";
import ImagePlaceholder from './Images/ImagePlaceholder.jpg';

/**
 * @brief
 * 
 * @returns
 * 
 */
export default function LoginScreen(){
    return(
        <KeyboardAvoidingView behavior={"padding"}>
        <ScrollView>
            <Card>
                <View style={styles.container}>
                    <Image 
                        style={{width: 150, height: 150}}
                        resizeMode="contain"
                        source={ImagePlaceholder} 
                    /> 
                    <Input
                        style={{paddingTop: 40}}
                        placeholder='Enter your zip code'
                    />
                </View>
                <View style={styles.button}>
                    <Button 
                        color='blue' 
                        title='Enter'
                    />
                </View>
            </Card>
        </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button: {
        padding: 15,
    },
});