import React from "react";
import {Text, View, Image } from 'react-native';
import {styles} from './CpsLogoStyles';
import logo from '../../../assets/logocps.png'

export function CpsLogo(){
    return(
        <View>
            <Text style={styles.title}>CPS PASS GENERATION</Text>
            <Image 
            source={logo}
            style={{
                resizeMode:'contain',
                height: 180,
                marginLeft: 'auto',
                marginRight: 'auto',
            }}
            />
        </View>
    );
}