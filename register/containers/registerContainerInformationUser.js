import React, { Component } from 'react';
import Layout from '../layouts/layout_informationUser';
import { Alert } from 'react-native'
import firebase from 'react-native-firebase';
import { connect } from 'react-redux'
class InformationUser extends Component {
    constructor(props) {
        super(props);
        this.unsubscribe = null;
        this.state = {
            userName: null,
        };
    }
    onChangeText = (value) => {
        this.setState({
            userName: value
        });
    }
    onPressButton = () => {
        Alert.alert('Aviso', 'Se guardaran tus datos, ¿Estás de acuerdo?', [
            { text: "Ok", onPress: () => this.props.navigation.navigate('App') },
            { text: "Cancelar", onPress: () => console.log('Cancel Pressed'), style: 'cancel' }
        ],
            { cancelable: false })
    }
    render() {
        const { user } = this.state;
        const { navigation } = this.props
        const phoneNumber = navigation.getParam('phoneNumber')
        return (
            <Layout
                phoneNumber={phoneNumber}
                onChangeText={this.onChangeText}
                onPressButton={this.onPressButton}
            />
        )
    }
}
function mapStateToProps(state) {
    return {
        user: state.user
    }   
}
export default connect(mapStateToProps)(InformationUser)