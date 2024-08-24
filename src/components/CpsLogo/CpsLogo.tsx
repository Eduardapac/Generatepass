import React from "react";
import {Text, View } from 'react-native';
import {styles} from './CpsLogoStyles';

export function CpsLogo(){
    return(
        <View style={styles.container}>
            <Text>CPS PASS GENERATION</Text>
        </View>
    );
}