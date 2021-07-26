import React, { useState } from 'react';
import { Button, TextInput, View, Text } from 'react-native';
import styles from '../styles';

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

    const convertMeasurements = (text) => {
        const inputToNum = Number(text);

        // If you have three, you'll have to switch logic for converting from another unit
        
        if (isFeetPrimary) {
            setFeet(Math.round(inputToNum * 3.28084));
            setYards();
            setMeters(Math.round(inputToNum));
        }
    } 

    return(
        <View>
            <Text></Text>
            {/* Can I dynamically change placeholder text from a function? */}
            <Text style={styles.fonts}>{(isFeetPrimary) ? 'Convert Feet to Meters/Yards' : 'Convert Meters to Feet/Yards'}</Text>
            <TextInput type='submit' placeholder={'Testing Placeholder Text Names'} keyboardType='numeric'
                onChangeText={(text) => convertMeasurements(text)}>
            </TextInput>
            <Text>Feet: { feet } = Meters: { meters } </Text>
            {/* <Text>Feet: { feet } </Text>
            <Text>Meters: { meters } </Text> */}
            <Button title='swap conversion' onPress={ switchPrimary }></Button>
        </View>
    )
}