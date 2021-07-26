import React, { useState } from 'react';
import { Button, TextInput, Text, View } from 'react-native';
import styles from '../styles.js';

export default function Distances() {
    const [ miles, setMiles ] = useState(0);
    const [ kilometers, setKilometers ] = useState(0);
    const [ isMilesPrimary, setIsMilesPrimary ] = useState(true);
    const [ isKilometersPrimary, setIsKilometersPrimary ] = useState(false);


    const switchPrimary = () => {
        if (isMilesPrimary) {
            setIsMilesPrimary(false);
            setIsKilometersPrimary(true)
        } else {
            setIsMilesPrimary(true);
            setIsKilometersPrimary(false);
        };
    };

    const convertDistances = (text) => {
        const inputToNum = Number(text);

        if (isMilesPrimary) {
            setMiles(Math.round(inputToNum * 0.621371));
            setKilometers(inputToNum);
        } else {
            setKilometers(Math.round(inputToNum * 1.609344));
            setMiles(inputToNum);
        }
    }

    return (
        <View>
            <Text></Text>
            <Text style={styles.fonts}>{ (isMilesPrimary) ? 'Convert Kilometers to Miles' : 'Convert Miles to Kilometers' }</Text>
            <TextInput type='submit' placeholder={(isMilesPrimary) ? 'Enter Kilometer Number Here' : 'Enter Miles Number Here'} keyboardType='numeric'
                onChangeText={(text) => convertDistances(text)}>
            </TextInput>
            <Text>Miles: { miles }</Text>
            <Text>Kilometers: { kilometers } </Text>
            <Button title='Swap Conversions' onPress={ switchPrimary }></Button>
        </View>
    )
};