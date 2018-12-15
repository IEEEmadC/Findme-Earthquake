import React, { Component } from 'react';
import { StyleSheet, Dimensions, StatusBar, Alert, Modal } from 'react-native'
import { Container, Content, Button, Icon, Input, Body, Text, View, Item, Card, CardItem } from 'native-base';
import Avatar from '../../components/Avart';
import {connect} from 'react-redux'


const screen = Dimensions.get('window');
const options = {
    title: 'Seleccionar Foto',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

class ProfileModal extends Component{
    onPressEdit(){
        
    }
   render(){
    return (
        <Content>
            <Body
                style={{ padding: 16 }}
            >
                <Avatar
                    big source={{ uri: '' }}
                />
                <Text>{this.props.contact.name} </Text>
            </Body>
            <View>
                <Card>
                    <CardItem>
                        <Text style={styles.textInfo}>Edita el detalle del contacto</Text>
                    </CardItem>
                    <CardItem>
                        <Item >
                            <Input placeholder={this.props.contact.name}
                               ></Input>
                        </Item>
                    </CardItem>
                    <CardItem>
                        <Item >
                            <Input placeholder={this.props.contact.phone}
                                ></Input>
                        </Item>
                    </CardItem>
                </Card>
            </View>
            <Button block success onPress={this.onPressEdit}>
                <Text style={styles.textButton}>Editar</Text>
            </Button>

        </Content>
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

function mapStateToProps( state){
    console.log(state.selectedVideo.selectedContact);
    
    return({
        contact: state.selectedVideo.selectedContact
    })
}

export default connect(mapStateToProps)(ProfileModal);
