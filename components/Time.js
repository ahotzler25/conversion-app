import React, { useState } from 'react';

export default function Time() {
    const [ mnTime, setMnTime ] = useState(0);
    const [ germanTime, setGermanTime ] = useState(0);
    const [ mnTimePrimary, isMnTimePrimary ] = useState(true);
    const [ germanTimePrimary, isGermanTimePrimary ] = useState(false);

    // User sets which time to use
    // User inputs time
    // onChangeText((text) => convertTimes)
    // This will add or subtract 7 hours from time
    // May need to separate hours from minutes in order to add/subtract hours

    return (
        <View>
            <Text>Minnesota Time: {mnTime} </Text>
            <Text>German Time: {germanTime} </Text>
        </View>
    )
}