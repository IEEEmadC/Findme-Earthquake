import React, { Component } from 'react';
import Layout from '../layouts/layout_informationUser';
import { Alert } from 'react-native'
import firebase from 'react-native-firebase';
import {store} from '../../store'
import { connect } from 'react-redux'
class InformationUser extends Component {
    constructor(props) {
        super(props);
        this.unsubscribe = null;
        this.state = {
            userName: null,
            uri:''
        };
    }
    onChangeText = (value) => {
        this.setState({
            userName: value
        });
    }
    saveInformation =()=>{
        console.log('Informacion a guardar');
        console.log(this.props.user.phoneNumber);
        console.log(this.state);
        store.dispatch({
            type: 'SET_USER',
            payload:{
              user: {
                phoneNumber: this.props.user.phoneNumber,
                name: this.state.userName,
                image: this.state.uri,
              }
            }
          })   
        //   this.props.navigation.navigate('DowloadingData')
        this.props.navigation.navigate('AddContacts')

    }
    onPressButton = () => {
        Alert.alert('Aviso', 'Se guardaran tus datos, ¿Estás de acuerdo?', [
            { text: "Ok", onPress: () => this.saveInformation() },
            { text: "Cancelar", onPress: () => console.log('Cancel Pressed'), style: 'cancel' }
        ],
            { cancelable: false })
    }
    render() {
        return (
            <Layout
                phoneNumber={this.props.user.phoneNumber}
                onChangeText={this.onChangeText}
                onPressButton={this.onPressButton}
            />
        )
    }
}
function mapStateToProps(state) {    
    return {
        user: state.user.user
    }   
}
export default connect(mapStateToProps)(InformationUser)