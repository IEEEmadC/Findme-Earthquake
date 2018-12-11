import React, { Component } from "react";
import { StatusBar, StyleSheet, Dimensions} from 'react-native'
import { Text,Container } from "native-base";
import Contacts from '../../../resources/data/contacts'
import LayoutProfile from '../layouts/layout_profile'
import ImagePicker from 'react-native-image-picker';
import Modal from '../components/imageModal';
import ModalProfile from '../components/profileEdit'

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
    constructor(props) {
        super(props)
        arrayContacts = []
        this.state = {
            contacts: arrayContacts,
            modalUserVisible: false,
            modalEditVisible: false,
            avatarSource: url
        }
    };
    setModalVisible(visible) {
        this.setState({ modalUserVisible: visible });
    }
    rendermodal = () => {
        return <Modal/>
    }
    renderprofileModal=()=>{
        return <ModalProfile/>
    }
    componentWillMount() {
        Contacts.map(item => {
            arrayContacts.push(item)
            this.setState({
                contacts: arrayContacts,
                modalUserVisible: false
            })
        })
        StatusBar.setHidden(false)
    }
    onPressButton = () => {
        ImagePicker.showImagePicker(options, (response) => {

            if (response.didCancel) {
            } else if (response.error) {
            } else {
                const source = response.uri;
                this.setState({
                    avatarSource: source,
                });
            }
        });
    }

    onPressImage = () => {
        this.setState({
            modalUserVisible: !this.state.modalUserVisible
        })
    }
    
    render() {
        const { contacts, modalUserVisible } = this.state
        if (contacts.length > 1) {
            return (
                <Container>
                    <LayoutProfile
                        onPressImage={this.onPressImage}
                        onPressButton={this.onPressButton}
                        contacts={contacts}
                        url={this.state.avatarSource}>
                    </LayoutProfile>
                    {
                        this.state.modalUserVisible &&
                        this.rendermodal()
                    }
                </Container>
            );
        } else {
            return (
                <Text>Ingresa Contactos</Text>
            )
        }
    }

}


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

export default ProfileComponent;