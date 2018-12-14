import React, { Component } from 'react';
import Layout from '../layouts/layout_addContacts';
import { PermissionsAndroid } from 'react-native';
import ContactsWrapper from 'react-native-contacts-wrapper';
import CardContact from '../../app/profile/components/cardContacts'
import {connect} from 'react-redux'
import {store} from '../../store'
class RegisterContainer extends Component {
    state={
        contacts:[]
    }
    async componentWillMount() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS
            )
            const grantedL = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
        } catch (err) {
            console.warn(err)
        }
    }

    onPress = () => {
        console.log("Presionaste seleccionar contactos");
        ContactsWrapper.getContact()
            .then((contact) => {
                let contactaux=this.state.contacts;
                if(contactaux.length>2){
                    alert("Aviso","Solo se admiten 3 contactos")
                }else{
                    contactaux.push(contact)
                    // Replace this code
                }
                console.log(contact);
                this.setState({
                    contacts:contactaux
                })
                console.log(this.state);
                
            })
            .catch((error) => {
                console.log("ERROR CODE: ", error.code);
                console.log("ERROR MESSAGE: ", error.message);
            });
    }
    onPressNext = () => {
        store.dispatch({
            type: 'SET_CONTACTS',
            payload:{
              contacts: this.state.contacts
            }
          })
        this.props.navigation.navigate('DowloadingData')
    }

    render() {
        return (
            <Layout
                onPress={this.onPress}
                onPressNext={this.onPressNext}
            >
            {this.state.contacts.map((contact)=>{
                return (<CardContact  {...contact}></CardContact>)
            })}
            </Layout>

        );
    }
}
export default connect (null)(RegisterContainer)
