import React, { useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { Linking } from 'react-native';

/**
 * @brief - This function is the overall export of the entirety of the ballot researcher tool.
 * Currently, it renders only the sample Ballot tool pulled from BallotPedia. In the future it will be updated to be a nav menu hub screen 
 * that displays other tools as well.
 */

export default function BallotPlanner(){
    return(
        <SampleBallot/>
    )
}

/**
 * 
 * @returns {JSX.Element} This component will render a trimmed down version of the BallotPedia Ballot Planner website, that links out externally through the device browser
 * to their website if any link is clicked.
 */
function SampleBallot(){
    const INJECTED_JAVASCRIPT = `
    let list = (document.querySelectorAll("*"));
    for(let i=0;i<list.length;i++){
      list[i].style.visibility="hidden";
    }
    list = (document.querySelectorAll("*.holds-the-iframe,#myIframe"));
    for(let i=0;i<list.length;i++){
      list[i].style.visibility="visible";
    }
    ;`

    return(
        <WebView 
        source={{uri: "https://ballotpedia.org/Sample_Ballot_Lookup"}} 
        onShouldStartLoadWithRequest={(event)=>{
            if(event.mainDocumentURL!="https://ballotpedia.org/Sample_Ballot_Lookup"){
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
    )
}

function WhoRepresentsMe(){
    
}