import React, { Component } from 'react';
import Layout from '../layouts/layout_informationUser';
import { Alert } from 'react-native'
import firebase from 'react-native-firebase';
import { store } from '../../store'
import { connect } from 'react-redux'
import ImagePicker from 'react-native-image-picker';


const options = {
    title: 'Seleccionar Foto',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};
const url = 'https://media.aweita.larepublica.pe/678x508/aweita/imagen/2018/02/08/noticia-persona-positiva.png'
class InformationUser extends Component {
    constructor(props) {
        super(props);
        this.unsubscribe = null;
        this.state = {
            userName: null,
            avatarSource: url
        };
    }
    onChangeText = (value) => {
        this.setState({
            userName: value
        });

    }
    saveInformation = () => {
        store.dispatch({
            type: 'SET_USER',
            payload: {
                user: {
                    phoneNumber: this.props.user.phoneNumber,
                    name: this.state.userName,
                    image: this.state.avatarSource,
                    uid: this.props.user.uid
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
    onPressAddImage = () => {
        console.log("Presionaste la imagen");

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
    render() {
        return (
            <Layout
                url={this.state.avatarSource}
                phoneNumber={this.props.user.phoneNumber}
                onChangeText={this.onChangeText}
                onPressButton={this.onPressButton}
                onPressAddImage={this.onPressAddImage}
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