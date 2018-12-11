import React, { Component } from 'react';
import Layout from '../layouts/layout_confirmation';
import { AsyncStorage } from 'react-native'
import firebase from 'react-native-firebase';

export default class AnatomyExample extends Component {
  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      user: null,
      codeInput: '',
    };
  }

  confirmCode(confirmResult) {
    const { codeInput } = this.state;

    if (confirmResult && codeInput.length) {
      confirmResult.confirm(codeInput)
        .then((user) => {
          alert("Exito")
          this.props.navigation.navigate('App')
        })
        .catch(error => alert("fallo" + error));
    }
  };
  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user: user.toJSON() });
      } else {
        // User has been signed out, reset the state
        this.setState({
          user: null,
          codeInput: '',
        });
      }
    });
  }
  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }
  onChangeCode = (value) => {
    this.setState({
      codeInput: value
    });
  }

  render() {
    const { user } = this.state;
    const { navigation } = this.props
    const confirmResult = navigation.getParam('confirmResult')
    const phoneNumber = navigation.getParam('phoneNumber')

    if (user) {
      this.props.navigation.navigate('App')
    }
    return (
      <Layout
        onPressButton={() => this.confirmCode(confirmResult)}
        phoneNumber={phoneNumber}
        onChangeCode={this.onChangeCode}
      />
    )
  }
}
