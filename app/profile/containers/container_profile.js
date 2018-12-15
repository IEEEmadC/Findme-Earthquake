import React, { Component } from "react";
import { StatusBar, StyleSheet, Dimensions} from 'react-native'
import { Text,Container } from "native-base";
import Contacts from '../../../resources/data/contacts'
import LayoutProfile from '../layouts/layout_profile'
import ImagePicker from 'react-native-image-picker';
import Modal from '../components/imageModal';
import ModalProfile from '../components/profileEdit';
import {connect} from 'react-redux'

const options = {
    title: 'Seleccionar Foto',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

const screen = Dimensions.get('window')
const url = 'https://media.aweita.larepublica.pe/678x508/aweita/imagen/2018/02/08/noticia-persona-positiva.png'

class ProfileComponent extends Component {
   

   
    render() {

        return (
            <Container>
                <LayoutProfile
                    contacts={this.props.contacts}
                    >
                </LayoutProfile>
            </Container>
        );

     
    }

}


function mapStateToProps(state){

    console.log(state.contacts.contacts);
    
    return(
        {
            contacts: state.contacts.contacts
        }
    )
}


export default connect(mapStateToProps) (ProfileComponent);

const styles = StyleSheet.create({
    contacontainer: {
        alignContent: 'center',
        justifyContent: 'center'

    },
    imageContainer: {
        width: 160,
        height: 160,
        borderRadius: 80,
        alignContent: 'center',
        alignItems: 'center'

    },
    imageModal: {
        width: screen.width,
        height: screen.height / 3,
    },
    textName: {
        fontWeight: 'bold',
        fontSize: (screen.height / screen.width) * 15,
    },
    textInfo: {
        fontWeight: 'normal',
        fontSize: (screen.height / screen.width) * 10,
    },
    modalContainer: {

    }
});