// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });


import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import  firebase from 'react-native-firebase';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Firebase Ejemplo',
});



export default class App extends React.Component {
  // Initialize Firebase
componentWillMount(){
  var config = {
    apiKey: "AIzaSyAg-8uXG2MwUhnP1dVaWDNDeGnLaLpeWQ4",
    appId: '1:668510197057:android:0215ba072bca4a35',
    authDomain: "find-me-earthquake.firebaseapp.com",
    databaseURL: "https://find-me-earthquake.firebaseio.com",
    projectId: "find-me-earthquake",
    storageBucket: "find-me-earthquake.appspot.com",
    messagingSenderId: "668510197057"
  };
  firebase.initializeApp(config);
  firebase.database().ref('texto').set(
    {
      name:'Cristian Ronda',
      edad: 24
    }
  ).then(()=>{
    console.log('INSERTADO')
  }).catch((error)=>{
    console.log('ERROR '+error)
  })
}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js!!!</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});