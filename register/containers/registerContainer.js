import React, { Component } from 'react';
import Layout from '../layouts/layout_register';
import firebase from 'react-native-firebase';

export default class AnatomyExample extends Component {
  constructor(props) {
    super(props);
    //this.unsubscribe = null;
    this.state = {
      user: null,
      codeInput: '',
      phoneNumber: '',
      countryCode: '',
      confirmResult: null,
    };
  }/*
  componentWillUnmount() {
    alert("desmontando")
    if (this.unsubscribe) this.unsubscribe();
  }*/

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
      .catch(error => alert('Número de telefono incorrecto.'+error));
  };


  render() {
    const { user, confirmResult } = this.state;
    if (!user && confirmResult){
      this.props.navigation.navigate('Confirmation', {
        confirmResult: this.state.confirmResult,
        phoneNumber: this.state.countryCode+this.state.phoneNumber
      })
      this.setState({
        confirmResult: null
      });
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
