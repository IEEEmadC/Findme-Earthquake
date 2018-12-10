import React, { Component } from 'react';
import { Container, Content, Button, Icon, Input, Body, Text, View, Item, Card, CardItem } from 'native-base';
import { StyleSheet, Dimensions, StatusBar, Alert } from 'react-native'
import Avatar from './app/components/Avart'
import ImagePicker from 'react-native-image-picker';
import firebase from 'react-native-firebase';
const screen = Dimensions.get('window');
const options = {
    title: 'Seleccionar Foto',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

const url = 'https://media.aweita.larepublica.pe/678x508/aweita/imagen/2018/02/08/noticia-persona-positiva.png'
class ModalExample extends Component {
    constructor(props) {
        super(props)
        arrayContacts = []
        this.state = {
            name:'',
            number:'',
            modalUserVisible: false,
            avatarSource: url
        }
    };
    updateToFirebase = () => {
        alert('Contacto Actualizado');
        
    }
    onPressEdit = () => {
        Alert.alert('Editar', "¿Está seguro de guardar los cambios?",
            [
                { text: 'Cancel' },
                { text: 'OK', onPress: () => this.updateToFirebase() }
            ])
        this.uploadImage(this.state.avatarSource,"imagenPrueba")
        .then(()=>{
            alert("Bien hecho")
        }).catch((error)=> alert(error))
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
        alert(this.state.avatarSource)

    }
    //Upload image
    uploadImage=async(uri,imageName)=>{
        const response=await fetch(uri);
        const blob= await response.blob();
        var ref = firebase.storage().ref.child("images/"+imageName)
        return ref.put(blob)
    }
    componentWillMount() {
        StatusBar.setHidden(false)

    }
    render() {

        return (
            <Container >

                <Content
                >
                    <Body
                        style={{ padding: 16 }}
                    >
                        <Avatar
                            big source={{ uri: this.state.avatarSource }}
                        />
                        <Text>Nombre de Usuario </Text>
                        <Button
                            iconLeft
                            style={{
                                position: 'absolute',
                                marginTop: 110,
                                marginLeft: 110,
                                width: 40,
                                height: 40,
                                paddingTop: 0,
                                paddingBottom: 0,
                                borderRadius: 20

                            }}
                            onPress={this.onPressButton}>
                            <Icon type="Entypo" name="camera"
                                style={{ marginLeft: 10, fontSize: 20 }}
                            />
                        </Button>

                    </Body>
                    <View>
                        <Card>
                            <CardItem>
                                <Text style={styles.textInfo}>Edita el detalle del contacto</Text>
                            </CardItem>
                            <CardItem>
                                <Item >
                                    <Input placeholder="Nombre del contacto" 
                                    onChangeText={(name)=> this.setState({name})}></Input>
                                </Item>
                            </CardItem>
                            <CardItem>
                                <Item >
                                    <Input placeholder="Número telefonico"
                                    onChangeText={(number)=> this.setState({number})}></Input>
                                </Item>
                            </CardItem>
                        </Card>
                    </View>
                    <Button block success onPress={this.onPressEdit}>
                        <Text style={styles.textButton}>Editar</Text>
                    </Button>

                </Content>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    textButton: {
        fontWeight: 'bold',
        fontSize: (screen.height / screen.width) * 10,
    },
    textInfo: {
        fontWeight: 'bold',
        fontSize: (screen.height / screen.width) * 10,
        color: 'black'
    },
    modalContainer: {

    }
});
export default ModalExample;