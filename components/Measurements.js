import React, { useState } from 'react';
import { Button, TextInput, View, Text } from 'react-native';

export default function Measurements() {
    const [ feet, setFeet ] = useState(0);
    const [ meters, setMeters ] = useState(0);
    const [ isFeetPrimary, setIsFeetPrimary ] = useState(true);
    const [ isMetersPrimary, setIsMetersPrimary ] = useState(false);

    const switchPrimary = () => {
        if (isFeetPrimary) {
            setIsFeetPrimary(false);
            setIsMetersPrimary(true);
        } else {
            setIsFeetPrimary(true);
            setIsMetersPrimary(false);
        };
    };

    const convertDistances = (text) => {
        const inputToNum = Number(text);
        
    } 

    return(
        <View>
            <Text>{ (isFeetPrimary) ? 'Convert Meters to Feet' : 'Convert Feet to Meters'} </Text>
            <TextInput type='submit' placeholder='Enter Number Here' keyboardType='numeric'
                onChangeText={(text) => convertMeasurements(text)}>
            </TextInput>
            <Text>Feet: { feet } </Text>
            <Text>Meters: { meters } </Text>
            <Button title='swap conversion' onPress={ switchPrimary }></Button>
        </View>
    )
}