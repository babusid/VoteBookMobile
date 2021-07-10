import React, { useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { Linking } from 'react-native';

/**
 * @brief - This function is the overall export of the entirety of the ballot planner. 
 * It takes the zip code stored in the redux store object, pings a database of national candidates sorted by zipcode and 
 * displays a drop-down for each position where the user can select a candidate. These selected candidates will be stored
 * to persistent storage, in the same way that the zip code will be from the login screen. This way, when the user opens the app 
 * repeatedly, their selections are persisted.
 */

export default function BallotPlanner(){
    
    const INJECTED_JAVASCRIPT = `
        const list = (document.querySelectorAll(":not(.holds-the-iframe)"));
        for(let i=0;i<list.length;++i){
            list[i].style.visibility="hidden";
        }
    ;`

    return(
        <ScrollView contentContainerStyle={{justifyContent:"center" , paddingTop:30, flexGrow:1}}>
        <WebView 
        source={{uri: "https://ballotpedia.org/Sample_Ballot_Lookup"}} 
        onShouldStartLoadWithRequest={(event)=>{
            if(event.mainDocumentURL!="https://ballotpedia.org/Sample_Ballot_Lookup"){
                // console.log(event);
                Linking.openURL(event.url);
                return false;
            }
            return true;
        }}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        onMessage={(event)=>{
            const dat = JSON.parse(event.nativeEvent.data);
            console.log(dat);
        }}
        />
        </ScrollView>
    )
}