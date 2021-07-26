import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, SafeAreaView, Text, View, AppRegistry, ScrollView } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import { StatusBar } from 'expo-status-bar';
import styles from './styles.js';
import Temperatures from './components/Temperatures';
import Home from './components/Home';
import Distances from './components/Distances';
import Measurements from './components/Measurements';
import Time from './components/Time';

export default function App() {

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>

        {/* <Home /> */}
        {/* <StatusBar style="auto" /> */}
        <Temperatures />
        <Distances />
        <Measurements />
        <Time />
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
}



// AppRegistry.registerComponent("MyApp", () => App);