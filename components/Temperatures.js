import React, { useState } from 'react';
import { StyleSheet, Button, Text, TextInput, View } from 'react-native';
import styles from '../styles.js';

// cels = (fahr - 32.0) * 5.0/9.0; Fahr to cels
// fahr = (cels * 9.0/5.0) + 32.0; Cels to fahr  


export default function Temperatures() {
    const [ fahrTemp, setFahrTemp ] = useState(0);
    const [ celsiusTemp, setCelsiusTemp ] = useState(0);
    const [ isFahrPrimary, setIsFahrPrimary ] = useState(true);
    const [ isCelsiusPrimary, setIsCelsiusPrimary ] = useState(false);

    const switchPrimary = () => {
        if (isFahrPrimary) {
            setIsFahrPrimary(false);
            setIsCelsiusPrimary(true);
        } else {
            setIsFahrPrimary(true);
            setIsCelsiusPrimary(false);
        };
    };

    const convertTemps = (text) => {
        const inputToNum = Number(text);

        if (isFahrPrimary) {
            setFahrTemp(Math.round(((inputToNum * 9.0/5.0) + 32) * 100) / 100);
            setCelsiusTemp(inputToNum);
        } else {
            setCelsiusTemp(Math.round(((inputToNum - 32) * 5/9) * 100 ) / 100);
            setFahrTemp(inputToNum);
        };
    };


    return (

        <View>
            <Text style={styles.fonts}>{ (isFahrPrimary) ? 'Convert Celsius to Fahrenheit' : 'Convert Fahrenheit to Celsius' }</Text>
            
            {/* Does type='submit' matter? SHould it be 'type='button'? */}
            <TextInput type='submit' placeholder={(isFahrPrimary) ? 'Enter Celsius Number Here' : 'Enter Fahrenheit Number Here'} keyboardType='numeric' 
                onChangeText={(text) => convertTemps(text)}>
            </TextInput>

            <Text>Fahrenheit: {fahrTemp} </Text>
            <Text>Celsius: {celsiusTemp} </Text>
            <Button title='Swap Conversions'  onPress={ switchPrimary }></Button>
        </View>
    )
};

// const styles = StyleSheet.create({
//     fonts: {
//         fontSize: 20
//     }
// })