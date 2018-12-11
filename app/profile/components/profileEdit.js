import React, { Component } from 'react';
import { StyleSheet, Dimensions, StatusBar, Alert, Modal } from 'react-native'
import { Container, Content, Button, Icon, Input, Body, Text, View, Item, Card, CardItem } from 'native-base';
import Avatar from '../../components/Avart'
const screen = Dimensions.get('window');
const options = {
    title: 'Seleccionar Foto',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

function ProfileModal(props) {
    return (
            <Content>
                <Body
                    style={{ padding: 16 }}
                >
                    <Avatar
                        big source={{ uri: '' }}
                    />
                    <Text>{props.name} </Text>
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
                        // onPress={this.onPressButton}
                        >
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
                                <Input placeholder={props.name}
                                   ></Input>
                            </Item>
                        </CardItem>
                        <CardItem>
                            <Item >
                                <Input placeholder={props.number}
                                    ></Input>
                            </Item>
                        </CardItem>
                    </Card>
                </View>
                <Button block success>
                    <Text style={styles.textButton}>Editar</Text>
                </Button>

            </Content>
    )
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
export default ProfileModal;
