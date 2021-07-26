import React, { useState } from 'react';
import { Button, TextInput, View, Text } from 'react-native';

export default function Measurements() {
    const [ feet, setFeet ] = useState(0);
    const [ yards, setYards ] = useState(0);
    const [ meters, setMeters ] = useState(0);
    const [ isFeetPrimary, setIsFeetPrimary ] = useState(true);
    const [ isYardsPrimary, setIsYardsPrimary ] = useState(false);
    const [ isMetersPrimary, setIsMetersPrimary ] = useState(false);

    const switchPrimary = () => {
        if (isFeetPrimary) {
            setIsFeetPrimary(false);
            setIsYardsPrimary(true);
            setIsMetersPrimary(false);
        } else if (isYardsPrimary){
            setIsFeetPrimary(false);
            setIsYardsPrimary(false);
            setIsMetersPrimary(true);
        } else {
            setIsFeetPrimary(true);
            setIsYardsPrimary(false);
            setIsMetersPrimary(false);
        };
    };

    // const renderPrimaryText = () => {
    //     if (isFeetPrimary) {
    //         return ('Enter Feet Here')
    //     } else if (isYardsPrimary) {
    //         return ('Enter Yards Here')
    //     } else {
    //         return (<Text>'Enter Meters Here'</Text>)
    //     }
    // }

    const convertDistances = (text) => {
        const inputToNum = Number(text);

    } 

    return(
        <View>
            <Text></Text>
            {/* Can I dynamically change placeholder text from a function? */}
            <TextInput type='submit' placeholder={'Testing Placeholder Text Names'} keyboardType='numeric'
                onChangeText={(text) => convertMeasurements(text)}>
            </TextInput>
            <Text>Feet: { feet } </Text>
            <Text>Meters: { meters } </Text>
            <Button title='swap conversion' onPress={ switchPrimary }></Button>
        </View>
    )
}