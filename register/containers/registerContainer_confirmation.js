import React, { Component } from 'react';
import Layout from '../layouts/layout_confirmation';
import {store} from '../../store'
import firebase from 'react-native-firebase'
import {connect} from 'react-redux'
class AnatomyExample extends Component {
  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      user: null,
      codeInput: '',
      phoneNumber: null
    };
  }

  confirmCode(confirmResult) {
    const { codeInput } = this.state;

    if (confirmResult && codeInput.length) {
      confirmResult.confirm(codeInput)
        .then((user) => {
          console.log("usuario auth su telefono es: ")    
          console.log(user._user.phoneNumber);
          this.setState({
            phoneNumber:user._user.phoneNumber
          })
          console.log(this.state.phoneNumber);
          store.dispatch({
            type: 'SET_USER',
            payload:{
              user: {
                phoneNumber: this.state.phoneNumber
              }
            }
          })
          this.props.navigation.navigate('InformationUser')

        })
        .catch(error => alert("Aviso","Se introdujo un código erroneo. Intenta de nuevo." + error));
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

    // if (user) {
    //   this.props.navigation.navigate('App')
    // }
    return (
      <Layout
        onPressButton={() => this.confirmCode(confirmResult)}
        phoneNumber={phoneNumber}
        onChangeCode={this.onChangeCode}
      />
    )
  }
}

export default connect (null)(AnatomyExample)