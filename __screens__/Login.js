import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, Keyboard, KeyboardAvoidingView, Alert } from 'react-native';
import { Card, Input } from 'react-native-elements';
import {dispatchZipcode, getZipcode} from '../__components__/__redux__/Actions/REDUX_zipcode.js'
import ImagePlaceholder from './Images/ImagePlaceholder.jpg';

/**
 * @brief - Login Screen component for the App. Uses Zipcode Redux Package to store the zipcode input by the user.
 * @returns - React Native Component
 */
export default function LoginScreen({ navigation }){
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
                        onSubmitEditing={(input)=>{
                            var text = input.nativeEvent.text;
                            text = parseInt(text);
                            try{
                                dispatchZipcode(text);
                                navigation.navigate("root");
                            }catch(err){
                                Alert.alert(
                                    "Invalid Zipcode",
                                    "Please input a valid zipcode."
                                );
                            } 
                        }}
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