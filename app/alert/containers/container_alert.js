import React, { Component } from "react";
import { StatusBar, StyleSheet, Dimensions, Alert, Modal } from 'react-native'
import { Text, Button, Container } from "native-base";
import LayoutAlert from '../layout/layout_alert'

class AlertComponent extends Component {
    componentWillMount() {
        StatusBar.setHidden(true)
    }
    onPress911 = () => {
        alert("Llamando al 911")
    }
    onPressContacts = () => {
        alert("Enviando SMS a contactos....")
    }
    render() {

        return (
            <LayoutAlert
                onPress911={this.onPress911}
                onPressContacts={this.onPressContacts}/>
        )
    }
}
export default AlertComponent;