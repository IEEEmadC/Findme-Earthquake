import React, { Component } from 'react';
import Layout from '../layouts/layout_addContacts';
import { PermissionsAndroid } from 'react-native';
import ContactsWrapper from 'react-native-contacts-wrapper';
import CardContact from '../../app/profile/components/cardContacts'
import { connect } from 'react-redux'
import { store } from '../../store'
import LocationSwitch from 'react-native-location-switch';
import firebase from 'react-native-firebase';
class RegisterContainer extends Component {
    state = {
        contacts: []
    }
    constructor(props) {
        super(props);

        this.state = { locationEnabled: false };
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
                let contactaux = this.state.contacts;
                if (contactaux.length > 2) {
                    alert("Aviso", "Solo se admiten 3 contactos")
                } else {
                    contactaux.push(contact)
                    // Replace this code
                }
                console.log(contact);
                this.setState({
                    contacts: contactaux
                })
                console.log(this.state);

            })
            .catch((error) => {
                console.log("ERROR CODE: ", error.code);
                console.log("ERROR MESSAGE: ", error.message);
            });
    }
    onPressNext = (uid, uriImage) => {
        store.dispatch({
            type: 'SET_CONTACTS',
            payload: {
                contacts: this.state.contacts
            }
        })
        this.onGPS();
        this.uploadImages(uid,uriImage);
        this.props.navigation.navigate('DowloadingData')
    }
    onGPS = () => {
        console.log('Hola desde la funcion');
        LocationSwitch.enableLocationService(1000, true,
            () => { this.setState({ locationEnabled: true }); },
            () => { this.setState({ locationEnabled: false }); },
          );
        
    }
    uploadImages(uid,uriImage){
        firebase.storage().ref('users/' + uid + "/user").putFile(uriImage).then(uploadedFile => {
            console.log(uploadedFile);
        })
            .catch(err => {
                console.log("Error: " + error);

            });
        if(this.state.contacts.length >0){
            this.state.contacts.map((contact, index) => {
                firebase.storage().ref('users/' + uid + "/contact" + index).putFile(contact.image).then(uploadedFile => {
                    console.log(uploadedFile);
                }).catch(error => {
                    console.log("Error: " + error);
    
                });
            })
        }
    }

    render() {
        return (
            <Layout
                onPress={this.onPress}
                onPressNext={this.onPressNext}
                onPressGPS={() => this.onPressGPS(this.props.user.uid, this.props.user.image)}
            >
                {this.state.contacts && this.state.contacts.map((contact) => {
                    return (<CardContact  {...contact}></CardContact>)
                })}
            </Layout>

        );
    }
}
function mapStateToProps(state) {
    return ({
        user: state.user.user
    })
}
export default connect(mapStateToProps)(RegisterContainer)
