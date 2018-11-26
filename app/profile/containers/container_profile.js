import React, { Component } from "react";
import { StatusBar, StyleSheet, Dimensions, Image, Modal } from 'react-native'
import { Text, Button, Container } from "native-base";
import Contacts from '../../../resources/data/contacts'
import LayoutProfile from '../layouts/layout_profile'
import ImagePicker from 'react-native-image-picker';



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
            avatarSource: url
        }
    };
    setModalVisible(visible) {
        this.setState({ modalUserVisible: visible });
    }
    rendermodal = () => {
        return (
            <Modal
                animationType="slide"
                transparent={false}

                visible={this.state.modalUserVisible}
                onRequestClose={() => {
                    this.setModalVisible(false);
                }}
            >
                <Container
                    style={{
                        width: screen.width,
                        height: screen.height,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'black',
                    }}
                >
                    <Image
                        style={{
                            width: screen.width,
                            height: screen.height / 3,
                            borderRadius: 0
                        }}
                        source={{ uri: this.state.avatarSource }}
                    />
                </Container>
            </Modal>
        )
    }
    componentWillMount() {
        Contacts.map(item => {
            console.log(item)
            arrayContacts.push(item)
            this.setState({
                contacts: arrayContacts,
                modalUserVisible: false
            })
        })
        StatusBar.setHidden(false)
    }
    onPressButton = () => {
        console.log('Presionaste el boton')
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                const source = response.uri;
                console.log(source + "NO PASA ESTE URI")
                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

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