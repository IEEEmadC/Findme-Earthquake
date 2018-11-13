import React, { Component } from 'react';
import Layout from '../layouts/layout_register';
import firebase from 'react-native-firebase';

export default class AnatomyExample extends Component {
  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      user: null,
      codeInput: '',
      phoneNumber: '',
      countryCode: '',
      confirmResult: null,
    };
  }

  componentWillMount() {
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
  }

  onPickerValueChange = (value) => {
    this.setState({
      countryCode: value
    });
    
  }
  
  onChangeNumber = (value)=>{
    this.setState({
      phoneNumber: value
    });
  }

  signIn = () => {
    const { countryCode, phoneNumber } = this.state;
    firebase.auth().signInWithPhoneNumber("+"+countryCode+phoneNumber)
      .then(confirmResult => this.setState({ confirmResult }))
      .catch(error => alert(`Sign In With Phone Number Error`));
    
    
  };

  render() {
    const { user, confirmResult } = this.state;
    if (!user && confirmResult){
      this.props.navigation.navigate('Confirmation')
    }
    return (
      
      <Layout
        countryCode = {this.state.countryCode}
        pickerSelected = {this.state.countryCode} 
        onPickerValueChange = {this.onPickerValueChange}
        onChangeNumber = {this.onChangeNumber}
        onPressButton = {this.signIn}
      />
    );
  }
}
