import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { styles } from './CpsButtonStyles';
import { CpsTextInput } from '../CpsTextInput/CpsTextInput';
import generatePass from '../../services/PasswordService';

import * as Clipboard from 'expo-clipboard';

export function CpsButton() {
    const [pass, setPass] = useState('')

    function handGenerateButton(){
        let generateToken = generatePass()
        setPass(generateToken)
    }

    function handleCopyButton(){
        Clipboard.setStringAsync(pass)
    }

  return (
    <>
    <CpsTextInput pass={pass}/>
        <Pressable
            onPress={handGenerateButton}
            style={styles.button}
        >
            <Text style={styles.text}>🔥 Gerar</Text>
        </Pressable>
        <Pressable
            onPress={handleCopyButton}
            style={styles.button}
        >
            <Text style={styles.text}>⚡Copiar</Text>
        </Pressable>
    </>
  );
}