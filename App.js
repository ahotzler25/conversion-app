import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, SafeAreaView, Text, View, AppRegistry, ScrollView } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import Temperatures from './components/Temperatures';
import Home from './components/Home';
import Time from './components/Time';
import Distances from './components/Distances';
import Measurements from './components/Measurements';

export default function App() {

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        {/* <Link to='/' style={styles.navItem}>
          <Text>Home</Text>
        </Link>
        <Link to ='/temperatures' style={styles.navItem}>
          <Text>Temperatures</Text>
        </Link> */}

          {/* <TouchableHighlight onPress={() => console.log("image clicked")}>
            <Image 
              fadeDuration={5000}
              source={{
                width: 200,
                height: 300,
                uri: "https://picsum.photos/200/300"
              }}/>
          </TouchableHighlight>
         */}

        {/* <Home /> */}
        <Temperatures />
        <Distances />
        <Measurements />
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: 'silver',
    marginHorizontal: 20,
    
  },
});

AppRegistry.registerComponent("MyApp", () => App);