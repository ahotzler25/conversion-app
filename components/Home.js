import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TextBase, View, TouchableHighlight, Image } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

export default function Home({match}) {
  return (

    <View>
        <TouchableHighlight >
        <Image
        fadeDuration={5000}
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300"
        }}/>
        </TouchableHighlight>
        <StatusBar style="auto" />
    </View>
  )
}